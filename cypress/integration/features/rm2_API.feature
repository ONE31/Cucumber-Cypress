@getHelp

Feature: Test rm2API

  Scenario: Successful Post request 
    Given I requested an access_token for rm2API
    And   I send Post request to rm2API using 'Executive.json' fixture  
    Then  Response staus code is 200

  Scenario Outline: Invalid Post Request
    Given   I requested an access_token for rm2API
    And     I send Post request to rm2API using '<file_name>' fixture  
    Then    Response staus code is 400
  

    Examples:
      | file_name               | 
      | executive_invalid.json  | 
      | empty.json              |

