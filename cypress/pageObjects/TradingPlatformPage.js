import tradingPlatformData from "../fixtures/tradingPlatformData.json"

class TradingPlatformPage {
  getBtnAccountInfo = () => cy.get('topbar account-info');
  getAaccountPopup = () => cy.get('.account-popup')
  getAccountLogout = () => cy.get('.account-popup [data-qa="logout"]');


  veryfyVisitTraidingPlatform() {
    cy.url().should('contain', tradingPlatformData.tradingPlatformBaseUrl);
  }

  clicktBtnAccountInfo() {
    this.getBtnAccountInfo().click();
    this.getAaccountPopup().should('be.visible');
  }

  clickAccountLogout() {
    this.getAccountLogout().click();
    cy.url().should('contain', '/');
  }

}

export default TradingPlatformPage