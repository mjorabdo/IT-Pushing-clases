/// <reference types="cypress"/>

describe('desafio prueba', ()=>{

const numero= Math.ceil(Math.random() * 1000);

it('desfio prueba', ()=>{

    cy.visit("/");
    cy.get('input#user').type('jorgelinaaabdo');
    cy.get('.password').type('1234hola!', {log:false});
    cy.contains('Female', {matchCase:false}).click();
    cy.get('div').find('select#day').select('9');
    cy.get('div').find('select#month').select('November');
    cy.get('div').find('select#year').select('1991');
    cy.contains('button', 'Register', {matchCase:false}).click();
    cy.get('a#todolistlink').click();
    cy.get('input[cy-get="task"]').type('primer desafio');
    cy.get('div').find('button#sendTask').click();
    cy.get('[class="chakra-text css-8atqhb"').click()
    cy.wait(10000);
})

})