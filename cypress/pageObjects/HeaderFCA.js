class HeaderFCA {

  // MenuButtons
  getMarketsNenu = () => cy.get('#header  a[href="/en-gb/markets"]');
  getSharesMarketsNenu = () => cy.get('#header a[href="/en-gb/markets/shares"]');

  //Methods

  hoverMarketsNenu() {
    this.getMarketsNenu().realHover();    
  }

  openSharesMarketsNenu() { 
    this.getSharesMarketsNenu().click({force: true});
    cy.url().should('contain', '/markets/shares');
    
  }

}

export default HeaderFCA;