beforeEach(() => {
  cy.visit('http://localhost:3000')
})

it('should correctly showing header', () => {
  cy.get('header').contains('JA')
})

it('should correctly showing section', () => {
  cy.get('h1').contains('Introduction')
  cy.get('h2').contains('Oss/GitHub')
  cy.get('h2').contains('Articles')
})

it('should correctly showing search more button', () => {
  cy.get('button').click()
  cy.location('pathname').should('eq', '/posts')
})
