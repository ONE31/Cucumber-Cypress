declare global {
    namespace Cypress {
        interface Chainable {
            getElementTypeText: typeof getElementTypeText,
            getElementValidateText: typeof getElementValidateText
            
        }
    }
}

Cypress.Commands.add("getElementTypeText",(selector:string,value:string)=>
{cy.get('#${selector}').type(value);
});
Cypress.Commands.add("getElementValidateText",(selector:string,value:string)=>
{cy.get('#${selector}').should('have.text', value);
});