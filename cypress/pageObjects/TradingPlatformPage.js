import tradingPlatformData from "../fixtures/tradingPlatformData.json"

class TradingPlatformPage {
  getBtnAccountInfo = () => cy.get('topbar account-info');
  getAaccountPopup = () => cy.get('.account-popup')
  getAccountLogout = () => cy.get('.account-popup [data-qa="logout"]');
  getLogo = () => cy.get('topbar .logo');


  isOpenedTradingPlatform() {
    this.getLogo().should("be.visible");
    cy.title().should("eq", tradingPlatformData.tradingPlatformTitle);
  }


  verifyVisitTraidingPlatform() {
    cy.url().should('include', tradingPlatformData.tradingPlatformBaseUrl);
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