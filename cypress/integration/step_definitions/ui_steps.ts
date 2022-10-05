import cypress from "cypress";
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import { Utilities } from "../../common/utilities";


Given(/I open the webpage '(.*?)'$/, (uri:string) => {
    const resolvedURI=Utilities.getFromConfig(uri),
    console.log(`Step: I open the webpage `+resolvedURI);
    cy.visit(resolvedURI)

}),

And(/I locate the element using selector '(.*?)' and ensure the text is '(.*?)'$/, (selector:string, expectedText:string) => {
    //console.log(`Step: I locate the element using selector and ensure the text is'),
    cy.get(selector).invoke("text").then((actualText)=> {
        expect(actualText,'Text of the web element does not match expected').to.eq(expectedText)

    })
    
}),

And(/I locate the element using selector '(.*?)' and ensure it is visible$/, (selector:string) => {
    //console.log(`Step: I locate the element using selector and ensure it is visible'),
    cy.get(selector).then((element)=> {
        expect(element,'Element is not visible on the page').to.be.visible
    })
    
})

And(/I locate the element using selector '(.*?)' and ensure it is not visible$/, (selector:string) => {
    //console.log(`Step: I locate the element using selector and ensure it is not visible'),
    cy.get(selector).then((element)=> {
        expect(element,'Element is not visible on the page').to.not.be.visible
    })
    
})

And(/I locate the element using selector '(.*?)' and click on it$/, (selector:string) => {
    //console.log(`Step: I locate the element using selector and click on it'),
    cy.get(selector).click({ force: true }),
    cy.wait(10000)

 })

    And(/I ensure the text '(.*?)' is displayed on the screen$/, (text:string) => {
        //console.log(`Step: I ensure the text is displayed on the screen'),
        cy.contains(text,{ matchCase: false }).then((element)=> {
            expect(element,'Text is not visible on the page').to.be.visible
        })



    

