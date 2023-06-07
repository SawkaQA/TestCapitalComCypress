/// <reference types = "cypress" />

import { basePage } from "../../pageObjects/basePage";
import { bannerBtn } from "../../pageObjects/BannerButtons";
import Header from "../../pageObjects/Header";
import Login from "../../pageObjects/SignupLogin/Login";
import Signup from "../../pageObjects/SignupLogin/SignUp"
const header = new Header();
const login = new Login();
const signUp = new Signup();

describe("Education > Menu Item [Position Trading]", () => {
    beforeEach(() => {

        basePage.open(); // open capital.com
        // header.hoverCountryAndLang();
        // header.selectGermanLang(); // select language
        // header.selectAustraliaCountry(); // select country
       

    })

    it("TC_11.03.04_01 | Education > Menu Item [Position Trading] > Test button [Log in] in the header", () => {
        header.getEducationMenu().realHover();
        basePage.getPositionTrading().click();
        cy.get("[href='https://capital.com/de/positionstrading']").eq(1).click({force: true});
        login.clickBtnLogIn();

        login.getFormLogIn().should("be.visible");
        login.getHeaderNameLogIn().should("contain", "Anmelden");
        login.getSignUpLinkForm().should("be.visible")
            .and("include.text", "Registrieren");
        login.getEmail().should("be.visible")
            .and("have.attr", "type", "email")
        login.getPassword().should('be.visible')
            .and("have.attr", "type", "password")
        login.getBtnContinue().should("have.text", "Fortfahren");
        login.getForgotPasswordLink()
            .should("be.visible")
            .and("have.text", "Passwort vergessen?");
        login.getLogMeAfter().should("be.visible");
        login.clickCloseLoginFormBtn();
    })

    it('TC_11.03.04_02 | Education > Menu Item [Position Trading] > Test button [Sign up] in the header', () => {
        header.getEducationMenu().realHover();
        basePage.getPositionTrading().click();
        cy.get("[href='https://capital.com/de/positionstrading']").eq(1).click({force: true});
        signUp.clickBtnSignUp();

        signUp.getFormSignUp().should("be.visible");
        signUp.getHeaderNameSignUp().should('have.text', 'Registrieren');
        signUp.getLoginLinkForm().should('be.visible')
            .and('have.text', 'Anmelden');
        signUp.getEmail().should('be.visible')
            .and('have.attr', 'type', 'email');
        signUp.getPassword().should('be.visible')
            .and('have.attr', 'type', 'password');
        signUp.getBtnContinue()
            .should('be.visible')
            .and("have.text", "Fortfahren");
            cy.get('.signup-form a[href="https://capital.com/de/nutzungsbedingungen-und-richtlinien"]').should('be.visible')
            .and('have.text', 'Datenschutzrichtlinie');
        signUp.clickCloseSignUpFormBtn();
    })

    // it.skip('TC_11.03.04_03 | Education > Menu Item [Position Trading] > Test button [Start Trading] in Main banner', () => {
       
    //     bannerBtn.clickStartTradingBtnOnMainBanner();
        
    //     signUp.getFormSignUp().should("be.visible");
    //     signUp.getHeaderNameSignUp().should('have.text', 'Sign up');
    //     signUp.getLoginLinkForm().should('be.visible')
    //         .and('have.text', 'Login');
    //     signUp.getEmail().should('be.visible')
    //         .and('have.attr', 'type', 'email');
    //     signUp.getPassword().should('be.visible')
    //         .and('have.attr', 'type', 'password');
    //     signUp.getBtnContinue()
    //         .should('be.visible')
    //         .and("have.text", "Continue");
    //     signUp.getPolicyLink().should('be.visible')
    //         .and('have.text', 'Privacy Policy');
    //     signUp.clickCloseSignUpFormBtn();
    // })

    // it('TC_11.03.04_04 | Education > Menu Item [Position Trading] > Test button [Try Demo] in Main banner', () => {
      
    //     bannerBtn.clickTryDemoBtnOnMainBanner();

    //     signUp.getFormSignUp().should("be.visible");
    //     signUp.getHeaderNameSignUp().should('have.text', 'Sign up');
    //     signUp.getLoginLinkForm().should('be.visible')
    //         .and('have.text', 'Login');
    //     signUp.getEmail().should('be.visible')
    //         .and('have.attr', 'type', 'email');
    //     signUp.getPassword().should('be.visible')
    //         .and('have.attr', 'type', 'password');
    //     signUp.getBtnContinue()
    //         .should('be.visible')
    //         .and("have.text", "Continue");
    //     signUp.getPolicyLink().should('be.visible')
    //         .and('have.text', 'Privacy Policy');
    //     signUp.clickCloseSignUpFormBtn();
    // })

    // it.skip('TC_11.03.04_05 | Educations > Menu item [Position Trading] > Test buttons [Trade] on Widget "Most traded"', () => {
    
    //     // bannerBtn.clickTradeBtnOnWidgetMostTraded();
    //     cy.get('a[href="/trading/platform/spotlight/27045129890124996?side=buy"]').click()
        
    //     signUp.getFormSignUp().should("be.visible");
    //     signUp.getHeaderNameSignUp().should('have.text', 'Sign up');
    //     signUp.getLoginLinkForm().should('be.visible')
    //         .and('have.text', 'Login');
    //     signUp.getEmail().should('be.visible')
    //         .and('have.attr', 'type', 'email');
    //     signUp.getPassword().should('be.visible')
    //         .and('have.attr', 'type', 'password');
    //     signUp.getBtnContinue()
    //         .should('be.visible')
    //         .and("have.text", "Continue");
    //     signUp.getPolicyLink().should('be.visible')
    //         .and('have.text', 'Privacy Policy');
    //     signUp.clickCloseSignUpFormBtn();
    //     header.clicMainLogo();
    // })
})
