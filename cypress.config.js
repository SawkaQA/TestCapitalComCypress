const { defineConfig } = require("cypress");
const allureWriter = require("@shelex/cypress-allure-plugin/writer");
const { allureCypress } = require("allure-cypress/reporter");

module.exports = defineConfig({
    viewportWidth: 1920,
    viewportHeight: 1080,
    chromeWebSecurity: false,
    defaultCommandTimeout: 15000,
    requestTimeout: 15000,
    watchForFileChanges: false,
    video: false,
    retries:{
        runMode: 1,
        openMode: 0
      },

    e2e: {
        baseUrl: "https://capital.com/",
       // baseUrlFca: "https://capital.com/en-gb",
        setupNodeEvents(on, config) {
            allureCypress(on);
            /* allureWriter(on, config);
            return config; */
        },
    },
});
