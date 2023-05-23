/// <reference types = "cypress" />

describe('Capital.com Smoke test', () => {

    it('Test SignUp Form', () => {
        
        // Open capital and set res 1280x720
        beforeEach(() => {
            cy.visit('/')
        })

        // Check Sign Up
        cy.title().should('eq', 'Online Trading with Smart Investment App | Capital.com')
        cy.get('.listChecked__btn > .btn')
        .should('contain', 'Start trading')
        .click()

        cy.get('.signup-form')
        .should('be.visible')

        cy.get('.signup-form > .form-container-small-header > .h1')
        .should('have.text', 'Sign up')

        cy.get('#s_overlay-email span')
        .should('have.text', 'Email address')

        cy.get('#s_overlay-email > .field__control')
        .should('have.text', '')

        cy.get('#s_overlay-pass span')
        .should('have.text', 'Password')

        cy.get('#s_overlay-pass > .field__control')
        .should('have.text', '')

        cy.get('.signup-form > .form-container-small-content > form > .btn')
        .should('be.visible')
        .and('contain', 'Continue')

        // Check button [Login]
        cy.wait(2000);
        cy.get('.signup-form > .form-container-small-header > p > .l_btn_signup')
        .click()
        cy.get('#l_overlay > .form-container-white > .form-container-small-header > .h1')
        .should('have.text', 'Login')
        cy.get('#l_f_email span')
        .should('have.text', 'Email address')
        cy.get('#l_f_email > .field__control')
        .should('have.text', '')
        cy.get('#l_f_pass span')
        .should('have.text', 'Password')
        cy.get('#l_f_pass > .field__control')
        .should('have.text', '')
        cy.get('button')
        .should('be.visible')
        .and('contain', 'Continue')

        // Check checkbox "Log me out after 7 days"
        cy.get('input[name=l_rem]')
        .closest('label')
        .click()
        cy.wait(1500)
        cy.get('input[name=l_rem]')
        .closest('label')
        .click()
      
         // Check button "Forgot password?"
         cy.get('.l_btn_forgot')
         .should('have.text', 'Forgot password?')
         .click()
         cy.get('#f_overlay > .form-container-white > .form-container-small-header > .h1')
         .should('have.text', 'Forgot password')
         cy.get('#f_f_email > .field__control')
         .should('have.text', '')
         cy.get('#f_f_email span')
         .should('have.text', 'Email address')
         cy.get('[class$=f_btn]')
        .should('have.text', 'Send reset email')
    })
})