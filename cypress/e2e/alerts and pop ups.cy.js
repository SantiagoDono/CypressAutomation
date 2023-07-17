describe('Alerts and pop ups', () => {
  it('alerts handling ', () => {
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
    cy.get('#confirmbtn').click()
    cy.on('window:confirm', (str) => {
      expect(str).to.equal('Hello , Are you sure you want to confirm?')
    })
    cy.get('#alertbtn').click()
    cy.on('window:alert', (str) => {
      expect(str).to.equal('Hello , share this practice page and share your knowledge') //str es string no te deja poner string falla el test 
    })
  })
})
describe('Manejo de Paginas que se abren en nuevas pestañas', () => {
  it('manejo de pestaña', () => {
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
    cy.get('#opentab').invoke('removeAttr', 'target').click()
    cy.go("back")
    cy.url().should("include", "/AutomationPractice")

  })
})

describe("Manejo de tablas", () => {
  it("buscar un elemento en particular", () => {
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
    cy.get("tr td:nth-child(2)").each(($el, index, $list) => { // se busca dentro de la tabla la columna que queremos, iteramos para conseguir todos los datos 
      const text = $el.text()//guardamos el texto conseguido en esta variable
      if (text.includes("Python")) { //buscamos el que tenga esto
        cy.get("tr td:nth-child(2)").eq(index).next().then(function (price) {//aca arranca lo complejo, se busca utilizar la funcion.next que lo que hace es padar a la columna de al lado, pero esto solo se puede hacer con el cy.get por lo cual buscamos nuevamente la columna en la que estamos, en el eq buscamos el elemento actual con index, ahi colocamos el next, que lo que hace es saltar al primo, luego guardamos esto en la variable price y chequeamos
          const priceText = price.text()
          expect(priceText).to.equal("25")
        })
      }
    })

  })
})
describe("mose hover", () => {
  it("Se maneja con jquery functions", () => {
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
    cy.get("div.mouse-hover-content").invoke("show")//oficia de hover
    cy.contains("Top").click()
    cy.url().should("include", "top")
  })
})
describe("manejo de nuevas ventanas", () => {
    it.only("Como conseguir la url e interactuar con la paginado", () => {
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
    cy.get("#opentab").then(function (el){//para resolver la promise usamos then que es para cuando funciona y lo guardamos en el

      const url =el.prop('href')//prop es una funcion de jquery lo que hace es obtener el atributo que se le pasa por parametro
      cy.visit(url)
      cy.origin(url,()=>{
        cy.url().should("include",'qaclickacademy')
      })
    })
  })
})