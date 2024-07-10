# Cucumber-Store
[![Tests status](https://github.com/JakubRumpca/Cucumber-Store/actions/workflows/pipeline.yml/badge.svg)](https://github.com/JakubRumpca/Cucumber-Store/actions/workflows/pipeline.yml)

The repository contains cucumber automated BDD tests of the online store available at https://www.saucedemo.com/. The website was created for training purposes, where you can practice testing web applications on it, so using bots such as automatic tests is allowed and does not violate the regulations.

## Technologies

- **TypeScript**
- **Node** - Version used -> 20. (It is required for dependency installation)
- **NPM** - Version used -> 10.

## Repository content

- **/features** - Main location for all E2E tests.
- **/support/step_definitions** - Contains step definitions that facilitate test maintenance and enable code reuse.
- **cucumber.json** - Cucumber configuration file that contains settings for the test environment.
- **.env.template** - User data should be hidden, but the application was created for training purposes. Secrets are available on the home page so I do not hide them in this repository, but .env file was added to .gitignore file as should. After removing ".template" from the file name, you can run the tests.
- **/.github/workflows/pipeline.yml** - File that contains Continuous Integration/Continuous Deployment (CI/CD) configuration.

## How to run tests

To run the tests, follow these steps:

1. Install dependencies:

```bash
npm install
```

2. Install playwright browsers:

```bash
npx playwright install
```

3. remove **.template** from the file name **.env.template**. It defines the secrets needed to log in.

```bash
cp .env.template .env
```

4. To runs all e2e tests:

```bash
npm run tests
```
