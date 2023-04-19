describe("Actividad complementaria 3", () =>{
	
    it('Actividad complementaria 3', () =>{
        cy.visit('');
        cy.xpath('//input[@id="user"]').click()
        cy.xpath('//input[@id="user"]').type(`pushingit`);
        cy.xpath('//input[@type="password"]').type('123456!');
        cy.xpath('//button[contains(@type, "sub")]').click()
        cy.xpath('//a[@id="todolistlink"]').click()
        cy.xpath("//input[starts-with(@id,'ta')]").type("tarea 1")
        cy.xpath('//button[@type="submit" and @id="sendTask"]').click()
        cy.xpath('//p[text() = "tarea 1"]').click()
    });
});