const { defineConfig } = require("cypress");
const allureWriter = require("@shelex/cypress-allure-plugin/writer");

module.exports = defineConfig({
    viewportWidth: 1920,
    viewportHeight: 1080,
    chromeWebSecurity: false,
    defaultCommandTimeout: 7000,
    requestTimeout: 15000,
    watchForFileChanges: false,
    video: false,
    retries:{
        runMode: 2,
        openMode: 0
      },

    e2e: {
        baseUrl: "https://capital.com/",
        setupNodeEvents(on, config) {
            allureWriter(on, config);
            return config;
        },
    },
});
