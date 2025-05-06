const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    reporter: 'cypress-mochawesome-reporter',
  
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      // implement node event listeners here
    },

    env: {
      // Set the base URL for your application
      URL: "https://www.way2automation.com/angularjs-protractor/banking/#/login",
    },
  },
});
