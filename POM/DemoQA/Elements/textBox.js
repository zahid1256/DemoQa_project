const Commands = require('../../Commands')

class TextBox {

commands = new Commands()


//Locators
fullName = `//input[@placeholder="Full Name"]`
email = `//input[@placeholder="name@example.com"]`
curAddress=`//textarea[@placeholder="Current Address"]`
permAddress =`//textarea[@id="permanentAddress"]`
submitButton=`//button[@id="submit"]`

//submitted information box
nameSub = `//p[@id="name"]`
emailSub = `//p[@id="email"]`
curAddressSub = `//p[@id="currentAddress"]`
permAddressSub = `//p[@id="permanentAddress"]`









//Functions
async typeFullName(Full_Name){
    await this.commands.clickWebElement(this.fullName)
    await this.commands.typeInWebElement(this.fullName, Full_Name)
}

async typeEmail(Email){
    await this.commands.clickWebElement(this.email)
    await this.commands.typeInWebElement(this.email, Email)
}

async typeCurAddress(CAddress){
    await this.commands.clickWebElement(this.curAddress)
    await this.commands.typeInWebElement(this.curAddress, CAddress)
}

async typePermAddress(PAddress){
    await this.commands.clickWebElement(this.permAddress)
    await this.commands.typeInWebElement(this.permAddress, PAddress)
}

async clickSubmitButton(){
    await this.commands.clickWebElement(this.submitButton)
}

async scrollToSubmitButton(){
    await this.commands.scrollToWebElement(this.submitButton)
}

//submitted box
async isFullNameDisplayed(){
 return await this.commands.isWebElementDisplayed(this.nameSub)
}

async isEmailDisplayed(){
   return await this.commands.isWebElementDisplayed(this.emailSub)
}

async isCurAddressDisplayed(){
  return  await this.commands.isWebElementDisplayed(this.curAddressSub)
 }

async isPerAddressDisplayed(){
return await this.commands.isWebElementDisplayed(this.permAddressSub)
 }








}




module.exports = TextBox;
