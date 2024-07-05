Feature: Order

  Scenario: Successful order backpack and bike light
    Given the user is on the login page
    When the user enters the "standard" user credentials
    And the user adds "backpack" to the cart
    And the user adds "bike-light" to the cart
    And the user goes to the shopping cart page
    Then the cart should contain 2 products
    When the user clicks on the "checkout" button
    And the user fills in the order details
    And the user clicks on the "continue" button
    And the user clicks on the "finish" button
    Then the order confirmation should be displayed

  Scenario: Add three products to the cart and then remove one of them
    Given the user is on the login page
    When the user enters the "standard" user credentials
    And the user adds "backpack" to the cart
    And the user adds "bike-light" to the cart
    And the user adds "onesie" to the cart
    And the user goes to the shopping cart page
    Then the cart should contain 3 products
    When the user removes "onesie" from the cart
    Then the cart should contain 2 products
