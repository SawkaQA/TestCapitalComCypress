/// <reference types = "cypress" />

import { basePage } from "../../pageObjects/basePage";
import { bannerBtn } from "../../pageObjects/BannerButtons";
import Header from "../../pageObjects/Header";
import Login from "../../pageObjects/SignupLogin/Login";
import Signup from "../../pageObjects/SignupLogin/SignUp";
import links from "../../fixtures/links.json";
const header = new Header();
const login = new Login();
const signUp = new Signup();

describe("Education > Menu Item [Position Trading]", () => {
    beforeEach(() => {
        basePage.open(); // open capital.com
        
        // for Unregistered user
        cy.clearCookies();
        cy.get('#onetrust-accept-btn-handler').click();
       
        // we can select language and country: 
        header.selectAustraliaCountry();
        header.selectEnglishLang();

        header.getEducationMenu().realHover();
        basePage.clickPositionTrading();
    })

    it("TC_11.03.04_01 | Education > Menu Item [Position Trading] > Test button [Log in] in the header", () => {

        // header.getNavButtons().realHover();
        login.clickBtnLogIn();
        login.getFormLogIn().should("be.visible");
        login.getHeaderNameLogIn().should("contain", "Login");
        login.getSignUpLinkForm().should("be.visible")
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
        login.clickCloseLoginFormBtn();
        
    })

    it('TC_11.03.04_02 | Education > Menu Item [Position Trading] > Test button [Trade] in the header', () => {
       
        signUp.getBtnSignUp().click({force: true});
        signUp.getFormSignUp().should("be.visible");
        signUp.getHeaderNameSignUp().should('have.text', 'Sign up')
        signUp.getLoginLinkForm().should('be.visible')
            .and('have.text', 'Login');
        signUp.getEmail().should('be.visible')
            .and('have.attr', 'type', 'email');
        signUp.getPassword().should('be.visible')
            .and('have.attr', 'type', 'password');
        signUp.getBtnContinue()
            .should('be.visible')
            .and("have.text", "Continue");
        signUp.getPolicyLink().should('be.visible')
            .and('have.text', 'Privacy Policy');
        signUp.clickCloseSignUpFormBtn();
    })

    it('TC_11.03.04_03 | Education > Menu Item [Position Trading] > Test button [Start Trading] in Main banner', () => {

        bannerBtn.clickStartTradingBtnOnMainBanner();
        signUp.getFormSignUp().should("be.visible");
        signUp.getHeaderNameSignUp().should('have.text', 'Sign up');
        signUp.getLoginLinkForm().should('be.visible')
            .and('have.text', 'Login');
        signUp.getEmail().should('be.visible')
            .and('have.attr', 'type', 'email');
        signUp.getPassword().should('be.visible')
            .and('have.attr', 'type', 'password');
        signUp.getBtnContinue()
            .should('be.visible')
            .and("have.text", "Continue");
        signUp.getPolicyLink().should('be.visible')
            .and('have.text', 'Privacy Policy');
        signUp.clickCloseSignUpFormBtn();
    })

    it('TC_11.03.04_04 | Education > Menu Item [Position Trading] > Test button [Try Demo] in Main banner', () => {
        bannerBtn.clickTryDemoBtnOnMainBanner();
        signUp.getFormSignUp().should("be.visible");
        signUp.getHeaderNameSignUp().should('have.text', 'Sign up');
        signUp.getLoginLinkForm().should('be.visible')
            .and('have.text', 'Login');
        signUp.getEmail().should('be.visible')
            .and('have.attr', 'type', 'email');
        signUp.getPassword().should('be.visible')
            .and('have.attr', 'type', 'password');
        signUp.getBtnContinue()
            .should('be.visible')
            .and("have.text", "Continue");
        signUp.getPolicyLink().should('be.visible')
            .and('have.text', 'Privacy Policy');
        signUp.clickCloseSignUpFormBtn();
    })

    it('TC_11.03.04_05 | Educations > Menu item [Position trading] > Test buttons [Trade] on Widget "Most traded"', () => {
        bannerBtn.clickTradeBtnOnWidgetMostTraded();
        signUp.getFormSignUp().should("be.visible");
        signUp.getHeaderNameSignUp().should('have.text', 'Sign up');
        signUp.getLoginLinkForm().should('be.visible')
            .and('have.text', 'Login');
        signUp.getEmail().should('be.visible')
            .and('have.attr', 'type', 'email');
        signUp.getPassword().should('be.visible')
            .and('have.attr', 'type', 'password');
        signUp.getBtnContinue()
            .should('be.visible')
            .and("have.text", "Continue");
        signUp.getPolicyLink().should('be.visible')
            .and('have.text', 'Privacy Policy');
        signUp.clickCloseSignUpFormBtn();
    })

    it.only('TC_11.03.04_06 | Education > Menu Item [Position Trading] > Test button [Download on the App Store] in the block "Sign up and trade smart today"', () => {
        bannerBtn.clickDownloadOnAppStoreBtn();
        cy.get('picture#ember3').should('be.visible');
        cy.get('h1.product-header__title.app-header__title').should('be.visible')
           .and("have.text", '\n          Capital.com: Trading & Finance\n            17+\n        ');
        cy.get('.product-header__identity > .link').should('be.visible');
        cy.visit('https://capital.com/position-trading');
    })

    })

