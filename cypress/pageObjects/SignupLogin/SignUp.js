class Signup {

    // click to sigin
    getBtnSignUp = () => cy.get("[data-type=btn_header]");
    getFormSignUp = () => cy.get('#s_overlay > .form-container-white');
    getFormSignUpOnPaltform = () => cy.get('.modal',{ timeout: 20000 });

    // header name
    getHeaderNameSignUp = () => cy.get('[class="signup-form"] .h1');
    getHeaderNameSignUpOnPlatform = () => cy.get('.modal__header')
    getLoginLinkForm = () => cy.get('.signup-form > .form-container-small-header > p > .l_btn_signup')
    getLoginLinkFormOnPlatform = () => cy.get('.txt__link')
    getPolicyLink = () => cy.get('.signup-form a[href="https://capital.com/terms-and-policies"]');
    getPolicyLinkOnPlatform = () => cy.get('.checkbox__link');
    getCloseSignUpFormBtn = () => cy.get('#s_overlay .form-container-white .button-cleared')

    // register buttons
    getEmail = () => cy.get("#s_overlay-email > .field__control");
    getEmailOnPlatform = () => cy.get(':nth-child(4) > .form-control');
    getPassword = () => cy.get("#s_overlay-pass > .field__control");
    getPasswordOnPlatform = () => cy.get(':nth-child(6) > .form-control');
    getCheckBoxBySigningUp = () => cy.get('.checked > .iconex-check-mark');

    // enter email
    enterEmail(value) {
        const field = cy.get("#s_overlay-email > .field__control")
        field.clear();
        field.type(value);
        return this;
    }

    // enter password
    enterPassword(value) {
        const field = cy.get("#s_overlay-pass > .field__control");
        field.clear();
        field.type(value);
        return this;
    }

    getBtnContinue = () =>
        cy.get(".signup-form > .form-container-small-content > form > .btn");
    getBtnContinueOnPlatform = () =>
        cy.get('button.button-main.disabled');

    // click buttons for SignIn
    clickBtnSignUp() {
        this.getBtnSignUp().click();
    }

    clickBtnContinue() {
        this.getBtnContinue().dblclick();
    }

    clickCloseSignUpFormBtn() {
        this.getCloseSignUpFormBtn().click()
        return this;
    }
}

export default Signup;
