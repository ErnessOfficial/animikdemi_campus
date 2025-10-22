
const CACHE_VERSION = 'v1';
const STATIC_CACHE = `animikdemi-campus-static-${CACHE_VERSION}`;
const RUNTIME_CACHE = `animikdemi-campus-runtime-${CACHE_VERSION}`;
const FONT_CACHE = `animikdemi-campus-fonts-${CACHE_VERSION}`;

const APP_STATIC_ASSETS = [
  '/',
  '/index.html',
  '/manifest.json',
  '/icons/animikdemi-512.png',
  '/icons/animikdemi-256.png',
  '/icons/animikdemi-192.png',
  '/icons/animikdemi-96.png',
  '/images/logo_animikdemi.png'
];

const APP_STATIC_PATHS = new Set(
  APP_STATIC_ASSETS.map(asset => new URL(asset, self.location.origin).pathname)
);

const FONT_HOSTNAMES = new Set(['fonts.googleapis.com', 'fonts.gstatic.com']);

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(STATIC_CACHE).then(cache =>
      Promise.allSettled(
        APP_STATIC_ASSETS.map(async asset => {
          try {
            await cache.add(asset);
          } catch {
            // Ignore individual asset failures to avoid blocking the install step.
          }
        })
      )
    )
  );
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheKeys =>
      Promise.all(
        cacheKeys
          .filter(
            key =>
              key !== STATIC_CACHE &&
              key !== RUNTIME_CACHE &&
              key !== FONT_CACHE
          )
          .map(key => caches.delete(key))
      )
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', event => {
  const { request } = event;

  if (request.method !== 'GET') {
    return;
  }

  const requestUrl = new URL(request.url);

  if (request.mode === 'navigate') {
    event.respondWith(networkFirst(request));
    return;
  }

  if (requestUrl.origin === self.location.origin) {
    if (APP_STATIC_PATHS.has(requestUrl.pathname)) {
      event.respondWith(cacheFirst(request, STATIC_CACHE));
      return;
    }

    if (requestUrl.pathname.startsWith('/assets/')) {
      event.respondWith(cacheFirst(request, STATIC_CACHE));
      return;
    }
  }

  if (FONT_HOSTNAMES.has(requestUrl.hostname)) {
    event.respondWith(staleWhileRevalidate(request, FONT_CACHE));
    return;
  }

  event.respondWith(networkFirst(request));
});

async function cacheFirst(request, cacheName) {
  const cache = await caches.open(cacheName);
  const cached = await cache.match(request);

  if (cached) {
    return cached;
  }

  try {
    const response = await fetch(request);
    if (response && response.ok) {
      cache.put(request, response.clone());
    }
    return response;
  } catch (error) {
    const fallback = await caches.match('/index.html');
    if (fallback) {
      return fallback;
    }
    throw error;
  }
}

async function networkFirst(request) {
  const cache = await caches.open(RUNTIME_CACHE);
  try {
    const response = await fetch(request);
    if (response && response.ok) {
      cache.put(request, response.clone());
    }
    return response;
  } catch (error) {
    const cached = await cache.match(request);
    if (cached) {
      return cached;
    }

    if (request.mode === 'navigate') {
      const fallback = await caches.match('/index.html');
      if (fallback) {
        return fallback;
      }
    }

    throw error;
  }
}

async function staleWhileRevalidate(request, cacheName) {
  const cache = await caches.open(cacheName);
  const cachedResponsePromise = cache.match(request);
  const networkResponsePromise = fetch(request)
    .then(response => {
      if (response && response.ok) {
        cache.put(request, response.clone());
      }
      return response;
    })
    .catch(() => undefined);

  const cachedResponse = await cachedResponsePromise;
  return cachedResponse || networkResponsePromise;
}
