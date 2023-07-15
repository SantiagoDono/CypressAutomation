describe('CheckBoxes', () => {
  it('seleccionamos la opcion 1', () => {
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
    cy.get('#checkBoxOption1').check().should('be.checked').and('have.value', 'option1') // lo que hace es "clickearlo", pero ha yque usar este que es especifico par esto
    cy.get('#checkBoxOption1').uncheck().should('not.be.checked') // lo deselecciona
    cy.get('input[type ="checkbox"]').check(['option1','option2']).should('be.checked')

  })
})

describe('static dropdown', () => {
  it.only('como interactuar con estas listas', () => {
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
    cy.get('#dropdown-class-example').select('option2').should('have.value','option2') //se tiene que pasar lo que queremos seleccionar es decir, si le damos solo select se rompe
  })
})