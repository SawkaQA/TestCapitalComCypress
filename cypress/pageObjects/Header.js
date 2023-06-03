class Header {
    // Main logo Capital
    getMainLogo = () => cy.get(".cc-header__logo [class='cc-logo hideXs']");

    getCountyIcons = () => cy.get(".user-header .user-lang-selection li");
    getCountryAndLang = () => cy.get("div .licLangSw__btn");
    getDropdownCountry = () => cy.get("input[type=text][class$=hidden]");

    // Methods
    hoverCountryAndLang() {
        this.getCountryAndLang().realHover();
    }

    clickDropdownCountry() {
        this.getDropdownCountry().click();
    }

    // Countries

    getGermanyCountry = () => cy.get('a[href="https://capital.com/?country=de"]');
    getTurkeyCountry = () => cy.get('a[href="https://capital.com/?country=tr"]');
    getAustralia = () => cy.get('a[href="https://capital.com/?country=au"]');
    getUnitedKindomCountry = () => cy.get('a[href="https://capital.com/?country=gb"]');

    selectAustria() {
        this.getAustriaCountry().click()
    }

    selectAndora() {
        this.getAndoraCountry().click();
    }

    selectAustralia() {
        this.getAustralia().click()
    }

    selectUnitedKindom() {
        this.getUnitedKindomCountry().click()
    }

    // Languagesd
    selectEnglishLang = () => cy.get("[href='https://capital.com/']");
    selectArabicLang = () => cy.get("[href='https://capital.com/ar']");
    selectIndonesinaLang = () => cy.get("[href='https://capital.com/id']");
    selectBolgarianLang = () => cy.get("[href='https://capital.com/bg']");
    selectCzechLang = () => cy.get("[href='https://capital.com/cs']");
    selectDaniaLang = () => cy.get("[href='https://capital.com/da']");
    selectGermanLang = () => cy.get("[href='https://capital.com/de']");
    selectEstonianLang = () => cy.get("[href='https://capital.com/et']");
    selectGreekLang = () => cy.get("[href='https://capital.com/el']");
    selectSpanishLang = () => cy.get("[href='https://capital.com/es']");
    selectFrenchLang = () => cy.get("[href='https://capital.com/fr']");
    selectCroatianLang = () => cy.get("[href='https://capital.com/hr']");
    selectItalianLang = () => cy.get("[href='https://capital.com/it']");
    selectLatvianLang = () => cy.get("[href='https://capital.com/lv']");
    selectLithuanianLang = () => cy.get("[href='https://capital.com/lt']");
    selectHungarianLang = () => cy.get("[href='https://capital.com/hu']");
    selectDutchLang = () => cy.get("[href='https://capital.com/nl']");
    selectPolishLang = () => cy.get("[href='https://capital.com/pl']");
    selectPortugalLang = () => cy.get("[href='https://capital.com/pt']");
    selectRomanianLang = () => cy.get("[href='https://capital.com/ro']");
    selectRussianLang = () => cy.get("[href='https://capital.com/ru']");
    selectSlovakLang = () => cy.get("[href='https://capital.com/sk']");
    selectSlovenianLang = () => cy.get("[href='https://capital.com/sl']");
    selectFinlandLang = () => cy.get("[href='https://capital.com/fi']");
    selectSwedishhLang = () => cy.get("[href='https://capital.com/sv']");
    selectVietnameseLang = () => cy.get("[href='https://capital.com/vi']");
    selectThaiLang = () => cy.get("[href='https://capital.com/th']");
    selectSChenesseLang = () => cy.get("[href='https://capital.com/zh']");
    selectTChenesseLang = () => cy.get("[href='https://capital.com/cn']");

    // Nav buttons
    getNavButtons = () => cy.get("nav[class=cc-nav__wrap]");

    // MenuButtons
    getEducationMenu = () => cy.get(":nth-child(1) > .cc-nav__link--lvl1");
    getMarketsMenu = () => cy.get("nth-child(2) > .cc-nav__link--lvl1");
    getProductsAndServicesMenu = () =>
        cy.get("nth-child(3) > .cc-nav__link--lvl1");
    getNewsAndAnaliticsMenu = () =>
        cy.get("nth-child(4) > .cc-nav__link--lvl1");
    getMoreMenu = () => cy.get("nth-child(5) > .cc-nav__link--lvl1");

    // Learning hub

    // Market guides
    
    // Trading strategiest guide


    // Search field
    getSearchInput = () => cy.get("#headerSearch");

    // Login
    getBtnLogIn = () => cy.get("#wg_loginBtn");

    // Trade or SignUp
    getBtnSignIn = () => cy.get("[data-type=btn_header]");
}
export default Header;
