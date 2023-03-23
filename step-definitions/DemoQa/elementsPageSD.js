const { When } = require("@wdio/cucumber-framework");

const ElementsPage =require('../../POM/DemoQA/Elements/elementsPage');
const HomePage = require("../../POM/DemoQA/homePage");


const elementsPage = new ElementsPage()
 const homePage = new HomePage() 

When(/^I select (.+)$/,async function(el){
    await elementsPage.scrollToLinks()
    await elementsPage.selectElements(el)
    await browser.pause(4000)
})