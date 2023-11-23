describe("template spec", () => {
  it("Does not do much", () => {
    expect(true).to.equal(true);
  });
});

describe("grid", () => {
  it("displays 5", () => {
    cy.visit("http://localhost:3000/");
    cy.get("article.person").should("have.length", 5);
  });
  it("displays 6 when button clicked", () => {
    cy.visit("http://localhost:3000/");
    const button = cy.get("button").as("submit");
    cy.get("@submit").first().click();
    cy.get("article.person").should("have.length", 6);
  });
});
