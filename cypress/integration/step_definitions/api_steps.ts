import cypress from "cypress";
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import { Utilities } from "../../common/utilities";


Given(/I want to call API Endpoint$/, () => {
    console.log(`Step: I want to call API Endpoint`);
    cy.request('get',"https://google.com").then((response) => {
        expect(response.status).equals(200);

    })
})

Given(/I requested an access_token for rm2API$/, () => {
    
    console.log(`Step: I requested an access_token for rm2API`),
    cy.request({
      method: 'POST',
      url: Utilities.getFromConfig("oauth_uri"),
      headers:{
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: {
        'grant_type':'client_credentials', 
        'scope':Utilities.getFromConfig('rm2_api_scope'),
        'client_secret':Utilities.getFromConfig('secretid'),
        'client_id': Utilities.getFromConfig('clientid')
      },
    }).then((response) => {
        expect(response.status).equals(200);
        const body = (response.body)
        const token = body['access_token']
        Utilities.storeInTestScope('token', "Bearer "+token)
    })

  })

  Given(/I requested an access_token for GetHelp Portal API$/, () => {
    
    console.log(`Step: I requested an access_token for GetHelp Portal API`),
    cy.request({
      method: 'POST',
      url: Utilities.getFromConfig("oauth_uri"),
      headers:{
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: {
        'grant_type':'client_credentials', 
        'scope':Utilities.getFromConfig('gethelp_api_scope'),
        'client_secret':Utilities.getFromConfig('secretid'),
        'client_id': Utilities.getFromConfig('clientid')
      },
    }).then((response) => {
        expect(response.status).equals(200);
        const body = (response.body)
        const token = body['access_token']
        Utilities.storeInTestScope('token', "Bearer "+token)
    })

  })
    
  Given(/I send Post request to rm2API using '(.*?)' fixture$/, (payload_path:string) => {
    
        console.log(`Step: I send Post request to rm2API using `+payload_path+ 'fixture'), 
        cy.fixture(payload_path).then((payload) => { 
          //payload.ClientCaseNumber=  Math.floor(Math.random() * 9999999);
        cy.request({
          method: 'POST',
          url: Utilities.getFromConfig("rm2_api"),
          headers:{
            'Content-Type': 'application/json',
            'Authorization':Utilities.getFromTestScope("token"),
          },
          body: payload,
          failOnStatusCode:false
        }).then((response) => {
            Utilities.storeInTestScope('responseBody',response.body),
            Utilities.storeInTestScope('responseStatusCode',response.status)
        })
    })
})

Given(/I send Get request to GetHelp Portal with the uri path'(.*?)'$/, (path:string) => {
    
  console.log(`Step: I send Get request to GetHelp using path `+path), 
  cy.request({
    method: 'GET',
    url: Utilities.getFromConfig("gethelp_api")+path,
    headers:{
      'Content-Type': 'application/json',
      'Authorization':Utilities.getFromTestScope("token"),
    },
  }).then((response) => {
      Utilities.storeInTestScope('responseBody',response.body),
      Utilities.storeInTestScope('responseStatusCode',response.status)
  })
}),

Then(/Response staus code is (\d+)$/, (expectedStatusCode:number) => {
    
  console.log(`Step: Response status code is `+expectedStatusCode),
  expect(Utilities.getFromTestScope("responseStatusCode"),'Actual response status code does not match expected').to.eq(expectedStatusCode)
  
})


