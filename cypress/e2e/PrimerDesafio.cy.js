/// <reference types="cypress" />

describe("Primer desafio", () => {

    const numeroRandom = Math.floor(Math.random() * 1000);

    it('Primer desafio', () =>{
        cy.visit('/');
        cy.get('input#user').type('mariaabdo');
        cy.get('#user').type (`mariaabdo${numeroRandom}`);
        cy.get('#pass').type('123hola!'), {log:false};
        cy.get('[value="Female"]').check({force:true});
        cy.get('select#day').select('9');
        cy.get('#month').select('November');
        cy.get('select#year').select('1990');
        cy.get('#submitForm').click();
        cy.get('a#todolistlink').click();
        cy.get('[cy-get="task"]').type('Primer Desafio');
        cy.get('div').children('button#sendTask').click();
        cy.get('button#completed').parent('div').click();

    });
})

