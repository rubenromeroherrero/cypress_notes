/// <reference types="cypress" />

import { HomePage } from "../../page-objects/home-page";
import { LoginPage } from "../../page-objects/login-page";
import { SecurePage } from "../../page-objects/secure-page";

// Test a nivel de sistemas E2E
// test suite/set [batería de pruebas]
describe("login tests", () => {
  // Antes de cada test ejecuta algo
  const homePage = new HomePage();
  const loginPage = new LoginPage();
  const securePage = new SecurePage();

  beforeEach(() => {
    homePage.goToHomePage();
    homePage.clickLogin();
  });

  it("valid user can login", () => {
    loginPage.enterUsername("tomsmith");
    loginPage.enterPassword("SuperSecretPassword!");
    loginPage.clickLoginButton();
    securePage.checkLoggedMessage("You logged into a secure area!");
  });

  // it.only => solo ejecutamos ese prueba
  // it.skip => saltamos ese caso de prueba
  it("not valid user can't login", () => {
    loginPage.enterUsername("Tomsmith");
    loginPage.enterPassword("SuperSecretPassword!");
    loginPage.clickLoginButton();
    loginPage.checkErrorMessage("Your username is invalid!");
  });

  it("not valid password can't login", () => {
    loginPage.enterUsername("tomsmith");
    loginPage.enterPassword("SuperSecretPassword!!");
    loginPage.clickLoginButton();
    loginPage.checkErrorMessage("Your password is invalid!");
  });
});
