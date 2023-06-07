export class BasePage {

    open() {
        cy.visit('/');
    }

    // Education Menu
    // Trading strategies guide
    getPositionTrading = () => cy.get(`[class='grid gXs'] a[href="https://capital.com/position-trading"]`)
    getSwingTradingOnEducationMenu = () => cy.get('[class="cc-nav__dropdown gridRUp gXs "] [href="https://capital.com/swing-trading"]')
    // [class="cc-nav__dropdown gridRUp gXs "] 

    // Methods
    clickSwingTradingOnEducationMenu() {
        this.getSwingTradingOnEducationMenu().click();
    }
}

export const basePage = new BasePage();