class Header {
    // Main logo Capital
    getMainLogo = () => cy.get('[class="cc-logo hideXs"]');

    getCountyIcons = () => cy.get(".user-header .user-lang-selection li");
    getCountryAndLang = () => cy.get("div .licLangSw__btn");
    getDropdownCountry = () => cy.get("input[type=text][class$=hidden]");

    // Countries
    getGermanyCountry = () => cy.get('a[href="https://capital.com/?country=de"]');
    getTurkeyCountry = () => cy.get('a[href="https://capital.com/?country=tr"]');
    getAustralia = () => cy.get('span.iconMd.flagFull.flagFull--au'); //a[href="https://capital.com/?country=au"]
    getUnitedKindomCountry = () => cy.get('a[href="https://capital.com/?country=gb"]');

    // Languages
    selectEnglishLang = () => cy.get("[href='https://capital.com/']");
    selectArabicLang = () => cy.get("[href='https://capital.com/ar']").eq(1).click();
    selectIndonesinaLang = () => cy.get("[href='https://capital.com/id']").eq(1).click();
    selectBolgarianLang = () => cy.get("[href='https://capital.com/bg']").eq(1).click();
    selectCzechLang = () => cy.get("[href='https://capital.com/cs']").eq(1).click();
    selectDaniaLang = () => cy.get("[href='https://capital.com/da']").eq(1).click();
    selectGermanLang = () => cy.get("[href='https://capital.com/de']").eq(1).click();
    selectEstonianLang = () => cy.get("[href='https://capital.com/et']").eq(1).click();
    selectGreekLang = () => cy.get("[href='https://capital.com/el']").eq(1).click();
    selectSpanishLang = () => cy.get("[href='https://capital.com/es']").eq(1).click();
    selectFrenchLang = () => cy.get("[href='https://capital.com/fr']").eq(1).click();
    selectCroatianLang = () => cy.get("[href='https://capital.com/hr']").eq(1).click();
    selectItalianLang = () => cy.get("[href='https://capital.com/it']").eq(1).click();
    selectLatvianLang = () => cy.get("[href='https://capital.com/lv']").eq(1).click();
    selectLithuanianLang = () => cy.get("[href='https://capital.com/lt']").eq(1).click();
    selectHungarianLang = () => cy.get("[href='https://capital.com/hu']").eq(1).click();
    selectDutchLang = () => cy.get("[href='https://capital.com/nl']").eq(1).click();
    selectPolishLang = () => cy.get("[href='https://capital.com/pl']").eq(1).click();
    selectPortugalLang = () => cy.get("[href='https://capital.com/pt']").eq(1).click();
    selectRomanianLang = () => cy.get("[href='https://capital.com/ro']").eq(1).click();
    selectRussianLang = () => cy.get("[href='https://capital.com/ru']").eq(1).click();
    selectSlovakLang = () => cy.get("[href='https://capital.com/sk']").eq(1).click();
    selectSlovenianLang = () => cy.get("[href='https://capital.com/sl']").eq(1).click();
    selectFinlandLang = () => cy.get("[href='https://capital.com/fi']").eq(1).click();
    selectSwedishhLang = () => cy.get("[href='https://capital.com/sv']").eq(1).click();
    selectVietnameseLang = () => cy.get("[href='https://capital.com/vi']").eq(1).click();
    selectThaiLang = () => cy.get("[href='https://capital.com/th']").eq(1).click();
    selectSChenesseLang = () => cy.get("[href='https://capital.com/zh']").eq(1).click();
    selectTChenesseLang = () => cy.get("[href='https://capital.com/cn']").eq(1).click();

    // Nav buttons
    getNavButtons = () => cy.get("nav[class=cc-nav__wrap]");

    // MenuButtons
    getEducationMenu = () => cy.get(":nth-child(1) > .cc-nav__link--lvl1");
    getMarketsMenu = () => cy.get("nth-child(2) > .cc-nav__link--lvl1");
    getProductsAndServicesMenu = () => cy.get("nth-child(3) > .cc-nav__link--lvl1");
    getNewsAndAnaliticsMenu = () => cy.get("nth-child(4) > .cc-nav__link--lvl1");
    getMoreMenu = () => cy.get("nth-child(5) > .cc-nav__link--lvl1");

    // Search field
    getSearchInput = () => cy.get("#headerSearch");

    // Login
    getBtnLogIn = () => cy.get("#wg_loginBtn");

    // Trade or SignUp
    getBtnSignIn = () => cy.get("[data-type=btn_header]");

    // Methods
    clicMainLogo(){
        this.getMainLogo().realHover().click();
        return this;
    }

    hoverCountryAndLang() {
        this.getCountryAndLang().realHover();
    }

    clickDropdownCountry() {
        this.getDropdownCountry().click();
        return this;
    }

    selectGermanyCountry() {
        this.hoverCountryAndLang()
        this.clickDropdownCountry()
        this.getGermanyCountry().click()
        return this;
    }

    selectTurkeyCountry() {
        this.hoverCountryAndLang()
        this.clickDropdownCountry()
        this.getTurkeyCountry().click();
        return this;
    }

    selectAustraliaCountry() {
        this.hoverCountryAndLang()
        this.clickDropdownCountry()
        this.getAustralia().click()
        return this;
    }

    selectUnitedKindomCountry() {
        this.hoverCountryAndLang()
        this.clickDropdownCountry()
        this.getUnitedKindomCountry().click()
        return this;
    }
}
export default Header;
