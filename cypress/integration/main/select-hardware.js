
// MAIN NAVIGATION 
describe('HOMEPASS SHOP', () => {
  it('successfully loads', () => {
    cy.visit('https://eloquent-lich-king.netlify.app/homepass/')
    cy.contains('Select your Hardware')
    //NAV BAR 
    cy.get('.Header__HeaderInnerWrapper-q8vck-2').contains('HomePass')
  })
})





//SELECT HARDWARE 

describe('SELECT YOUR HARDWARE - SUPERPOD SILVER', () => {
  it('TEST SCENERIO 1.X', () => {
    cy.contains('Silver').click()
    cy.get('.IjAmP').contains('$99 each')
    cy.contains('Next').click()
  })
})

describe('SELECT YOUR HARDWARE - SUPERPOD CHAMPAGNE', () => {
  it('TEST SCENERIO 1.X', () => {
    cy.contains('Champagne').click()
    cy.get('.IjAmP').contains('$99 each')
    cy.contains('Next').click()
  })
})