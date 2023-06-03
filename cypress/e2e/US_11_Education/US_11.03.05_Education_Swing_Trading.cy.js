/// <reference types = "cypress" />

import { basePage } from "../../pageObjects/basePage";
import Header from "../../pageObjects/Header";
import Login from "../../pageObjects/SignupLogin/Login";
import Signup from "../../pageObjects/SignupLogin/SignUp"
const header = new Header();
const login = new Login();
const signUp = new Signup();

describe("US_11.03.05 | Educations > Menu item [Swing Trading]", () => {
    beforeEach(() => {
        basePage.open();
        // header.selectAustraliaCountry();
        header.hoverCountryAndLang();
        header.selectEnglishLang();
    })

    it("TC_11.03.05_01 | Education > Menu Item [Swing Trading] > Test button [Log in] in the header", () => {
        header.getEducationMenu().realHover();
        basePage.getSwingTrading().click();
        login.clickBtnLogIn();
        login.getFormLogIn().should("be.visible");
        login.getHeaderNameLogIn().should("contain", "Login");
        cy.get(".form-container-white > .form-container-small-header > p > .l_btn_signup")
            .should("be.visible")
            .and("include.text", "Sign up");
        login.getEmail().should("be.visible")
            .and("have.attr", "type", "email")
        login.getPassword().should('be.visible')
            .and("have.attr", "type", "password")
        login.getBtnContinue().should("have.text", "Continue");
        login.getForgotPasswordLink()
            .should("be.visible")
            .and("have.text", "Forgot password?");
        login.getLogMeAfter().should("be.visible");
        cy.get('#l_overlay .form-container-white .button-cleared').click();
    });

    it("TC_11.03.05_02 | Education > Menu Item [Swing Trading] > Test button [Sign up] in the header", () => {
        header.getEducationMenu().realHover();
        basePage.getSwingTrading().click();
        signUp.clickBtnSignUp();
        signUp.getFormSignUp().should("be.visible");
        signUp.getHeaderNameSignUp().should('have.text', 'Sign up')
        cy.get('.signup-form > .form-container-small-header > p > .l_btn_signup')
            .should('be.visible')
            .and('have.text', 'Login')
        signUp.getEmail().should('be.visible')
            .and('have.attr', 'type', 'email')
        signUp.getPassword().should('be.visible')
            .and('have.attr', 'type', 'password')
        signUp.getBtnContinue()
            .should('be.visible')
            .and("have.text", "Continue")
        cy.get('.signup-form a[href="https://capital.com/terms-and-policies"]')
            .should('be.visible')
            .and('have.text', 'Privacy Policy')
        cy.get('#s_overlay .form-container-white .button-cleared').click();
    })
});