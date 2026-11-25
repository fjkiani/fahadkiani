# Jedi Labs / Fahad Kiani portfolio

Vite + React portfolio site. Content can come from local constants or Hygraph.

## Run locally

```bash
npm install --legacy-peer-deps
npm run dev
```

## Hygraph (optional)

Content loads from Hygraph when `VITE_HYGRAPH_ENDPOINT` is set; otherwise local constants are used.

```bash
cp .env.example .env
```

Schema and fields: [docs/hygraph-schema.md](docs/hygraph-schema.md).

## Scripts

- `npm run dev` — local server
- `npm run build` — production build
- `npm run preview` — preview build

## Contact

Fahad Kiani · GitHub [@fjkiani](https://github.com/fjkiani)
