import headerData from '../fixtures/headerData.json'


class HeaderFCA {

  // MenuButtons
  getMarketsNenu = () => cy.get('#header  a[href="/en-gb/markets"]');
  getSharesMarketsNenu = () => cy.get('#header a[href="/en-gb/markets/shares"]');
  getSharesMarketsHeading = () => cy.get('h1');
  getWelcomBanner = () => cy.get('div[class*="main_banner"]  button')


  //Methods
  hoverMarketsNenu() {    
    this.getWelcomBanner( { timeout: 10000 }).then($element => {
      if ($element.length) {
        $element.click();
      } else {
        this.getMarketsNenu().realHover();
      }
    });
  }

  openSharesMarketsNenu() {
    this.getSharesMarketsNenu().click({ force: true });
    this.getSharesMarketsHeading().should('be.visible');
    cy.url().should('contain', headerData.endPointsMenuMarketsFCA.marketsShares);
  }


}

export default HeaderFCA;