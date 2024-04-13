import tradingPlatformData from "../fixtures/tradingPlatformData.json"

export function checkOutSignUpForm(signUp) {
  signUp.getLoginLinkForm()
    .should("be.visible")
    .and('have.text', 'Login');

  signUp.closeFormSignUp();
}


export function checkOutLoginForm(login) {
  try {
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
} catch (error) {
  cy.log('Some elements of the login form are missing');
  throw error;
}
};

export function verifyVisitTraidingPlatform() {
  cy.url().should('contain', tradingPlatformData.tradingPlatformBaseUrl);
};  

export function verifyVisitTraidingPlatformDemoMode() { 
cy.url().then(url => {
  if (!url.includes(tradingPlatformData.tradingPlatformDemoModeUrl)) {
    cy.log('ER: TP opened in the Demo Mode');
    cy.log('AR: TP opened in the Live Mode');
    Cypress.log({
      name: 'Bug! TP is opened in the Live Mode instead Demo Mode',
      consoleProps: () => {
        return {
          ER: 'TP opened in the Demo Mode',
          AR: 'TP opened in the Live Mode'
        };
      }
    });
  }
});
} 


/* export function checkOutLoginForm(login) {
  const elements = [
    { selector: login.getLinkSignUpFormLogin(), text: 'Sign up' },
    { selector: login.getEmailFormLogin(), text: 'Email' },
    { selector: login.getPasswordFormLogin(), text: 'Password' },
    { selector: login.getLinkForgotPasswordFormLogin(), text: 'Forgot password?' },
    { selector: login.getLogMeAfterFormLogin(), text: 'LogMeAfter' },
    { selector: login.getBtnContinueFormLogin(), text: 'Continue' },
  ];

  elements.forEach(element => {
    if (Cypress.$(element.selector).length === 0) {
      cy.log(`ER: ${element.text} form is missing`);
      Cypress.log({
        name: 'Bug! Form is missing',
        message: `${element.text} form is missing`
      });
    } else {
      cy.wrap(element.selector).should("be.visible").and('have.text', element.text);
    }
  });

  closeFormLogin(login);
}

function closeFormLogin(login) {
  const closeButton = login.getCloseButtonForm();
  if (closeButton) {
    closeButton.click();
  }
} */