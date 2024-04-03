class BasePageFCA {

  getBannerCookies = () => cy.get('#onetrust-banner-sdk');
  getBtnAcceptCookies = () => cy.get('#onetrust-accept-btn-handler');  

  //Methods

  openFcaUrl() {
    cy.visit('/en-gb')
  }

  openBannerCookies() {
    this.getBannerCookies().should('be.visible');
  }

  clickBtnAcceptCookies() {
    this.getBtnAcceptCookies().click();
  }

}

export default BasePageFCA