if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('/service-worker.js', { scope: '/' })
    .then(reg => console.log('SW registrado desde register-sw.js', reg))
    .catch(err => console.warn('Fallo registro SW', err));
}
