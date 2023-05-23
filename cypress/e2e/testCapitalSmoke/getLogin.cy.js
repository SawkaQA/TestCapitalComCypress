/// <reference types = "cypress" />

import Login from "../../pageObjects/Login"
import testData from '../../fixtures/testData.json';

describe('Capital.com Login Smoke tests', () => {
    it('Test Login in Capital.com', () => {
        const login = new Login();
        login.visit();
        login.clickBtnLogIn()
        login.enterEmail(testData.email)
        login.enterPassword(testData.password)
        login.clickLogMeAfter()
        login.clickBtnContinue()
    })
})