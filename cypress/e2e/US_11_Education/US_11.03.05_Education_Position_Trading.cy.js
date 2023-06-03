/// <reference types = "cypress" />

import Login from "../../pageObjects/SignupLogin/Login"
import Header from "../../pageObjects//Header"
import { basePage } from "../../pageObjects/basePage";
import Signin from "../../pageObjects/SignupLogin/SignIn"

describe('Education > Menu Item [Position Trading]', () => {   

    it('TC_11.03.04_01 | Education > Menu Item [Position Trading] > Test button [Log in] in the header', () => {
        const login = new Login();
        const header = new Header();

        basePage.open();
        cy.get('div .licLangSw__btn').realHover();
        cy.get('.js-currCountry').click();
        header.getLanguageIcons().realHover()
        header.getEnglishLang();
        header.getNavButtons().realHover();
        header.getEducationMenu().realHover();
        cy.get("[href ='https://capital.com/position-trading']").eq(1).click()
        login.clickBtnLogIn();
        cy.get('#l_overlay > .form-container-white').should('be.visible');
        cy.get('#l_overlay > .form-container-white > .form-container-small-header > .h1').should("have.text","Login");
        cy.get('a:contains("Sign up")').should('be.visible');
        cy.get("#l_f_email span").should("have.text", "Email address");
        cy.get("#l_f_email > .field__control").should("have.text", "");
        cy.get("#l_f_pass span").should("have.text", "Password");
        cy.get("#l_f_pass > .field__control").should("have.text", "");
        cy.get('a:contains("Forgot password?")').should('be.visible');
        cy.get("button").should("be.visible").and("contain", "Continue");
        cy.get('.checkbox > span').should('be.visible');
        cy.get('#l_overlay .form-container-white .button-cleared').click();
    })

    it('TC_11.03.04_02 | Education > Menu Item [Position Trading] > Test button [Sign up] in the header', () => {
        const header = new Header();
        const signin = new Signin();
        basePage.open();
        cy.get('div .licLangSw__btn').realHover();
        cy.get('.js-currCountry').click();
        header.getLanguageIcons().realHover()
        header.getEnglishLang();
        header.getNavButtons().realHover();
        header.getEducationMenu().realHover();
        cy.get("[href ='https://capital.com/position-trading']").eq(1).click()
        signin.clickBtnSignIn();
        cy.get('#s_overlay > .form-container-white').should('be.visible');
        cy.get('.signup-form > .form-container-small-header > .h1').should("have.text","Sign up");
        cy.get('.signup-form > .form-container-small-header > p > .l_btn_signup').should('be.visible');
        cy.get("#s_overlay-email span").should("have.text", "Email address");
        signin.getEmail().should("have.text", "");
        cy.get("#s_overlay-pass span").should("have.text", "Password");
        signin.getPassword().should("have.text", "");
        signin.getBtnContinue().should("be.visible").and("contain", "Continue");
        cy.get('.reg-desc > p > a').should("be.visible").and("contain", "Privacy Policy");
        cy.get('#s_overlay .form-container-white .button-cleared').click();
    })

})

