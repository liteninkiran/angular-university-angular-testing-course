describe('Home Page', () => {

    beforeEach(() => {

    });

    it('should display a list of courses', () => {
        cy.visit('/');
        cy.contains("All Courses");
    });

});
