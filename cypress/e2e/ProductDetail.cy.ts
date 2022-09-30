describe('Product Detail Page', () => {
  before(() => {
    cy.visit('/');
    cy.findAllByRole('link').first().click();
  });

  afterEach(() => {
    cy.reload();
  });

  it('Should increase counter in header', () => {
    cy.findByRole('button').click();
    cy.intercept('https://front-test-api.herokuapp.com/api/cart').as('addToCart');
    cy.wait('@addToCart');
    cy.findByText('Product count: 1');
  })
});
