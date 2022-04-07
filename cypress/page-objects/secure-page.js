/// <reference types="cypress" />

export class SecurePage {
  checkLoggedMessage(message) {
    cy.get("#flash").should("contain", message);
  }

  //clickLogoutButton
}
