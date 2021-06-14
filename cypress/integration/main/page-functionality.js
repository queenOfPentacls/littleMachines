import {HEADER, MODAL_CLOSE_LOCAL, INFO_MODAL, INFO_CLOSE, MODAL_CLOSE_WEB, NEXT} from '../../globals'

// VALIDATES THE STEP 1 PAGE + TESTS EDGE CASES & MODALS

describe('HOMEPASS SELECT HARDWARE', () => {
  it('TEST ELEMENTS ON PAGE', () => {
    cy.visit('/')
    cy.contains('Select your Hardware')

    //NAV BAR
    cy.get('img[alt="HomePass"]')
    cy.get(HEADER).contains("What's Included")
    cy.get(HEADER).contains('Smart Home Experience')

    //MODALS
    cy.contains("Compare Products").click()
    cy.get(MODAL_CLOSE_LOCAL).eq(1).click()
    cy.get(INFO_MODAL).click()
    cy.get(INFO_CLOSE).click()
    cy.wait(10)

    // BUTTONS
    cy.get(NEXT).should('be.disabled')

    // NEXT PAGE
    cy.contains('Silver').first().click()
    cy.get(NEXT).click()

  })
})

// // VALIDATES THE STEP 2 PAGE + TESTS EDGE CASES & MODALS
describe('HOMEPASS CUSTOMIZE', () => {
  it('TESTS ELEMENTS ON PAGE', () => {
    cy.url().should('include', '/customize-hardware')
    cy.wait(10)
    cy.contains('How many')
    cy.contains('do you need?')
    //NAV BAR 
    cy.get('img[alt="HomePass"]')
    cy.get(HEADER).contains("What's Included")
    cy.get(HEADER).contains('Smart Home Experience')

    //MODALS 
    cy.contains("Full Product Specs").click()
    cy.get(MODAL_CLOSE_LOCAL).eq(1).click()
    cy.get(INFO_MODAL).click()
    cy.get(INFO_CLOSE).click()

    //NEXT PAGE
    cy.contains('1 SuperPod').click()
    cy.get(NEXT).click()
  })
})



// // VALIDATES THE STEP 3 PAGE + TESTS EDGE CASES & MODALS
describe('HOMEPASS SELECT MEMBERSHIP', () => {
  it('TEST ELEMENTS ON PAGE', () => {
    cy.url().should('include', '/customize-membership')

    //NAVBAR
    cy.get('img[alt="HomePass"]')
    cy.get(HEADER).contains("What's Included")
    cy.get(HEADER).contains('Smart Home Experience')

    //MODALS
    cy.contains("Membership Benefits").click()
    cy.get(MODAL_CLOSE_LOCAL).eq(1).click()
    cy.get(INFO_MODAL).click()
    cy.get(INFO_CLOSE).click()
  })
})
