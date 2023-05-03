/// <reference types="cypress" />

describe('Funcionalidade Página de produtos', () => {

    beforeEach(() => {
        cy.visit('produtos')
    });

    it('Deve selecionar um produto da lista', () => {
        cy.get('[class="product-block grid"]')
            //.first()
            //.last()
            .eq(5)
            .click()
    })


    it('Deve adicionar um produto ao carrinho', () => {
        var quantidade = 6
        cy.get('[class="product-block grid"]')
            .contains('Abominable Hoodie').click()
        cy.get('.button-variable-item-M').click()
        cy.get('.button-variable-item-Blue').click()
        cy.get('.input-text').clear().type(quantidade)
        cy.get('.single_add_to_cart_button').click()
        cy.get('.woocommerce-message').should('contain', quantidade + ' × “Abominable Hoodie” foram adicionados no seu carrinho.')

    });


    it('Deve adicionar produtos ao carrinho - Usando comando customizado', () => {
        cy.addProdutos('Aero Daily Fitness Tee', 'M', 'Black', 2)
        
    });

   it('Deve adicionar produtos ao carrinho - Usando comando customizado', () => {
    cy.addProdutos('Ariel Roll Sleeve Sweatshirt', 'L', 'Green', 1)
    
   });



        
});
