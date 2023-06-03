/// <reference types = "cypress" />

import { basePage } from "../../pageObjects/basePage"
import Header from "../../pageObjects/Header"
const header = new Header();

describe('US_11.03.05 | Educations > Menu item [Swing Trading]', () => {
    it('TC_11.03.05_01 | Education > Menu Item [Swing Trading] > Test button [Log in] in the header', () => {
        basePage.open();
        header.selectEnglishLang();
        header.hoverCountryAndLang();
        header.clickDropdownCountry();
        header.selectAndora();
        header.getEducationMenu().realHover();
        basePage.getSwingTrading().click();


    })
})