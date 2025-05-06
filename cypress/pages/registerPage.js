export class registerPage{

webLocarors= {
    sampleFormBtn: '[href*="registrationform.html"]',
    bankManagerBtn: '[ng-click*="manager"]',
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
selectGender(){
    cy.get(this.webLocarors.gender).select(1)
}
clickSubmitButton(){
    cy.get(this.webLocarors.submitButton).click()
}
clicksampleForm(){
    cy.get(this.webLocarors.sampleFormBtn).click()
}
clickbankManagerBtn(){
    cy.get(this.webLocarors.bankManagerBtn).click()
}
}