describe ('Genres Page', () => {
    beforeEach(() => {
        cy.visit ('http://localhost:3006/genres')

    })
    it('reloads the page', () => {
        cy.reload()
    })
    it('Navigate to Artists Page', () => {
        cy.get('a[href*="artists"]').click()

        cy.url().should('include', "/artists")
    })
    it( 'Contains the right page Name on the TopBar', () =>
    cy.get('h1').contains('Genres')
    )
    it('contains a Artist Icon', () => {
        cy.get('img[alt*="ArtistIcon"]').should('exist')
    })
    it('contains a search Icon', () => {
        cy.get('img[alt*="SearchIcon"]').should('exist')
    })
    it('does not contain information about articles', () => {
        cy.get('img[alt*="articleImage"]').should('not.exist')
    })
    it('shows the topbar on the page', () => {
        cy.get('main').contains('.topBarBody')
    })
    it('contains  Artists text on the page', () => {
        cy.contains('Artists').should('exist')
    })
    it('displays Songs Image', () => {
        cy.get('img[alt*="songsImage"]').should('exist')
    })
    it('displays Songs Titles', () => {
        cy.get('.songsTitle').should('not.be.empty')
    })
   
})