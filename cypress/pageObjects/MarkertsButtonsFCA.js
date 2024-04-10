export class MarkertTradingBlockSignUpButtonFCA {
  getMarkertTradingBlockSignUpButton = () => cy.get('[data-type="fullscreen_banner_block_btn1_signup"]')

  clickMarkertTradingBlockSignUpButton() {
    this.getMarkertTradingBlockSignUpButton().click()
  }

}


export class MarkertTradingBlockTryDemoButtonFCA {
  getMarkertTradingBlockTryDemoButton = () => cy.get('[data-type="fullscreen_banner_block_btn2demo"]');

  clickMarkertTradingBlockTryDemoButton() {
    this.getMarkertTradingBlockTryDemoButton().click();
  }

}

