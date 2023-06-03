// /// <reference types = "cypress" />

// import { headerMenuButtonItems, endPointsMenuItems } from '../../../fixtures/headerData.json';

// beforeEach(function () {
//     cy.visit('/')
//     cy.get('nav[class=cc-nav__wrap] .js-navLink').as('menuLinks')
// })

// headerMenuButtonItems.forEach((buttonName, idx) => {
//     xit(`verify menu have link ${buttonName} on main page`, function() {
//         cy.get('@menuLinks').eq(idx).click()
//         cy.url().should('contain', endPointsMenuItems[idx])
//         cy.go('back')
//     })

// })
