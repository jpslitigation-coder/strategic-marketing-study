/* Strategic Marketing Study Dossier — offline service worker */
const CACHE = 'sm-dossier-v9';
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
  'practice.html',
  'styles.css?v=9',
  'revision-sheets.css?v=8',
  'practice.css?v=9',
  'data.js?v=7',
  'assessment-data.js?v=7',
  'notes-data.js?v=7',
  'master-depth-data.js?v=7',
  'notes.js?v=9',
  'practice-data.js?v=9',
  'practice.js?v=9',
  'app.js?v=9',
  'revision-sheets.js?v=8',
  'manifest.webmanifest',
  'icons/icon-192.png',
  'icons/icon-512.png',
  'icons/icon-maskable-512.png',
  'icons/icon-180.png',
  'icons/favicon-64.png',
  'revision-journey.png?v=8'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE).then((c) => c.addAll(ASSETS)).then(() => self.skipWaiting())
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
      .then(() => self.clients.matchAll({type:'window'}))
      .then((clients) => Promise.all(clients.map((client) =>
        client.navigate(client.url).catch(() => null)
      )))
  );
});

// Always check the network for pages so an installed app cannot remain trapped
// on stale HTML. Versioned static assets remain cache-first and offline-safe.
self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;
  if (req.mode === 'navigate') {
    e.respondWith(
      fetch(req)
        .then((res) => {
          const copy = res.clone();
          caches.open(CACHE).then((c) => c.put(req, copy)).catch(() => {});
          return res;
        })
        .catch(() => caches.match(req).then((hit) => hit || caches.match('index.html')))
    );
    return;
  }
  e.respondWith(
    caches.match(req).then((hit) => {
      if (hit) return hit;
      return fetch(req)
        .then((res) => {
          const copy = res.clone();
          caches.open(CACHE).then((c) => c.put(req, copy)).catch(() => {});
          return res;
        })
        .catch(() => undefined);
    })
  );
});
