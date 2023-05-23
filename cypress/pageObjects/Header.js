class Header {

    getCountyIcons = () => cy.get('.user-header .user-lang-selection li');
    getLanguageIcons = () => cy.get('.licLangSw__btn');
    getNavButtons = () => cy.get('nav[class=cc-nav__wrap]')

    // cy.visit('/')
    // cy.get('.licLangSw__btn').realHover()
    // cy.get("[href='https://capital.com/it']").eq(1).click()
    
}