import { LOCAL_HOST, LOCAL_HOST_3,  HEADER, MODAL_CLOSE_LOCAL} from '../../globals'

describe('HOMEPASS SHOP', () => {
  it('TEST ELEMENTS ON PAGE', () => {
    cy.visit(LOCAL_HOST)
    cy.contains('Select your Hardware')
    //NAV BAR 
    //verify homepass logo
    cy.get('img[alt="HomePass"]')
    cy.get(HEADER).contains("What's Included")
    cy.get(HEADER).contains('Smart Home Experience')
    cy.contains("Compare Products")
    // cy.get(MODAL_CLOSE_LOCAL).click()
  })
})

describe('HOMEPASS SELECT MEMBERSHIP', () => {
  it('TEST ELEMENTS ON PAGE', () => {
    cy.visit(LOCAL_HOST_3)
    cy.get('img[alt="HomePass"]')
    cy.get(HEADER).contains("What's Included")
    cy.get(HEADER).contains('Smart Home Experience')
    cy.contains("Membership Benefits").click()
    cy.get(MODAL_CLOSE_LOCAL).eq(1).click()
    //information modal
    cy.get('.bZcYBD').click()
    cy.get('.lbFxBo').click()
  })
})
