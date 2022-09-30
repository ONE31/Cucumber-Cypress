export class Utilities {


    static getFromConfig (key:string){
        return Cypress.env(key)
    }

    static getFromTestScope (key:string){
        return Cypress.env(key)
    }
    
    static storeInConfig (key:string, val:any){
     Cypress.env(key,val)
    }

    static storeInTestScope (key:string, val:any){
        Cypress.env(key,val)
       }
    
    }
    