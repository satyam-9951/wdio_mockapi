Feature: Test Express API

  Scenario: Fetch data from Express API
    Given I navigate to "http://localhost:3000/api/welcome"
    Then I should see the response message "Hello from Express!"

  Scenario: Fetch data from users endpoint
    Given I navigate to users "http://localhost:3000/api/users"
    Then I should see the response data

  Scenario: Delete data from users endpoint
    Given I navigate to delete users "http://localhost:3000/api/users"
    Then I should check the delete result

  Scenario: Post student details
    Given I navigate to students detail creation endpoint "http://localhost:3000/students"
    Then I should check the status code

  Scenario: Post student details
    Given I navigate to student detail correction endpoint "http://localhost:3000/students/:id"
    Then I should check the response
