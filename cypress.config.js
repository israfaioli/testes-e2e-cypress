const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://notes-serverless-app.com',
    defaultCommandTimeout: 30000,
    chromeWebSecurity: false,
    setupNodeEvents(on, config) {
    },
  },
})
