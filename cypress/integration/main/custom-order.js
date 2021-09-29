//GLOBAL VARIABLES 
import {
        PRICE_MEM, 
        NEXT, 
        CART_BTN, 
        BACK_BTN,
        PLUS_BTN,
        PRICE_CON,
		COOKIES_CON,	
		COLOR_CON,
		FOOTER,
		CART_ITEM,
		CART_TOTAL,
		HOMEPAGE,
		EMAIL
		} from '../../globals'

import {
		QUANTITY,
		MEMBERSHIP,
		PROMO,
		TAX,
		MODEL_TYPE,
		PRICE_BEFORE_PROMO,
		PRICE_AFTER_PROMO,
		CALCULATED_PRICE,
		} from '../../customOrderSettings'
    

describe('CUSTOM ORDER', () => {
  it('QUANTITY: ' + QUANTITY + ' / ' + 'MODEL: ' + MODEL_TYPE + ' / ' + 'MEMBERSHIP: '+ MEMBERSHIP + ' / ' + 'PROMO: ' +  PROMO + ' / ' + 'TAX: ' + TAX + "/ EXPECTED FINAL PRICE (I'M BAD AT MATH SO COULD BE WRONG...): " + "$" + CALCULATED_PRICE.toFixed(2),  { browser: 'electron' }, () => {
	Cypress.on('uncaught:exception', (err, runnable) => {
	return false
	})	

	//Store Page
	cy.visit('/')	
	cy.wait(1000)
	cy.get('.store-nav-wrapper>a').eq(0).click()
	//Select Hardware
	cy.contains('I Agree').click()
	if (MODEL_TYPE == 'SPS'){
	cy.get(COLOR_CON).contains('Silver').click()
	}
	if (MODEL_TYPE == 'SPC'){
	cy.get('[for="S01-2000-US"]').click()
	}
	if (MODEL_TYPE == 'WIFI6S'){
	cy.get('[for="X01-1000-US"]').click()
	}
	cy.get(NEXT).click()
	//Customize hardware
    cy.wait(500)
	if (parseInt(QUANTITY) <= 4){
	cy.get('[name='+ QUANTITY + ']').click({force: true})
	}else{
	cy.get('[name= 1]').click({force: true})
	for(let n = 0; n < parseInt(QUANTITY)-1; n ++){
	cy.get('.boMVnW').last()
    .click()
}
	}
	cy.get('.ProductSelectorFooter__QuantityText-saqfh4-4').contains(QUANTITY);
	cy.get(NEXT).click()
	cy.wait(500)
	if (MEMBERSHIP == 1){
	cy.get('[name="710-0031-00"]').click({force: true})
	}
	if (MEMBERSHIP == 2){
	cy.get('[name="710-0052-AN"]').click({force: true})
	}
	if (MEMBERSHIP == 3){
	cy.get('[name="710-0060-AN"]').click({force: true})
	}
	cy.get(CART_BTN).should('not.be.disabled').click()
	cy.wait(500)

	if (PROMO != ''){
	cy.get('[name="coupon_code"]').click().type(PROMO);	
	/*
	cy.get('[name="apply_coupon"]').click().then(cy.wait(5000))
	cy.wait(5000).then(cy.get('strong > .woocommerce-Price-amount > bdi')
	.invoke('text')  
	.should('eq', "$" + PRICE_AFTER_PROMO.toFixed(2).toString())); 
	*/
	cy.get('[name="apply_coupon"]').click()
	cy.wait(5000)
	}
	/*
	cy.get('strong > .woocommerce-Price-amount > bdi')
	.invoke('text')  
	.should('eq', "$" + PRICE_AFTER_PROMO.toFixed(2).toString()); 
	*/
	cy.contains('Proceed to checkout').should('not.be.disabled').click()
	//Checkout
	cy.get('[name="terms"]').click({force: true})
	cy.get('[name="autorenew"]').click({force: true})
	cy.get('#billing_first_name').clear({force: true})
	cy.get('#billing_first_name').type('Little', {force: true})
	cy.get('#billing_last_name').clear({force: true})
	cy.get('#billing_last_name').type('Machine', {force: true})
	cy.get('#billing_phone').clear({force: true})
	cy.get('#billing_phone').type('7777777777', {force: true})
	cy.get('#billing_email').clear({force: true})
	cy.get('#billing_email').type(EMAIL, {force: true})
	if (TAX == "Y"){
	cy.get('[name="billing_address_1"]').clear({force: true})
	cy.get('[name="billing_address_1"]').type('1901 e 88th st', {force: true})
	cy.get('body').click({force: true})
	cy.get('[name="billing_address_1"]').type('Cal', {force: true})
	cy.wait(10)
	/*
	cy.get('[title="1901 E 88th St"]').click({force: true, multiple:true})
	cy.get('strong > .woocommerce-Price-amount > bdi')
	.invoke('text')  
	.should('eq', "$" + CALCULATED_PRICE.toFixed(2).toString());
	*/
	cy.get('[title="1901 E 88th St"]').click({force: true, multiple:true})
	}
	if (TAX == "N"){
	cy.get('[name="billing_address_1"]').clear({force: true})
	cy.get('[name="billing_address_1"]').type('10141 ', {force: true})
	cy.get('body').click({force: true})
	cy.get('[name="billing_address_1"]').type('Daria Pl', {force: true})
	cy.wait(10)
	cy.get('[title="10141 Daria Pl"]').click({force: true})
	/*
	cy.get('strong > .woocommerce-Price-amount > bdi')
	.invoke('text')  
	.should('eq', "$" + CALCULATED_PRICE.toFixed(2).toString());
	*/
	}
	//plugin to fill out stripe elements
	cy.fillElementsInput('cardNumber', '4242424242424242');
	cy.fillElementsInput('cardExpiry', '1221')
    cy.fillElementsInput('cardCvc', '777')

	cy.contains("Place order").click()
	//Confirmation	
	cy.wait(10000)
	cy.url().should('include', 'order-received')	
	cy.contains("Thank you for your order")
  })
 it('RESETS CYPRESS BECAUSE ELECTRON IS BUSTED... :( ', { browser: 'electron' }, () => {
	Cypress.on('uncaught:exception', (err, runnable) => {
	return false
	})	
	cy.visit('/')	
	cy.wait(1000)
	cy.get('.store-nav-wrapper>a').eq(0).click()
	cy.contains('I Agree').click()
	cy.get(NEXT).click()
	cy.wait(500)
	cy.get(NEXT).click()
	cy.wait(500)
	cy.get(CART_BTN).should('not.be.disabled').click()
	cy.wait(500)
	cy.contains('Proceed to checkout').click()
	cy.get('[name="billing_address_1"]').type('10141 ', {force: true})
	cy.get('body').click({force: true})
	cy.get('[name="billing_address_1"]').type('Daria Pl', {force: true})
	cy.wait(500)
	cy.get('[title="10141 Daria Pl"]').click({force: true})
})
})
