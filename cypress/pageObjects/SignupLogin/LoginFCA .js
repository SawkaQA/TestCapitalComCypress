import tradingPlatformData from "../../fixtures/tradingPlatformData.json"

class LoginFCA {

  // Header login button
  getHeaderBtnLogin = () => cy.get('header [data-type="btn_header_login"]');
  getHeaderBtnMyAccount = () => cy.get('div [class*="accountBtn"] a[href="/trading/platform"]')

  // Login form
  getFormLogin = () => cy.get('[class*="modal_modal"]');
  getHeadingFormLogin = () => cy.get('div [class*="modal"] [class*="heading_h3"]');
  getLinkSignUpFormLogin = () => cy.contains('div [class*="modal"]  span', 'Sign up');
  getEmailFormLogin = () => cy.get('form #email');
  getPasswordFormLogin = () => cy.get('form #password');
  getLinkForgotPasswordFormLogin = () => cy.contains('div [class*="modal"]  span', 'Forgot password?');
  getLogMeAfterFormLogin = () => cy.get('input#remember_me').closest("label");
  getBtnContinueFormLogin = () => cy.get('button[type="submit"]');
  getCloseButtonForm = () => cy.get('div [class*="modal"] [class*="modal_close"]');

  //Methods

  isOpenedFormLogin() {
    this.getFormLogin().should('be.visible');    
    this.getHeadingFormLogin().invoke('text').then(actualText => {
      if (actualText.trim() !== 'Login') {
        cy.log('ER: Login');
        cy.log(`AR: ${actualText}`);
        throw new Error(`Bug#04 ${actualText} Form is opened instead Login Form`);
      } else {
        cy.log('Login Form should be opened');
      }
    });
  }
 

  closeFormLogin() {
    this.getCloseButtonForm().click()
  }

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

  verifyAccountLogin() {
    cy.url().should('contain', '/en-gb');
    this.getHeaderBtnMyAccount().should('have.attr', 'href', tradingPlatformData.tradingPlatformBaseUrl);
  }

}

export default LoginFCA 