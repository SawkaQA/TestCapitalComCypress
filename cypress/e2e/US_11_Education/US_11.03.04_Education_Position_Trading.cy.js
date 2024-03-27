/// <reference types = "cypress" />
// import { selectLanguageUrl, langNameList } from "../../fixtures/language.json"
// import testData from "../../../fixtures/testData.json";
import { basePage } from "../../pageObjects/basePage";
import { bannerBtn } from "../../pageObjects/BannerButtons";
import Header from "../../pageObjects/Header";
import Login from "../../pageObjects/SignupLogin/Login";
import Signup from "../../pageObjects/SignupLogin/SignUp";
import links from "../../fixtures/links.json";
const header = new Header();
const login = new Login();
const signUp = new Signup();

describe.skip("Education > Menu Item [Position Trading]", () => {

    const languages = [
        // /{ langName: "English", langUrl: "a.js-analyticsClick[data-type='nav_lang_en']" },
        { langName: "Nederlands", langUrl: "a.js-analyticsClick[data-type='nav_lang_nl']" }
    ]

    beforeEach(() => {

        basePage.open(); // open capital.com
        cy.clearCookies();
        cy.get('#onetrust-accept-btn-handler').click();
        // header.selectSpainCountry();

    });

    languages.forEach((language) => {
        it(`TC_11.03.04_01_UnReg | Education > Menu Item [Position Trading] > Test button [Log in] in the header of ${language.langName} language`, () => {
            header.hoverCountryAndLang();
            cy.get(language.langUrl).click();
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

        it(`TC_11.03.04_01_UnAuth | Education > Menu Item [Position Trading] > Test button [Log in] in the header of ${language.langName} language`, () => {
            cy.fixture('testData').then((testData) => {
                login.clickBtnLogIn();
                login.enterEmail(testData.email);
                login.enterPassword(testData.password);
                login.clickLogMeAfter();
                login.clickBtnContinue();
                cy.wait(12000);
                cy.go("back");
                cy.wait(10000);
                cy.get('#wg_userarea').click();
                cy.get('.logout-user').click();
            });

            header.hoverCountryAndLang();
            cy.get(language.langUrl).click();
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

        it(`TC_11.03.04_01_Auth | Education > Menu Item [Position Trading] > Test button [Log in] in the header of ${language.langName} language`, () => {
            cy.fixture('testData').then((testData) => {
                login.clickBtnLogIn();
                login.enterEmail(testData.email);
                login.enterPassword(testData.password);
                login.clickLogMeAfter();
                login.clickBtnContinue();
                cy.wait(12000);
                cy.go("back");
                cy.wait(10000);
            });
            header.hoverCountryAndLang();
            cy.get(language.langUrl).click();
            cy.get('span.js-langName').should('include.text', `${language.langName}`);
            header.getEducationMenu().realHover();
            basePage.clickPositionTrading();
            login.getBtnLogIn().should('not.be.visible');
        })

        it(`TC_11.03.04_02_UnReg | Education > Menu Item [Position Trading] > Test button [Trade] in the header of ${language.langName} language`, () => {
            header.hoverCountryAndLang();
            cy.get(language.langUrl).click();
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

        it(`TC_11.03.04_02_UnAuth | Education > Menu Item [Position Trading] > Test button [Trade] in the header of ${language.langName} language`, () => {
            cy.fixture('testData').then((testData) => {
                login.clickBtnLogIn();
                login.enterEmail(testData.email);
                login.enterPassword(testData.password);
                login.clickLogMeAfter();
                login.clickBtnContinue();
                cy.wait(12000);
                cy.go("back");
                cy.wait(10000);
                cy.get('#wg_userarea').click();
                cy.get('.logout-user').click();
            });
            header.hoverCountryAndLang();
            cy.get(language.langUrl).click();
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

        it(`TC_11.03.04_02_Auth | Education > Menu Item [Position Trading] > Test button [Trade] in the header of ${language.langName} language`, () => {
            cy.fixture('testData').then((testData) => {
                login.clickBtnLogIn();
                login.enterEmail(testData.email);
                login.enterPassword(testData.password);
                login.clickLogMeAfter();
                login.clickBtnContinue();
                cy.wait(12000);
                cy.go("back");
                cy.wait(10000);
            });
            header.hoverCountryAndLang();
            cy.get(language.langUrl).click();
            cy.get('span.js-langName').should('include.text', `${language.langName}`);
            header.getEducationMenu().realHover();
            basePage.clickPositionTrading();
            signUp.getBtnSignUp().should('not.be.visible');
        })

        it(`TC_11.03.04_03_UnReg | Education > Menu Item [Position Trading] > Test button [Start Trading] in Main banner of ${language.langName} language`, () => {
            header.hoverCountryAndLang();
            cy.get(language.langUrl).click();
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

        it(`TC_11.03.04_03_UnAuth | Education > Menu Item [Position Trading] > Test button [Start Trading] in Main banner of ${language.langName} language`, () => {
            cy.fixture('testData').then((testData) => {
                login.clickBtnLogIn();
                login.enterEmail(testData.email);
                login.enterPassword(testData.password);
                login.clickLogMeAfter();
                login.clickBtnContinue();
                cy.wait(12000);
                cy.go("back");
                cy.wait(10000);
                cy.get('#wg_userarea').click();
                cy.get('.logout-user').click();
            });
            header.hoverCountryAndLang();
            cy.get(language.langUrl).click();
            cy.get('span.js-langName').should('include.text', `${language.langName}`);
            header.getEducationMenu().realHover();
            basePage.clickPositionTrading();
            bannerBtn.clickStartTradingBtnOnMainBanner();
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

        it(`TC_11.03.04_03_Auth | Education > Menu Item [Position Trading] > Test button [Start Trading] in Main banner of ${language.langName} language`, () => {
            cy.fixture('testData').then((testData) => {
                login.clickBtnLogIn();
                login.enterEmail(testData.email);
                login.enterPassword(testData.password);
                login.clickLogMeAfter();
                login.clickBtnContinue();
                cy.wait(12000);
                cy.go("back");
                cy.wait(10000);
            });
            header.hoverCountryAndLang();
            cy.get(language.langUrl).click();
            cy.get('span.js-langName').should('include.text', `${language.langName}`);
            header.getEducationMenu().realHover();
            basePage.clickPositionTrading();
            bannerBtn.clickStartTradingBtnOnMainBanner();
            cy.url().should("eq", links.exploreWebPlatformLink);
        });

        it(`TC_11.03.04_04_UnReg | Education > Menu Item [Position Trading] > Test button [Try Demo] in Main banner of ${language.langName} language`, () => {
            header.hoverCountryAndLang();
            cy.get(language.langUrl).click();
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

        it(`TC_11.03.04_04_UnAuth | Education > Menu Item [Position Trading] > Test button [Try Demo] in Main banner of ${language.langName} language`, () => {
            cy.fixture('testData').then((testData) => {
                login.clickBtnLogIn();
                login.enterEmail(testData.email);
                login.enterPassword(testData.password);
                login.clickLogMeAfter();
                login.clickBtnContinue();
                cy.wait(12000);
                cy.go("back");
                cy.wait(10000);
                cy.get('#wg_userarea').click();
                cy.get('.logout-user').click();
            });
            header.hoverCountryAndLang();
            cy.get(language.langUrl).click();
            cy.get('span.js-langName').should('include.text', `${language.langName}`);
            header.getEducationMenu().realHover();
            basePage.clickPositionTrading();
            bannerBtn.clickTryDemoBtnOnMainBanner();
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

        it(`TC_11.03.04_04_Auth | Education > Menu Item [Position Trading] > Test button [Try Demo] in Main banner of ${language.langName} language`, () => {
            cy.fixture('testData').then((testData) => {
                login.clickBtnLogIn();
                login.enterEmail(testData.email);
                login.enterPassword(testData.password);
                login.clickLogMeAfter();
                login.clickBtnContinue();
                cy.wait(12000);
                cy.go("back");
                cy.wait(10000);
            });
            header.hoverCountryAndLang();
            cy.get(language.langUrl).click();
            cy.get('span.js-langName').should('include.text', `${language.langName}`);
            header.getEducationMenu().realHover();
            basePage.clickPositionTrading();
            bannerBtn.clickTryDemoBtnOnMainBanner();
            cy.url().should("eq", links.exploreWebPlatformLink);
        });

        it(`TC_11.03.04_05_UnReg | Educations > Menu item [Position trading] > Test buttons [Trade] on Widget "Most traded" of ${language.langName} language`, () => {
            header.hoverCountryAndLang();
            cy.get(language.langUrl).click();
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

        it(`TC_11.03.04_05_UnAuth | Educations > Menu item [Position trading] > Test buttons [Trade] on Widget "Most traded" of ${language.langName} language`, () => {
            cy.fixture('testData').then((testData) => {
                login.clickBtnLogIn();
                login.enterEmail(testData.email);
                login.enterPassword(testData.password);
                login.clickLogMeAfter();
                login.clickBtnContinue();
                cy.wait(12000);
                cy.go("back");
                cy.wait(10000);
                cy.get('#wg_userarea').click();
                cy.get('.logout-user').click();
            });
            header.hoverCountryAndLang();
            cy.get(language.langUrl).click();
            cy.get('span.js-langName').should('include.text', `${language.langName}`);
            header.getEducationMenu().realHover();
            basePage.clickPositionTrading();
            bannerBtn.clickTradeBtnOnWidgetMostTraded();
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

        it(`TC_11.03.04_05_Auth | Educations > Menu item [Position trading] > Test buttons [Trade] on Widget "Most traded" of ${language.langName} language`, () => {
            cy.fixture('testData').then((testData) => {
                login.clickBtnLogIn();
                login.enterEmail(testData.email);
                login.enterPassword(testData.password);
                login.clickLogMeAfter();
                login.clickBtnContinue();
                cy.wait(12000);
                cy.go("back");
                cy.wait(10000);
            });
            header.hoverCountryAndLang();
            cy.get(language.langUrl).click();
            cy.get('span.js-langName').should('include.text', `${language.langName}`);
            header.getEducationMenu().realHover();
            basePage.clickPositionTrading();
            bannerBtn.clickTradeBtnOnWidgetMostTraded();
            cy.url().should("eq", links.exploreWebPlatformLink);
        });

        it(`TC_11.03.04_06_UnReg | Education > Menu Item [Position Trading] > Test button [Download on the App Store] in the block "Sign up and trade smart today"  of ${language.langName} language`, () => {
            header.hoverCountryAndLang();
            cy.get(language.langUrl).click();
            cy.get('span.js-langName').should('include.text', `${language.langName}`);
            header.getEducationMenu().realHover();
            basePage.clickPositionTrading();
            bannerBtn.clickDownloadOnAppStoreBtn();
            cy.url().should('eq', links.downloadAppStoreLink)
            cy.get('picture#ember3')
                .should('be.visible');
            cy.get('h1.product-header__title.app-header__title')
                .should('be.visible')
                .and('contain', 'Capital.com: Trading & Finance');
            cy.get('.product-header__identity > .link')
                .should('be.visible');
            cy.go("back");
        });

        it(`TC_11.03.04_06_UnAuth | Education > Menu Item [Position Trading] > Test button [Download on the App Store] in the block "Sign up and trade smart today"  of ${language.langName} language`, () => {
            cy.fixture('testData').then((testData) => {
                login.clickBtnLogIn();
                login.enterEmail(testData.email);
                login.enterPassword(testData.password);
                login.clickLogMeAfter();
                login.clickBtnContinue();
                cy.wait(12000);
                cy.go("back");
                cy.wait(10000);
                cy.get('#wg_userarea').click();
                cy.get('.logout-user').click();
            });
            header.hoverCountryAndLang();
            cy.get(language.langUrl).click();
            cy.get('span.js-langName').should('include.text', `${language.langName}`);
            header.getEducationMenu().realHover();
            basePage.clickPositionTrading();
            bannerBtn.clickDownloadOnAppStoreBtn();
            cy.url().should('eq', links.downloadAppStoreLink)
            cy.get('picture#ember3')
                .should('be.visible');
            cy.get('h1.product-header__title.app-header__title')
                .should('be.visible')
                .and('contain', 'Capital.com: Trading & Finance');
            cy.get('.product-header__identity > .link')
                .should('be.visible');
            cy.go("back");
        });

        it(`TC_11.03.04_06_Auth | Education > Menu Item [Position Trading] > Test button [Download on the App Store] in the block "Sign up and trade smart today"  of ${language.langName} language`, () => {
            cy.fixture('testData').then((testData) => {
                login.clickBtnLogIn();
                login.enterEmail(testData.email);
                login.enterPassword(testData.password);
                login.clickLogMeAfter();
                login.clickBtnContinue();
                cy.wait(12000);
                cy.go("back");
                cy.wait(10000);

            });
            header.hoverCountryAndLang();
            cy.get(language.langUrl).click();
            cy.get('span.js-langName').should('include.text', `${language.langName}`);
            header.getEducationMenu().realHover();
            basePage.clickPositionTrading();
            bannerBtn.clickDownloadOnAppStoreBtn();
            cy.url().should('eq', links.downloadAppStoreLink)
            cy.get('picture#ember3')
                .should('be.visible');
            cy.get('h1.product-header__title.app-header__title')
                .should('be.visible')
                .and('contain', 'Capital.com: Trading & Finance');
            cy.get('.product-header__identity > .link')
                .should('be.visible');
            cy.go("back");
        });

        it(`TC_11.03.04_07_UnReg | Education > Menu Item [Position Trading] > Test button [Get it on Google Play] in the block "Sign up and trade smart today" of ${language.langName} language`, () => {
            header.hoverCountryAndLang();
            cy.get(language.langUrl).click();
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
            cy.go("back");
        });
        it(`TC_11.03.04_07_UnAuth | Education > Menu Item [Position Trading] > Test button [Get it on Google Play] in the block "Sign up and trade smart today" of ${language.langName} language`, () => {
            cy.fixture('testData').then((testData) => {
                login.clickBtnLogIn();
                login.enterEmail(testData.email);
                login.enterPassword(testData.password);
                login.clickLogMeAfter();
                login.clickBtnContinue();
                cy.wait(12000);
                cy.go("back");
                cy.wait(10000);
                cy.get('#wg_userarea').click();
                cy.get('.logout-user').click();
            });
            header.hoverCountryAndLang();
            cy.get(language.langUrl).click();
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
            cy.go("back");
        });

        it(`TC_11.03.04_07_Auth | Education > Menu Item [Position Trading] > Test button [Get it on Google Play] in the block "Sign up and trade smart today" of ${language.langName} language`, () => {
            cy.fixture('testData').then((testData) => {
                login.clickBtnLogIn();
                login.enterEmail(testData.email);
                login.enterPassword(testData.password);
                login.clickLogMeAfter();
                login.clickBtnContinue();
                cy.wait(12000);
                cy.go("back");
                cy.wait(10000);
            });
            header.hoverCountryAndLang();
            cy.get(language.langUrl).click();
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
            cy.go("back");
        });

        it(`TC_11.03.04_08_UnReg | Education > Menu Item [Position Trading] > Test button [Explore Web Platform] in the block "Sign up and trade smart today" of ${language.langName} language`, () => {
            header.hoverCountryAndLang();
            cy.get(language.langUrl).click({ force: true });
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
            cy.go("back");
        });

        it(`TC_11.03.04_08_UnAuth | Education > Menu Item [Position Trading] > Test button [Explore Web Platform] in the block "Sign up and trade smart today" of ${language.langName} language`, () => {
            cy.fixture('testData').then((testData) => {
                login.clickBtnLogIn();
                login.enterEmail(testData.email);
                login.enterPassword(testData.password);
                login.clickLogMeAfter();
                login.clickBtnContinue();
                cy.wait(12000);
                cy.go("back");
                cy.wait(10000);
                cy.get('#wg_userarea').click();
                cy.get('.logout-user').click();
            });
            header.hoverCountryAndLang();
            cy.get(language.langUrl).click();
            cy.get('span.js-langName').should('include.text', `${language.langName}`);
            header.getEducationMenu().realHover();
            basePage.clickPositionTrading();
            bannerBtn.clickExploreWebPlatformLink();
            cy.url().should('eq', links.exploreWebPlatformLink);
            login.getFormLoginOnPlatform().should('be.visible')
            login.getHeaderNameLoginOnPlatform().should('have.text', 'Login')
            login.getEmailOnPlatform().should('be.visible')
                .and('have.attr', 'type', 'email')
            login.getPasswordOnPlatform()
                .should('be.visible')
                .and('have.attr', 'type', 'password');
            login.getBtnContinueOnPlatform()
                .should('be.visible')
                .and("have.text", ' Continue ');
            login.getSignUpLinkFormOnPlatform()
                .should('be.visible')
                .and('have.text', 'Sign Up');
            cy.go("back");
        });

        it(`TC_11.03.04_08_Auth | Education > Menu Item [Position Trading] > Test button [Explore Web Platform] in the block "Sign up and trade smart today" of ${language.langName} language`, () => {
            cy.fixture('testData').then((testData) => {
                login.clickBtnLogIn();
                login.enterEmail(testData.email);
                login.enterPassword(testData.password);
                login.clickLogMeAfter();
                login.clickBtnContinue();
                cy.wait(12000);
                cy.go("back");
                cy.wait(10000);
            });
            header.hoverCountryAndLang();
            cy.get(language.langUrl).click();
            cy.get('span.js-langName').should('include.text', `${language.langName}`);
            header.getEducationMenu().realHover();
            basePage.clickPositionTrading();
            bannerBtn.clickExploreWebPlatformLink();
            cy.url().should("eq", links.exploreWebPlatformLink);
        });

        it(`TC_11.03.05_09_UnReg | Education > Menu Item [Position Trading] > Test button [Create & verify your account] in the block "Still looking for a broker you can trust?" of ${language.langName} language`, () => {
            header.hoverCountryAndLang();
            cy.get(language.langUrl).click();
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
            header.clickMainLogo();
        });

        it(`TC_11.03.05_09_UnAuth | Education > Menu Item [Position Trading] > Test button [Create & verify your account] in the block "Still looking for a broker you can trust?" of ${language.langName} language`, () => {
            cy.fixture('testData').then((testData) => {
                login.clickBtnLogIn();
                login.enterEmail(testData.email);
                login.enterPassword(testData.password);
                login.clickLogMeAfter();
                login.clickBtnContinue();
                cy.wait(12000);
                cy.go("back");
                cy.wait(10000);
                cy.get('#wg_userarea').click();
                cy.get('.logout-user').click();
            });
            header.hoverCountryAndLang();
            cy.get(language.langUrl).click();
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
            header.clickMainLogo();
        });

        it(`TC_11.03.05_09_Auth | Education > Menu Item [Position Trading] > Test button [Create & verify your account] in the block "Still looking for a broker you can trust?" of ${language.langName} language`, () => {
            cy.fixture('testData').then((testData) => {
                login.clickBtnLogIn();
                login.enterEmail(testData.email);
                login.enterPassword(testData.password);
                login.clickLogMeAfter();
                login.clickBtnContinue();
                cy.wait(12000);
                cy.go("back");
                cy.wait(10000);
            });
            header.hoverCountryAndLang();
            cy.get(language.langUrl).click();
            cy.get('span.js-langName').should('include.text', `${language.langName}`);
            header.getEducationMenu().realHover();
            basePage.clickPositionTrading();
            bannerBtn.clickCreateAndVerifyBtn();
            cy.url().should("eq", links.exploreWebPlatformLink);
            cy.go("back");
        });
    });
})



