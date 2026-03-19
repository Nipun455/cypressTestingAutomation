describe('THis is to learn child task , child window', ()=>{

    it('learn child task and child window',()=>{

        cy.visit("https://rahulshettyacademy.com/AutomationPractice/"); 
        // how to select value in table
         // how to select value in table  
        // next() :- get the immediately following sibling of each DOM element within a set of DOM element 

        // cy.get('tr td:nth-child(2)').each(($el, index, $list)=>{  

        //     const text1 = $el.text();
        //     if(text1.includes('Python')){
        //         cy.get('tr td:nth-child(2)').eq(index).next().then(function(price){
        //             const priceText = price.text();
        //             expect(priceText).to.equal('25');
        //         })
        //     }
        // })

        //  handling mouse hover popup
        // Calls the jQuery .show() method on that element, which changes its CSS so it becomes visible.
        // .invoke() is a way to directly call a method or property on a jQuery-wrapped element.
        cy.get('div.mouse-hover-content').invoke('show')
        // to handle invisible element we can use like this ways
         cy.contains('Top').click({force:true})
        //  cy.contains('Top').click();
        cy.url().should('includes','top')



        // cypress is not handling the child window 
        cy.get('#opentab').then(function(el){
            const url = el.prop('href')
            cy.visit(url)  
            cy.origin(url, ()=>{
                cy.get('div.sub-menu-bar a[href*="about"]').click()
            })
        })

        



    })
})