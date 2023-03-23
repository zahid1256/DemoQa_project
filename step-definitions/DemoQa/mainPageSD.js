const { When ,Given} = require("@wdio/cucumber-framework");
const HomePage = require('../../POM/DemoQA/homePage')

const homePage = new HomePage();

Given(/^I am on demoqa$/,async function(){
    await browser.url('/')
    await browser.pause(5000)
})
When(/^I click on (.+)$/,async function(field){
    await homePage.selectField(field)
    await browser.pause(4000)
     
})

  
    

