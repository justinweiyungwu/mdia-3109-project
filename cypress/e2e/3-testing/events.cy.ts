describe('Events Page', () => {
    beforeEach(() => {
        cy.visit ('http://localhost:3006/events')

    })
    it('reloads the page', () => {
        cy.reload()
    })
    it( 'Contains the right page Name on the TopBar', () =>
    cy.get('h1').contains('Events')
    )
    it('contains a search Icon', () => {
        cy.get('img[alt*="SearchIcon"]').should('exist')
    })
    it('Navigate to Map Page', () => {
        cy.get('a[href*="artists"]').click()

        cy.url().should('include', "/artists")
    })
    it('contains a Menu Icon', () => {
        cy.get('img[alt*="MenuIcon"]').should('exist')
    })
    it('does not contain information about articles', () => {
        cy.get('img[alt*="articleImage"]').should('not.exist')
    })
    it('contains a Home Icon', () => {
        cy.contains('img[alt*="homeIcon"]').should('exist')
        
    })
    it('does not contain information about a Map icon', () => {
        cy.get('img[alt*="MapIcon"]').should('not.exist')
    })
    it('displays a genres text on the screen', () => {
        cy.contains('Genres').should('exist')
    })
    it('find the Home Icon', () => {
        cy.get('.home').find('HomeIcon')
    })
})