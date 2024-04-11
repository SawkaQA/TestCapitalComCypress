export function checkOutSignUpForm(signUp) { 

  signUp.getHeadingForm()
    .should("be.visible")
    .and('have.text', 'Sign up');
  signUp.getLoginLinkForm()
    .should("be.visible")
    .and('have.text', 'Login');

  signUp.closeFormSignUp();
}