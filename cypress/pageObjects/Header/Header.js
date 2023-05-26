class Header {

    // Main logo Capital
    getMainLogo = () => cy.get(".cc-header__logo [class='cc-logo hideXs']")

    getCountyIcons = () => cy.get('.user-header .user-lang-selection li');
    getLanguageIcons = () => cy.get('.licLangSw__btn');
    getNavButtons = () => cy.get('nav[class=cc-nav__wrap]')

    // cy.visit('/')
    // cy.get('.licLangSw__btn').realHover()
    // cy.get("[href='https://capital.com/it']").eq(1).click()

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


    // Menu
    getEducationMenu = () => cy.get("[href='https://capital.com/learn-to-trade']");
    getMarketsMenu = () => cy.get("[href='https://capital.com/learn-to-trade']");
    getProductsAndServicesMenu = () => cy.get("[href='https://capital.com/learn-to-trade']");
    getNewsAndAnaliticsMenu = () => cy.get("[href='https://capital.com/learn-to-trade']");
    getMoreMenu = () => cy.get("[href='https://capital.com/learn-to-trade']");

    // Search field
    getSearchInput = () => cy.get('#headerSearch');

    // Login
    getBtnLogIn = () => cy.get("#wg_loginBtn");

    // Trade or SignUp
    getBtnSignIn = () => cy.get("[data-type=btn_header]");
}