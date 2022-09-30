@getHelp
Feature: Test GetHelp Portal API 

  Scenario: Successfully Get Countries list
    Given I requested an access_token for GetHelp Portal API
    And   I send Get request to GetHelp Portal with the uri path'/odata/country'
    Then  Response staus code is 200

   Scenario: Successfully Get Incident type
    Given I requested an access_token for GetHelp Portal API
    And   I send Get request to GetHelp Portal with the uri path'/odata/incidenttype'
    Then  Response staus code is 200   

   Scenario: Successfully Get User Domain
    Given I requested an access_token for GetHelp Portal API
    And   I send Get request to GetHelp Portal with the uri path'/odata/userdomain'
    Then  Response staus code is 200 
  
  
  

