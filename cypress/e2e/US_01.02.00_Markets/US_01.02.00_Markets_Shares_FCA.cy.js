/// <reference types = "cypress" />

import BasePageFCA from "../../pageObjects/BasePageFCA";
import HeaderFCA from "../../pageObjects/HeaderFCA";
import { MarkertTradingBlockSignUpButtonFCA, MarkertTradingBlockTryDemoButtonFCA } from "../../pageObjects/MarkertsButtonsFCA";
import SignUpFCA from "../../pageObjects/SignupLogin/SignUpFCA";
import LoginFCA from "../../pageObjects/SignupLogin/LoginFCA ";
import testData from "../../fixtures/testData.json";
import tradingPlatformData from "../../fixtures/tradingPlatformData.json";
import TradingPlatformPage from "../../pageObjects/TradingPlatformPage";


describe('JS/US_01.02!00 | Menu [Markets] > Menu item [Shares], FCA license', () => {

  const basePage = new BasePageFCA;
  const header = new HeaderFCA;
  const tradingSignUpButton = new MarkertTradingBlockSignUpButtonFCA;
  const tradingTryDemoButton = new MarkertTradingBlockTryDemoButtonFCA;
  const signUp = new SignUpFCA;
  const login = new LoginFCA;
  const tradingPlatform = new TradingPlatformPage;

  context('Unregistered user', () => {
    beforeEach(() => {
      basePage.openFcaUrl();
      basePage.openBannerCookies();
      basePage.clickBtnAcceptCookies();
      header.hoverMarketsNenu();
      header.openSharesMarketsNenu();
    });

    it('JS/AT_01.02!00_101_UnReg | Markets > Menu item [Shares] > Click button [Sign up ] in the block "Shares trading"', () => {
      tradingSignUpButton.clickMarkertTradingBlockSignUpButton();
      signUp.openFormSignUp();

      signUp.getHeadingForm()
        .should("be.visible")
        .and('have.text', 'Sign up');
      signUp.getLoginLinkForm()
        .should("be.visible")
        .and('have.text', 'Login');

      signUp.closeFormSignUp();
    });

    it('JS/TC_01.02.00_102_UnReg | Markets > Menu item [Shares] > Click button [Try Demo ]  in the block "Shares trading"', () => {
      tradingTryDemoButton.clickMarkertTradingBlockTryDemoButton();
      signUp.openFormSignUp();
  
      signUp.getHeadingForm()
        .should("be.visible")
        .and('have.text', 'Sign up');
      signUp.getLoginLinkForm()
        .should("be.visible")
        .and('have.text', 'Login');
  
      signUp.closeFormSignUp();
    });

  });


  context('Unauthorized user', () => {
    beforeEach(() => {
      basePage.openFcaUrl();
      basePage.openBannerCookies();
      basePage.clickBtnAcceptCookies();
      login.clickHeaderBtnLogin();
      login.typeEmail(testData.email);
      login.typePassword(testData.password);
      login.clickBtnContinue();
      tradingPlatform.verifyVisitTraidingPlatform();
      tradingPlatform.clicktBtnAccountInfo();
      tradingPlatform.clickAccountLogout();
      basePage.openFcaUrl();
      header.hoverMarketsNenu();
      header.openSharesMarketsNenu();
    });

    it('JS/AT_01.02!00_101_UnAuth | Markets > Menu item [Shares] > Click button [Sign up ] in the block "Shares trading"', () => {
      tradingSignUpButton.clickMarkertTradingBlockSignUpButton();
      signUp.openFormSignUp();

      signUp.getHeadingForm()
        .should("be.visible")
        .and('have.text', 'Sign up');
      signUp.getLoginLinkForm()
        .should("be.visible")
        .and('have.text', 'Login');

      signUp.closeFormSignUp();
    });

    it('JS/TC_01.02.00_102_UnAuth | Markets > Menu item [Shares] > Click button [Try Demo ]  in the block "Shares trading"', () => {

    });

  });
  

  context('Authorized  user', () => {
    beforeEach(() => {
      basePage.openFcaUrl();
      basePage.openBannerCookies();
      basePage.clickBtnAcceptCookies();
      login.clickHeaderBtnLogin();
      login.typeEmail(testData.email);
      login.typePassword(testData.password);
      login.clickBtnContinue();
      tradingPlatform.verifyVisitTraidingPlatform();
      cy.go("back");
      login.verifyAccountLogin();
      header.hoverMarketsNenu();
      header.openSharesMarketsNenu();
    });

    it('JS/AT_01.02!00_101_Auth | Markets > Menu item [Shares] > Click button [Sign up ] in the block "Shares trading"', () => {
      tradingSignUpButton.clickMarkertTradingBlockSignUpButton();
      tradingPlatform.verifyVisitTraidingPlatform();
      tradingPlatform.getLogo().should('be.visible');
      cy.title().should('eq', tradingPlatformData.tradingPlatformTitle);
    });

    it('JS/TC_01.02.00_102_Auth | Markets > Menu item [Shares] > Click button [Try Demo ]  in the block "Shares trading"', () => {

    });

    
  });

  

})