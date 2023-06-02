/// <reference types = "cypress" />

import testData from "../../../fixtures/testData.json";
import Signin from "../../../pageObjects/SignupLogin/SignIn";
import { basePage } from "../../../pageObjects/basePage";

describe("Capital.com Login Smoke tests", () => {
    it("Test Login in Capital.com", () => {
        const signin = new Signin();
        basePage.open();
        signin.clickBtnSignIn();
        signin.enterEmail(testData.email);
        signin.enterPassword(testData.password);
        signin.clickBtnContinue();
    });
});
