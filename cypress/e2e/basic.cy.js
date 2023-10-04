describe('sample test', () => {
  beforeEach(() => {
    // Visit the home page with the sidebar layout
    cy.visit('/');
  });

  it('displays the resources text', () => {
    // Assuming the main content area contains the title
    cy.get('h1').contains('Home Page');
  });

  it('renders the Netlify logo image', () => {
    // Assuming the image is located within the main content area
    cy.get('img')
      .should('be.visible')
      .and(($img) => {
        expect($img[0].naturalWidth).to.be.greaterThan(0);
      });
  });
});
