///<reference types = "Cypress"/>
describe('Facebook signin signup tests',()=>{

    beforeEach(()=>{
        cy.visit('http://www.facebook.com');
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

    it('FB title page', ()=>{
        
        cy.get('title').invoke('text').should('equal','Facebook - Log In or Sign Up');
    });

    it('Email and Password fields check', ()=>{
       
        cy.get('[id="email"]').type('Ivan@gmail.com');
        cy.get('[id="pass"]').type('123456');
        
        cy.get('[id="email"]').invoke("val").should('equal','Ivan@gmail.com');
        cy.get('[id="pass"]').invoke("val").should('equal','123456');

    });

    it('FB Create New Account Button test', ()=>{
        
        cy.get('[data-testid=open-registration-form-button]').should('be.visible');
        cy.get('[data-testid=open-registration-form-button]').click();
        cy.get('div').contains('Sign Up').invoke('text').should('equal','Sign Up');

    });
});