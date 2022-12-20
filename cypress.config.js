const { defineConfig } = require('cypress')

module.exports = defineConfig({
    projectId: "y6b2wq",
    e2e: {
        baseUrl: 'http://localhost:3000'
    }
})