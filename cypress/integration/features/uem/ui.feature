@ui

Feature: Test UI 

  Scenario: Successfully navigate through the page 
    Given I open the webpage 'dice_uri'
    And   I locate the element using selector '.banner-headline' and ensure the text is 'Need Tech Talent?'
    And   I locate the element using selector '.icon-padding2' and ensure it is visible
    And   I locate the element using selector '.icon-padding2' and click on it
    And   I ensure the text 'Connect with your next great tech hire today.' is displayed on the screen

  Scenario: Successfully navigate through the Basic page 
    Given I open the webpage 'dice_uri'
    And   I locate the element using selector '.banner-headline' and ensure the text is 'Create new escalation'
    And   I locate the element using selector '.icon-padding2' and click on it
    And   I locate the element using selector '.banner-headline' and ensure the text is 'Executive Flow'
    #When  I fill in the basic page using 'uem/ExecutivePage.csv' fixture
    #Then validate the buttons - visible/not visible  
