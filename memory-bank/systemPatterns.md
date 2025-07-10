# System Patterns: Momento Seguros - Integration Tests

## 1. System Architecture
The testing architecture is based on the Page Object Model (POM) pattern, which is a common design pattern in test automation.

- **Tests (`/tests`):** Contain the test logic and assertions. Each test file corresponds to a specific feature or user journey (e.g., `wizard.spec.ts`).
- **Page Objects (to be created):** Will encapsulate the logic for interacting with specific pages or components of the application. This promotes code reuse and maintainability.
- **Configuration (`playwright.config.ts`):** Defines the test execution settings, such as browsers, reporters, and timeouts.

## 2. Key Technical Decisions
- **Playwright as the E2E Framework:** Chosen for its modern features, cross-browser support, and robust tooling.
- **TypeScript for Test Development:** Provides static typing, which helps catch errors early and improves code quality.

## 3. Critical Implementation Paths
- **The Quoting Wizard:** The initial and most critical path to be tested is the insurance quoting wizard. This is the core feature of the Momento Seguros platform.
