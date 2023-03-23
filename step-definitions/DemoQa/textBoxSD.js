const { When } = require("@wdio/cucumber-framework");
const { expect } = require("chai");

const TextBox =require('../../POM/DemoQA/Elements/textBox');


const textBox = new TextBox()

When(/^I type full name$/,async function(){
   await textBox.typeFullName()
   await browser.pause(4000)
})
When(/^I type '(.+)' in Full Name$/,async function(Full_Name){
    await textBox.typeFullName(Full_Name)
    await browser.pause(5000)
})
When(/^I type '(.+)' in email$/,async function(Email){
    await textBox.typeEmail(Email)
    await browser.pause(5000)
})
When(/^I type '(.+)' in current address$/,async function(CAddress){
    await textBox.typeCurAddress(CAddress)
    await browser.pause(5000)
})
When(/^I type '(.+)' in permanent address$/,async function(PAddress){
    await textBox.scrollToSubmitButton()
    await textBox.typePermAddress(PAddress)
    await browser.pause(5000)
})
When(/^I click submit button$/,async function(){
    await textBox.scrollToSubmitButton()
    await textBox.clickSubmitButton()
    await browser.pause(4000)
 })

When(/^I verify text box information is disaplayed$/,async function(){
   const name = await textBox.isFullNameDisplayed()
   const email = await textBox.isEmailDisplayed()
   const caddress = await textBox.isCurAddressDisplayed()
   const paddress = await textBox.isPerAddressDisplayed()
  expect(name).to.be.true;
  expect(email).to.be.true;
  expect(caddress).to.be.true;
  expect(paddress).to.be.true;
   

})

