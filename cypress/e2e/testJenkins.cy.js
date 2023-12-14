describe("Run Jenkins pipeline", () => {
  it("Passed test", () => {
    cy.visit("https://example.cypress.io");
  });

  it("Failed test", () => {
    cy.visit("https://example.cypress.io");
    cy.get("h1").should("contain", "Hello World!");
  });

  it.skip("Skipped test", () => {
    cy.visit("https://example.cypress.io");
  });
});
