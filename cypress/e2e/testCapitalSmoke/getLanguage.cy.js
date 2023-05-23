/// <reference types = "cypress" />

describe('Choose language', () => {
    it('Choose DEUTSCHE', () => {
        cy.visit('/')
        cy.get('.licLangSw__btn').realHover()
        cy.get("[href='https://capital.com/it']").eq(1).click()
    })
})