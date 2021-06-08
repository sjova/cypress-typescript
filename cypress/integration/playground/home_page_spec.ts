describe('The Home Page', () => {
  it('Successfully loads', () => {
    cy.visit('/');
  });

  it('Include title "Kitchen Sink"', () => {
    cy.visit('/');

    cy.title().should('include', 'Kitchen Sink');
  });
});
