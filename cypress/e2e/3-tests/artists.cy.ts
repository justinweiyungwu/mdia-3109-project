describe ('Artists Page', () => {
    beforeEach(() => {
        cy.visit ('http://localhost:3006/artists')

    })
    it('reloads the page', () => {
        cy.reload()
    })
    it('displays Artists Image', () => {
        cy.get('img[alt*="taylay"]').should('exist')
    })
    it('displays Artists Name', () => {
        cy.get('.title').should('not.be.empty' )
    })
    it('contains a Top Songs subtitle', () => {
        cy.get('h3').should('exist')
    })
    it('Navigates to the Genres Page', () => {
        cy.get( 'a[href*="genres"]').click()
        cy.url ().should('include', "/genres")
    })
    it('does not contain information about articles', () => {
        cy.get('img[alt*="articleImage"]').should('not.exist')
    })
    it('displays Songs Titles', () => {
        cy.get('.songsTitle').should('not.be.empty')
    })
    it('contains a search Icon', () => {
        cy.get('img[alt*="SearchIcon"]').should('exist')
    })
    it('displays Songs Image', () => {
        cy.get('img[alt*="songsImage"]').should('exist')
    })
    it('contains a paragraph that shows artists detail', () => {
        cy.contains('p').should('exist')
        
    })
})