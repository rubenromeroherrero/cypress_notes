/// <reference types="cypress" />

describe("todo action", () => {
  beforeEach(() => {
    cy.visit("https://the-internet.herokuapp.com/");
    cy.get(":nth-child(39) > a").click();
    cy.get('[href="/shifting_content/menu"]').click();
  });

  it("verify that table has 5 elements", () => {
    cy.get("ul li").should("have.length", 5);
    // cy.get("ul > li").should(($li) => {
    //   // should have found 5 elements
    //   expect($li).to.have.length(5);
    // });
  });

  it("verify the content of 5 elements is correct", () => {
    cy.get("ul > li").should(($li) => {
      expect($li.eq(0)).to.contain("Home");
      expect($li.eq(1)).to.contain("About");
      expect($li.eq(2)).to.contain("Contact Us");
      expect($li.eq(3)).to.contain("Portfolio");
      expect($li.eq(4)).to.contain("Gallery");
    });
  });
});
