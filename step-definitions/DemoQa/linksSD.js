const { When } = require("@wdio/cucumber-framework");
const { expect } = require("chai");
const Links = require('../../POM/DemoQA/Elements/links')

const links = new Links()


When(/^I click 'Click Here for Broken Link'$/,async function(){
    await links.scrollToLink()
   await links.clickBrokenLink()
   await browser.pause(4000)
})

When(/^I verify 'This page returned a 500 status code.' is displayed$/,async function(){
    await browser.pause(4000)
     let error = await links.isErrorMsgDisplayed()
     expect(error).to.be.true;
})