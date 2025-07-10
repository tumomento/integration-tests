# Tech Context: Momento Seguros - Integration Tests

## 1. Technologies Used
- **Playwright:** The core E2E testing framework.
- **TypeScript:** The language used for writing tests.
- **Node.js:** The runtime environment for executing the tests.
- **npm:** The package manager for handling project dependencies.

## 2. Development Setup
To run the tests locally, a developer needs to:
1. Clone the repository.
2. Install the dependencies using `npm install`.
3. Run the tests using the command `npx playwright test`.

## 3. Dependencies
The key dependencies are listed in `package.json`:
- `@playwright/test`: The Playwright test runner and library.
- `typescript`: The TypeScript compiler.

## 4. Tool Usage Patterns
- **Test Execution:** Tests are run from the command line.
- **Debugging:** Playwright's debugging tools can be used to inspect test execution and troubleshoot issues.
- **Reporting:** Test results are generated in the `playwright-report/` directory.
