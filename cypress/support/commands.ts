declare global {
    namespace Cypress {
        interface Chainable {
            getElementTypeText: typeof getElementTypeText,
            getElementValidateText: typeof getElementValidateText
            getElementCheckVisible: typeof getElementCheckVisible
            getElementCheckNotVisible: typeof getElementCheckNotVisible
            getElementClick: typeof getElementClick
        }
    }
}

Cypress.Commands.add("getElementTypeText",(selector:string,value:string)=>
{cy.get(selector).type(value);
});

Cypress.Commands.add("getElementValidateText",(selector:string,value:string)=>
{cy.get(selector).invoke("text").then((actualText)=> {
    expect(actualText,'Text of the web element does not match expected').to.eq(value);
})

Cypress.Commands.add("getElementCheckVisible",(selector:string)=>
{cy.get(selector).then((element)=> {
    expect(element,'Element is not visible on the page').to.be.visible
})
})

Cypress.Commands.add("getElementCheckNotVisible",(selector:string)=>
{cy.get(selector).then((element)=> {
    expect(element,'Element is visible on the page').to.not.be.visible
})
})

Cypress.Commands.add("getElementClick",(selector:string)=>
{cy.get(selector).then((element)=> {
    cy.get(selector).click({ force: true }),
    cy.wait(10000)
})
})

})


})