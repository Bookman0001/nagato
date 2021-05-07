it('should correctly showing header', () => {
  cy.visit('http://localhost:3000')
  cy.get('header').contains('EN')
})

it('should correctly showing Introduction', () => {
  cy.visit('http://localhost:3000')
  cy.get('h1').contains('Introduction')
})
