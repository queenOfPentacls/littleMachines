# Plume Shop Automated Tests

## GETTING STARTED

### INITIALIZING A CYPRESS PROJECT (MAC OS)
1. Run `npm i cypress`
2. Check package.json for:

`"scripts": {`

  `"cypress:open": "cypress open"`

  `"cy:run:chrome": "cypress run --browser chrome",`

  `"cy:run:firefox": "cypress run --browser firefox",`
  
  `"cy:run:edge": "cypress run --browser edge"`

   `}`

3. Run `npm run cypress:open` 


### RUNNING CYPRESS TESTS FROM CODE 
1. Open code and in project directory terminal run `npx cypress open`
2. The CY application should open
3. Double click the JS test file you want to run and a new testing window should open and run the tests described. 
4. The tests can be completed in any Chromium Family browser that is installed on your local machine (Chrome, Firefox, Edge, Electron... see full list [here](https://docs.cypress.io/guides/guides/launching-browsers#Browsers)) 
5. To stop the tests and close the chrome window, return the the CY app and select the red STOP button in the upper right corner, and run `^C` in terminal (ctl + C).


