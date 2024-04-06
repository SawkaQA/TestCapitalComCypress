import headerData from '../fixtures/headerData.json'


class HeaderFCA {

  // MenuButtons
  getMarketsNenu = () => cy.get('#header  a[href="/en-gb/markets"]');
  getSharesMarketsNenu = () => cy.get('#header a[href="/en-gb/markets/shares"]');


  //Methods
  hoverMarketsNenu() {
    this.getMarketsNenu().realHover();
  }

  openSharesMarketsNenu() {
    this.getSharesMarketsNenu().click({ force: true }).wait(25000);
    cy.url().should('contain', headerData.endPointsMenuMarketsFCA.marketsShares);
  }

}

export default HeaderFCA;