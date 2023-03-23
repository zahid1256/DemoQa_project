const Commands = require('../../Commands')

class ElementsPage {

commands = new Commands()

//Locators
textBox = '//span[text()="Text Box"]'
checkBox ='//span[text()="Check Box"]'
radioButton = '//span[text()="Radio Button"]'
webTables ='//span[text()="Web Tables"]'
buttons ='//span[text()="Buttons"]'
links ='//span[text()="Links"]'
brokenLinks ='//span[text()="Broken Links - Images"]'
uploadDownload ='//span[text()="Upload and Download"]'
dynamicProp = '//span[text()="Dynamic Properties"]'





//Functions 
  async clickTextBox() {
    await this.commands.clickWebElement(this.textBox);
  }
  async clickCheckBox() {
    await this.commands.clickWebElement(this.checkBox);
  }
  async clickRadioButton() {
    await this.commands.clickWebElement(this.radioButton);
  }
  async clickWebTables() {
    await this.commands.clickWebElement(this.webTables);
  }
  async clickButtons() {
    await this.commands.clickWebElement(this.buttons);
  }
  async clickLinks() {
    await this.commands.clickWebElement(this.links);
  }
  async clickBrokenLinks() {
    await this.commands.clickWebElement(this.brokenLinks);
  }
  async clickUploadDownload() {
    await this.commands.clickWebElement(this.uploadDownload);
  }
  async clickDynamicProp() {
    await this.commands.clickWebElement(this.dynamicProp);
  }

  async scrollToLinks(){
    await this.commands.scrollToWebElement(this.brokenLinks)
  }

   
  async selectElements(el){
    switch (el.toLowerCase()){
        case 'text box':
            await this.clickTextBox()
            break;
         case 'check box':
            await this.clickCheckBox()
            break;
         case 'radio button':
            await this.clickRadioButton()
            break;
         case 'web tables':
            await this.clickWebTables()
            break;
         case 'buttons':
            await this.clickButtons()
            break;
         case 'links':
            await this.clickLinks()
            break;
         case 'broken links':
            await this.clickBrokenLinks()
            break;
         case 'upload and download':
            await this.clickUploadDownload()
            break;
         case 'dynamic properties':
            await this.clickDynamicProp()
            break;
         default:
            break;                   

    }
  }


  






}
module.exports = ElementsPage;