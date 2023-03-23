const Commands = require('../../Commands')

class Windows {

commands = new Commands()


//Locators
browserWindows = `//span[text()="Browser Windows"]`
newTab=`//button[text()="New Tab"]`
newWindows =`//button[text()="New Window"]`
newWindowMassage =`//button[text()="New Window Message"]`





//Functions
async clickBrowserWindows(){
   await this.commands.clickWebElement(this.browserWindows)
}
async selectInWindows(button){
    switch (button.toLowerCase()) { 
        case 'tab':
            await this.commands.clickWebElement(this.newTab)
            break;
        case 'window':
            await this.commands.clickWebElement(this.newWindows)
            break;
        case 'window message':
            await this.commands.clickWebElement(this.newWindowMassage)
            break;  
        default:
            break;   
}
}

async switchToAnotherWindowHandle(){
    const demoWindowHandle = await this.commands.getHandle()
    const allWindowHandles = await this.commands.getHandles()
    for(const handle of allWindowHandles){
        if(handle!== demoWindowHandle){
            await this.commands.switchToWindowHandle(handle)
            break;
        }
    }
}



}
module.exports = Windows;
