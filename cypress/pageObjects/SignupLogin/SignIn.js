class Signin {

    // click to sigin
    getBtnSignIn = () => cy.get("[data-type=btn_header]");
    getFormSigIn = () => cy.get('#s_overlay > .form-container-white');

    // header name
    getHeaderNameSignUp = () => cy.get('[class="signup-form"] .h1');

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
    clickBtnSignIn() {
        this.getBtnSignIn().click();
    }

    clickBtnContinue() {
        this.getBtnContinue().dblclick();
    }
}

export default Signin;
