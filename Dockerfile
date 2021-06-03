# Container image that runs your code
FROM cypress/base
# WORKDIR /app
# Copies your code file from your action repository to the filesystem path `/` of the container
COPY ./cypress ./cypress
COPY ./cypress.json ./cypress.json
COPY ./package.json ./package.json

RUN npm i 
RUN $(npm bin)/cypress open
