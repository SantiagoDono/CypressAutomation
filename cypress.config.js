const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '5z1r48',
  
  "chromeWebSecurity": false,
  
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    }
  },
});
