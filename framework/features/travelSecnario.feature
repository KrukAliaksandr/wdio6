@MY @travel
Feature: Travel scenarios

  Scenario: Login and Home page
    When I open "https://galaxy.ansible.com/" url
    And I click Login top navigation bar button
    And I click Github login button
    And I login in Github

  Scenario: Login and Home page copy
    When I open "https://galaxy.ansible.com/" url
    And I click Login top navigation bar button
    And I click Github login button
    And I login in Github
