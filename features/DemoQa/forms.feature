

Feature: Forms

@DP-7
Scenario: Verify current date is selected in DOB dropdown
Given I am on demoqa
When I click on Forms
And I click practice form 
And I click DOB dropdown
Then I verify date selected is current date