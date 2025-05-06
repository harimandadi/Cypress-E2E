import { registerPage } from "../../pages/registerPage.js"
const registerPageObj = new registerPage()
import registerData from "../../fixtures/registerData.json"

describe('Register', () => {

it('register new user', () => {
    registerPageObj.OpenURL(Cypress.env('URL'))
    registerPageObj.clicksampleForm()
    registerPageObj.enterLastName(registerData.lastName);
    registerPageObj.enterFirstName(registerData.firstName);
    registerPageObj.enterEmail(registerData.email);
    registerPageObj.selectGender()
  })
 
  it('Add Bank Manager', () => {
    registerPageObj.OpenURL(Cypress.env('URL'))
    registerPageObj.clickbankManagerBtn();
    //registerPageObj.enterEmail(registerData.email);
  
  })


})

    