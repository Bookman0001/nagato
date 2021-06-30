beforeEach(() => {
  cy.visit('http://localhost:3000/posts')
})

it('should searched', () => {
  cy.get('input').type('Next.js').type('{enter}')
  cy.location('pathname').should('eq', '/posts')
  cy.location('search').should('eq', '?keyword=Next.js')
})
