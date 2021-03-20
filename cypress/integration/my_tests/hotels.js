///<reference types = "Cypress"/>
describe('access travel hotel tests',()=>{

    beforeEach(()=>{
        cy.visit('https://www.accesstravel.com/en-US');
        cy.get('.hotels').click();
       
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
    
    // check for hotel pop-up is loaded
    it('access travel hotel pop-up load test', ()=>{
        cy.get('.form-centered > .btn').should('be.visible');
        cy.get('.sub-heading').should('be.visible');
        cy.get('.pr-2').should('be.visible');
        cy.get(':nth-child(4) > .pl-2').should('be.visible');
        cy.get('#Filter_ChildrenNum').should('be.visible');
        cy.get('.form-centered > :nth-child(7)').should('be.visible');
    });

    // drop-down destination menu test 
    it('destination drop-down menu test', ()=>{
        cy.get('#Filter_DestinationId').should('be.visible');
        cy.get('#Filter_DestinationId').select('Rome');
        cy.get('#Filter_DestinationId').invoke('val').should('equal','18');
    });

    // adults number input box test 
    it('adults input box test',()=>{
        cy.get('#Filter_AdultNum').should('be.visible');
        cy.get('#Filter_AdultNum').click();
        cy.get('#Filter_AdultNum').clear();
        cy.get('#Filter_AdultNum').type('2');
        cy.get('#Filter_AdultNum').invoke('val').should('equal','2');

    });

    // children number input box test
    it('children input box test',()=>{
        cy.get('#Filter_ChildrenNum').should('be.visible');
        cy.get('#Filter_ChildrenNum').click();
        cy.get('#Filter_ChildrenNum').clear();
        cy.get('#Filter_ChildrenNum').type('2');
        cy.get('.form-centered > .btn').click();
        cy.get('#Filter_ChildrenNum').invoke('val').should('equal','2');
        cy.get('#Filter_ChildrensAge[0]').should('be.visible');
        cy.get('#Filter_ChildrensAge[1]').should('be.visible');

    });
    
    // invalid children number input box test

    it('children input box test invalid input',()=>{
        cy.get('#Filter_ChildrenNum').should('be.visible');
        cy.get('#Filter_ChildrenNum').click();
        cy.get('#Filter_ChildrenNum').clear();
        cy.get('#Filter_DestinationId').select('Rome');
        cy.get('#Filter_ChildrenNum').type('-2');
        cy.get('.form-centered > .btn').click();
        cy.get('#Filter_ChildrenNum').invoke('val').should('equal','-2');
        cy.get('.field-validation-error').should('be.visible');
        cy.get('span').contains('Invalid number').invoke('text').should('equal','Invalid number');

    });

    // invalid destination input test
    it('invalid destination input',()=>{
        cy.get('#Filter_DestinationId').select('Select');
        cy.get('.form-centered > .btn').click();
        cy.get('.field-validation-error').should('be.visible');
        cy.get('span').contains('Destination Required').invoke('text').should('equal','Destination Required');


    });
   
});