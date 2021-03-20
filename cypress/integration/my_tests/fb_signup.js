///<reference types = "Cypress"/>
describe('Facebook signin signup tests',()=>{

    beforeEach(()=>{
        cy.visit('http://www.facebook.com');
        cy.get('[data-testid=open-registration-form-button]').click();
        cy.get('div').contains('Sign Up').invoke('text').should('equal','Sign Up');
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

    it('FB signup birth date test', ()=>{
        cy.get('#month').select('8');
        cy.get('#month').invoke('val').should('equal','8');
        cy.get('#day').select('19');
        cy.get('#day').invoke('val').should('equal','19');
        cy.get('#year').select('1978');
        cy.get('#year').invoke('val').should('equal','1978'); 
            
    });

   
    

    
});