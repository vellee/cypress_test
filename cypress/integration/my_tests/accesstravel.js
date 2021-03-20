///<reference types = "Cypress"/>
describe('accesstravel website tests',()=>{

    beforeEach(()=>{
        cy.visit('https://www.accesstravel.com/en-US');
    });

    afterEach(()=>{
        cy.log('after each block');
    });

    before(()=>{
        cy.log('before all the tests block');
    });

    after(()=>{
        cy.log('after all the tests block');
    });

    // accesstravel website load test
    it('access travel title page',()=>{
        cy.get('h1').invoke('text').should('equal','INCLUSIVE TRAVEL COMMUNITY');
    });
        
});