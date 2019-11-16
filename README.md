# cypress-gh-action-example
> Example running Cypress tests inside GitHub Action

Uses [cypress-io/github-action](https://github.com/cypress-io/github-action), see [.github/workflows/main.yml](.github/workflows/main.yml). Runs parallel jobs on several versions of Node and records the results on Cypress Dashboard.

![Dashboard run recording](images/parallel-run.png)

**Note:** see [cypress.json](cypress.json) where Cypress is configured to use the system Node, rather than the bundled Node version.
