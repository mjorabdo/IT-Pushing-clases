export class TodoListPage{


    constructor(){

     this.allButton = '#all';
     this.completedButton = '#completed';
     this.activeButton= '#active';
     this.removeButton = '#remove'
       
    }

    checkAllButton(){
        cy.get(this.allButton)
    };

    checkCompletedButton(){
        cy.get(this.completedButton)
    };
    
    checkActiveButton(){
        cy.get(this.activeButton)
    };

    checkRemoveButton(){
        cy.get(this.removeButton)
    }
}