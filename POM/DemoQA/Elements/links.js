const Commands = require('../../Commands')

class Links {

commands = new Commands()

//Locators

brokenLink =`//a[contains(text() , "Broken Link")]`
errorMsg =`//p[contains(text() , "500 status code")]`










//Functions
async clickBrokenLink(){
    await this.commands.clickWebElement(this.brokenLink)
}
async scrollToLink(){
    await this.commands.scrollToWebElement(this.brokenLink)
}
async isErrorMsgDisplayed(){
   return  await this.commands.isWebElementDisplayed(this.errorMsg)
}











}
module.exports = Links;
