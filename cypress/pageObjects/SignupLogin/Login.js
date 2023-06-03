class Login {
    // click to login
    getBtnLogIn = () => cy.get("#wg_loginBtn");
    getFormLogIn = () => cy.get("#l_overlay > .form-container-white");

    // header name
    getHeaderName = () => cy.get("[class='form-container-small-header'] > .h1");
    // link "Sign up"

    // register buttons
    getEmail = () => cy.get("#l_f_email > .field__control");
    getPassword = () => cy.get("#l_f_pass > .field__control");

    // enter email
    enterEmail(value) {
        this.getEmail().clear().type(value);
    }

    // enter password
    enterPassword(value) {
        this.getPassword().clear().type(value);
    }

    getForgotPasswordLink = () => cy.get('[class="l_btn_forgot"]')

    getLogMeAfter = () => cy.get("input[name=l_rem]").closest("label");

    getBtnContinue = () =>
        cy.get(
            ".form-container-white > .form-container-small-content > form > .btn"
        );

    clickLogMeAfter() {
        this.getLogMeAfter().click();
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
