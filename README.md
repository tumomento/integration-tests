# Momento Seguros - Integration Tests

This repository contains the end-to-end (E2E) integration tests for the Momento Seguros platform. The tests are built using Playwright and TypeScript to ensure the platform's stability, functionality, and reliability.

## Objective

The primary goal of this project is to develop and maintain a comprehensive suite of E2E tests that cover all critical user journeys on the Momento Seguros platform. This helps to automate regression testing and catch bugs before they reach production.

## Technology Stack

- **Test Framework:** [Playwright](https://playwright.dev/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Environment:** [Node.js](https://nodejs.org/)
- **Package Manager:** [npm](https://www.npmjs.com/)

## Getting Started

To run the tests locally, follow these steps:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/tumomento/integration-tests.git
    cd integration-tests
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Run the tests:**
    ```bash
    npx playwright test
    ```

## Test Architecture

The test suite is designed using the **Page Object Model (POM)** pattern to promote code reuse and maintainability.

-   **Tests (`/tests`):** Contain the test logic and assertions for specific features or user journeys.
-   **Page Objects (to be created):** Encapsulate the logic for interacting with specific pages or components of the application.
-   **Configuration (`playwright.config.ts`):** Defines the test execution settings, such as browsers, reporters, and timeouts.

## Scope

The scope of this project includes:
- Testing the main user-facing features and workflows.
- The initial focus is on the main insurance quoting wizard, as implemented in `tests/wizard.spec.ts`.

## Reporting

Test results are generated in the `playwright-report/` directory after each test run. This report provides a detailed overview of the test outcomes.
