it('should correctly showing top page', () => {
  cy.visit('http://localhost:3000')
  cy.get('h1').contains('Introduction')
})
