# Workflow Course Assignment

This repo is a small static web app used to practice a modern workflow:

- ESLint (flat config) + Prettier
- Husky + lint-staged (pre-commit)
- Vitest (unit tests)
- Playwright (end-to-end tests)

## Getting Started

```bash
npm install
```

## Run The Server

```bash
npm run start  #  App served at: http://127.0.0.1:5501
```

## Environment Variables

Create a **.env** (not committed) from **.env.example**:

```dotenv
BASE_URL=http://127.0.0.1:5501
E2E_EMAIL=you@example.com
E2E_PASSWORD=yourpassword
```

- .env is ignored by git.
- .env.example (with placeholders) is committed.

## Scripts

```bash
npm run lint           # ESLint
npm run lint:fix       # ESLint with --fix
npm run format         # Prettier write
npm run format:check   # Prettier check
npm test               # Vitest (unit tests)
npm run e2e            # Playwright (headless)
npm run e2e:headed     # Playwright (headed)
npm run start          # Static server on port 5501
npm run dev            # Tailwind compile --watch
```

## Tooling Details

### ESLint

- Flat config via eslint.config.mjs
- Browser globals + test globals enabled
- eslint-config-prettier last to avoid rule clashes

### Prettier

- .prettierrc defines formatting rules
- Runs on commit via lint-staged

### Pre-commit Hooks

- Husky + lint-staged run ESLint and Prettier on staged files
- .husky/pre-commit contains:
  npx lint-staged

## Tests

### Unit Tests(Vitest)

- js/**tests**/isActivePath.test.js
  - exact match is true
  - root / or /index.html is true
  - includes (current path includes href) is true
  - non-match is false

- js/**tests**/getUserName.test.js
  - returns name from localStorage
  - returns null when missing

### E2E Tests(Playwright)

- tests/login.spec.js
  - logs in with valid credentials from .env
  - shows an error message for invalid credentials

- tests/navigation.spec.js
  - home → wait for venue list → click first venue
  - The details page `<h1>` contains "Venue details".

```bash
npm run e2e

#or

npm run e2e:headed
```
