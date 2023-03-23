const Commands = require('../../Commands')

class PracticeForm {

commands = new Commands()

//Locators
practiceForm =`//span[text()="Practice Form"]`
DOBfield = `//input[@id="dateOfBirthInput"]`
calendarTodayDate = `//div[contains(@class, "day--today")]`








//Function

async clickPracticeForm(){
    await this.commands.clickWebElement(this.practiceForm)
}

async clickDOBfield(){
    await this.commands.clickWebElement(this.DOBfield)
}

async scrollToDOB(){
    await this.commands.scrollToWebElement(this.DOBfield)
}
async getTodayDate(){
   return  await this.commands.getTodayDay()
}
async getDate(){
    return await this.commands.getTextOfWebElement(this.calendarTodayDate)
}







}
module.exports = PracticeForm;