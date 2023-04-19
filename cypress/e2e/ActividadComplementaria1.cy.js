/// <reference types="cypress" />

describe("Actividad Complementaria 1", () => {

    const numeroRandom = Math.floor(Math.random() * 1000);

    it('Actividad complementeria 1', () =>{
        cy.visit('/');
        cy.get('#user').type('jorabdo');
        cy.get('#user').type (`jorabdo${numeroRandom}`);
        cy.get('#pass').type('123456!'), {log:false};
        cy.get("[value='Male']").check({force:true});
        cy.get('#day').select('1');
        cy.get('#month').select('January')
        cy.get('#year').select('1990')
        cy.get('#submitForm').click();
        cy.get('#todolistlink')


        

        //crear un test que permita registrarse en la pagina!
        //Recorda usar npx cypress open para abrir la interfaz de usuario
        //Para seleccionar el genero utiliza el siguiente selector cy.get("[value='Male']") //Female //Other
    });
})