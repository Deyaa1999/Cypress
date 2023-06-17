// <reference type='Cypress'/>
describe('', () => {
    it('', () => {
       cy.visit("https://automationteststore.com/")
       cy.get("section[id='featured'] div[class='thumbnails list-inline'] div:nth-child(1) div:nth-child(2) a:nth-child(1) img:nth-child(1)").click()
       cy.get('.cart').click()
       cy.get('#cart_checkout2').click()
    });
    
});