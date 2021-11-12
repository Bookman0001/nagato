describe('top', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should correctly showing section', () => {
    cy.get('h2').contains('Articles')
  })

  it('should correctly showing search more button', () => {
    cy.get('button').click()
    cy.location('pathname').should('eq', '/posts')
  })
})
