Feature: User login

  Scenario: Successful login as a standard user
    Given the user is on the login page
    When the user enters the "standard" user credentials
    Then the user is redirected to the home page

  Scenario: Failed login as locked user
    Given the user is on the login page
    When the user enters the "locked" user credentials
    Then the user sees an error message
