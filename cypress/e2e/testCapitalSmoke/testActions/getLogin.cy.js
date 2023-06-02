/// <reference types = "cypress" />

import Login from "../../../pageObjects/SignupLogin/Login"
import testData from "../../../fixtures/testData.json";
import { basePage } from "../../../pageObjects/basePage";

describe('Capital.com Login Smoke tests', () => {
    it('Test Login in Capital.com', () => {
        const login = new Login();
        basePage.open()
        login.clickBtnLogIn()
        login.enterEmail(testData.email)
        login.enterPassword(testData.password)
        login.clickLogMeAfter()
        login.clickBtnContinue()
    })
})