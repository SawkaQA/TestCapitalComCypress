export class BasePage {

    open() {
        cy.visit("/");
    }
}

export const basePage = new BasePage();