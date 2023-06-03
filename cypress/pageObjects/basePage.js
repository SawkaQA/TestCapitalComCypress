export class BasePage {

    open() {
        cy.visit('/');
    }

    // Education Menu
    // Trading strategies guide

    getPositionTrading = () => cy.get(`[class='grid gXs'] a[href="https://capital.com/position-trading"]`)
    getSwingTrading = () => cy.get(`[class='grid gXs'] a[href="https://capital.com/swing-trading"]`)
}

export const basePage = new BasePage();