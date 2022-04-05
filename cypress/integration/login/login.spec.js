/// <reference types="cypress" />

describe("todo actions", () => {
  beforeEach(() => {
    cy.visit("https://the-internet.herokuapp.com/login");
  });

  it("valid user can login", () => {
    cy.get("#username").type("tomsmith");
    cy.get("#password").type("SuperSecretPassword!");
    cy.get(".fa").click();
    cy.get("#flash").should("contain", "You logged into a secure area");
  });

  it("not valid password", () => {
    cy.get("#username").type("tomsmith");
    cy.get("#password").type("false");
    cy.get(".fa").click();
    cy.get("#flash").should("contain", "Your password is invalid");
  });
});
