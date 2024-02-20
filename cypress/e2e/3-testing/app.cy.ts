describe('Navigation', () => {
    beforeEach(function() {
        console.log("Navigation Test")
    })
    it('should navigate to genres page', () => {
        cy.visit('http://localhost:3006')
        cy.get('a[href*="genres"]').click()
        cy.url().should('include', "/genres")
        cy.get('h1').contains('Genres')
        
    })
})