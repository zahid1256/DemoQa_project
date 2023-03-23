const { When } = require("@wdio/cucumber-framework");
const { expect } = require("chai");
const Windows = require('../../POM/DemoQA/Alerts/windows')

const windows = new Windows()

When(/^I click browser windows$/,async function(){
      await windows.clickBrowserWindows()
      await browser.pause(4000)
})

When(/^I click new (.+)$/,async function(button){
    await windows.selectInWindows(button)
    await browser.pause(4000)
})
When(/^I verify 'This is a sample page' disaplyed in a new window$/,async function(){
    await browser.switchWindow('https://demoqa.com/sample');
    const text = await browser.$('#sampleHeading');
    const actualText = await text.getText();
    expect(actualText).to.equal('This is a sample page')
})