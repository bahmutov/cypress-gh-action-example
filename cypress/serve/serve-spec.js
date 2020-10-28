/// <reference types="cypress" />

describe('Served app', () => {
  it('loads', () => {
    cy.visit('/')
    cy.contains('Server')
  })
})
