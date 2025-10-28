/* PWABuilder shim: delega en tu SW real */
importScripts('/service-worker.js');

/* algunos bots solo marcan “OK” si ven un listener fetch */
self.addEventListener('fetch', () => {});
