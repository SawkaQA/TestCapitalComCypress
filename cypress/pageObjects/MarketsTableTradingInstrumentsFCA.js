class MarketsTableTradingInstrumentsFCA {
  getMarketsTableTradingInstruments = () => cy.get('[data-type="markets_list"]');
  getSortMenu = () => cy.get('input#Sort');
  getSortMenuList = () => cy.get('div[class*="filters_container"] > div:nth-child(1) div[class*="scroll"]');
  getSortMenuItem = () => cy.get('div[class*="filters_container"] > div:nth-child(1) span[class*="dropdown_option"]');
  //getTableTradingInstrumentsRow = () => cy.get('div[class*="table_item"]');
  getTableTradingInstrumentsRow = () => cy.get('[data-type="markets_list_deep"]');

  isVisibleMarketsTableTradingInstruments() {
    this.getMarketsTableTradingInstruments().should('be.visible');
  };

  clickSortMenu() {
    this.getSortMenu().click();
    this.getSortMenuList().find('span').should('have.length', 4)
  };

  clickSortMenuItem() {
    const dropdownTitles = ['Top fallers', 'Most traded', 'Top risers', 'Most volatile'];

    dropdownTitles.forEach(title => {
      this.getSortMenuItem().contains(title).click({ force: true });
      cy.log(this.getTableTradingInstrumentsRow())

      this.getTableTradingInstrumentsRow().then($rows => {
        const randomRowIndex = Math.floor(Math.random() * $rows.length);
        const randomRow = $rows.eq(randomRowIndex);
        cy.log(this.getTableTradingInstrumentsRow());

        // Обновляем элемент @randomRow перед кликом
        cy.wrap(randomRow).as('randomRow');

        // Кликаем на элемент @randomRow
        cy.get('@randomRow').click();
        //CypressError cy.click() failed because the page updated while this command was executing. Cypress tried to locate elements based on this query: > cy.get(@randomRow) if getSortMenuItem is sorted        
      });
    });
  }

  clickAnyTradingInstrument() {

    this.getTableTradingInstrumentsRow().then($rows => {
      const randomRowIndex = Math.floor(Math.random() * $rows.length);
      const randomRow = $rows.eq(randomRowIndex);

      cy.wrap(randomRow).as('randomRow');
      cy.log(this.getTableTradingInstrumentsRow());

      // Получаем текст ссылки из ячейки этого ряда таблицы
      cy.get('@randomRow').find('a').invoke('text').as('linkText');
      // Кликаем на элемент @randomRow
      cy.get('@randomRow').click();

      // Проверяем, что тайтл страницы содержит текст ссылки
      cy.get('@linkText').then((text) => {
        cy.title().should('include', text);
        cy.get('h1').should('contain', text);
      });
    });
  }

  clickTopFallersTradingInstrument() {
    this.clickSortMenu();
    cy.get('span[class*="dropdown_option"]').contains('span', 'Top fallers').click();

    // Обработчик события после клика на элемент списка
    cy.get('span[class*="dropdown_option"]').contains('span', 'Top fallers').then($element => {

      cy.wait(6000);

      // Получаем случайный индекс строки таблицы
      const randomIndex = Math.floor(Math.random() * 10);

      // Получаем текст ссылки из случайной строки таблицы
      cy.get('div[data-type="markets_list_deep"]').eq(randomIndex).find('a').invoke('text').then((text) => {
        const linkText = text;

        // Кликаем по ссылке с сохраненным индексом
        cy.get('div[data-type="markets_list_deep"]').eq(randomIndex).find('a').click();

        cy.title().should('include', linkText);
        cy.get('h1').should('contain', linkText);
      });
    });
  }

}
export default MarketsTableTradingInstrumentsFCA;