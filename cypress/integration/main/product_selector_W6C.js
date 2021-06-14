//GLOBAL VARIABLES 
import {
  PRICE_MEM, 
  PRICE_CON,  
  NEXT, 
  CART_BTN, 
  MEMBERSHIP,
  BACK_BTN,
  PLUS_BTN,
  WIFI6_CON,
  COLOR_CON,
  QUANTITY} from '../../globals'


describe('SELECT YOUR HARDWARE - SUPERPOD WITH WIFI 6 CHAMPAGNE', () => {
  it('TEST SCENERIO 1.X', () => {
    cy.visit('/')
    cy.get(PRICE_CON).eq(1).contains('$159')
    cy.get(COLOR_CON).eq(1).contains('Champagne').click()
    cy.get(NEXT).click()
    cy.url().should('include', '/customize-hardware')
    cy.contains('1 SuperPod').click()
    cy.get(NEXT).click()
    cy.wait(500)
    cy.url().should('include', '/customize-membership')
    cy.get(MEMBERSHIP).contains('1 year').click()
    cy.get(PRICE_MEM).eq(0).contains('$99')
    cy.get(CART_BTN).should('not.be.disabled')
    cy.get(BACK_BTN).click()
    cy.url().should('include', '/customize-hardware')
    cy.contains('2 SuperPods').click()
    cy.get(NEXT).click()
    cy.url().should('include', '/customize-membership')
    cy.get(MEMBERSHIP).contains('2 year').click()
    cy.get(PRICE_MEM).eq(1).contains('$198')
    cy.get(CART_BTN).should('not.be.disabled')
    cy.get(BACK_BTN).click()
    cy.url().should('include', '/customize-hardware')
    cy.get(PLUS_BTN).eq(1).click()
    cy.get(QUANTITY).contains('3')
    cy.get(NEXT).click()
    cy.url().should('include', '/customize-membership')
    cy.get(MEMBERSHIP).contains('3 year').click()
    cy.get(PRICE_MEM).eq(2).contains('$297')
    cy.get(CART_BTN).should('not.be.disabled')
    cy.get(BACK_BTN).click()
    cy.url().should('include', '/customize-hardware')
    cy.get(PLUS_BTN).eq(1).dblclick()
    cy.get(QUANTITY).contains('5')
    cy.get(NEXT).click()
    cy.url().should('include', '/customize-membership')
  })
})