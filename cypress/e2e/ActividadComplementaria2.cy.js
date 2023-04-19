/// <reference types="cypress" />
describe("Actividad complementaria 2", () =>{
    const numero = Math.floor(Math.random() * 1000)
    it('Actividad complementaria 2', () =>{
        cy.visit('https://pushing-front.vercel.app/');
        cy.get('input#user').type(`pushingit${numero}`); 
        cy.get('input[name="user"]').clear()
        cy.get('#user').type(`pushingit${numero}`);
        cy.get('#pass').type('123456!');
        cy.get('input[name="radio-:r3:"').check({force:true})
        cy.get('select[name="day"]').select('20')
        cy.get('#month').select('September')
        cy.get('select[name="year"]').select(10)
        cy.get('#submitForm').click()
        cy.wait(5000)
    });
});