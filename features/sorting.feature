Feature: Sort products

  Scenario: Sort products by name in descending and ascending order
    Given the user is on the login page
    When the user enters the "standard" user credentials
    And the user sorts products by name in "descending" order
    Then the active sorting option should be "Name (Z to A)"
    And the first product on the list should be "Test.allTheThings() T-Shirt (Red)"
    When the user sorts products by name in "ascending" order
    Then the active sorting option should be "Name (A to Z)"
    And the first product on the list should be "Sauce Labs Backpack"

  Scenario: Sort products by price in descending and ascending order
    Given the user is on the login page
    When the user enters the "standard" user credentials
    And the user sorts products by price in "descending" order
    Then the active sorting option should be "Price (high to low)"
    And the first product on the list should be "Sauce Labs Fleece Jacket"
    When the user sorts products by price in "ascending" order
    Then the active sorting option should be "Price (low to high)"
    And the first product on the list should be "Sauce Labs Onesie"
