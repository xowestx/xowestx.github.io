/* The portal moved to oplus-portal.pages.dev. Remove the old service worker. */
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", e => e.waitUntil(self.registration.unregister()));
