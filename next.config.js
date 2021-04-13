const withPWA = require("next-pwa");
const runtimeCaching = require('next-pwa/cache')

module.exports = withPWA({
    pwa: {
        dest: "public",
       
    }
})

module.exports = {
    env: {
        YOUTUBEAPI: "AIzaSyB8Fk-MWT_r8nVgG35gIZoP-DhJYpJ_tZ0"
    }
}