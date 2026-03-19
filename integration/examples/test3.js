/// <reference types="cypress" />


describe('This is my second test case', function(){

    it('It is my second test case' , function(){
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        // selenium get hit url in browser, cypress get acts like findelement of selenium 
        cy.get('.search-keyword').type('ca');

        cy.get('.products').as('productLocator');
        cy.get('@productLocator').find('.product').each( ($el, index, $lists) =>{
            const textVeg = $el.find('h4.product-name').text();
            if(textVeg.includes('Cashews')){
               cy.wrap($el.find('button')).click();
            }
        })
        cy.get('.cart-icon > img').click();
        cy.contains('PROCEED TO CHECKOUT').click();
        cy.contains('Place Order').click();

    })
})