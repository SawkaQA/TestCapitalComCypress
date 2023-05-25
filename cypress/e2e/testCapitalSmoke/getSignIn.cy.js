/// <reference types = "cypress" />

import testData from '../../fixtures/testData.json';
import Signin from "../../pageObjects/SignIn";

describe('Capital.com Login Smoke tests', () => {
    it('Test Login in Capital.com', () => {
        const signin = new Signin();
        signin.visit();
        signin.clickBtnSignIn()
        signin.enterEmail(testData.email)
        signin.enterPassword(testData.password)
        signin.clickBtnContinue()
    })
})