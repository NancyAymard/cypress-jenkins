const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: "mochawesome",
  video: false,
  reporterOptions: {
    charts: true,
    reportTitle: "Cypress with Jenkins pipelines",
    reportFilename: "my_report",
    reportDir: "reports",
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
