describe('THis is to learn child task , child window', ()=>{

    it('learn child task and child window',()=>{

        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        // cy.get('#opentab').invoke('removeAttr', 'target').click();   // it is open in same page , as we remove target _blank 
        //cy.get('#opentab').click();  // it is open in new tab
        

        // when we are trying to load about page but there domain is different so we are using this 
        // cy.origin('https://www.qaclickacademy.com', ()=>{
        //     cy.get("#navbarSupportedContent a[href*='about']").click();
        //     cy.get('.mt-50 h2').should('contain', 'QAClick Academy');
        // })

        // cy.origin('https://onecognizant.cognizant.com/Welcome',()=>{
        //     cy.get('#btn1 .appActSearchRecentbtn').click();
        //     cy.get('#btn2 .appActSearchRecentbtn').should('contain', 'View');
        // })



        // how to select value in table 
        // next() :- get the immediately following sibling of each DOM element within a set of DOM element 

        cy.get('tr td:nth-child(2)').each(($el, index, $list) => {  
            const text = $el.text();
            if(text.includes('Python')){
                cy.get('tr td:nth-child(2)').eq(index).next().then(function(price){
                    const priceText = price.text();
                    expect(priceText).to.equal('25');
                })
            }
        })


       


    })
})