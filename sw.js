var cacheID = "restaurant-review_01";

const cacheFiles = [
  "/",
  "/index.html",
  "/restaurant.html",
  "/css/styles.css",
  "/js/dbhelper.js",
  "/js/main.js",
  "/js/restaurant_info.js",
  "/js/register.js",
  "/data/restaurants.json",
  "/img/1_320x240.jpg",
  "/img/1_400x112.jpg",
  "/img/1_500x375.jpg",
  "/img/1_800x224.jpg",
  "/img/2_320x240.jpg",
  "/img/2_400x112.jpg",
  "/img/2_500x375.jpg",
  "/img/2_800x224.jpg",
  "/img/3_320x240.jpg",
  "/img/3_400x112.jpg",
  "/img/3_500x375.jpg",
  "/img/3_800x224.jpg",
  "/img/4_320x240.jpg",
  "/img/4_400x112.jpg",
  "/img/4_500x375.jpg",
  "/img/4_800x224.jpg",
  "/img/5_320x240.jpg",
  "/img/5_400x112.jpg",
  "/img/5_500x375.jpg",
  "/img/5_800x224.jpg",
  "/img/6_320x240.jpg",
  "/img/6_400x112.jpg",
  "/img/6_500x375.jpg",
  "/img/6_800x224.jpg",
  "/img/7_320x240.jpg",
  "/img/7_400x112.jpg",
  "/img/7_500x375.jpg",
  "/img/7_800x224.jpg",
  "/img/8_320x240.jpg",
  "/img/8_400x112.jpg",
  "/img/8_500x375.jpg",
  "/img/8_800x224.jpg",
  "/img/9_320x240.jpg",
  "/img/9_400x112.jpg",
  "/img/9_500x375.jpg",
  "/img/9_800x224.jpg",
  "/img/10_320x240.jpg",
  "/img/10_400x112.jpg",
  "/img/10_500x375.jpg",
  "/img/10_800x224.jpg"
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheID)
    .then(function(cache) {
      return cache.addAll(cacheFiles);
    })
  );
});

self.addEventListener("fetch", function(event) {
  event.respondWith(
    // magic goes here
    caches.match(event.request)
    .then(function(response) {
      if (response) {
        console.log("Found ", event.request, " in cache.");
        return response;
      } else {
        console.log("Could not find ", event.request, " in cache. Fetching...");
        return fetch(event.request)
        .then(function(response) {
          const clonedResponse = response.clone();
          caches.open(cacheID)
          .then(function(cache) {
            cache.put(event.request, clonedResponse);
          })
          return response;
        })
        .catch(function(err) {
          console.error(err);
        })
      }
    })
  );
});
