Feature: Test Express API

  Scenario: Fetch data from Express API
    Given I navigate to "http://localhost:3000/api/welcome"
    Then I should see the response message "Hello from Express!"

  Scenario: Fetch data from users endpoint
    Given I navigate to users "http://localhost:3000/api/users"
    Then I should see the response data

  Scenario: Delete data from users endpoint
    Given I navigate to delete users "http://localhost:3000/api/users"
    Then I shhould check the delete result
