//GLOBAL VARIABLES 

//select hardware
const SHOP_LINK = 'https://eloquent-lich-king.netlify.app/homepass/'
const SUPERPOD_CON = '.IjAmP'
const WIFI6_PRICE = '.hrMwYB'
const COLOR = '.jqbxUv'
const NEXT = '.ProductSelectorFooter__NextButton-saqfh4-4'
const HEADER = '.Header__HeaderWrapper-q8vck-1'
const MODAL_CLOSE = '.eaYebE:first'


// MAIN NAVIGATION 
describe('HOMEPASS SHOP', () => {
  it('TEST ELEMENTS ON PAGE', () => {
    cy.visit(SHOP_LINK)
    cy.wait(1000)
    cy.contains('Select your Hardware')
    //NAV BAR 
    //verify homepass logo
    cy.get('img[alt="HomePass"]')
    cy.get(HEADER).contains("What's Included")
    cy.get(HEADER).contains('Smart Home Experience')
    cy.contains("Compare Products").click()
    cy.get(MODAL_CLOSE).click({force:true})
  })
})

//SELECT HARDWARE 

describe('SELECT YOUR HARDWARE - SUPERPOD SILVER', () => {
  it('TEST SCENERIO 1.X', () => {
    cy.get(COLOR).contains('Silver').click()
    cy.get(SUPERPOD_CON).contains('$99 each')
    cy.get(NEXT).click()
  })
})

describe('SELECT YOUR HARDWARE - SUPERPOD CHAMPAGNE', () => {
  it('TEST SCENERIO 1.X', () => {
    cy.get(COLOR).contains('Champagne').click()
    cy.get(SUPERPOD_CON).contains('$99 each')
    cy.get(NEXT).click()
  })
})

describe('SELECT YOUR HARDWARE - SUPERPOD WITH WIFI 6 SILVER', () => {
  it('TEST SCENERIO 1.X', () => {
    cy.get(WIFI6_PRICE).eq(1).contains('$159 each')
    cy.get(COLOR).eq(1).contains('Silver').click()
    cy.get(NEXT).click()
  })
})

describe('SELECT YOUR HARDWARE - SUPERPOD WITH WIFI 6 CHAMPAGNE', () => {
  it('TEST SCENERIO 1.X', () => {
    cy.get(WIFI6_PRICE).eq(1).contains('$159 each')
    cy.get(COLOR).eq(1).contains('Champagne').click()
    cy.get(NEXT).click()
  })
})