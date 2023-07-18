

describe('Verificar que el placeholder sea correcto', () => {
  it('place holder es correcto', () => {
    cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
    cy.get('input[placeholder="Search for Vegetables and Fruits"]')
  })
})
describe('Cuantos productos que empiecen con Ca hay', () => {
  it('hay un total de 4?', () => {
    cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
    cy.get('.search-keyword').type('ca')
    cy.get('.product:visible').should('have.length', 4)// el :visible es para que solo matchee con lo que podemos ver
    // en este caso si no ponemos visible la prueba falla 
  })
})

describe('Nombre de los productos', () => {
  it('producto numero uno su nombre es Cauliflower - 1 Kg', () => {
    cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
    cy.get('.search-keyword').type('ca')
    cy.get('.products > :nth-child(1) > .product-name').contains('Cauliflower - 1 Kg')
    //otra forma de hacerlo
    cy.get('.products').find('.product').eq(1).contains('Carrot - 1 Kg')
  })
})
describe('agregar al carrito ', () => {
  it('Zanahorias v1', () => {
    cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
    cy.get('.search-keyword').type('ca')
    cy.get('.product:visible').should('have.length', 4)
    cy.get('.products').find('.product:visible').should('have.length', 4)
    cy.get('.products').find('.product').eq(1).contains('ADD TO CART').click()
  })
  it('Zanahorias Iterando', () => {
    cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
    cy.get('.search-keyword').type('ca')
    cy.get('.products').find('.product').each(($el, index, $list) => {
      const textVeg = $el.find('h4.product-name').text()
      if (textVeg.includes('Carrot')) {
        cy.wrap($el).find('button').contains('ADD TO CART').click()
      }
    })
  })
})

describe('trabajando con el asincronismo manualmente', () => {
  it('Nombre del logo', () => {
    cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
    cy.get('.brand').then(function (logoElement) {
      cy.log(logoElement.text())
    })
  })
})
//bien lo que se hace aca es que se busca el elemento .brand,
// luego el .then lo que hace es, bien lo encontre, que hago ahora?
// lo que encuentre lo guarda en logoElement, luego imprimimos lo que encontro

describe('usando alias para no repetir', () => {
  it('productos', () => {
    cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
    cy.get('.products').as('productos')
    cy.get('@productos').find('.product').should('have.length', 30)

  })
})

describe('User journey', () => {
  it('Comprar dos productos', () => {
    cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
    cy.get('.search-keyword').type('ca')
    cy.get('.products').find('.product').each(($el,index,$list)=>{
      const textVeg = $el.find('h4.product-name').text()
      if (textVeg.includes('Carrot')){
        cy.wrap($el).find('button').contains('ADD TO CART').click()
      }else if(textVeg.includes('Capsicum')){
        cy.wrap($el).find('button').contains('ADD TO CART').click()
      }
    })
    cy.get('.cart-icon').click()
    cy.get('button').contains('PROCEED TO CHECKOUT').click()
    cy.get('button').contains('Place Order').click()
    cy.get('.chkAgree').click()
    cy.get('button').contains('Proceed').click()
  })
})