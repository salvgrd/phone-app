describe('Smoke tests', () => {
  it('Should render Product List Page', () => {
    cy.visit('/');
    cy.get('header').should('be.visible');
    cy.get('input').should('be.visible');
    cy.findAllByRole('link');
  });

  it('Should render Product Detail Page', () => {
    cy.visit('/');
    cy.findAllByRole('link').first().click();

    cy.findByRole('img').should('be.visible');
    cy.findByRole('list').should('be.visible');
    cy.get('form').should('be.visible');
  });
});
