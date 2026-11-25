import { useEffect, useState } from "react";
import { getSiteContent } from "../lib/siteContent";

/**
 * React hook for portfolio content (Hygraph → local fallback).
 */
export function useSiteContent() {
  const [content, setContent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    getSiteContent()
      .then((data) => {
        if (!cancelled) setContent(data);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return { content, loading };
}
