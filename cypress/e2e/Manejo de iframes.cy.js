import "cypress-iframe"
describe('FramesTest', () => {
  it('How to handle them', () => {
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
    cy.frameLoaded("#courses-iframe")//de esta manera nos enfocamos en el iframe 
    cy.iframe()//cambia al modo de iframe
      .find('a[href = "mentorship"]').eq(0)//porque hay mas de un link con este nombre
      .click()
  })
})