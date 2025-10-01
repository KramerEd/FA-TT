# Star Wars SPA — React + TypeScript + React Query (Vite)

Single-page app with two routes:

- **Home**: Star Wars characters with **server-side search** and **pagination** via SWAPI.
- **Details**: character profile with **local editing & persistence** (no server writes).

Production-ready build & deploy (Vercel/Netlify). Unit tests included (Vitest + RTL).

---

## Tech Stack

- **Vite** (React + TypeScript)
- **React Router v7**
- **@tanstack/react-query**
- **Material UI (MUI)**
- **localStorage** for local edits
- **Zod** for type validation
- Dev: **ESLint**, **Prettier**
- Tests: **Vitest**, **@testing-library/react**

---

## Features

- **Search** (`?search=`) with 350ms debounce and URL sync.
- **Pagination** (`?page=`) using SWAPI's server paging (10 items per page).
- **States**: loading (skeletons), empty, error (retry from browser).
- **Details page** with form; **Save locally** (per-id patch) & **Reset**.
- Adaptive layout (MUI Grid), accessible form controls.
- Dynamic `<title>` per route/character.
- **Local persistence** across browser sessions.

---

## Quick Start

```bash

# install
npm i

# dev
npm run dev

# production build & preview
npm run build
npm run preview

# tests & lint
npm run test
npm run lint
npm run lint:fix
```

**Requirements:** Node 18+

---

## Project Structure

```text
src/
  app/
    AppLayout.tsx
    queryClient.ts
    router.tsx
  components/
    CharacterCard.tsx
    PaginationBar.tsx
    SearchBox.tsx
    SelectInput.tsx
    Skeletons.tsx
  hooks/
    useCharacterDetail.ts
    useCharacterList.ts
    useDebounce.ts
    useLocalCharacter.ts
  pages/
    CharactersListPage.tsx
    CharacterDetailPage.tsx
  services/
    localEdits.ts
    navigation.ts
    swapi.ts
    types.ts
  theme/
    index.ts
  utils/
    characterUtils.ts
    errorUtils.ts
    urlUtils.ts
  constants.ts
  index.css
  main.tsx
```

---

## Architecture Notes

### Patterns used

- Repository / Service
- Adapter
- Strategy (partially, caching/fetching)
- Observer (reactive data)
- Decorator (UI composition)
- Memento (localstorage)
- Facade (hooks as the single source of access)

### Data & Caching

- **React Query** drives all fetching/caching.
  - Keys: `["people", { page, search }]` and `["character", id]`.
  - `staleTime: 5m`, `retry: 1`, `refetchOnWindowFocus: true` for smooth paging.
  - Uses `AbortSignal` from queryFn to cancel outdated requests.

### Search & Pagination

- Search input with **350 ms debounce**.
- State mirrored in **URL** (`useSearchParams`); page resets to `1` when search changes.

### Local Edits

- Stored as **partial patch** in `localStorage` under `swapi:character:<id>`.
- `useLocalCharacter` merges API data + patch and exposes `update / save / reset`.
- `useCharacterList` automatically applies local edits to character cards.
- Persisted across reloads; no server writes.

### UI/UX

- **MUI** components: Cards, TextFields, Pagination, Snackbar, Skeleton.
- **A11y**: semantic headings, labeled inputs, error announcements.
- **Responsive**: 1→2 columns grid.

---

## Scripts (package.json)

```json
{
  "scripts": {
    "dev": "vite",
    "build": "tsc -b && vite build",
    "preview": "vite preview",
    "test": "vitest --environment jsdom --coverage",
    "lint": "eslint .",
    "lint:fix": "eslint . --fix"
  }
}
```

---

## Testing

- **CharactersListPage**: renders list, empty state, search debounce, paging.
- **CharacterDetailPage**: field edits, Save locally (localStorage), Reset.
- **Components**: CharacterCard, PaginationBar, SearchBox, SelectInput, Skeletons.
- **Hooks**: useLocalCharacter, useDebounce.
- **Services**: localEdits, navigation.

Test setup is already configured with:

- `vitest` with `jsdom` environment
- `@testing-library/react` for component testing
- `@testing-library/user-event` for user interactions
- `@testing-library/jest-dom` for DOM matchers
- Coverage reporting with `@vitest/coverage-v8`

Mock `fetch` or wrap fetchers for deterministic tests.

---

## Deployment

### Vercel (recommended)

1. Push repo to GitHub.
2. In Vercel: **Add New Project** → Import from GitHub.
3. Framework: **Vite** (auto-detected).
4. Build: `npm run build`
5. Output dir: `dist`
6. Deploy → copy production URL → update **Live Demo** link above.

### Netlify (alternative)

- Build command: `npm run build`
- Publish directory: `dist`

**Env vars:** Set `VITE_API_BASE` to `https://swapi.py4e.com/api` (defaults to public SWAPI).

---

## Linting & Formatting

- ESLint + Prettier configured for TS/React.
- Run: `npm run lint`.

---

## Performance & Accessibility

- Cached queries with 5-minute staleness.
- Skeletons for perceived performance during loading.
- Debounced search to reduce API calls.
- Labeled inputs and clear error rendering.
- Responsive grid layout (1→2 columns).
- Dynamic page titles for better UX.

---

## Author

**Denis Yukhnovets**
