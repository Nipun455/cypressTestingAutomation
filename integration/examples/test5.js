/// <reference types="cypress" />

describe('This is alert message', ()=>{

    it('Learning alert message', ()=>{
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        // 
        cy.get('#alertbtn').click();
        // window alert 
        cy.get('[value="Confirm"]').click();


        // how to validate alert in cypress 
        cy.on('window:alert', (str)=>{
            // Mocha :- entire test, run on mocha testframes work 
            // cypress have capability of browser event, window:alert is the event 
            // which get fired on alert open so you are firing the event through cypress to get access to the alert 
            expect(str).to.equal('Hello , share this practice page and share your knowledge');
        })

        cy.on('window:confirm',(str)=>{
            expect(str).to.equal('Hello , Are you sure you want to confirm?');
        })

    })
})