import tradingPlatformData from "../fixtures/tradingPlatformData.json"

export function checkOutSignUpForm(signUp) {
  signUp.getLoginLinkForm()
    .should("be.visible")
    .and('have.text', 'Login');

  signUp.closeFormSignUp();
}


export function checkOutLoginForm(login) {  
    login.getLinkSignUpFormLogin()
      .should("be.visible")
      .and('have.text', 'Sign up');
    login.getEmailFormLogin().should("be.visible");
    login.getPasswordFormLogin().should("be.visible");
    login.getLinkForgotPasswordFormLogin()
      .should("be.visible")
      .and('have.text', 'Forgot password?');
    login.getLogMeAfterFormLogin().should("be.visible");
    login.getBtnContinueFormLogin().should("be.visible");
    login.closeFormLogin(); 
};

export function verifyVisitTraidingPlatform() {
  cy.url().should('contain', tradingPlatformData.tradingPlatformBaseUrl);
};


export function verifyVisitTraidingPlatformDemoMode() {
  cy.url().should('include', tradingPlatformData.tradingPlatformDemoModeUrl); 
}

/* 
//using this function marks a failed it() in the alluer report as broken

export function verifyVisitTraidingPlatformDemoMode() {
  cy.url().then(url => {
    if (!url.includes('/trading/platform/demo')) {
      cy.log('Bug! TP is opened in the Live Mode instead Demo Mode');
      throw new Error('Bug! TP is opened in the Live Mode instead Demo Mode');
    }
  });
} */





