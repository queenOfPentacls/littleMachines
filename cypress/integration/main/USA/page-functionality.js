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
		PAGE_FOOTER,
		CART_ITEM,
		CART_TOTAL,
		HOMEPAGE,
		CLOSE_BTN,
		SUPERPOD_CON,
		WIFI6_CON,
		QUANTITY} from '../../../globals'

describe('Shop Page Functionality', () => {
	 it('PAGE FUNCTIONALITY: LINKS', { browser: 'electron' }, () => {
	//Store Page
	cy.visit('/')	
	cy.wait(1000)
	cy.get('.store-nav-wrapper>a').eq(0).click()
	//Select Hardware
	cy.url().should('include', '/select-hardware')
	cy.contains('I Agree').click()
	//Only checks if page 404s, not if it directs correctly
	const footerArray = ['Contact', 'Support', 'Legal', 'guidelines.']
	footerArray.forEach(footerItem => {
    cy
	.get('.nVvO')
    .contains(footerItem)
    .then((link) => {
    cy.request(link.prop('href'))
    })
	})
	cy.get(PAGE_FOOTER).contains('© 2021 Plume Design, Inc. All rights reserved. AI Security, Advanced IoT Protection, Harvest, Haystack, HomePass, OpenSync, Plume, Plume Adaptive WiFi, Plume IQ, PowerPod, Signal, SuperPod, and WorkPass are trademarks or registered trademarks of Plume Design, Inc. See trademark guidelines. Other company and product names are used for informational purposes only and may be trademarks of their respective owners.')
	cy.get(NEXT).click()
	//Customize hardware
	cy.get('[name="3"]').click({force: true})
    cy.wait(500)
	cy.get(NEXT).click()
	//Customize membership
    cy.wait(500)
	cy.get(CART_BTN).should('not.be.disabled').click()
	//Cart
	cy.wait(500)
	cy.contains('Proceed to checkout').click()
	//Checkout
	const termsArray = ['Membership Agreement', 'Terms of Sale', 'Privacy Policy']
	termsArray.forEach(termItem => {
    cy
	.get('.woocommerce-terms-and-conditions-wrapper')
    .contains(termItem)
    .then((link) => {
    cy.request(link.prop('href'))
    })
  })
	const checkoutFooterArray = ['Support', 'Contact', 'About', 'Careers', 'Legal', 'terms and conditions', 'Partner with Plume']
	checkoutFooterArray.forEach(footerItem => {
    cy
	.get('.footer-widgets-wrapper')
    .contains(footerItem)
    .then((link) => {
    cy.request(link.prop('href'))
    })
  })
})
  it('PAGE FUNCTIONALITY: POPUPS/MODEL+COLOR SELECTION/ADVANCED HARDWARE', { browser: 'chrome' }, () => {
	Cypress.on('uncaught:exception', (err, runnable) => {
	return false
	})	
	//Store Page
	cy.visit('/')	
	cy.wait(1000)
	cy.get('.store-nav-wrapper>a').eq(0).click()
	//Select Hardware
	cy.url().should('include', '/select-hardware')
	cy.wait(500)
	cy.contains('I Agree').click()    
	cy.get(WIFI6_CON).contains('Silver').click()
	cy.get(COLOR_CON).contains('Silver').click()
	cy.get(COLOR_CON).contains('Champagne').click()
	cy.get('[aria-label="Toggle Informational Modal"]').click()
	cy.contains('SuperPods connect to your existing modem and are flexible enough to work in addition to, or instead of, your current route')
	cy.get(CLOSE_BTN).click()
	cy.contains('Compare products').click()
	cy.get(CLOSE_BTN).last().click()
	cy.contains('Customize my hardware order').click()
	//Advanced Hardware
	cy.url().should('include', '/advanced-hardware')
    cy.wait(500)
	cy.get(BACK_BTN).click()
	cy.url().should('include', '/select-hardware')
	cy.wait(500)
	cy.get(WIFI6_CON).contains('Silver').click()
	cy.get(COLOR_CON).contains('Silver').click()
	cy.get(COLOR_CON).contains('Champagne').click()
	cy.get('[aria-label="Toggle Informational Modal"]').click()
	cy.contains('SuperPods connect to your existing modem and are flexible enough to work in addition to, or instead of, your current route')
	cy.get(CLOSE_BTN).click()
	cy.contains('Compare products').click()
	cy.get(CLOSE_BTN).last().click()

  })
  it('PAGE FUNCTIONALITY: DEFAULT SELECTIONS', { browser: 'chrome' }, () => {
	Cypress.on('uncaught:exception', (err, runnable) => {
	return false
	})
	//Store Page
	cy.visit('/')	
	cy.wait(1000)
	cy.get('.store-nav-wrapper>a').eq(0).click()
	//Select Hardware
	cy.url().should('include', '/select-hardware')
	cy.wait(500)
	cy.contains('I Agree').click()    
	cy.get('[name="S01-1000-US"]').should('be.checked')
	cy.get(NEXT).click()
	cy.wait(500)
    cy.url().should('include', '/customize-hardware')
	cy.get('[name="3"]').should('be.checked')
	cy.get(FOOTER).contains('SuperPod (Silver)')
	cy.get(FOOTER).contains('3')
	cy.get(NEXT).click()
	//Customize membership
    cy.wait(500)
    cy.url().should('include', '/customize-membership')
    cy.get('[name="710-0052-AN"]').should('be.checked')
	cy.get(CART_BTN).contains('$377').should('not.be.disabled')

  })
})

