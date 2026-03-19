/// <reference types="cypress" />


describe('This is my second test case', function(){

    it('It is my second test case' , function(){
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        // check boxes 
        cy.get("#checkBoxOption1").check().should('be.checked').and('have.value','option1');
        cy.get("#checkBoxOption1").uncheck().should('not.be.checked');
        // cy.wait(4000);
        cy.get('input[type="checkbox"]').check(['option2', 'option3'])
        
        
        // static dropdown

        cy.get('select').select("option2").should('have.value', 'option2');

        // dynamic dropdown 
        cy.get('#autocomplete').type('ind');

        cy.get('.ui-menu-item div').each(($el, index, $list)=>{
            if($el.text() == 'India'){
                cy.wrap($el).click();
            }
        })

        cy.get('#autocomplete').should('have.value','India');

        // visibility and invisibility 

        // cy.wait(3000);
        cy.get('#displayed-text').should('be.visible');
        cy.get('#hide-textbox').click();
        cy.get('#displayed-text').should('not.be.visible');

        // radio button 
        cy.get('[value="radio2"]').check().should('be.checked');
        
    })


})




 