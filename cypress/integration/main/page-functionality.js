import {HEADER, MODAL_CLOSE_LOCAL} from '../../globals'

// VALIDATES THE STEP 1 PAGE + TESTS EDGE CASES & MODALS

describe('HOMEPASS SELECT HARDWARE', () => {
  it('TEST ELEMENTS ON PAGE', () => {
    cy.visit('/homepass')
    cy.contains('Select your Hardware')

    //NAV BAR
    cy.get('img[alt="HomePass"]')
    cy.get(HEADER).contains("What's Included")
    cy.get(HEADER).contains('Smart Home Experience')

    //MODALS
    cy.contains("Compare Products").click()
    cy.get(MODAL_CLOSE_LOCAL).eq(1).click()
    cy.get('.bZcYBD').click()
    cy.get('.lbFxBo').click()
    cy.wait(10)

    //PRICE

  })
})

// VALIDATES THE STEP 2 PAGE + TESTS EDGE CASES & MODALS
describe('HOMEPASS CUSTOMIZE', () => {
  it('TESTS ELEMENTS ON PAGE', () => {
    cy.visit('/homepass/customize-hardware')
    cy.contains('How many do you need?')

    //NAV BAR 
    cy.get('img[alt="HomePass"]')
    cy.get(HEADER).contains("What's Included")
    cy.get(HEADER).contains('Smart Home Experience')

    //MODALS 
    cy.contains("Full Product Specs").click()
    cy.get(MODAL_CLOSE_LOCAL).eq(1).click()
    cy.get('.bZcYBD').click()
    cy.get('.lbFxBo').click()
  })
})



// VALIDATES THE STEP 3 PAGE + TESTS EDGE CASES & MODALS
describe('HOMEPASS SELECT MEMBERSHIP', () => {
  it('TEST ELEMENTS ON PAGE', () => {
    cy.visit('/homepass/customize-membership')

    //NAVBAR
    cy.get('img[alt="HomePass"]')
    cy.get(HEADER).contains("What's Included")
    cy.get(HEADER).contains('Smart Home Experience')

    //MODALS
    cy.contains("Membership Benefits").click()
    cy.get(MODAL_CLOSE_LOCAL).eq(1).click()
    cy.get('.bZcYBD').click()
    cy.get('.lbFxBo').click()
  })
})
