/// <reference types = "cypress" />

import Login from "../../pageObjects/Login"
import testData from '../../fixtures/testData.json';

describe('Capital.com SignUp Smoke tests', () => {

     // Open capital and set res 1280x720
     beforeEach(() => {
        cy.visit('/')
    })

    it('Test SignUp in Capital.com', () => {
        const login = new Login();

        login.visit();

        

        // Check Sign Up
        cy.get('#wphWrap > .js_signup')
        .click();
        
        cy.get('#s_overlay-email > .field__control')
        .type(login)
        .should('have.value', login)
        
        cy.get('#s_overlay-pass > .field__control')
        .type(pass)
        .should('have.value', pass)
        
        cy.get('.signup-form > .form-container-small-content > form > .btn')
        .dblclick()
    })
})