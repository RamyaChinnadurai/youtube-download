
self.addEventListener("fetch", event => {
    const response = caches.match(event.request)
        .then(match => match || fetch(event.request));
    event.respondWith(response);
});