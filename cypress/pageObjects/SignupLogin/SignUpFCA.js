class SignUpFCA {
  getFormSignUp = ()=> cy.get('[class*="modal_modal"]');
  getHeadingForm = () => cy.get('div [class*="modal"] [class*="heading_h3"]'); 
  getLoginLinkForm = () => cy.get('div [class*="modal"] [class*="button_link"]');
  getCloseButtonForm  = () => cy.get('div [class*="modal"] [class*="modal_close"]');

  closeFormSignUp(){
    this.getCloseButtonForm().click()
  }
}
export default SignUpFCA 