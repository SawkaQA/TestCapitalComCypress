

class LoginFCA {

  getBtnLogin = () => cy.get('[data-type="btn_header_login"]');
  getFormLogin = () => cy.get('[class*="modal_modal"]');
  getHeadlingForm = () => cy.get('div [class*="modal"] [class*="heading_h3"]');

  getEmail = () => cy.get('form #email');
  getPassword = () => cy.get('form #password');
  getBtnContinue = () => cy.get('button[type="submit"]');

  getBtnMyAccount =()=>cy.get('div [class*="accountBtn"] a[href="/trading/platform"]')


  clickBtnLogin() {
    this.getBtnLogin().click();
    this.getFormLogin().should('exist');
  }

  typeEmail(value) {
    this.getEmail().clear().type(value);
  }

  typePassword(value) {
    this.getPassword().clear().type(value);
  }

  clickBtnContinue() {
    this.getBtnContinue().click();    
  }

  visitTraidingPlatform() {
    cy.url().should('contain', '/trading/platform');
    cy.go("back");
    
  }

  verifyAccountLogin(){
    cy.url().should('contain', '/en-gb');
    this.getBtnMyAccount().should('have.attr', 'href', '/trading/platform')

  }



}

export default LoginFCA