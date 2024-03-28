 class MarkertTradingBlockSignUpButtonFCA{
  getMarkertTradingBlockSignUpButton = () => cy.get('[data-type="fullscreen_banner_block_btn1_signup"]')

  clickMarkertTradingBlockSignUpButton (){
    this.getMarkertTradingBlockSignUpButton().click()
  }
  
}
export default MarkertTradingBlockSignUpButtonFCA