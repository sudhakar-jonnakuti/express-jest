# express-lint

```
Output:

$ npm run test

> express-jest@1.0.0 test
> jest --runInBand

 PASS  tests/unit/exception/handler.exception.spec.ts
  01. Unit : HandlerException
    01. Trusted Errors
      √ 01. should handle trusted errors and send error response (13 ms)
    02. Untrusted Errors
      √ 01. should handle untrusted errors and send error response (4 ms)

 PASS  tests/integration/unknown.spec.ts
  01. Integration : GET : /unknown
    √ 01. Should return a 404 status (150 ms)

 PASS  tests/integration/health.spec.ts
  01. Integration : GET : /health
    √ 01. Should return a 200 status (47 ms)

 PASS  tests/unit/sample.spec.ts
  √ My first test (4 ms)

----------------------------|---------|----------|---------|---------|-------------------
File                        | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
----------------------------|---------|----------|---------|---------|-------------------
All files                   |   93.06 |    90.47 |   93.33 |   93.06 |
 src                        |   89.36 |      100 |   85.71 |   89.36 |
  app.ts                    |   89.36 |      100 |   85.71 |   89.36 | 25-29
 src/common/builder         |     100 |      100 |     100 |     100 |
  error-response.builder.ts |     100 |      100 |     100 |     100 |
 src/config                 |   92.68 |       50 |     100 |   92.68 |
  index.ts                  |   92.68 |       50 |     100 |   92.68 | 31-32,34
 src/config/app             |     100 |      100 |     100 |     100 |
  app.dev.ts                |     100 |      100 |     100 |     100 |
  app.pro.ts                |     100 |      100 |     100 |     100 |
 src/exception              |   93.87 |    88.88 |     100 |   93.87 |
  app.exception.ts          |     100 |      100 |     100 |     100 |
  custom.exception.ts       |   93.54 |       75 |     100 |   93.54 | 24-25
  handler.exception.ts      |   92.85 |    91.66 |     100 |   92.85 | 28-31
 src/exception/response     |   81.57 |      100 |   66.66 |   81.57 |
  client.exception.ts       |   70.83 |      100 |      50 |   70.83 | 17-23
  server.exception.ts       |     100 |      100 |     100 |     100 |
 src/module/health          |     100 |      100 |     100 |     100 |
  health.controller.ts      |     100 |      100 |     100 |     100 |
  health.route.ts           |     100 |      100 |     100 |     100 |
 src/route                  |     100 |      100 |     100 |     100 |
  app.route.ts              |     100 |      100 |     100 |     100 |
----------------------------|---------|----------|---------|---------|-------------------
Test Suites: 4 passed, 4 total
Tests:       5 passed, 5 total
Snapshots:   0 total
Time:        6.531 s
Ran all test suites.

Reference:

jest-cheat-sheet
https://github.com/sapegin/jest-cheat-sheet

Unit testing TypeScript with Jest: Part One — Project setup
https://duncanlew.medium.com/unit-testing-typescript-with-jest-part-one-f39d2392d0f4

Unit testing TypeScript with Jest: Part Two — CI/CD pipeline setup with GitHub Actions
https://duncanlew.medium.com/unit-testing-typescript-with-jest-part-two-ci-cd-pipeline-setup-with-github-actions-750193931405

Mocking Express Request with Jest and Typescript using correct types
https://stackoverflow.com/questions/57964299/mocking-express-request-with-jest-and-typescript-using-correct-types


```
