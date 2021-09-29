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
		HOMEPAGE,
		EMAIL,
		QUANTITY} from '../../../globals'
    

describe('SELECT YOUR HARDWARE - SUPERPOD SILVER', () => {
  it('TEST ORDER: 3x SUPERPOD SILVER 2 YEAR MEMBERSHIP', { browser: 'electron' }, () => {
	//Store Page
	cy.visit('/')	
	cy.wait(1000)
	cy.get('.store-nav-wrapper>a').eq(0).click()
	//Select Hardware
	cy.url().should('include', '/select-hardware')
	cy.wait(500)
	cy.contains('I Agree').click()
    cy.get(COLOR_CON).contains('Silver').click()
    cy.get(PRICE_CON).contains('$99')
	cy.get(PRICE_CON).contains('$159')
    cy.get(NEXT).click()
	//Customize hardware
    cy.wait(500)
    cy.url().should('include', '/customize-hardware')
	cy.contains("How many SuperPods do you need?")
    //cy.get('[name="3"]').should('be.checked')
	cy.get('[name="3"]').click({force: true})
	cy.get('[for="1"]').contains('$0')
	cy.get('[for="2"]').contains('$99')
	cy.get('[for="3"]').contains('$198')
	cy.get('[for="4"]').contains('$297')
	cy.get('.eGxgJw').contains('$396')
	cy.get(FOOTER).contains('SuperPod (Silver)')
	cy.get(FOOTER).contains('3')
    cy.get(NEXT).click()
	//Customize membership
    cy.wait(500)
    cy.url().should('include', '/customize-membership')
    //cy.get('[name="710-0052-AN"]').should('be.checked').click({force: true})
	cy.get('[name="710-0052-AN"]').click({force: true})
	cy.get(FOOTER).contains('SuperPod (Silver) x3')
	cy.get(FOOTER).contains('2 year membership')
	cy.get(CART_BTN).contains('$377').should('not.be.disabled').click()
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
	cy.url().should('include', 'checkout')
	cy.get('[name="terms"]').click({force: true})
	cy.get('[name="autorenew"]').click({force: true})
	cy.get('#billing_first_name').clear({force: true}).type('Little', {force: true})
	cy.get('#billing_last_name').clear({force: true}).type('Machine', {force: true})
	cy.get('#billing_phone').clear({force: true}).type('7777777777', {force: true})
	cy.get('#billing_email').clear({force: true}).type(EMAIL, {force: true})
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
	cy.contains("Place order").click()
	//Confirmation	
	cy.wait(10000)
	cy.url().should('include', 'order-received')	
	cy.contains("Thank you for your order")
	cy.get('.woocommerce-order').contains('Little,')
	cy.get('.woocommerce-order-total').contains('Your order total is')
	cy.get('.woocommerce-order-total').contains('377.00')
	cy.get('.woocommerce-order-total').contains('$')
	cy.get('.woocommerce-order-details').contains('HomePass Membership')
	cy.get('.woocommerce-order-details').contains('SuperPod 3 pack (Silver)')
  })

it('TEST ORDER: 3x SUPERPOD SILVER 1 YEAR MEMBERSHIP', { browser: 'electron' }, () => {
	cy.clearCookies()
	//Store Page
	cy.visit('/')	
	cy.wait(1000)
	cy.get('.store-nav-wrapper>a').eq(0).click()
	//Customize Hardware
	cy.wait(500)
	cy.contains('I Agree').click()
    cy.get(COLOR_CON).contains('Silver').click()
    cy.get(PRICE_CON).contains('$99')
	cy.get(PRICE_CON).contains('$159')
    cy.get(NEXT).click()
	//Customize hardware
    cy.wait(500)
    cy.url().should('include', '/customize-hardware')
	cy.contains("How many SuperPods do you need?")
	cy.get('[alt="3 SuperPod Silver"]')
    //cy.get('[name="3"]').should('be.checked')
	cy.get('[name="3"]').click({force: true})
	cy.get('[for="1"]').contains('$0')
	cy.get('[for="2"]').contains('$99')
	cy.get('[for="3"]').contains('$198')
	cy.get('[for="4"]').contains('$297')
	cy.get('.eGxgJw').contains('$396')
	cy.get(FOOTER).contains('SuperPod (Silver)')
	cy.get(FOOTER).contains('3')
    cy.get(NEXT).click()
	//Customize membership
    cy.wait(500)
    cy.url().should('include', '/customize-membership')
    //cy.get('[name="710-0052-AN"]').should('be.checked')
	cy.get('[name="710-0031-00"]').click({force: true})
	cy.get(FOOTER).contains('SuperPod (Silver) x3')
	cy.get(FOOTER).contains('1 year membership')
	cy.get(CART_BTN).contains('$297').should('not.be.disabled').click()
	//Cart
	cy.wait(500)
	cy.url().should('include', 'region=US')
	cy.get(CART_ITEM).contains('1 Year - HomePass Membership')
	cy.get(CART_ITEM).contains('3 SuperPod')
	cy.get(CART_ITEM).contains('Silver')
	cy.get(CART_TOTAL).contains('297.00')
	cy.get(CART_TOTAL).contains('$')
	cy.contains('Proceed to checkout').click()
	//Checkout
	cy.wait(500)
	cy.url().should('include', 'checkout')
	cy.get('[name="terms"]').click({force: true})
	cy.get('[name="autorenew"]').click({force: true})
	cy.get('[value="United States"]')
	cy.get('[name="billing_address_1"]').type('10141 ', {force: true})
	cy.get('body').click({force: true})
	cy.get('[name="billing_address_1"]').type('Daria Pl', {force: true})
	cy.wait(10)
	cy.get('[title="10141 Daria Pl"]').click({force: true})
	cy.get('.cart_item').contains('1 Year - HomePass Membership')
	cy.get('.cart_item').contains('3 SuperPod (Silver) ')
	cy.get('.order-total').contains('$')
	cy.get('.order-total').contains('297.00')
	
	//plugin to fill out stripe elements
	cy.fillElementsInput('cardNumber', '4242424242424242');
	cy.fillElementsInput('cardExpiry', '1221')
    cy.fillElementsInput('cardCvc', '777')
	cy.contains("Place order").click()
	//Confirmation	
	cy.wait(10000)
	cy.url().should('include', 'order-received')	
	cy.contains("Thank you for your order")
	cy.get('.woocommerce-order').contains('Little,')
	cy.get('.woocommerce-order-total').contains('Your order total is')
	cy.get('.woocommerce-order-total').contains('297.00')
	cy.get('.woocommerce-order-total').contains('$')
	cy.get('.woocommerce-order-details').contains('HomePass Membership')
	cy.get('.woocommerce-order-details').contains('SuperPod 3 pack (Silver)')

})
it('TEST ORDER: 3x SUPERPOD SILVER 3 YEAR MEMBERSHIP', { browser: 'electron' }, () => {
	cy.clearCookies()
	//Store Page
	cy.visit('/')	
	cy.wait(1000)
	cy.get('.store-nav-wrapper>a').eq(0).click()
	//Customize Hardware
	cy.wait(500)
	cy.contains('I Agree').click()
    cy.get(COLOR_CON).contains('Silver').click()
    cy.get(PRICE_CON).contains('$99')
	cy.get(PRICE_CON).contains('$159')
    cy.get(NEXT).click()
	//Customize hardware
    cy.wait(500)
    cy.url().should('include', '/customize-hardware')
	cy.contains("How many SuperPods do you need?")
	cy.get('[alt="3 SuperPod Silver"]')
    //cy.get('[name="3"]').should('be.checked')
	cy.get('[name="3"]').click({force: true})
	cy.get('[for="1"]').contains('$0')
	cy.get('[for="2"]').contains('$99')
	cy.get('[for="3"]').contains('$198')
	cy.get('[for="4"]').contains('$297')
	cy.get('.eGxgJw').contains('$396')
	cy.get(FOOTER).contains('SuperPod (Silver)')
	cy.get(FOOTER).contains('3')
    cy.get(NEXT).click()
	//Customize membership
    cy.wait(500)
    cy.url().should('include', '/customize-membership')
	cy.get('[name="710-0060-AN"]').click({force: true})
	cy.get(FOOTER).contains('SuperPod (Silver) x3')
	cy.get(FOOTER).contains('3 year membership')
	cy.get(CART_BTN).contains('$447').should('not.be.disabled').click()
	//Cart
	cy.wait(500)
	cy.url().should('include', 'region=US')
	cy.get(CART_ITEM).contains('3 Year - HomePass Membership')
	cy.get(CART_ITEM).contains('3 SuperPod')
	cy.get(CART_ITEM).contains('Silver')
	cy.get(CART_TOTAL).contains('447.00')
	cy.get(CART_TOTAL).contains('$')
	cy.contains('Proceed to checkout').click()
	//Checkout
	cy.wait(500)
	cy.url().should('include', 'checkout')
	cy.get('[name="terms"]').click({force: true})
	cy.get('[name="autorenew"]').click({force: true})
	cy.get('[value="United States"]')
	cy.get('[name="billing_address_1"]').type('10141 ', {force: true})
	cy.get('body').click({force: true})
	cy.get('[name="billing_address_1"]').type('Daria Pl', {force: true})
	cy.wait(10)
	cy.get('[title="10141 Daria Pl"]').click({force: true})
	cy.get('.cart_item').contains('3 Year - HomePass Membership')
	cy.get('.cart_item').contains('3 SuperPod (Silver) ')
	cy.get('.order-total').contains('$')
	cy.get('.order-total').contains('447.00')
	
	//plugin to fill out stripe elements
	cy.fillElementsInput('cardNumber', '4242424242424242');
	cy.fillElementsInput('cardExpiry', '1221')
    cy.fillElementsInput('cardCvc', '777')
	cy.contains("Place order").click()
	//Confirmation	
	cy.wait(10000)
	cy.url().should('include', 'order-received')	
	cy.contains("Thank you for your order")
	cy.get('.woocommerce-order').contains('Little,')
	cy.get('.woocommerce-order-total').contains('Your order total is')
	cy.get('.woocommerce-order-total').contains('447.00')
	cy.get('.woocommerce-order-total').contains('$')
	cy.get('.woocommerce-order-details').contains('HomePass Membership')
	cy.get('.woocommerce-order-details').contains('SuperPod 3 pack (Silver)')

})
})

