beforeEach(() => {
  cy.visit('http://localhost:3000')
})

it('should correctly showing header', () => {
  cy.get('header').contains('EN')
})

it('should correctly showing section', () => {
  cy.get('h1').contains('Introduction')
  cy.get('h2').contains('Oss/GitHub')
  cy.get('h2').contains('Career')
  cy.get('h2').contains('Articles')
})

it('should searched', () => {
  cy.get('input').type('Next.js').type('{enter}')
  cy.location('pathname').should('eq', '/posts')
  cy.location('search').should('eq', '?keyword=Next.js')
})
