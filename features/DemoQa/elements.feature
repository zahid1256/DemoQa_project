

Feature: Elements


@DP-1
Scenario Outline: Verify text box information is submitted and disaplayed
Given I am on demoqa
When I click on Elements
When I select text box
And I type '<Full_Name>' in Full Name
And I type '<Email>' in email
And I type '<CAddress>' in current address
And I type '<PAddress>' in permanent address
When I click submit button
Then I verify text box information is disaplayed
Examples:
    | Full_Name | Email           |   CAddress |  PAddress |
    | test1     | test1@gmail.com |    test1   |  test1    |
    | test2     | test2           |    test2   |  test2    |


@DP-4
Scenario:Verify error message is displayed when clicking a broken link
Given I am on demoqa
When I click on Elements
When I select broken links
When I click 'Click Here for Broken Link'
Then I verify 'This page returned a 500 status code.' is displayed
