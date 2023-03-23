const { When } = require("@wdio/cucumber-framework");
const { expect } = require("chai");
const Frames = require('../../POM/DemoQA/Alerts/frames')

const frames = new Frames()

When(/^I click nested frames$/,async function(){
    await frames.scrollToNestedFrames()
    await frames.clickNestedFrames()
    await browser.pause(4000)
})
When(/^I verify text "Parent frame" is displayed$/,async function(){
    const frame1 = await driver.$('#frame1');
    await driver.switchToFrame(frame1)
    const frame1Element = await driver.$('body');
    const frame1Text = await frame1Element.getText();
    expect(frame1Text).to.equal('Parent frame')
})

