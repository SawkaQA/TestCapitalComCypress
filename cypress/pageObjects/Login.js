class Login {

    // visit Capital.com and click to signUp
    visit = () => cy.visit("/");
    getBtnLogIn = () => cy.get("#wg_loginBtn");

    // register buttons
    getEmail = () => cy.get("#l_f_email > .field__control");
    getPassword = () => cy.get("#l_f_pass > .field__control");

    // enter email
    enterEmail(value) {
        const field = cy.get("#l_f_email > .field__control");
        field.clear();
        field.type(value);
        return this;
    }

    // enter password
    enterPassword(value) {
        const field = cy.get("#l_f_pass > .field__control");
        field.clear();
        field.type(value);
        return this;
    }

    getLogMeAfter = () => cy.get('input[name=l_rem]').closest('label')

    getBtnContinue = () =>
        cy.get(".form-container-white > .form-container-small-content > form > .btn");


    clickLogMeAfter() {
        this.getLogMeAfter().click()
    }

    // click buttons for login
    clickBtnLogIn() {
        this.getBtnLogIn().click();
    }

    clickBtnContinue() {
        this.getBtnContinue().dblclick();
    }
}

export default Login;
