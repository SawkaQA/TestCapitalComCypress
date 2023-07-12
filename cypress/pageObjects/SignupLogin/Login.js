class Login {
    // click to login
    getBtnLogIn = () => cy.get("#wg_loginBtn");
    getFormLogIn = () => cy.get("#l_overlay > .form-container-white");
    getFormLoginOnPlatform = () => cy.get('cdk-dialog-container#login')

    // header name
    getHeaderNameLogIn = () => cy.get("[class='form-container-small-header'] > .h1");
    getSignUpLinkForm = () => cy.get(".form-container-white > .form-container-small-header > p > .l_btn_signup");
    getCloseLoginFormBtn = () => cy.get('#l_overlay .form-container-white .button-cleared');
    getHeaderNameLoginOnPlatform = () => cy.get('.modal__header-title');
    getSignUpLinkFormOnPlatform = () => cy.get(':nth-child(1) > .txt__link');

    // register buttons
    getEmail = () => cy.get("#l_f_email > .field__control");
    getPassword = () => cy.get("#l_f_pass > .field__control");
    getEmailOnPlatform = () => cy.get('.form.ng-pristine > :nth-child(1) > :nth-child(3)');
    getPasswordOnPlatform = () => cy.get('.form.ng-pristine > :nth-child(1) > :nth-child(5)');

    // enter email
    enterEmail(value) {
        this.getEmail().clear().type(value);
    }

    // enter password
    enterPassword(value) {
        this.getPassword().clear().type(value);
    }

    getForgotPasswordLink = () => cy.get('[class="l_btn_forgot"]');
    getForgotPasswordLinkOnPlatform = () => cy.get('.txt.txt_link');

    getLogMeAfter = () => cy.get("input[name=l_rem]").closest("label");

    getBtnContinue = () => cy.get(".form-container-white > .form-container-small-content > form > .btn");
    getBtnContinueOnPlatform = () => cy.get('.button-main')

    // methods
    clickLogMeAfter() {
        this.getLogMeAfter().click();
    }

    clickBtnLogIn() {
        this.getBtnLogIn().click();
    }

    clickBtnContinue() {
        this.getBtnContinue().dblclick();
    }

    clickCloseLoginFormBtn() {
        this.getCloseLoginFormBtn().click()
        return this;
    }
}

export default Login;
