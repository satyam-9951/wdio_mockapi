Feature: Test Fetch Authors API

  Scenario: POST data from authors endpoint
    Given I navigate to post authors "http://localhost:3000/api/authors"
    Then I should check the post result

  Scenario: GET data from authors endpoint
    Given I navigate to get authors "http://localhost:3000/api/authors"
    Then I should see the response data of authors

  Scenario: DELETE author with ID 1
    Given I navigate to delete author "http://localhost:3000/api/authors/0"
    Then I should check the delete result
    Given I navigate to get authors "http://localhost:3000/api/authors"
    Then I should see the response data of authors

  Scenario: Update author at ID 4
    Given I navigate to update author at "http://localhost:3000/api/authors/3"
    Then I should check the update result
    Given I navigate to get authors "http://localhost:3000/api/authors"
    Then I should see the response data of authors
