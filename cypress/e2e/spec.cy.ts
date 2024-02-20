describe('template spec', () => {
  it('should display TopBar component', () => {
    cy.visit('http://localhost:3008/artists');

    cy.get('[data-testid="cypress-topbar"]').should('exist')
  })
  it('should display BottomBar component', () => {
    cy.get('[data-testid="bottom-bar"]').should('exist')
  })
  it('should navigate to Home page when Home icon is clicked', () => {
    cy.get('[data-testid="home-link"]').click();
    cy.url().should('include', '/home')
  })
})