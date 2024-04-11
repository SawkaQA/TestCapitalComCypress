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
}