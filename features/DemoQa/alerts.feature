


Feature: Alerts, Frame & Windows

@DP-12
Scenario: Verify 'This is a sample page' disaplyed in a new window
Given I am on demoqa
When I click on alerts
And I click browser windows
And I click new window
Then I verify 'This is a sample page' disaplyed in a new window



@DP-15
Scenario: Verify that the text "Parent frame" is displayed in the outer frame
Given I am on demoqa
When I click on alerts
And I click nested frames
Then I verify text "Parent frame" is displayed