import cypress from "cypress";
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import { Utilities } from "../../common/utilities";


Given(/I open the webpage '(.*?)'$/, (uri:string) => {
    const resolvedURI=Utilities.getFromConfig(uri),
    console.log(`Step: I open the webpage `+resolvedURI);
    cy.visit(resolvedURI)

}),

And(/I locate the element using selector '(.*?)' and ensure the text is '(.*?)'$/, (selector:string, expectedText:string) => {
    console.log('Step: I locate the element using selector and ensure the text is'),
    cy.getElementValidateText(selector,expectedText)
    
}),

And(/I locate the element using selector '(.*?)' and ensure it is visible$/, (selector:string) => {
    console.log('Step: I locate the element using selector and ensure it is visible'),
    cy.getElementCheckVisible(selector)
    
})

And(/I locate the element using selector '(.*?)' and ensure it is not visible$/, (selector:string) => {
    console.log('Step: I locate the element using selector and ensure it is not visible'),
    cy.getElementCheckNotVisible(selector)
    
})

And(/I locate the element using selector '(.*?)' and click on it$/, (selector:string) => {
    console.log('Step: I locate the element using selector and click on it'),
    cy.getElementClick(selector)

 })



    And(/I ensure the text '(.*?)' is displayed on the screen$/, (text:string) => {
        console.log('Step: I ensure the text is displayed on the screen'),
        cy.contains(text,{ matchCase: false }).then((element)=> {
            expect(element,'Text is not visible on the page').to.be.visible
        })

        And(/I fill in the basic page using '(.*?)' fixture$/, (page_content:string) => {
            console.log('Step: I fill in the basic page using fixture '+page_content)
            //cy.fixture(page_content).then((page) => { 
                //itarate ovet the page and for the each element cy.getElementTypeText

            //},
            //click submit button 
            })
        })


