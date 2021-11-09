import { browser, by, element } from 'protractor';
export class US01 {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }
  iraregistro(){
    return browser.get('http://localhost:4200/studentregister') as Promise<any>;
  }
  async SetRegister(email:string,name:string,lastname:string,password:string){
     var emails= element(by.css('[type="email"]'));
     var names= element(by.css('[type="Name"]'));
     var lastnames= element(by.css('[type="LastName"]'));
     var passwords= element(by.css('[type="password"]'));

  }
  async clickCheckoutButton(){
    await element(by.css('type="submit"')).click();
  }
  regitroexitoso(){

    return browser.get('http://localhost:4200/User/1') as Promise<any>;

  }



}
