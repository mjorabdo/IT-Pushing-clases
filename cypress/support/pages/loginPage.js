export class LoginPage {

    constructor() {
       
        // this.iniciaLogin = '#registertoggle';
        this.userInput = '#user';
        this.passInput = "#pass";
        this.loginButton = "#submitForm";
       
       
    }

    iniciaLogin(){

         cy.get('#registertoggle').dblclick()
    }

    writeUser(usuario) {
        cy.get(this.userInput).type(usuario);
    };

    writePass(contrasena) {

        cy.get(this.passInput).type(contrasena)
    };

    clickLoginButton(){
        cy.get(this.loginButton).click()
    }
 

};