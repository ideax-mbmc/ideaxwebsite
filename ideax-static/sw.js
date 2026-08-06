// MBMC IdeaX 2025 - Service Worker
// Provides basic offline functionality and caching

const CACHE_NAME = 'mbmc-ideax-2025-v1';
const urlsToCache = [
    '/',
    '/index.html',
    '/code-of-conduct.html',
    '/css/styles.css',
    '/css/code-of-conduct.css',
    '/js/scripts.js',
    '/manifest.json',
    // Add static assets
    '/static/media/ideax_logo_white.1e5c9d577fce92b652f11a0cfab2bcf2.svg',
    '/static/media/ideax_x_only.c63eef2ea1d1418649d9fd26da700b1e.svg',
    '/static/media/mbmc.80250a009dd33e25f239e0c532d16890.svg',
    '/static/media/desktop_bg.7fb90037e7b173f613fac0fa5c2bb42b.svg',
    '/static/media/mobile_bg.a35ae75c7105b3be0a1eddb8eaeab356.svg',
    '/static/media/footer-1.f5814ad6f98f32e74dd4.png',
    // Add key images
    '/images/favicon.png',
    // Add external resources
    'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css',
    'https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.css',
    'https://fonts.googleapis.com/css2?family=Encode+Sans+Semi+Condensed:wght@400;500;600;700;800&display=swap'
];

// Install event - cache resources
self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(function(cache) {
                console.log('Opened cache');
                return cache.addAll(urlsToCache);
            })
            .catch(function(error) {
                console.log('Cache installation failed:', error);
            })
    );
});

// Fetch event - serve from cache when offline
self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request)
            .then(function(response) {
                // Return cached version or fetch from network
                return response || fetch(event.request);
            }
        )
    );
});

// Activate event - clean up old caches
self.addEventListener('activate', function(event) {
    event.waitUntil(
        caches.keys().then(function(cacheNames) {
            return Promise.all(
                cacheNames.map(function(cacheName) {
                    if (cacheName !== CACHE_NAME) {
                        console.log('Deleting old cache:', cacheName);
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});

// Background sync for form submissions (when back online)
self.addEventListener('sync', function(event) {
    if (event.tag === 'background-sync') {
        event.waitUntil(
            // Handle any queued form submissions
            console.log('Background sync triggered')
        );
    }
});

// Push notifications (for future use)
self.addEventListener('push', function(event) {
    if (event.data) {
        const data = event.data.json();
        const options = {
            body: data.body,
            icon: '/images/favicon.png',
            badge: '/images/favicon.png',
            vibrate: [100, 50, 100],
            data: {
                dateOfArrival: Date.now(),
                primaryKey: 1
            }
        };
        
        event.waitUntil(
            self.registration.showNotification(data.title, options)
        );
    }
});

// Notification click handler
self.addEventListener('notificationclick', function(event) {
    event.notification.close();
    
    event.waitUntil(
        clients.openWindow('/')
    );
});

// Error handling
self.addEventListener('error', function(event) {
    console.log('Service Worker error:', event.error);
});

// Unhandled promise rejection
self.addEventListener('unhandledrejection', function(event) {
    console.log('Service Worker unhandled promise rejection:', event.reason);
});

console.log('MBMC IdeaX 2025 Service Worker loaded successfully');
