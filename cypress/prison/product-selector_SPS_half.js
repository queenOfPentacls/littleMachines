//GLOBAL VARIABLES 
import {
        PRICE_MEM, 
        NEXT, 
        CART_BTN, 
        MEMBERSHIP,
        BACK_BTN,
        PLUS_BTN,
        PRICE_CON,
		COOKIES_CON,	
		COLOR_CON,
		FOOTER,
		CART_ITEM,
		CART_TOTAL,
		QUANTITY} from '../../globals'

		
describe('SELECT YOUR HARDWARE - SUPERPOD SILVER', () => {
  it('TEST SCENERIO 1.X', () => { 
	//Select Hardware
    cy.visit('/')
	cy.get(COOKIES_CON).contains('I Agree').click()
    cy.get(COLOR_CON).contains('Silver').click()
    cy.get(PRICE_CON).contains('$99')
	cy.get(PRICE_CON).contains('$159')
    cy.get(NEXT).click()
	//Customize hardware
    cy.wait(500)
    cy.url().should('include', '/customize-hardware')
	cy.get('[alt="3 SuperPod Silver"]')
    cy.get('[name="3"]').should('be.checked')
	cy.get('[for="1"]').contains('$0')
	cy.get('[for="2"]').contains('$99')
	cy.get('[for="3"]').contains('$198')
	cy.get('[for="4"]').contains('$297')
	cy.get('.eGxgJw').contains('$396')
	cy.get(FOOTER).contains('SuperPod (Silver)')
	cy.get(FOOTER).contains('3')
	cy.get('[for="2"]').click()
	cy.get(FOOTER).contains('2')
	cy.get(".eKlRrd>button").eq(1).click()
	cy.get(FOOTER).contains('3')
    cy.get(NEXT).click()
	//Customize membership - 2 year
    cy.wait(500)
    cy.url().should('include', '/customize-membership')
    cy.get('[name="710-0052-AN"]').should('be.checked')
	cy.get(FOOTER).contains('SuperPod (Silver) x3')
	cy.get(FOOTER).contains('2 year membership')
	cy.get(CART_BTN).contains('$377').should('not.be.disabled')
	
	//testing all membership prices
	
	//1 year
	cy.clearCookies()
	cy.visit('/')
	cy.get(NEXT).click()
	cy.wait(500)
	cy.get('[for="4"]').click()
	cy.get(NEXT).click()
	cy.get(MEMBERSHIP).contains('1 year').click()
	cy.get(FOOTER).contains('SuperPod (Silver) x4')
	cy.get(FOOTER).contains('1 year membership')
	cy.get(CART_BTN).contains('$396')
	//3 year
	cy.clearCookies()
	cy.visit('/')
	cy.get(NEXT).click()
	cy.wait(500)
	cy.get('[for="2"]').click()
	cy.get(NEXT).click()
	cy.get(MEMBERSHIP).contains('3 year').click()
	cy.get(FOOTER).contains('SuperPod (Silver) x2')
	cy.get(FOOTER).contains('3 year membership')
	cy.get(CART_BTN).contains('$348')
/*
	//Cart
	cy.wait(500)
	cy.url().should('include', 'region=US')
	cy.get(CART_ITEM).contains('2 Year - HomePass Membership')
	cy.get(CART_ITEM).contains('3 SuperPod')
	cy.get(CART_ITEM).contains('Silver')
	cy.get(CART_TOTAL).contains('377.00')
	cy.get(CART_TOTAL).contains('$')
	cy.contains('Proceed to checkout').click()
	//Checkout
	cy.wait(500)
	cy.url().should('include', '/checkout')
	cy.get('[name="terms"]').click({force: true})
	cy.get('[name="autorenew"]').click({force: true})
	cy.get('#billing_first_name').type('Mind', {force: true})
	cy.get('#billing_last_name').type('Body', {force: true})
	cy.get('#billing_phone').type('7777777777', {force: true})
	cy.get('#billing_email').type('cami+soul@graveflex.com', {force: true})
	cy.get('[value="United States"]')
	cy.get('[name="billing_address_1"]').type('10141 ', {force: true})
	cy.get('body').click({force: true})
	cy.get('[name="billing_address_1"]').type('Daria Pl', {force: true})
	cy.wait(10)
	cy.get('[title="10141 Daria Pl"]').click({force: true})
	cy.get('.cart_item').contains('2 Year - HomePass Membership')
	cy.get('.cart_item').contains('3 SuperPod (Silver) ')
	cy.get('.order-total').contains('$')
	cy.get('.order-total').contains('377.00')
	
	//plugin to fill out stripe elements
	cy.fillElementsInput('cardNumber', '4242424242424242');
	cy.fillElementsInput('cardExpiry', '1221')
    cy.fillElementsInput('cardCvc', '777')
	
	
	//BUGS OUT ALWAYS IF NOT IN PRODUCTION
	
	/*
	//Really weird hack to check cart values because Cypress times-out when accessing page normally, not super reliable as a test
	cy.get(CART_BTN).should('have.attr','href').and('include','region=US').then((href) => {
       cy.request(href).its('body').should('include', '"US,Silver,default","quantity":3')
     })
	 cy.get(CART_BTN).should('have.attr','href').and('include','region=US').then((href) => {
		cy.request(href).its('body').should('include', '2 Year - HomePass Membership')
     })
	 cy.get(CART_BTN).should('have.attr','href').and('include','region=US').then((href) => {
		cy.request(href).its('body').should('include', '377.00')
     })
	*/

  })
})

