
/// <reference types = "Cypress" />

describe('My First test suite', () => {

    it(' My first test case', () => {

        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.get('.search-keyword').type('ca')
        cy.wait(2000)

        cy.get('.product').should('have.length',5)

        cy.get('.product:visible').should('have.length', 4)
       // cy.contains('Carrot').get('[type="button"]')
        cy.get('.products').find('.product').should('have.length',4)
        cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click()


        cy.get('.products').find('.product').each(($el, index, $list) => {

            const textveg = $el.find('h4.product-name').text()

            if (textveg.includes('Cashews'))
            {
                $el.find('button')
            }
        })   

    })


})
