const { defineConfig } = require("cypress");
const allureWriter = require("@shelex/cypress-allure-plugin/writer");

module.exports = defineConfig({
    viewportWidth: 1920,
    viewportHeight: 1080,
    chromeWebSecurity: false,
    defaultCommandTimeout: 15000,
    requestTimeout: 15000,
    watchForFileChanges: false,
    video: false,
    retries:{
        runMode: 2,
        openMode: 0
      },

    e2e: {
        baseUrl: "https://capital.com/",
       // baseUrlFca: "https://capital.com/en-gb",
        setupNodeEvents(on, config) {
            allureWriter(on, config);
            return config;
        },
    },
});
