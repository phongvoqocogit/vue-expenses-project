describe("TransactionList", () => {
  beforeEach(() => {
    cy.visit("http://localhost:4173");
  });

  it("deletes a transaction", () => {
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

    // Get the initial number of transactions
    cy.get("[data-cy=transaction]").then(($transactions) => {
      const initialTransactionCount = $transactions.find("li").length;

      // Click the delete button of the first transaction
      cy.get("#delete-btn").click();

      // Check that the number of transactions has decreased by 1
      cy.get("#list > li").should("have.length", initialTransactionCount - 1);
    });
  });
});
