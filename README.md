# cypress-gh-action-example [![renovate-app badge][renovate-badge]][renovate-app]
> Example running Cypress tests inside GitHub Action

Uses [cypress-io/github-action](https://github.com/cypress-io/github-action) to run [Cypress](https://www.cypress.io) end-to-end tests

Workflow | Status | Description
--- | --- | ---
[.github/workflows/main.yml](.github/workflows/main.yml) | ![status](https://github.com/bahmutov/cypress-gh-action-example/workflows/End-to-end%20tests/badge.svg?branch=master) | Runs tests on different versions of Node
[.github/workflows/chrome.yml](.github/workflows/chrome.yml) | ![status](https://github.com/bahmutov/cypress-gh-action-example/workflows/E2E%20on%20Chrome/badge.svg?branch=master) | Runs tests using Chrome browser, rather than Electron
[.github/workflows/artifacts.yml](.github/workflows/artifacts.yml) | ![status](https://github.com/bahmutov/cypress-gh-action-example/workflows/Artifacts/badge.svg?branch=master) |Stores generated run video and any screenshots using CI artifacts
[.github/workflows/custom-container.yml](.github/workflows/custom-container.yml) | ![status](https://github.com/bahmutov/cypress-gh-action-example/workflows/Custom%20container/badge.svg?branch=master) | Runs tests using custom Docker image

## Main

Example image of a test run across Node v10 and v12 recorded on Cypress Dashboard from the [.github/workflows/main.yml](.github/workflows/main.yml) workflow

![Dashboard run recording](images/parallel-run.png)

**Note:** see [cypress.json](cypress.json) where Cypress is configured to use the system Node, rather than the bundled Node version.

## Artifacts

Example image showing how to download the test run videos from the action [.github/workflows/artifacts.yml](.github/workflows/artifacts.yml)

![Artifacts](images/artifacts.png)

## More info

For more information see [cypress-io/github-action](https://github.com/cypress-io/github-action) and read [Drastically Simplify Testing on CI with Cypress GitHub Action](https://www.cypress.io/blog/2019/11/20/drastically-simplify-your-testing-with-cypress-github-action/) blog post.

[renovate-badge]: https://img.shields.io/badge/renovate-app-blue.svg
[renovate-app]: https://renovateapp.com/
