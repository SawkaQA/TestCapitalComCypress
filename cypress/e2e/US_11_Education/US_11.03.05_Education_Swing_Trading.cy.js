/// <reference types = "cypress" />

import { basePage } from "../../pageObjects/basePage";
import { bannerBtn } from "../../pageObjects/BannerButtons";
import Header from "../../pageObjects/Header";
import Login from "../../pageObjects/SignupLogin/Login";
import Signup from "../../pageObjects/SignupLogin/SignUp"
const header = new Header();
const login = new Login();
const signUp = new Signup();

describe("US_11.03.05 | Educations > Menu item [Swing Trading]", () => {
    beforeEach(() => {
        // we can select language and country
        basePage.open(); // open capital.comß 
    })

    it("TC_11.03.05_01 | Education > Menu Item [Swing Trading] > Test button [Log in] in the header", () => {
        header.getEducationMenu().realHover();
        basePage.clickSwingTradingOnEducationMenu();
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
    });

    it("TC_11.03.05_02 | Education > Menu Item [Swing Trading] > Test button [Sign up] in the header", () => {
        header.getEducationMenu().realHover();
        basePage.clickSwingTradingOnEducationMenu();
        signUp.clickBtnSignUp();

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

    it('TC_11.03.05_03 | Education > Menu Item [Swing Trading] > Test button [Start Trading] in Main banner', () => {
        header.getEducationMenu().realHover();
        basePage.clickSwingTradingOnEducationMenu();
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

    it('TC_11.03.05_04 | Education > Menu Item [Swing Trading] > Test button [Try Demo] in Main banner', () => {
        header.getEducationMenu().realHover();
        basePage.clickSwingTradingOnEducationMenu();
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

    it('TC_11.03.05_05 | Educations > Menu item [Swing trading] > Test buttons [Trade] on Widget "Most traded"', () => {
        header.getEducationMenu().realHover();
        basePage.clickSwingTradingOnEducationMenu();
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
        header.clicMainLogo();
    })
});