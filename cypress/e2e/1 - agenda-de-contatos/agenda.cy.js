/// <reference types="cypress" />

describe('Testes para a agenda de contatos', () => {
    beforeEach(() => {cy.visit('https://ebac-agenda-contatos-tan.vercel.app')})

    it('Deve adicionar um contato à lista', () => {
        cy.get('input[type="text"]').type('teste adicionar')
        cy.get('input[type="email"]').type('testeadicionar@gmail.com')
        cy.get('input[type="tel"]').type('11 11111111')
        cy.get('button.adicionar').click()

        cy.get('.contato').get('.sc-eDDNvR > li').should('contain.text', 'teste adicionar')
        cy.get('.contato').get('.sc-eDDNvR > li').should('contain.text', 'testeadicionar@gmail.com')
        cy.get('.contato').get('.sc-eDDNvR > li').should('contain.text', '11 11111111')
    })

    it('Deve alterar as informações do contato criado na lista', () => {
        cy.get('button.edit').eq(3).click()

        cy.get('input[type="text"]').clear()
        cy.get('input[type="email"]').clear()
        cy.get('input[type="tel"]').clear()

        cy.get('input[type="text"]').type('Teste Editar')
        cy.get('input[type="email"]').type('testeeditar@gmail.com')
        cy.get('input[type="tel"]').type('00 00000000')
        cy.get('button.alterar').click()

        cy.get('.contato').get('.sc-eDDNvR > li').should('contain.text', 'Teste Editar')
        cy.get('.contato').get('.sc-eDDNvR > li').should('contain.text', 'testeeditar@gmail.com')
        cy.get('.contato').get('.sc-eDDNvR > li').should('contain.text', '00 00000000')
    })

    it('Deve remover o contato criado da lista', () => {
        cy.get('button.delete').eq(3).click()
        cy.get('.contato').should('have.length', 3)
    })
})