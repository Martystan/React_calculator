describe("Calculator", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  })

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
  })

  it('should update the display of the running total', ()=>{
    cy.get('#number2').click();
    cy.get("#operator_add").click();
    cy.get('#number1').click();
    cy.get("#operator-equals").click();
    cy.get("#running-total").should("contain", "3")
  })

  it('should update the display with the result of the operation', ()=>{
    cy.get('#number2').click();
    cy.get("#operator_add").click();
    cy.get('#number1').click();
    cy.get("#operator-equals").click();
    cy.get('.display').should('contain', '3')

  })

  it('should chain multiple operations', ()=>{
    cy.get('#number2').click();
    cy.get("#operator_add").click();
    cy.get('#number1').click();
    cy.get("#operator-subtract").click();
    cy.get('#number1').click();
    cy.get("#operator-multiply").click();
    cy.get('#number2').click();
    cy.get("#operator-equals").click();
    cy.get('.display').should('contain', '4')
    
  })

  it('should output range of numbers', ()=>{
    cy.get("#number3").click();
    cy.get("#operator-subtract").click();
    cy.get("#number5").click();
    cy.get("#operator_add").click();
    cy.get('#number1').click();
    cy.get('#number1').click();
    cy.get('#number1').click();
    cy.get("#operator-multiply").click();
    cy.get('#number2').click();
    cy.get('#number2').click();
    cy.get('#number2').click();
    cy.get('#number2').click();
    cy.get("#number0").click();
    cy.get("#decimal").click();
    cy.get("#number3").click();
    cy.get("#operator-equals").click();
    cy.get('.display').should('contain', '2422012.6999999997')
  })

  it('should return undefined when dividing by 0', () => {
    cy.get("#number6").click();
    cy.get("#operator-divide").click();
    cy.get("#number0").click();
    cy.get("#operator-equals").click();
    cy.get(".display").should('contain', 'undefined')
  })
})