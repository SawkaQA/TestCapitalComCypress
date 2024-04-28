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
    const dropdownOptions = ['Top fallers', 'Most traded', 'Top risers', 'Most volatile'];

    dropdownOptions.forEach(title => {
      this.getSortMenuItem().contains(title).click({ force: true });
      cy.log(this.getTableTradingInstrumentsRow())

      this.getTableTradingInstrumentsRow().then($rows => {
        const randomRowIndex = Math.floor(Math.random() * $rows.length);
        const randomRow = $rows.eq(randomRowIndex);
        cy.log(this.getTableTradingInstrumentsRow())

        // Обновляем элемент @randomRow перед кликом
        cy.wrap(randomRow).as('randomRow');

        // Кликаем на элемент @randomRow
        cy.get('@randomRow').click();

        //CypressError cy.click() failed because the page updated while this command was executing. Cypress tried to locate elements based on this query: > cy.get(@randomRow)
      });




    });
  }


}
export default MarketsTableTradingInstrumentsFCA;