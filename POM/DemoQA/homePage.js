const Commands = require('../../POM/Commands')


class HomePage {
  commands = new Commands();

  //Locators:
  elements = `//div[contains(@class , "mt-4")][1]`
  forms = `//div[contains(@class , "mt-4")][2]`;
  alerts = `//div[contains(@class , "mt-4")][3]`;
  widgets = `//div[contains(@class , "mt-4")][4]`;
  interactions = `//div[contains(@class , "mt-4")][5]`;
  bookStore = `//div[contains(@class , "mt-4")][6]`;

  //Functions
  async clickElements() {
    await this.commands.clickWebElement(this.elements);
  }
  async clickForms() {
    await this.commands.clickWebElement(this.forms);
  }
  async clickAlerts() {
    await this.commands.clickWebElement(this.alerts);
  }
  async clickWidgets() {
    await this.commands.clickWebElement(this.widgets);
  }
  async clickInteractions() {
    await this.commands.clickWebElement(this.interactions);
  }
  async clickBookStore() {
    await this.commands.clickWebElement(this.bookStore);
  }



  async selectField(field){
    switch (field.toLowerCase()) { 
        case 'elements':
            await this.clickElements()
            break;
        case 'forms':
            await this.clickForms()
            break;
        case 'alerts':
            await this.clickAlerts()
            break;  
        case 'widgets':
            await this.clickWidgets()
            break;   
        case 'interactions':
            await this.clickInteractions()
            break;       
        case 'bookStore':
            await this.clickBookStore()
            break;         
        default:
            break;
 }
}





}
module.exports = HomePage;