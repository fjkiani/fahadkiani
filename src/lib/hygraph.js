/**
 * Thin Hygraph Content API client.
 *
 * One fetch helper + optional auth. Site content falls back to local
 * constants when VITE_HYGRAPH_ENDPOINT is unset or a query fails.
 */

const ENDPOINT = import.meta.env.VITE_HYGRAPH_ENDPOINT;
const TOKEN = import.meta.env.VITE_HYGRAPH_TOKEN;

export const isHygraphConfigured = Boolean(ENDPOINT);

/**
 * @template T
 * @param {string} query
 * @param {Record<string, unknown>} [variables]
 * @returns {Promise<T | null>}
 */
export async function hygraphRequest(query, variables = {}) {
  if (!ENDPOINT) return null;

  try {
    const res = await fetch(ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(TOKEN ? { Authorization: `Bearer ${TOKEN}` } : {}),
      },
      body: JSON.stringify({ query, variables }),
    });

    if (!res.ok) {
      console.warn(`[hygraph] HTTP ${res.status}`);
      return null;
    }

    const json = await res.json();
    if (json.errors?.length) {
      console.warn("[hygraph]", json.errors.map((e) => e.message).join("; "));
      return null;
    }

    return json.data ?? null;
  } catch (err) {
    console.warn("[hygraph] request failed", err);
    return null;
  }
}
