# cypress-gh-action-example [![renovate-app badge][renovate-badge]][renovate-app]
> Example running Cypress tests inside GitHub Action

Uses [cypress-io/github-action](https://github.com/cypress-io/github-action) to run [Cypress](https://www.cypress.io) end-to-end tests. Runs recorded at [Cypress Dashboard](https://dashboard.cypress.io/projects/yz8qku)

.github/workflows | Status | Description
--- | --- | ---
[artifacts.yml](.github/workflows/artifacts.yml) | ![status](https://github.com/bahmutov/cypress-gh-action-example/workflows/Artifacts/badge.svg?branch=master) | Stores generated run video and any screenshots using CI artifacts
[basic.yml](.github/workflows/basic.yml) | ![status](https://github.com/bahmutov/cypress-gh-action-example/workflows/basic/badge.svg?branch=master) | Basic tests example
[chrome.yml](.github/workflows/chrome.yml) | ![status](https://github.com/bahmutov/cypress-gh-action-example/workflows/E2E%20on%20Chrome/badge.svg?branch=master) | Runs tests using Chrome browser, rather than Electron
[custom-container.yml](.github/workflows/custom-container.yml) | ![status](https://github.com/bahmutov/cypress-gh-action-example/workflows/Custom%20container/badge.svg?branch=master) | Runs tests using custom Docker image
[main.yml](.github/workflows/main.yml) | ![status](https://github.com/bahmutov/cypress-gh-action-example/workflows/End-to-end%20tests/badge.svg?branch=master) | Runs tests on different versions of Node
[merge.yml](.github/workflows/merge.yml) | ![status](https://github.com/bahmutov/cypress-gh-action-example/workflows/merge/badge.svg?branch=master) | Shows how to set custom commit message for pull requests workflows
[separate-install.yml](.github/workflows/separate-install.yml) | ![status](https://github.com/bahmutov/cypress-gh-action-example/workflows/install/badge.svg?branch=master) | Workflow where install and tests are in separate steps
[separate-jobs.yml](.github/workflows/separate-jobs.yml) | ![status](https://github.com/bahmutov/cypress-gh-action-example/workflows/separate/badge.svg?branch=master) | Install dependencies and build the app in one job, test in another
[serve.yml](.github/workflows/serve.yml) | ![status](https://github.com/bahmutov/cypress-gh-action-example/workflows/serve/badge.svg?branch=master) | Shows workflow with server start command and a separate config file
[subfolder.yml](.github/workflows/subfolder.yml) | ![status](https://github.com/bahmutov/cypress-gh-action-example/workflows/subfolder/badge.svg?branch=master) | Installing and testing from a subfolder
[tags.yml](.github/workflows/tags.yml) | ![status](https://github.com/bahmutov/cypress-gh-action-example/workflows/tags/badge.svg?branch=master) | Recorded runs with tags using different Node versions
[timeouts.yml](.github/workflows/timeouts.yml) | ![status](https://github.com/bahmutov/cypress-gh-action-example/workflows/timeouts/badge.svg?branch=master) | Stops the job if it runs over the time limit
[ubuntu.yml](.github/workflows/ubuntu.yml) | ![status](https://github.com/bahmutov/cypress-gh-action-example/workflows/Ubuntu/badge.svg?branch=master) | Runs E2E tests on Ubuntu 16 and Ubuntu 18

## Main

Example image of a test run across Node v12 and v14 recorded on Cypress Dashboard from the [.github/workflows/main.yml](.github/workflows/main.yml) workflow.

![Dashboard run recording](images/parallel-run.png)

**Note:** see [cypress.json](cypress.json) where Cypress is configured to use the system Node, rather than the bundled Node version.

## Artifacts

Example image showing how to download the test run videos from the action [.github/workflows/artifacts.yml](.github/workflows/artifacts.yml)

![Artifacts](images/artifacts.png)

## More info

For more information see [cypress-io/github-action](https://github.com/cypress-io/github-action) and read [Drastically Simplify Testing on CI with Cypress GitHub Action](https://www.cypress.io/blog/2019/11/20/drastically-simplify-your-testing-with-cypress-github-action/) blog post.

[renovate-badge]: https://img.shields.io/badge/renovate-app-blue.svg
[renovate-app]: https://renovateapp.com/
