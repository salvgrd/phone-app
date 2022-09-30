describe('Product List Page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Should filter by name and brand', () => {
    cy.get('input').type('al');
    cy.findAllByRole('link').should('have.length.at.least', 2);
  });

  it('Should not have clickable breadcrumb', () => {
    cy.findByText('Home').click();
    cy.url().should('equal', 'http://localhost:5173/');
  });

  it('Should navigate to Product Detail Page', () => {
    cy.findAllByRole('link').first().click();
    cy.url().should('include', 'product');
  });
});
