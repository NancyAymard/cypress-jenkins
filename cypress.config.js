const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: "mochawesome",
  video: false,
  reporterOptions: {
    charts: true,
    reportTitle: "Cypress with Jenkins pipelines",
    reportFilename: "my_report",
    reportDir: "docs",
  },
  env: {
    grepFilterSpecs: true,
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require("@cypress/grep/src/plugin")(config);
      return config;
    },
  },
});
