
const STATIC_CACHE = 'animikdemi-campus-static-v5';
const RUNTIME_CACHE = 'animikdemi-campus-runtime-v5';
const FONT_CACHE = 'animikdemi-campus-fonts-v5';

const offlineFallbackPage = '/offline.html';

const APP_STATIC_ASSETS = [
  '/',
  '/index.html',
  '/manifest.webmanifest',
  offlineFallbackPage,
  '/icons/animikdemi-512.png',
  '/icons/animikdemi-512-maskable.png',
  '/icons/animikdemi-256.png',
  '/icons/animikdemi-192.png',
  '/icons/animikdemi-96.png',
  '/images/logo_animikdemi.png',
  '/icons/shortcut-panel.png',
  '/icons/shortcut-diario.png',
  '/screenshots/home-portrait.png',
  '/screenshots/home-landscape.png'
];

const APP_STATIC_PATHS = new Set(
  APP_STATIC_ASSETS.map(asset => new URL(asset, self.location.origin).pathname)
);

const FONT_HOSTNAMES = new Set(['fonts.googleapis.com', 'fonts.gstatic.com']);
const OFFLINE_ROUTES = ['/dashboard', '/diario'];

self.addEventListener('install', event => {
  event.waitUntil(
    (async () => {
      const cache = await caches.open(STATIC_CACHE);
      await Promise.allSettled(
        APP_STATIC_ASSETS.map(async asset => {
          try {
            await cache.add(asset);
          } catch {
            // Ignore individual asset failures to avoid blocking the install step.
          }
        })
      );
      await notifyClientsAboutUpdate();
    })()
  );
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

  if (!['http:', 'https:'].includes(requestUrl.protocol)) {
    return;
  }

  if (request.headers.has('range') || ['audio', 'video'].includes(request.destination)) {
    event.respondWith(fetch(request));
    return;
  }

  if (request.mode === 'navigate') {
    event.respondWith(handleNavigationRequest(request));
    return;
  }

  if (requestUrl.origin === self.location.origin) {
    if (APP_STATIC_PATHS.has(requestUrl.pathname)) {
      event.respondWith(staleWhileRevalidate(request, STATIC_CACHE));
      return;
    }

    if (requestUrl.pathname.startsWith('/assets/')) {
      event.respondWith(staleWhileRevalidate(request, STATIC_CACHE));
      return;
    }
  }

  if (FONT_HOSTNAMES.has(requestUrl.hostname)) {
    event.respondWith(staleWhileRevalidate(request, FONT_CACHE));
    return;
  }

  event.respondWith(networkFirst(request));
});

self.addEventListener('message', event => {
  if (!event.data) return;
  if (event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
    self.clients.matchAll({ type: 'window' }).then(clients => {
      clients.forEach(client => client.navigate(client.url));
    });
  }
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
      if (isCacheableResponse(response)) {
        cache.put(request, response.clone());
      }
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
      if (isCacheableResponse(response)) {
        cache.put(request, response.clone());
      }
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

async function handleNavigationRequest(request) {
  const cache = await caches.open(STATIC_CACHE);
  const cachedShell = await cache.match('/index.html');
  const isCriticalRoute = OFFLINE_ROUTES.some(route =>
    request.url.startsWith(new URL(route, self.location.origin).href)
  );

  if (isCriticalRoute && cachedShell) {
    networkFirst(request).catch(() => {});
    return cachedShell;
  }

  try {
    const response = await fetch(request);
    if (response && response.ok) {
      const runtimeCache = await caches.open(RUNTIME_CACHE);
      runtimeCache.put(request, response.clone());
      return response;
    }
    throw new Error('Invalid response');
  } catch {
    if (cachedShell) return cachedShell;
    const offline = await cache.match(offlineFallbackPage);
    if (offline) return offline;
    throw new Error('Offline and no cached shell');
  }
}

async function staleWhileRevalidate(request, cacheName) {
  const cache = await caches.open(cacheName);
  const cachedResponsePromise = cache.match(request);
  const networkResponsePromise = fetch(request)
    .then(response => {
      if (response && response.ok) {
        if (isCacheableResponse(response)) {
          cache.put(request, response.clone());
        }
      }
      return response;
    })
    .catch(() => undefined);

  const cachedResponse = await cachedResponsePromise;
  return cachedResponse || networkResponsePromise;
}

function isCacheableResponse(response) {
  return Boolean(response && response.ok && response.status !== 206);
}

async function notifyClientsAboutUpdate() {
  if (!self.registration || !self.registration.active) return;
  const clients = await self.clients.matchAll({ type: 'window', includeUncontrolled: true });
  if (clients.length === 0) return;
  for (const client of clients) {
    client.postMessage({ type: 'SW_UPDATE_AVAILABLE' });
  }
}
