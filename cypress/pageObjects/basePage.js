export class BasePage {

    open() {
        cy.visit('/');
    }

    // Education Menu
    // Trading strategies guide

    getPositionTrading = () => cy.get(`[class='grid gXs'] a[href="https://capital.com/position-trading"]`)
    getSwingTradingOnEducationMenu = () => cy.get(`[class='grid gXs'] a[href="https://capital.com/swing-trading"]`)

    // Methods

    clickSwingTradingOnEducationMenu() {
        this.getSwingTradingOnEducationMenu().realHover().click();
        return this;
    }
}

export const basePage = new BasePage();