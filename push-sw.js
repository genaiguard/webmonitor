/* eslint-env serviceworker */
// Web Push service worker for WebMonitor alert notifications.
// Intentionally tiny: no caching, no fetch handler — push only. Relative
// URLs resolve against this script's location, so the same file works at
// the domain root and under the /webmonitor base path.

self.addEventListener('install', () => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('push', (event) => {
  let data = {};
  try {
    data = event.data ? event.data.json() : {};
  } catch (e) {
    data = {};
  }

  const title = data.title || 'WebMonitor alert';
  const options = {
    body: data.body || 'A monitored page matched your criteria.',
    icon: './images/robot-logo.png',
    badge: './images/robot-logo.png',
    data: { url: data.url || './dashboard' },
    // One notification per job: a re-alert replaces the previous one
    // instead of stacking.
    tag: data.jobId ? 'webmonitor-job-' + data.jobId : undefined,
  };

  event.waitUntil(self.registration.showNotification(title, options));
});

self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  const targetUrl = (event.notification.data && event.notification.data.url) || './dashboard';

  event.waitUntil(
    self.clients.matchAll({ type: 'window', includeUncontrolled: true }).then((clientList) => {
      for (const client of clientList) {
        if (client.url.indexOf('/dashboard') !== -1 && 'focus' in client) {
          return client.focus();
        }
      }
      return self.clients.openWindow(targetUrl);
    })
  );
});
