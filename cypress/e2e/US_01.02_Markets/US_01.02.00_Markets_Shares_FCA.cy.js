/// <reference types = "cypress" />

import BasePageFCA from "../../pageObjects/BasePageFCA";
import HeaderFCA from "../../pageObjects/HeaderFCA";
import {
  MarkertTradingBlockSignUpButtonFCA,
  MarkertTradingBlockTryDemoButtonFCA,
  MarkertDiscoverBlockCreateAccountButtonFCA,
  MarkertDiscoverBlockTryDemoButtonFCA
} from "../../pageObjects/MarkertsButtonsFCA";
import SignUpFCA from "../../pageObjects/SignupLogin/SignUpFCA";
import LoginFCA from "../../pageObjects/SignupLogin/LoginFCA ";
import testData from "../../fixtures/testData.json";
import tradingPlatformData from "../../fixtures/tradingPlatformData.json";
import TradingPlatformPage from "../../pageObjects/TradingPlatformPage";
import { isOpenedFormSignUp, checkOutSignUpForm, isOpenedFormLogin, checkOutLoginForm, isOpenedTradingPlatform, verifyVisitTraidingPlatform, verifyVisitTraidingPlatformDemoMode } from "../../support/helpers";

describe("JS/US_01.02!00 | Menu [Markets] > Menu item [Shares], FCA license", () => {
  const basePage = new BasePageFCA();
  const header = new HeaderFCA();
  const tradingBlockSignUpButton = new MarkertTradingBlockSignUpButtonFCA();
  const tradingBlockTryDemoButton = new MarkertTradingBlockTryDemoButtonFCA();
  const discoverBlockCreateAccountButton = new MarkertDiscoverBlockCreateAccountButtonFCA();
  const discoverBlockTryDemoButton = new MarkertDiscoverBlockTryDemoButtonFCA();
  const signUp = new SignUpFCA();
  const login = new LoginFCA();
  const tradingPlatform = new TradingPlatformPage();

  context("Unregistered user", () => {
    beforeEach(() => {
      basePage.openFcaUrl();
      basePage.openBannerCookies();
      basePage.clickBtnAcceptCookies();
      header.hoverMarketsNenu();
      header.openSharesMarketsNenu();
    });

    it('JS/TC_01.02!00_101_UnReg | Markets > Menu item [Shares] > Click button [Sign up] in the block "Shares trading"', () => {
      tradingBlockSignUpButton.clickMarkertTradingBlockSignUpButton();

      isOpenedFormSignUp(signUp);
      checkOutSignUpForm(signUp);
    });

    it('JS/TC_01.02.00_102_UnReg | Markets > Menu item [Shares] > Click button [Try Demo]  in the block "Shares trading"', () => {
      tradingBlockTryDemoButton.clickMarkertTradingBlockTryDemoButton();

      isOpenedFormSignUp(signUp);
      checkOutSignUpForm(signUp);
    });

    it('JS/TC_01.02!00_103_UnReg | Markets > Menu item [Shares] > Click button [Create account] in the block "Discover trading excellence with Capital.com"', () => {
      discoverBlockCreateAccountButton.clickMarkertDiscoverBlockCreateAccountButton();

      isOpenedFormSignUp(signUp);
      checkOutSignUpForm(signUp);
    });

  });

  context("Unauthorized user", () => {
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

    it('JS/TC_01.02!00_101_UnAuth | Markets > Menu item [Shares] > Click button [Sign up ] in the block "Shares trading"', () => {
      tradingBlockSignUpButton.clickMarkertTradingBlockSignUpButton();

      isOpenedFormSignUp(signUp);
      checkOutSignUpForm(signUp);
    });

    it('JS/TC_01.02!00_102_UnAuth | Markets > Menu item [Shares] > Click button [Try Demo ]  in the block "Shares trading"', () => {
      tradingBlockSignUpButton.clickMarkertTradingBlockSignUpButton();

      isOpenedFormLogin(login);
      checkOutLoginForm(login);
    });

    it('JS/TC_01.02!00_103_UnAuth  | Markets > Menu item [Shares] > Click button [Create account ] in the block "Discover trading excellence with Capital.com"', () => {
      discoverBlockCreateAccountButton.clickMarkertDiscoverBlockCreateAccountButton();

      isOpenedFormSignUp(signUp);
      checkOutSignUpForm(signUp);
    });

  });

  context("Authorized  user", () => {
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

    it('JS/TC_01.02!00_101_Auth | Markets > Menu item [Shares] > Click button [Sign up ] in the block "Shares trading"', () => {
      tradingBlockSignUpButton.clickMarkertTradingBlockSignUpButton();

      isOpenedTradingPlatform(tradingPlatform);
      verifyVisitTraidingPlatform();
    });

    it('JS/TC_01.02!00_102_Auth | Markets > Menu item [Shares] > Click button [Try Demo ]  in the block "Shares trading"', () => {
      tradingBlockSignUpButton.clickMarkertTradingBlockSignUpButton();

      isOpenedTradingPlatform(tradingPlatform);
      verifyVisitTraidingPlatformDemoMode(tradingPlatform);
    });

    it('JS/TC_01.02!00_103_Auth | Markets > Menu item [Shares] > Click button [Create account ] in the block "Discover trading excellence with Capital.com"', () => {
      discoverBlockCreateAccountButton.clickMarkertDiscoverBlockCreateAccountButton();

      isOpenedTradingPlatform(tradingPlatform);
      verifyVisitTraidingPlatform();
    });

  });

});

