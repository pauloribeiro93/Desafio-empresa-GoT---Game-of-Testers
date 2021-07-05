/// <reference types="cypress"/>

let Chance = require('chance');
let chance = new Chance();

describe('Fluxo de Cadastro para um novo usuário', () => {
    beforeEach(() => {
        cy.visit('/')
        cy.intercept('POST', '/index.php').as('index')

    })
    it('Cadastrar um novo usuário', () => {

        cy.get('a.login').click()

        cy.get('#email_create').type(chance.email({ domain: "agilizei.com" }))

        cy.get('#SubmitCreate').click()
        cy.wait('@index')

        cy.get('#id_gender1').check()

        cy.get('#firstname').type('@valor')
        cy.get('#customer_firstname').type(chance.first({ gender: "male" }))
            .invoke('val').as('primeiroNome')

        cy.get('#lastname').type('@ultimoNome')
        cy.get('#customer_lastname').type(chance.last({ gender: "male" }))
            .invoke('val').as('ultimoNome')

        cy.get('#passwd').type(chance.string({ length: 5, casing: 'upper', alpha: true, numeric: true }), { log: false })

        cy.get('select#days').select('18')
        cy.get('#months').select('2')
        cy.get('#years').select('1992')

        cy.get('#newsletter').check()
        cy.get('#optin').check()


        cy.get('#company').type(chance.company())
        cy.get('#address1').type(chance.address({ short_suffix: true }))
        cy.get('#address2').type(chance.address())

        cy.get('#city').type(chance.city())
        cy.get('#postcode').type(chance.zip())
        cy.get('select#id_country').select('21')
        cy.get('select#id_state').select('4')

        cy.get('#other').type(chance.sentence({ words: 5 }))
        cy.get('#phone').type(chance.phone({ formatted: false, country: 'us' }))
        cy.get('#phone_mobile').type(chance.phone({ country: 'us', mobile: true }))
        cy.get('#alias').type('{selectAll}{backspace}').type(chance.email({ domain: "bootcampt6.com" }))
        cy.get('#submitAccount').click()

        cy.url().should('contain', 'my-account')
        cy.get('.info-account').should('contain', 'Welcome to your account')
    });
});