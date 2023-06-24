/// <reference types = "cypress" />
// import { selectLanguageUrl, langNameList } from "../../fixtures/language.json"
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
    const languages = [
        { langName: "Español", langUrl: "[href='https://capital.com/es']" },
        { langName: "English", langUrl: "[href='https://capital.com/']" }
    ]

    beforeEach(() => {

        basePage.open(); // open capital.com

        // for Unregistered user
        cy.clearCookies();
        cy.get('#onetrust-accept-btn-handler').click();

        // we can select language and country: 
        header.selectAustraliaCountry();

    });

    languages.forEach((language) => {

        it(`TC_11.03.04_01 | Education > Menu Item [Position Trading] > Test button [Log in] in the header of ${language.langName} language`, () => {
            cy.get('div .licLangSw__btn').as('languageList');
            cy.get('@languageList').click();
            cy.get(language.langUrl).eq(1).click({ force: true });
            cy.get('span.js-langName').should('include.text', `${language.langName}`);

            header.getEducationMenu().realHover();
            basePage.clickPositionTrading();
            login.clickBtnLogIn();
            login.getFormLogIn()
                .should("be.visible");
            login.getHeaderNameLogIn()
                .should("contain", "Login");
            login.getSignUpLinkForm()
                .should("be.visible")
                .and("include.text", "Sign up");
            login.getEmail()
                .should("be.visible")
                .and("have.attr", "type", "email")
            login.getPassword()
                .should('be.visible')
                .and("have.attr", "type", "password")
            login.getBtnContinue()
                .should("have.text", "Continue");
            login.getForgotPasswordLink()
                .should("be.visible")
                .and("have.text", "Forgot password?");
            login.getLogMeAfter()
                .should("be.visible");
            login.clickCloseLoginFormBtn();
        });

        it(`TC_11.03.04_02 | Education > Menu Item [Position Trading] > Test button [Trade] in the header of ${language.langName} language`, () => {
            cy.get('div .licLangSw__btn').as('languageList');
            cy.get('@languageList').click();
            cy.get(language.langUrl).eq(1).click({ force: true });
            cy.get('span.js-langName').should('include.text', `${language.langName}`);

            header.getEducationMenu().realHover();
            basePage.clickPositionTrading();
            signUp.getBtnSignUp().click();
            signUp.getFormSignUp()
                .should("be.visible");
            signUp.getHeaderNameSignUp()
                .should('have.text', 'Sign up')
            signUp.getLoginLinkForm()
                .should('be.visible')
                .and('have.text', 'Login');
            signUp.getEmail()
                .should('be.visible')
                .and('have.attr', 'type', 'email');
            signUp.getPassword()
                .should('be.visible')
                .and('have.attr', 'type', 'password');
            signUp.getBtnContinue()
                .should('be.visible')
                .and("have.text", "Continue");
            signUp.getPolicyLink()
                .should('be.visible')
                .and('have.text', 'Privacy Policy');
            signUp.clickCloseSignUpFormBtn();
        });

        it(`TC_11.03.04_03 | Education > Menu Item [Position Trading] > Test button [Start Trading] in Main banner of ${language.langName} language`, () => {
            cy.get('div .licLangSw__btn').as('languageList');
            cy.get('@languageList').click();
            cy.get(language.langUrl).eq(1).click({ force: true });
            cy.get('span.js-langName').should('include.text', `${language.langName}`);

            header.getEducationMenu().realHover();
            basePage.clickPositionTrading();
            bannerBtn.clickStartTradingBtnOnMainBanner();
            signUp.getFormSignUp()
                .should("be.visible");
            signUp.getHeaderNameSignUp()
                .should('have.text', 'Sign up');
            signUp.getLoginLinkForm()
                .should('be.visible')
                .and('have.text', 'Login');
            signUp.getEmail()
                .should('be.visible')
                .and('have.attr', 'type', 'email');
            signUp.getPassword()
                .should('be.visible')
                .and('have.attr', 'type', 'password');
            signUp.getBtnContinue()
                .should('be.visible')
                .and("have.text", "Continue");
            signUp.getPolicyLink()
                .should('be.visible')
                .and('have.text', 'Privacy Policy');
            signUp.clickCloseSignUpFormBtn();
        });

        it(`TC_11.03.04_04 | Education > Menu Item [Position Trading] > Test button [Try Demo] in Main banner of ${language.langName} language`, () => {
            cy.get('div .licLangSw__btn').as('languageList');
            cy.get('@languageList').click();
            cy.get(language.langUrl).eq(1).click({ force: true });
            cy.get('span.js-langName').should('include.text', `${language.langName}`);

            header.getEducationMenu().realHover();
            basePage.clickPositionTrading();
            bannerBtn.clickTryDemoBtnOnMainBanner();
            signUp.getFormSignUp()
                .should("be.visible");
            signUp.getHeaderNameSignUp()
                .should('have.text', 'Sign up');
            signUp.getLoginLinkForm()
                .should('be.visible')
                .and('have.text', 'Login');
            signUp.getEmail()
                .should('be.visible')
                .and('have.attr', 'type', 'email');
            signUp.getPassword()
                .should('be.visible')
                .and('have.attr', 'type', 'password');
            signUp.getBtnContinue()
                .should('be.visible')
                .and("have.text", "Continue");
            signUp.getPolicyLink()
                .should('be.visible')
                .and('have.text', 'Privacy Policy');
            signUp.clickCloseSignUpFormBtn();
        });

        it(`TC_11.03.04_05 | Educations > Menu item [Position trading] > Test buttons [Trade] on Widget "Most traded" of ${language.langName} language`, () => {
            cy.get('div .licLangSw__btn').as('languageList');
            cy.get('@languageList').click();
            cy.get(language.langUrl).eq(1).click({ force: true });
            cy.get('span.js-langName').should('include.text', `${language.langName}`);

            header.getEducationMenu().realHover();
            basePage.clickPositionTrading();
            bannerBtn.clickTradeBtnOnWidgetMostTraded();
            signUp.getFormSignUp()
                .should("be.visible");
            signUp.getHeaderNameSignUp()
                .should('have.text', 'Sign up');
            signUp.getLoginLinkForm()
                .should('be.visible')
                .and('have.text', 'Login');
            signUp.getEmail()
                .should('be.visible')
                .and('have.attr', 'type', 'email');
            signUp.getPassword()
                .should('be.visible')
                .and('have.attr', 'type', 'password');
            signUp.getBtnContinue()
                .should('be.visible')
                .and("have.text", "Continue");
            signUp.getPolicyLink()
                .should('be.visible')
                .and('have.text', 'Privacy Policy');
            signUp.clickCloseSignUpFormBtn();
        });

        it(`TC_11.03.04_06 | Education > Menu Item [Position Trading] > Test button [Download on the App Store] in the block "Sign up and trade smart today"  of ${language.langName} language`, () => {
            cy.get('div .licLangSw__btn').as('languageList');
            cy.get('@languageList').click();
            cy.get(language.langUrl).eq(1).click({ force: true });
            cy.get('span.js-langName').should('include.text', `${language.langName}`);

            header.getEducationMenu().realHover();
            basePage.clickPositionTrading();
            bannerBtn.clickDownloadOnAppStoreBtn();
            cy.url().should('eq', links.downloadAppStoreLink)
            cy.get('picture#ember3')
                .should('be.visible');
            cy.get('h1.product-header__title.app-header__title')
                .should('be.visible')
                .and("have.text", '\n          Capital.com: Trading & Finance\n            17+\n        ');
            cy.get('.product-header__identity > .link')
                .should('be.visible');
            cy.visit('https://capital.com/position-trading');
        });

        it(`TC_11.03.04_07 | Education > Menu Item [Position Trading] > Test button [Get it on Google Play] in the block "Sign up and trade smart today" of ${language.langName} language`, () => {
            cy.get('div .licLangSw__btn').as('languageList');
            cy.get('@languageList').click();
            cy.get(language.langUrl).eq(1).click({ force: true });
            cy.get('span.js-langName').should('include.text', `${language.langName}`);

            header.getEducationMenu().realHover();
            basePage.clickPositionTrading();
            bannerBtn.clickDownloadOnGooglePlayLink();
            cy.url().should('eq', links.downloadGooglePlayLink);
            cy.get('a.f0UV3d')
                .should('be.visible');
            cy.get('h1.Fd93Bb.F5UCq.p5VxAd')
                .should('be.visible')
                .and("have.text", 'Online Broker - Capital.com');
            cy.get('div.Vbfug.auoIOc')
                .should('be.visible');
            cy.visit('https://capital.com/position-trading');
        });

        it(`TC_11.03.04_08 | Education > Menu Item [Position Trading] > Test button [Explore Web Platform] in the block "Sign up and trade smart today" of ${language.langName} language`, () => {
            cy.get('div .licLangSw__btn').as('languageList');
            cy.get('@languageList').click();
            cy.get(language.langUrl).eq(1).click({ force: true });
            cy.get('span.js-langName').should('include.text', `${language.langName}`);

            header.getEducationMenu().realHover();
            basePage.clickPositionTrading();
            bannerBtn.clickExploreWebPlatformLink();
            cy.url().should('eq', links.exploreWebPlatformLink);
            signUp.getFormSignUpOnPaltform()
                .should("be.visible")
            signUp.getHeaderNameSignUpOnPlatform()
                .should('have.text', 'Sign up');
            signUp.getEmailOnPlatform()
                .should('be.visible')
                .and('have.attr', 'type', 'email');
            signUp.getPasswordOnPlatform()
                .should('be.visible')
                .and('have.attr', 'type', 'password');
            signUp.getCheckBoxBySigningUp()
                .should('be.visible');
            signUp.getPolicyLinkOnPlatform()
                .should('be.visible')
                .and('have.text', 'Privacy policy');
            signUp.getBtnContinueOnPlatform()
                .should('be.visible')
                .and("have.text", ' Continue ');
            signUp.getLoginLinkFormOnPlatform()
                .should('be.visible')
                .and('have.text', 'Login');
            cy.visit('https://capital.com/position-trading')
        });

        it(`TC_11.03.05_09 | Education > Menu Item [Position Trading] > Test button [Create & verify your account] in the block "Still looking for a broker you can trust?" of ${language.langName} language`, () => {
            cy.get('div .licLangSw__btn').as('languageList');
            cy.get('@languageList').click();
            cy.get(language.langUrl).eq(1).click({ force: true });
            cy.get('span.js-langName').should('include.text', `${language.langName}`);

            header.getEducationMenu().realHover();
            basePage.clickPositionTrading();
            bannerBtn.clickCreateAndVerifyBtn();
            signUp.getFormSignUp()
                .should("be.visible");
            signUp.getHeaderNameSignUp()
                .should("have.text", "Sign up");
            signUp.getLoginLinkForm()
                .should("be.visible")
                .and("have.text", "Login");
            signUp.getEmail()
                .should("be.visible")
                .and("have.attr", "type", "email");
            signUp.getPassword()
                .should("be.visible")
                .and("have.attr", "type", "password");
            signUp.getBtnContinue()
                .should("be.visible")
                .and("have.text", "Continue");
            signUp.getPolicyLink()
                .should("be.visible")
                .and("have.text", "Privacy Policy");
            signUp.clickCloseSignUpFormBtn();
            header.clicMainLogo();
        });
    });
})
