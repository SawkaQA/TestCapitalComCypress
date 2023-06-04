// /// <reference types = "cypress" />

// describe('Choose language', () => {

//     // beforeEach(() => {
//     //     cy.visit('/')
//     // })

//     xit('Choose Italian', () => {
//         cy.visit('/it')
//         cy.get(".cc-header__logo [class='cc-logo hideXs']").should('be.visible')
//         cy.get(':nth-child(1) > .cc-nav__link--lvl1').click()
//         cy.get('.licLangSw__btn').realHover()
//         // cy.get("[href='https://capital.com/it']").eq(1).click()

//         // Сhecking that all languages are in the array
//         cy.get('.js-langName').then(($els) => {
//             const item = Cypress.$.makeArray($els).map($el => $el.innerText)
//             cy.wrap(item).should('have.length', 29)
//         })

//         xit('Check header logo', () => {
            
//             // cy.get(".cc-header__logo [class='cc-logo hideXs']").should('be.visible')
//         })
//     })

//     // it('try all the languages', () => {
//     //     cy.get('.js-langName').each(($el, index) => {
//     //         if($el.text() === 'English') {

//     //         }
//     //     })
//     // })
// })