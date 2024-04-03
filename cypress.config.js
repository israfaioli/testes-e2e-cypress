const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: 'f4r7ap',
  e2e: {
    baseUrl: 'https://notes-serverless-app.com',
    env: {
      viewportWidthBreakpoint: 768,
    },
    defaultCommandTimeout: 60000,
    chromeWebSecurity: false,
  }
})
