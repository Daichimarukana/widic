const CACHE_NAME = 'wiktionary-pwa-cache-v1';
const urlsToCache = [
    './',
    './index.html',
    './style.css',
    'https://code.jquery.com/jquery-4.0.0.min.js'
];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => cache.addAll(urlsToCache))
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});