describe('posts', () => {
  beforeEach(() => {
    cy.visit('/posts')
  })

  it('should searched', () => {
    cy.get('input').type('Next.js')
    cy.get('input').type('{enter}')
    cy.location('pathname').should('eq', '/posts')
    cy.location('search').should('eq', '?keyword=Next.js')
  })
})
