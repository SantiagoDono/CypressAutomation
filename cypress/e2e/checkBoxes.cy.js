describe('CheckBoxes', () => {
  it('seleccionamos la opcion 1', () => {
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
    cy.get('#checkBoxOption1').check().should('be.checked').and('have.value', 'option1') // lo que hace es "clickearlo", pero ha yque usar este que es especifico par esto
    cy.get('#checkBoxOption1').uncheck().should('not.be.checked') // lo deselecciona
    cy.get('input[type ="checkbox"]').check(['option1', 'option2']).should('be.checked')

  })
})

describe('static dropdown', () => {
  it('como interactuar con estas listas', () => {
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
    cy.get('#dropdown-class-example').select('option2').should('have.value', 'option2') //se tiene que pasar lo que queremos seleccionar es decir, si le damos solo select se rompe
  })
})

describe('dynamic dropdown', () => {
  it('interactuando con esto', () => {
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
    cy.get('#autocomplete').type('india')
    cy.get('.ui-menu-item').each(($el, index, $list) => {
      if ($el.text() === "India") {
        $el.click()
      }
    })
    cy.get('#autocomplete').should('have.value', 'India')//verificar que lo que hicimos es correcto
  })

})

describe('visible-invisible y radio buttons', () => {
  it('interaccion y verificacion de visibilidad', () => {
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
    cy.get('#displayed-text').should('be.visible')
    cy.get('#hide-textbox').click()
    cy.get('#displayed-text').should('not.be.visible')
    cy.get('#show-textbox').click()
    cy.get('#displayed-text').should('be.visible')
  })
  it('estos son muy similares a los checkbuttons', () => {
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
    cy.get('[value="radio2"]').check().should('be.checked')
  })
})
