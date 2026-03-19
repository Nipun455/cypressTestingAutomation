/// <reference types="cypress" />
describe('This is my first test case', function(){

    it('It is my first test case' , function(){
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        // selenium get hit url in browser, cypress get acts like findelement of selenium 
        cy.get('.search-keyword').type('ca');
        cy.get('.product').should('have.length',5);
       //  cy.wait(2000);
       //  cy.get('.product:visible').should('have.length',4)
       // parent child chaining
        cy.get('.products').as('productLocator')
        cy.get('@productLocator').find('.product').should('have.length',4);
        cy.get('.products').find('.product').eq(2);
        // console.log("Nipun Kumar Singh")
        cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click().then(function(){
            console.log("Nipun Kumar Singh");
        }) 
        cy.get('.products').find('.product').each( ($el, index, $list) =>{
            const vegItem = $el.find('h4.product-name').text();
            if(vegItem.includes('Cashews')){
                cy.wrap($el.find('button')).click()
            }
        })
        // assert if logo text is correctly displayed
        cy.get('.brand').should('have.text', 'GREENKART')

        // const logo = cy.get('.brand')
        // cy.log(logo)

        cy.get('.brand').then( (logoelement)=> {
            cy.log(logoelement.text())
        })
    })
})

// npm i cypress --save-dev
// npx i cypress open 