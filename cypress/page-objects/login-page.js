/// <reference types="cypress" />

export class LoginPage {
  enterUsername(userText) {
    cy.get("#username").type(userText);
  }

  enterPassword(userPassword) {
    cy.get("#password").type(userPassword);
  }

  clickLoginButton() {
    cy.get(".fa").click();
  }

  checkErrorMessage(message) {
    cy.get("#flash").should("contain", message);
  }
}
