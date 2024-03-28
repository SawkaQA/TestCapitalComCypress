class SignUpFormFCA {
  getFormSignUp = ()=> cy.get('[class*="modal_modal"]') 
  getHeadlingForm = () => cy.get('div [class*="modal"] [class*="heading_h3"]') 
  getLoginLinkForm = () => cy.get('div [class*="modal"] [class*="button_link"]')
  getCloseButtonForm  = () => cy.get('div [class*="modal"] [class*="modal_close"]')

  openFormSignUp() {
    this.getFormSignUp().should('be.visible')
  }
  closeFormSignUp(){
    this.getCloseButtonForm().click()
  }
}
export default SignUpFormFCA 