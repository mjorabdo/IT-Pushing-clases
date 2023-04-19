/// <reference types="cypress" />


describe('Actividad complementaria 4', () => {
    
    let fixtureActividad


before("actividad complementaria 4", ()=>{
    cy.fixture('fixture').then(data=>{
        fixtureActividad = data
})
})

beforeEach('actividad complementaria', ()=>{
    cy.visit('/');
    cy.get('#registertoggle').dblclick()
})

it('Deberia validar un mensaje de error al colocar un usuario inexistente', () => {
        cy.get('#user').type(fixtureActividad.username);
        cy.get('#pass').type(fixtureActividad.password); //la contraseña debe ser valida por el sistema
        cy.get('#submitForm').click();
        cy.get('#errorMessage').should('have.text', fixtureActividad.mensajeError)
    });

})