const { When } = require("@wdio/cucumber-framework");
const PracticeForm =require('../../POM/DemoQA/Forms/practiceForm');
const { expect } = require("chai");


const practiceForm = new PracticeForm()


When(/^I click practice form$/,async function(){
    await practiceForm.clickPracticeForm()
    await browser.pause(4000)
})
When(/^I click DOB dropdown$/,async function(){
    await practiceForm.scrollToDOB()
    await practiceForm.clickDOBfield()
    await browser.pause(4000)
})
When(/^I verify date selected is current date$/,async function(){
   let expected = await practiceForm.getTodayDate()
   let day = await practiceForm.getDate()
   console.log(`Expected ->${expected}`);
   console.log(`Day today ->${day}`);
   expect(expected).to.equal(day)
})

