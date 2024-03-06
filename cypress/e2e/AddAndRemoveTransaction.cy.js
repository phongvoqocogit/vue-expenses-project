describe("App", () => {
  beforeEach(() => {
    cy.visit("http://localhost:4173");
  });

  it("adds a new income transaction", () => {
    // +100
    cy.get("[data-cy=transaction]").then(($transactions) => {
      const initialTransactionCount = $transactions.find("li").length;

      // Fill out the form and submit it
      cy.get("#transaction-text").type("Mai Ho Thao Vy");
      cy.get("#transaction-amount").type("100");
      cy.get("#submit-transaction").click();

      // Check that a new transaction was added
      cy.get("#list > li").should("have.length", initialTransactionCount + 1);

      // Check that the new transaction has the correct text and amount
      cy.get("[data-cy=transaction]").should("contain", "Mai Ho Thao Vy");
      cy.get("[data-cy=transaction]").should("contain", "100");
      cy.get("#balance").should("contain", "100");
      cy.get("#money-plus").should("contain", "$+100");
      cy.get("#money-minus").should("contain", "$0");
    });
    // +50
    cy.get("[data-cy=transaction]").then(($transactions) => {
      const initialTransactionCount = $transactions.find("li").length;

      // Fill out the form and submit it
      cy.get("#transaction-text").type("Mai Ho Thao Vy");
      cy.get("#transaction-amount").type("50");
      cy.get("#submit-transaction").click();

      // Check that a new transaction was added
      cy.get("#list > li").should("have.length", initialTransactionCount + 1);

      // Check that the new transaction has the correct text and amount
      cy.get("[data-cy=transaction]").should("contain", "Mai Ho Thao Vy");
      cy.get("[data-cy=transaction]").should("contain", "50");
      cy.get("#balance").should("contain", "150");
      cy.get("#money-plus").should("contain", "$+150");
      cy.get("#money-minus").should("contain", "$0");
    });

    // -80
    cy.get("[data-cy=transaction]").then(($transactions) => {
      const initialTransactionCount = $transactions.find("li").length;

      // Fill out the form and submit it
      cy.get("#transaction-text").type("Shopping");
      cy.get("#transaction-amount").type("-80");
      cy.get("#submit-transaction").click();

      // Check that a new transaction was added
      cy.get("#list > li").should("have.length", initialTransactionCount + 1);

      // Check that the new transaction has the correct text and amount
      cy.get("[data-cy=transaction]").should("contain", "Shopping");
      cy.get("[data-cy=transaction]").should("contain", "-80");
      cy.get("#balance").should("contain", "70");
      cy.get("#money-plus").should("contain", "$+150");
      cy.get("#money-minus").should("contain", "$-80");
    });

    // +20
    cy.get("[data-cy=transaction]").then(($transactions) => {
      const initialTransactionCount = $transactions.find("li").length;

      // Fill out the form and submit it
      cy.get("#transaction-text").type("Mai Ho Thao Vy");
      cy.get("#transaction-amount").type("20");
      cy.get("#submit-transaction").click();

      // Check that a new transaction was added
      cy.get("#list > li").should("have.length", initialTransactionCount + 1);

      // Check that the new transaction has the correct text and amount
      cy.get("[data-cy=transaction]").should("contain", "Mai Ho Thao Vy");
      cy.get("[data-cy=transaction]").should("contain", "20");
      cy.get("#balance").should("contain", "90");
      cy.get("#money-plus").should("contain", "$+170");
      cy.get("#money-minus").should("contain", "$-80");
    });

    // -40
    cy.get("[data-cy=transaction]").then(($transactions) => {
      const initialTransactionCount = $transactions.find("li").length;

      // Fill out the form and submit it
      cy.get("#transaction-text").type("Market");
      cy.get("#transaction-amount").type("-40");
      cy.get("#submit-transaction").click();

      // Check that a new transaction was added
      cy.get("#list > li").should("have.length", initialTransactionCount + 1);

      // Check that the new transaction has the correct text and amount
      cy.get("[data-cy=transaction]").should("contain", "Mai Ho Thao Vy");
      cy.get("[data-cy=transaction]").should("contain", "-40");
      cy.get("#balance").should("contain", "50");
      cy.get("#money-plus").should("contain", "$+170");
      cy.get("#money-minus").should("contain", "$-120");
    });
  });
});
