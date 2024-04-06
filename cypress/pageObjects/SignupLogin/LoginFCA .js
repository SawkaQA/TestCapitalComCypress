import tradingPlatformData from "../../fixtures/tradingPlatformData.json"

class LoginFCA {

  // Header login button
  getHeaderBtnLogin = () => cy.get('header [data-type="btn_header_login"]');
  getHeaderBtnMyAccount =()=>cy.get('div [class*="accountBtn"] a[href="/trading/platform"]')

  // Login form
  getFormLogin = () => cy.get('[class*="modal_modal"]');
  getHeadingFormLogin  = () => cy.get('div [class*="modal"] [class*="heading_h3"]');
  getEmailFormLogin = () => cy.get('form #email');
  getPasswordFormLogin = () => cy.get('form #password');
  getBtnContinueFormLogin = () => cy.get('button[type="submit"]');  


  clickHeaderBtnLogin() {
    this.getHeaderBtnLogin().click();
    this.getFormLogin().should('exist');
    this.getHeadingFormLogin().should('have.text', 'Login')
  }

  typeEmail(value) {
    this.getEmailFormLogin().clear().type(value);
  }

  typePassword(value) {
    this.getPasswordFormLogin().clear().type(value);
  }

  clickBtnContinue() {
    this.getBtnContinueFormLogin().click();    
  }  

  verifyAccountLogin(){
    cy.url().should('contain', '/en-gb');
    this.getHeaderBtnMyAccount().should('have.attr', 'href', tradingPlatformData.tradingPlatformBaseUrl);
  }

}

export default LoginFCA 