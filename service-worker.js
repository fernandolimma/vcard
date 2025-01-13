self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open('v1').then(function(cache) {
            return cache.addAll([
                '/',
                '/index.html',
                '/style.css',
                '/script.js',
                '/img/icon-192x192.png',
                '/img/icon-500x500.png',
                'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css'
            ]);
        }).catch(function(error) {
            console.error('Failed to open cache: ', error);
        })
    );
}),


self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request).then(function(response) {
            return response || fetch(event.request);
        })
    );
});
