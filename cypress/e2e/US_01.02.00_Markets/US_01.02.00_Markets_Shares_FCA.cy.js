/// <reference types = "cypress" />

import BasePageFCA from "../../pageObjects/BasePageFCA";
import HeaderFCA from "../../pageObjects/HeaderFCA";
import MarkertTradingBlockSignUpButtonFCA from "../../pageObjects/MarkertsButtonsFCA";
import SignUpFormFCA from "../../pageObjects/SignupLogin/SignUpFCA";


describe('JS/US_01.02!00 | Menu [Markets] > Menu item [Shares], FCA license', () => {

  const basePage = new BasePageFCA;
  const header = new HeaderFCA;
  const tradingSignUpButton = new MarkertTradingBlockSignUpButtonFCA;
  const signUp = new SignUpFormFCA;

  context('Unregistered user', () => {
    beforeEach(() => {
      basePage.openFcaUrl();
      basePage.openBannerCookies();
      basePage.clickAcceptCookies();
      header.hoverMarketsNenu();
      header.openSharesMarketsNenu();
    });


    it('JS/AT_01.02!00_101 | Markets > Menu item [Shares] > Click button [Sign up ] in the block "Shares trading"', () => {
      tradingSignUpButton.clickMarkertTradingBlockSignUpButton();
      signUp.openFormSignUp();

      signUp.getHeadlingForm()
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
      // Выполните вход в систему для неавторизованного пользователя перед каждым тестом (it)
    });
    xit('JS/AT_01.02!00_101 | Markets > Menu item [Shares] > Click button [Sign up ] in the block "Shares trading"', () => {

    });

  });

  context('Registered user', () => {
    beforeEach(() => {
      // Выполните вход в систему для зарегистрированного пользователя перед каждым тестом (it)
    });
    xit('JS/AT_01.02!00_101 | Markets > Menu item [Shares] > Click button [Sign up ] in the block "Shares trading"', () => {

    });

  });

})