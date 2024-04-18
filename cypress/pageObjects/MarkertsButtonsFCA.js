//Buttons [Sign up ], [Try Demo]  in the Block "{MarketsName} trading" in the Menu [Markets] > Menu item [{MarketName}] on FCA license

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

//Buttons [Create account ], [Try Demo]  in the Block "Discover trading excellence with Capital.com" in the Menu [Markets] > Menu item [{MarketName}] on FCA license

export class MarkertDiscoverBlockCreateAccountButtonFCA {
  getMarkertDiscoverBlockCreateAccountButton = () => cy.get('[data-type="tiles_w_img_btn1_signup"]')

  clickMarkertDiscoverBlockCreateAccountButton() {
    this.getMarkertDiscoverBlockCreateAccountButton().click()
  }
}

export class MarkertDiscoverBlockTryDemoButtonFCA {
  getMarkertDiscoverBlockTryDemoButton = () => cy.get('[data-type="tiles_w_img_btn2_demo"]')

  clickMarkertDiscoverBlockTryDemoButton() {
    this.getMarkertDiscoverBlockTryDemoButton().click()
  }
}


