/// <reference types="cypress" />

describe('learning Child Window', () => {

    it('child window', () => {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

        // cypress is not handling the child window 
        cy.get('#opentab').then(function (el) {
            const url = el.prop('href')
            cy.visit(url)
            cy.origin(url, () => {
                cy.get('div.sub-menu-bar a[href*="about"]').click()
            })
        })


        


    })
})