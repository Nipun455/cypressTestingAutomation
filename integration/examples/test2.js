describe('This is second', ()=>{
    it('THis is login credentials', ()=>{
        cy.visit('https://practicetestautomation.com/practice-test-login/');
        cy.get('#username').type("student");
        cy.get("#password").type("Password123");
        cy.get('#submit').click();
        cy.get('strong').should('be.visible')
    })
})


