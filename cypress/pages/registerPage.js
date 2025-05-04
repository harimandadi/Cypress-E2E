export class registerPage{

webLocarors= {
    sampleForm: '[href="https://www.way2automation.com/angularjs-protractor/banking/registrationform.html"]',
    firstname: '#firstName',
    lastName: '#lastName',
    email: '#email',
    password: '#password',
    gender: '#gender',
    submitButton:'[type="submit"]'
}
OpenURL(url){
    cy.visit(Cypress.env('URL'))
}
enterFirstName(Fname){
    cy.get(this.webLocarors.firstname).type(Fname)
}
enterLastName(Lname){
    cy.get(this.webLocarors.lastName).type(Lname)
}
enterEmail(email){
    cy.get(this.webLocarors.email).type(email)
}
enterPassword(password){
    cy.get(this.webLocarors.password).type(password)
}
selectGender(gender){
    cy.get(this.webLocarors.password).select(gender)
}
clickSubmitButton(){
    cy.get(this.webLocarors.submitButton).click()
}
clicksampleForm(){
    cy.get(this.webLocarors.sampleForm).click()
}
}