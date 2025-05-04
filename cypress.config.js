const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },

    env: {
      // Set the base URL for your application
      URL: "https://www.way2automation.com/angularjs-protractor/banking/#/login",
    },
  },
});
