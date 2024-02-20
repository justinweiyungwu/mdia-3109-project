describe ('Map Page', () => {
    beforeEach(() => {
        cy.visit ('http://localhost:3006/map')

    })

    it('reloads the page', () => {
        cy.reload()
    })
    it('Contains a page header', () => {
        cy.get('h2').contains('Top Artists and Genres around the World')
    })
    it('Navigates to Artists Page', () => {
        cy.get('a[href*="artists"]').click()

        cy.url().should('include', "/artists")
    })
    it('Contains a paragraph that explains the purpose of the page', () => {
        cy.contains('p').should('exist')
    })
    it('displays a Dynamic Map on the page', () => {
        cy.contains('DynamicMap').should('exist')
    })
    it('contains a Menu Icon', () => {
        cy.get('img[alt*="MenuIcon"]').should('exist')
    })
    it('has a correct page Title', () => {
        cy.title().should('eq','Top Artists and Genres around the World' )
    })
    it('displays drop down menu on click', () => {
        cy.get('img[alt*="MenuIcon"]').should('exist')
        cy.url().should('include', 'open__menu')
    })
    it('contains a search Icon', () => {
        cy.get('img[alt*="SearchIcon"]').should('exist')
    })
    it('contains a question about the map', () => {
        cy.get('h5').should('exist')
    })
    
})