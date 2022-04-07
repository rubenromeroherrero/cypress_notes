/// <reference types="cypress" />

// Test a nivel de sistemas E2E
// test suite/set [batería de pruebas]
describe("login tests", () => {
  // Antes de cada test ejecuta algo
  beforeEach(() => {
    cy.visit("https://the-internet.herokuapp.com/login");
  });

  it("valid user can login", () => {
    cy.get("#username").type("tomsmith");
    cy.get("#password").type("SuperSecretPassword!");
    cy.get(".fa").click();
    cy.get("#flash").should("contain", "You logged into a secure area!");
  });

  // it.only => solo ejecutamos ese prueba
  // it.skip => saltamos ese caso de prueba
  it("not valid user can't login", () => {
    cy.get("#username").type("Tmsmith");
    cy.get("#password").type("SuperSecretPassword!");
    cy.get(".fa").click();
    cy.get("#flash").should("contain", "Your username is invalid!");
  });

  it("not valid password can't login", () => {
    cy.get("#username").type("tomsmith");
    cy.get("#password").type("false");
    cy.get(".fa").click();
    cy.get("#flash").should("contain", "Your password is invalid!");
  });
});
