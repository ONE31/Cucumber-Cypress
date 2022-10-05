Feature: Test rm2API

  Scenario: Successful Post request 
    Given I requested an access_token for rm2API
    And   I send Post request to rm2API using 'Executive.json' fixture  
    Then  Response staus code is 200
    And   Response time is less than 50000 ms

  Scenario Outline: Invalid Post Request
    Given   I requested an access_token for rm2API
    And     I send Post request to rm2API using '<file_name>' fixture  
    Then    Response staus code is 400
    And     Response time is less than 20000 ms

    Examples:
      | file_name               | 
      | executive_invalid.json  | 
      | empty.json              |

