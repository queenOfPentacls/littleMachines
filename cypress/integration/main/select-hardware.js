//GLOBAL VARIABLES 

//select hardware
const DEPLOYED_LINK = 'https://eloquent-lich-king.netlify.app/homepass/'
const LOCAL_HOST = 'http://localhost:3000/homepass'
const SUPERPOD_CON = '.eOLOVD'
const PRICE = '.dcxOIm'
const COLOR_WEB = '.jqbxUv'
const COLOR_LOCAL = '.eRitdj'
const NEXT = '.ProductSelectorFooter__NextButton-saqfh4-4'
const HEADER = '.Header__HeaderWrapper-q8vck-1'
const MODAL_CLOSE_WEB = '.eaYebE:first'
const MODAL_CLOSE_LOCAL = '.Modal__ModalToggleButton-sc-1ywrvd4-3'


// MAIN NAVIGATION 
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

//SELECT HARDWARE 

describe('SELECT YOUR HARDWARE - SUPERPOD SILVER', () => {
  it('TEST SCENERIO 1.X', () => {
    cy.get(COLOR_LOCAL).contains('Silver').click()
    cy.get(PRICE).contains('$99 each')
    cy.get(NEXT).click()
  })
})

describe('SELECT YOUR HARDWARE - SUPERPOD CHAMPAGNE', () => {
  it('TEST SCENERIO 1.X', () => {
    cy.get(COLOR_LOCAL).contains('Champagne').click()
    cy.get(PRICE).contains('$99 each')
    cy.get(NEXT).click()
  })
})

describe('SELECT YOUR HARDWARE - SUPERPOD WITH WIFI 6 SILVER', () => {
  it('TEST SCENERIO 1.X', () => {
    cy.get(PRICE).eq(1).contains('$159 each')
    cy.get(COLOR_LOCAL).eq(1).contains('Silver').click()
    cy.get(NEXT).click()
  })
})

describe('SELECT YOUR HARDWARE - SUPERPOD WITH WIFI 6 CHAMPAGNE', () => {
  it('TEST SCENERIO 1.X', () => {
    cy.get(PRICE).eq(1).contains('$159 each')
    cy.get(COLOR_LOCAL).eq(1).contains('Champagne').click()
    cy.get(NEXT).click()
  })
})