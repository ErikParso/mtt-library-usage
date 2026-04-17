# mtt-library-usage

This project is for testing the usage of the `@coderic-labs/mui-tanstack-table` library across a matrix of peer dependency versions. It ensures compatibility with multiple versions of React, MUI, TanStack Table, Emotion, and React Intl using Playwright E2E tests.

## Purpose

- Validate that `@coderic-labs/mui-tanstack-table` works with a wide range of peer dependency versions.
- Run E2E tests for each combination in CI using GitHub Actions matrix.
- Quickly reproduce and debug integration issues with real dependency sets.

## How It Works

- The GitHub Actions workflow installs each matrix combination and runs Playwright E2E tests against a Vite dev server.
- The matrix covers all valid combinations of React, MUI, X-Date-Pickers, TanStack Table, Emotion, and React Intl within supported version ranges.


## Tested Version Matrix

| Compat   | React   | MUI    | X-Pickers | Tanstack | Emotion React | Emotion Styled | React Intl |
|----------|---------|--------|-----------|----------|---------------|---------------|------------|
| compat 1 | 18.3.1  | 6.5.0  | 7.23.6    | 8.21.2   | 11.14.0       | 11.14.0       | 7.1.10     |
| compat 2 | 18.3.1  | 6.5.0  | 7.23.6    | 8.21.2   | 11.13.5       | 11.13.5       | 7.1.10     |
| compat 3 | 18.3.1  | 7.3.10 | 7.29.4    | 8.21.3   | 11.14.0       | 11.14.0       | 7.1.14     |
| compat 4 | 19.2.5  | 6.5.0  | 7.23.6    | 8.21.2   | 11.14.0       | 11.14.0       | 7.1.10     |
| compat 5 | 19.2.5  | 7.3.10 | 7.29.4    | 8.21.3   | 11.14.0       | 11.14.0       | 7.1.14     |

## Local Development

1. Install dependencies and browsers:
   ```sh
   npm install
   npx playwright install
   ```
2. Run all E2E tests (headless):
   ```sh
   npm run test
   ```
3. Run tests in headed mode (see browser):
   ```sh
   npm run test:headed
   ```
4. Run tests in debug mode:
   ```sh
   npm run test:debug
   ```

## CI

- The GitHub Actions workflow will automatically test all matrix combinations on each push or workflow dispatch.
- Only valid dependency combinations are tested (see table above).

---

For more details, see `.github/workflows/peerdeps-matrix.yml`.
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
