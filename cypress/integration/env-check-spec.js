// enables intelligent code completion for Cypress commands
// https://on.cypress.io/intelligent-code-completion
/// <reference types="Cypress" />
it('has environment variable set', () => {
  // confirm the environment variable was passed correctly
  // using "CYPRESS_firstName" variable
  expect(Cypress.env('firstName')).to.equal('Joe')
  // confirm the environment variable was passed correctly
  // using action's env field
  expect(Cypress.env('lastName')).to.equal('Smith')
})
