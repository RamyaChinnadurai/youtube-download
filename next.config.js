const withPWA = require("next-pwa");

module.exports = withPWA({
    pwa: {
        dest: "public",
        register: true,
        skipWaiting: true,
    }
})

module.exports = {
    env: {
        YOUTUBEAPI: "AIzaSyB8Fk-MWT_r8nVgG35gIZoP-DhJYpJ_tZ0"
    }
}