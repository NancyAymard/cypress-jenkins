describe("Run tests in the Jenkins pipeline", { tags: "@regression" }, () => {
  it.only("Passed test", () => {
    cy.visit("https://example.cypress.io");
  });

  it("Failed test", { tags: ["@first", "@pass"] }, () => {
    cy.visit("https://example.cypress.io");
    cy.get("h1").should("contain", "Hello World!");
  });

  it.skip("Skipped test", () => {
    cy.visit("https://example.cypress.io");
  });
});
