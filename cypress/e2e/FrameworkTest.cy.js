

describe('template spec', () => {
  beforeEach(function(){
    cy.visit("https://rahulshettyacademy.com/angularpractice/")
  })
  before(function(){
    cy.fixture('example')//de esta manera llamamos al fixture
      .then(function(data){
        this.data = data
      })//de esta manera lo que hacemos es guardar el fixture en data
  })
  it('ingresa datos y verificacion ', function() {
  
    cy.get(':nth-child(1) > .form-control').type(this.data.name)
    cy.pause()//si queremos que luego de cierto paso se pause el test agregamos esto
    cy.get(':nth-child(2) > .form-control').type(this.data.email)
    cy.get(':nth-child(2) > .form-control').should("have.value",this.data.email)
    cy.get('#exampleFormControlSelect1').select('Male').should('have.value', 'Male')
    cy.get(':nth-child(1) > .form-control').should('have.value',this.data.name).and('have.attr','minlength', '2')//con esto verificamos que tenga el atributo de minimo dos 
    cy.get('#inlineRadio3').should('be.disabled')//verificamos que este desactivada esta opcion
  });
})