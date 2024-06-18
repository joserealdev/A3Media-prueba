/// <reference types="cypress" />

describe("Dogs test", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Show select breed message if nothing is selected", function () {
    cy.get('[data-cy="select-breed-msg"]').should("exist");
  });

  it("Dropdown has been filled", function () {
    cy.get(".css-w9q2zk-Input2").click();
    cy.get("[id^=react-select-3-option]").should("have.length.above", 3);
  });

  it("Images loading", function () {
    cy.get(".css-w9q2zk-Input2").click();
    cy.get("[id^=react-select-3-option]").first().click();
    cy.get("img").should("have.length.above", 0);
  });
});
