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

describe("form updates", () => {
  it("updates input text when typed into", () => {
    cy.visit("http://localhost:3000/");

    // Use cy.get() to select the input by name attribute
    cy.get('input[name="name"]').type("Bill");

    // You can add assertions to check if the input has the expected value
    cy.get('input[name="name"]').should("have.value", "Bill");
  });
  it("does not update number with char char is typed", () => {
    cy.visit("http://localhost:3000/");

    // Use cy.get() to select the input by name attribute
    cy.get('input[name="age"]')
    .type("1");

    // You can add assertions to check if the input has the expected value
    cy.get('input[name="age"]').should("have.value", "1");
  });
});
