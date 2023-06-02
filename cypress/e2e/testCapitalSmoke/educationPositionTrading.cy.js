/// <reference types = "cypress" />

import Login from "../../pageObjects/SignupLogin/Login"
import Header from "../../pageObjects/Header/Header"

describe('Education > Menu Item [Position Trading]', () => {   

    it('TC_11.03.04_01 | Education > Menu Item [Position Trading] > Test button [Log in] in the header', () => {
        const login = new Login();
        const header = new Header();
        login.visit();
        cy.get('div .licLangSw__btn').realHover();
        cy.get('.js-currCountry').click();

        // cy.get(".licLangSw__countries [href='https://capital.com/?country=au']").click();
        // cy.get('.licLangSw__btn').realHover();

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
    
        // Не знаю, как последним шагом закрыть окно login, перепробовала уже много вариантов

        // cy.get('button button-cleared small l_cancel').click();
        // cy.get('button').click().and("contain", "Cancel");
        // cy.get("#wg_loginBtn").closest('button button-cleared small l_cancel');


    })
})

