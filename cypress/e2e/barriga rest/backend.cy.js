/// <reference types="cypress"/>


describe('Testes API cypress' , () => {

    let token

    before(() => {
        cy.getToken('ariana@teste.com', 'barriga123')
        .then(tkn => {
            token = tkn
        })


    })

    it('Criar conta' , () => {
                cy.request({
                    method: 'POST',
                    headers: { Authorization : `JWT ${token}`} ,
                    url: 'https://barrigarest.wcaquino.me/contas' , 
                    body: {
                        nome: 'conta via rest'
                    }

            }).as('response')



            cy.get('@response').then(res => {
                expect(res.status).to.be.equal(201)
                expect(res.body).to.have.property('id')
                expect(res.body).to.have.property('nome', 'conta via rest')
        
        })


    })

})


