const Commands = require('../../Commands')

class Frames {

commands = new Commands()

//Locators
nestedFrames= `//span[text()="Nested Frames"]`
parentFrame = `//iframe[@id="frame1"]`



//Functions 
async clickNestedFrames(){
    await this.commands.clickWebElement(this.nestedFrames)
}
async scrollToNestedFrames(){
    await this.commands.scrollToWebElement(this.nestedFrames)
}





}
module.exports = Frames;