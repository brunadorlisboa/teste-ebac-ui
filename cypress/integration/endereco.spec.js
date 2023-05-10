/// <reference types="cypress" />
import enderecoPage from '../support/page-objects/endereco.page';
import EnderecoPage from '../support/page-objects/endereco.page'
const dadosEndereco = require('../fixtures/endereco.json')

describe('Funcionalidade Endereços - Faturamento e Entrega', () => {
    beforeEach(() => {
        cy.visit('minha conta')
        cy.fixture('perfil').then(dados => {
            cy.login(dados.usuario, dados.senha)
        })
    });

    it('Deve fazer cadastro de faturamento com sucesso', () => {
        enderecoPage.editarEnderecoFaturamento('Sophia', 'Lisboa', 'Bukinha', 'Brasil', 'Av Fagundes',
            '519', 'Diadema', 'Sao Paulo', '09950300', '55602040', 'sophiadlf@gmail.com')
        cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso.')


    });

    it('Deve fazer cadastro de faturamento com sucesso - usando arquivo de dados', () => {
        enderecoPage.editarEnderecoFaturamento(
            dadosEndereco[2].nome,
            dadosEndereco[2].sobrenome,
            dadosEndereco[2].empresa,
            dadosEndereco[2].pais,
            dadosEndereco[2].endereco,
            dadosEndereco[2].numero,
            dadosEndereco[2].cidade,
            dadosEndereco[2].estado,
            dadosEndereco[2].cep,
            dadosEndereco[2].telefone,
            dadosEndereco[2].email
        )
        cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso.')

                
    });

    it.only('Deve fazer cadastro de entrega com sucesso', () => {
        cy.get('.woocommerce-MyAccount-navigation-link--edit-address > a').click()
        cy.get(':nth-child(2) > .title > .edit').click()
        cy.get('#select2-search__field').click().type(pais).get('[aria-selected="true"]').click()


        
          
        
    });

});


