import headerData from '../fixtures/headerData.json'


class HeaderFCA {

  // MenuButtons
  getMarketsNenu = () => cy.get('#header  a[href="/en-gb/markets"]');
  getSharesMarketsNenu = () => cy.get('#header a[href="/en-gb/markets/shares"]');
  getSharesMarketsHeading  = () => cy.get('h1');


  //Methods
  hoverMarketsNenu() {
    this.getMarketsNenu().realHover();
  }

  openSharesMarketsNenu() {
    this.getSharesMarketsNenu().click({ force: true });
    //cy.wait(25000);
    this.getSharesMarketsHeading().should('be.visible');   
    cy.url().should('contain', headerData.endPointsMenuMarketsFCA.marketsShares);
  }
  

}

export default HeaderFCA;