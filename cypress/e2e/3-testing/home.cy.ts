describe('Home Page', () => {
    beforeEach(() => {
        cy.visit ('http://localhost:3006')

    })
    it('has a  page name', () => {
       

        cy.get('h1').contains('Home')
        

    })
    it('Navigate to Artists Page', () => {
        cy.get('a[href*="artists"]').click()

        cy.url().should('include', "/artists")
    })

    it('contains Genres text', () => {
        cy.contains('Genres').should('exist')
    })

    it('contains Events Link', () => {
        cy.contains('Events').should('not.exist')
    })

    it('contains a Home Icon', () => {
        cy.get('img[alt*="Home"]').should('exist')
    })

    it('does not contain a Map Icon', () => {
        cy.get('img[alt*="Map"]').should('not.exist')
    })

    it('reloads the page', () => {
        cy.reload()
    })

    it('contains a search Icon', () => {
        cy.get('img[alt*="SearchIcon"]').should('exist')
    })
    it('does not contain a subheader', () => {
        cy.get('h2').should('not.exist')
    })

})