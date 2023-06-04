class Signup {

    // click to sigin
    getBtnSignUp = () => cy.get("[data-type=btn_header]");
    getFormSignUp = () => cy.get('#s_overlay > .form-container-white');

    // header name
    getHeaderNameSignUp = () => cy.get('[class="signup-form"] .h1');
    getLoginLinkForm = () => cy.get('.signup-form > .form-container-small-header > p > .l_btn_signup')
    getPolicyLink = () => cy.get('.signup-form a[href="https://capital.com/terms-and-policies"]')
    getCloseSignUpFormBtn = () => cy.get('#s_overlay .form-container-white .button-cleared')

    // register buttons
    getEmail = () => cy.get("#s_overlay-email > .field__control");
    getPassword = () => cy.get("#s_overlay-pass > .field__control");

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
