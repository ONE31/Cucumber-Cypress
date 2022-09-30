# cypress-cucumber-typescript
POC project of using Cypress with Cucumber and TypeScript for UI and API testing

All the configuration is in [cypress/plugins/index.js](cypress/plugins/index.js)

TypeScript step definitions are in [cypress/integration/step_definitions](cypress/integration/step_definitions)

Features (Scenarios) are in [cypress/integration/features](cypress/integration/features)

Utilities class is in [cypress/common/](cypress/common)

Additional Cypress commands are in [cypress/support/commands.ts](cypress/support)

Test data (json, txt files) is in [cypress/fixtures/](cypress/fixtures) 

Envarement variables (URL, secrets etc) are in [cypress/cypress.json](cypress/cypress.json) 

For reports used [cucumber-html-reporter](https://www.npmjs.com/package/cucumber-html-reporter)

**How to get started**

Clone project
- npm install 
- npm install typescript --save-dev

Run scenarios: 
 - npm run test TAGS="@getHelp" 

To override env variables from cypress/cypress.json when you run scenarios: 

npm run test --env secretid=your_secret TAGS="@getHelp"

Generate report:
- npm run report 



