
const LOCAL_HOST_3 = 'http://localhost:3000/homepass/customize-membership'
const HEADER = '.Header__HeaderWrapper-q8vck-1'
const CART_BTN = '.ProductSelectorFooter__ProceedToCart-saqfh4-9'
const BACK_BTN = '.ProductSelectorFooter__BackButton-saqfh4-5'
const MEMBERSHIP = '.MembershipComponent__MembershipButton-a1q3q4-2'
const PRICE_MEM = '.MembershipComponent__PriceLine-a1q3q4-11'
const MODAL_CLOSE_LOCAL = '.Modal__ModalToggleButton-sc-1ywrvd4-3'




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

// describe('CART DEACTIVATED', () => {
//   it('DEAVTIVATED', () => {
//     cy.get(CART_BTN).should('be.disabled')
//   })
// })

describe('1 YEAR', () => {
  it('TEST MEMBERSHIP', () => {
    cy.get(MEMBERSHIP).contains('1 year').click()
    cy.get(PRICE_MEM).eq(0).contains('$99')
    cy.get(CART_BTN).should('not.be.disabled')
  })
})

describe('2 YEAR', () => {
  it('TEST MEMBERSHIP', () => {
    cy.get(MEMBERSHIP).contains('2 year').click()
    cy.get(PRICE).eq(1).contains('$198')
    cy.get(CART_BTN).should('not.be.disabled')
  })
})

describe('3 YEAR', () => {
  it('TEST MEMBERSHIP', () => {
    cy.get(MEMBERSHIP).contains('3 year').click()
    cy.get(PRICE).eq(2).contains('$297')
    cy.get(CART_BTN).should('not.be.disabled')
  })
})