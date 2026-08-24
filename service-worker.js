/* Strategic Marketing Study Dossier — offline service worker */
const CACHE = 'sm-dossier-v6';
const ASSETS = [
  'index.html',
  'section-1-intro.html',
  'section-2-ethics.html',
  'section-3-markets.html',
  'section-4-strategies.html',
  'section-5-implementation.html',
  'flashcards.html',
  'tests.html',
  'calendar.html',
  'deep-notes.html',
  'revision-sheets.html',
  'styles.css?v=6',
  'revision-sheets.css?v=6',
  'data.js?v=6',
  'assessment-data.js?v=6',
  'notes-data.js?v=6',
  'master-depth-data.js?v=6',
  'notes.js?v=6',
  'app.js?v=6',
  'revision-sheets.js?v=6',
  'manifest.webmanifest',
  'icons/icon-192.png',
  'icons/icon-512.png',
  'icons/icon-maskable-512.png',
  'icons/icon-180.png',
  'icons/favicon-64.png',
  'images/revision-journey.png'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE).then((c) => c.addAll(ASSETS))
  );
});

self.addEventListener('message', (e) => {
  if (e.data && e.data.type === 'SKIP_WAITING') self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

// Cache-first, fall back to network, then to index for navigations (offline-safe).
self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;
  e.respondWith(
    caches.match(req).then((hit) => {
      if (hit) return hit;
      return fetch(req)
        .then((res) => {
          const copy = res.clone();
          caches.open(CACHE).then((c) => c.put(req, copy)).catch(() => {});
          return res;
        })
        .catch(() => {
          if (req.mode === 'navigate') return caches.match('index.html');
        });
    })
  );
});
