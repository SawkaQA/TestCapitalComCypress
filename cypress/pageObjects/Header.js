class Header {

    // Main logo Capital
    getMainLogo = () => cy.get(".cc-header__logo [class='cc-logo hideXs']")

    getCountyIcons = () => cy.get('.user-header .user-lang-selection li');
    getLanguageIcons = () => cy.get('.licLangSw__btn');

    // Languages
    getEnglishLang = () => cy.get("[href='https://capital.com/']");
    getArabicLang = () => cy.get("[href='https://capital.com/ar']");
    getIndonesinaLang = () => cy.get("[href='https://capital.com/id']");
    getBolgarianLang = () => cy.get("[href='https://capital.com/bg']");
    getCzechLang = () => cy.get("[href='https://capital.com/cs']");
    getDaniaLang = () => cy.get("[href='https://capital.com/da']");
    getGermanLang = () => cy.get("[href='https://capital.com/de']");
    getEstonianLang = () => cy.get("[href='https://capital.com/et']");
    getGreekLang = () => cy.get("[href='https://capital.com/el']");
    getSpanishLang = () => cy.get("[href='https://capital.com/es']");
    getFrenchLang = () => cy.get("[href='https://capital.com/fr']");
    getCroatianLang = () => cy.get("[href='https://capital.com/hr']");
    getItalianLang = () => cy.get("[href='https://capital.com/it']");
    getLatvianLang = () => cy.get("[href='https://capital.com/lv']");
    getLithuanianLang = () => cy.get("[href='https://capital.com/lt']");
    getHungarianLang = () => cy.get("[href='https://capital.com/hu']");
    getDutchLang = () => cy.get("[href='https://capital.com/nl']");
    getPolishLang = () => cy.get("[href='https://capital.com/pl']");
    getPortugalLang = () => cy.get("[href='https://capital.com/pt']");
    getRomanianLang = () => cy.get("[href='https://capital.com/ro']");
    getRussianLang = () => cy.get("[href='https://capital.com/ru']");
    getSlovakLang = () => cy.get("[href='https://capital.com/sk']");
    getSlovenianLang = () => cy.get("[href='https://capital.com/sl']");
    getFinlandLang = () => cy.get("[href='https://capital.com/fi']");
    getSwedishhLang = () => cy.get("[href='https://capital.com/sv']");
    getVietnameseLang = () => cy.get("[href='https://capital.com/vi']");
    getThaiLang = () => cy.get("[href='https://capital.com/th']");
    getSChenesseLang = () => cy.get("[href='https://capital.com/zh']");
    getTChenesseLang = () => cy.get("[href='https://capital.com/cn']");

    // Nav buttons
    getNavButtons = () => cy.get('nav[class=cc-nav__wrap]')
    
    // MenuButtons
    getEducationMenu = () => cy.get(':nth-child(1) > .cc-nav__link--lvl1');
    getMarketsMenu = () => cy.get('nth-child(2) > .cc-nav__link--lvl1');
    getProductsAndServicesMenu = () => cy.get('nth-child(3) > .cc-nav__link--lvl1');
    getNewsAndAnaliticsMenu = () => cy.get('nth-child(4) > .cc-nav__link--lvl1');
    getMoreMenu = () => cy.get('nth-child(5) > .cc-nav__link--lvl1');

    // Search field
    getSearchInput = () => cy.get('#headerSearch');

    // Login
    getBtnLogIn = () => cy.get("#wg_loginBtn");

    // Trade or SignUp
    getBtnSignIn = () => cy.get("[data-type=btn_header]");
}