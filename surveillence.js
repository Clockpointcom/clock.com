const CACHE_NAME = 'world-clock-v1';
const ASSETS = [
  '/',
  '/index.html',
  '/Fond decran.png',
  // Ajoutez d'autres assets si nécessaire
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(ASSETS))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
