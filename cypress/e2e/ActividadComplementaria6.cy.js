/// <reference types="cypress"/>

import { LoginPage } from "../support/pages/loginPage";
import { TodoListPage } from "../support/pages/todoListPage";

describe('Pages object model', () => {
    let data;
    const loginPage = new LoginPage();
    const todoListPage = new TodoListPage();
  
before('Before', () => {
        cy.fixture('fixture').then(datos => {
            data = datos;
        });
    });

beforeEach("Actividad complementaria 6", () => {
    cy.visit('');
    loginPage.iniciaLogin()
    loginPage.writeUser(data.usuario.usuario); 
    loginPage.writePass(data.usuario.password);
    loginPage.clickLoginButton();
    cy.xpath(`//h2[starts-with(@id,'user_pushingit')]`).should('exist');
    cy.get('#todolistlink').click();

});

  it("deberia verificar que los botones existen", () =>{
    cy.get(todoListPage.checkAllButton).should('exist');
    cy.get(todoListPage.checkCompletedButton).should('exist');
    cy.get(todoListPage.checkActiveButton).should('exist');
    cy.get(todoListPage.checkRemoveButton).should('exist')
    
});


})




