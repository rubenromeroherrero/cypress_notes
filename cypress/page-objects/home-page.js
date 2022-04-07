/// <reference types="cypress" />

export class HomePage {
  goToHomePage() {
    cy.visit("https://the-internet.herokuapp.com/");
  }

  clickLogin() {
    cy.get(":nth-child(21) > a").click();
  }
}
