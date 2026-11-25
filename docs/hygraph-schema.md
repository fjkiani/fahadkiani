# Portfolio Hygraph schema (minimal)

One Content API query powers hero, explore tiles, projects, and experience.
If `VITE_HYGRAPH_ENDPOINT` is unset, the site uses local constants.

## Models

### SiteSetting (singleton)

| Field | Type | Notes |
| --- | --- | --- |
| `singletonKey` | String (unique) | Always `"main"` |
| `heroHeadline` | String | e.g. `Jedi Labs helps {word} your business 5x` |
| `heroSupporting` | String | Short supporting line |

### ExploreItem

| Field | Type | Notes |
| --- | --- | --- |
| `itemId` | String | e.g. `world-1` |
| `title` | String | Tile title |
| `imgUrl` | String | Public image URL or `/analytics.png` |
| `path` | String | Route, e.g. `/datadashboard` |
| `order` | Int | Ascending |

### Project

| Field | Type | Notes |
| --- | --- | --- |
| `name` | String | |
| `description` | String | |
| `imageUrl` | String | Absolute URL (Hygraph Asset URL works) |
| `sourceCodeLink` | String | Optional |
| `caseStudyLink` | String | In-app path |
| `isNew` | Boolean | Featured filter |
| `tags` | String[] | Tag labels |
| `order` | Int | Ascending |

### Experience

| Field | Type | Notes |
| --- | --- | --- |
| `title` | String | Role |
| `companyName` | String | |
| `date` | String | Display range |
| `iconBg` | String | Hex color |
| `points` | String[] | Bullet points |
| `order` | Int | Ascending |

## Env

```bash
cp .env.example .env
# set VITE_HYGRAPH_ENDPOINT (+ optional VITE_HYGRAPH_TOKEN for private content)
```

Seed one `SiteSetting` with `singletonKey: "main"`, then add explore/project/experience records and publish.
