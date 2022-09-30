declare namespace Cypress {
    export interface Chainable {
        getElementTypeText(selector:string, value:string):void
        getElementValidateText(selector:string, value:string):void
            
        }
    }