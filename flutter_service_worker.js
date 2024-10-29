'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "5947cc3f2491a5f46aeec9a51c5b9a16",
"version.json": "75f5165603adb5c20f7aa09f023f34e8",
"index.html": "b3f8dc047cd22ecee0a62f56a436183d",
"/": "b3f8dc047cd22ecee0a62f56a436183d",
"main.dart.js": "566266f50bdeb19a555f5443ee786271",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "a40c6467d209e798acb10348545b8ba7",
".git/config": "2f3b49b3ce7af806f49d579e3b5d88d8",
".git/objects/95/deb3d54b04abeb654cd1f547f354e33a87aa53": "2dbecaa00f21800fdfcc3c97b4f0b667",
".git/objects/68/827b9764b2432dfb2a48f6d056ca49262252a4": "93db3ded5e8e77c89f7293a47abedeba",
".git/objects/32/c8bcfa6d5eeb359b02965a90e5b080d459088f": "d03b0974b23bd2b2a9dde6318ada34f7",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/b2/1193b7337cdac617ea0f57051d2e9fdf3e8371": "cceedd90e2e1c5837da951f8668e4451",
".git/objects/d9/a5657a391aa29114f05b396c4c64b6e831adf4": "af0e53a3682d233f0bcaf151728f2bd3",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/da/4d83ac7b28a91f228f896749374a9958c212be": "6576f2445e6322ecdc20ba40a6a543a3",
".git/objects/b4/a3ecb9428e2a4b8aff40c099e1c27d64a928f0": "6e4bc29289eb6be950713f1b329eaf0d",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/ab/c4fc8a1d7bd07a205a3a8949c223cbfb4afba0": "79c6b3737f8658fe5dea8b4f51e34e50",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c0/8f44c452a43c2f395c38a07c20a67c035b64b7": "c1cea345bcf4caa9bd2eb9e562c9b86a",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/fe/7263e2c6ba4cdaf3e6cdd54ef7c8cd79707913": "a047fbb7e9429fa830a1c73eb5f0b111",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/18/c377c440d1d27389e5dbe8627755f6c75ed8e9": "b5898729521efcd709d0e803c3913ece",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/11/c94aa48cbf81aac0fb6bf7c3521dcb41c92366": "515cd08970fcc82476aa7188050f8c22",
".git/objects/74/daf32bc69a3d1d7e3cf33d45aef8ab8efe1178": "38047396f72896e92527642aa7ac64ba",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/75/94b1fbe785881995aac4938585b58572be0af8": "8a6b31deac044451927a488bdfcda720",
".git/objects/75/fc94a6c07aaf3f8333c86a51c02b217870cc6e": "a68ede9e7bf27a5ec51b411d1a2ef09d",
".git/objects/75/cfbfd342a6bda20546fd366fdac0a15ff720f6": "37913d8319a7a2a7940808d1e316d91e",
".git/objects/43/874701d3365b9f03a5252a55bf934fe21ce238": "8e77eafaf281af56d3756511dc856587",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/09/4bb6ae24f0cd847d40cb4cc4a2434f2ec9b83b": "b9e6d850322c11db635bcf0a45b762ff",
".git/objects/31/225c7e0cef9bac633d1179a32685a0fb60717a": "f001c82820faef6554415ff6057a8220",
".git/objects/91/8c4af1693ffebe416eb1a688a0de0bbb266da3": "41922d02cebe4babc2c7e6cc0ac06b5b",
".git/objects/62/c89ee094658c7a9465824fdb42793a64ea557b": "133cd5da638f245b079d9e9cdc29ae38",
".git/objects/3a/bf18c41c58c933308c244a875bf383856e103e": "30790d31a35e3622fd7b3849c9bf1894",
".git/objects/0f/c344c7e8b9e32ea1ad91f30ded22556352d7bf": "a8a30f28869f7378465338066f34d80d",
".git/objects/0f/07088b9f96994d4c2fd46c57e310cc297d54f3": "1592f00fd943e55aa872e4ac0e558dc5",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/ba/3fd9fb90088c9253e899792d72b1fcdec1fd3b": "9fd25b1deb1bc1e0eccc44af633e5562",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b0/db97405cc068b270076dbaff9d0c0517a77714": "bda83b47bae1eb41a2672c0e8b1f7216",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ea/e81cf2f90a6d60872b2d396e980abb5205e9e4": "689d3a29d313e519e8804fecf9ba0924",
".git/objects/ea/a55e707c802287a39bfe7dc82a9e3735350f0e": "52b5a52d747fcd10ad50bbaeb57697b8",
".git/objects/cc/59a240938be50655bf772371982f0646626a04": "7f4f8b8df90848f52fac50570d811e2f",
".git/objects/f9/c53b7e966d1bc633f6d6701d175d806070c328": "427dec2c2b812d6eaa052183d8b525f5",
".git/objects/c2/1176eb0e61e5bca57a172798a613631d97245e": "60c87dad7f217629d1e30c936fdb2da6",
".git/objects/e9/e8cb79e9d565e7c908087fa6bd5eddb7af842a": "d0f4bac772c56877783336e3ad5520f3",
".git/objects/f8/fae4fcfe36f491a8448f56c6caeb4cbe08cb70": "f7a9b420a5cf7a6ccbad483b1156b216",
".git/objects/83/3aead4d623138014101bbbd4bc0c207962f60a": "6a4daa13b857cf0dd38662a1104c52b2",
".git/objects/8d/7f83f798dc619275ed0e5d7f47677a303347f1": "01e4916529e54d8b26c203981fffb4e7",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/49/94fa619390eb9ef939520a5bb171463f822e22": "e625e67c9d259683ef6faf9227220aac",
".git/HEAD": "e5d05b2f20f3a4f36592b92d6d7b9584",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "740c9f0f3d9e3112dc468e4e5c784360",
".git/logs/refs/heads/main-rror": "5c01e8af7a2d63bd46dd6a47ebcbee20",
".git/logs/refs/heads/main": "a36cbe2c90b5f6808bdd9fe350c00942",
".git/logs/refs/remotes/origin/main": "36b1fffe856a760d0f0b1189413244ff",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main-rror": "c78ac99a914c2a3bc2acbedab086c9ff",
".git/refs/heads/main": "41e98ca3c7d44a477902bd119a49200b",
".git/refs/remotes/origin/main": "c78ac99a914c2a3bc2acbedab086c9ff",
".git/index": "84f548c9796cfc10c80fbd715d8e7736",
".git/COMMIT_EDITMSG": "7b5088027e9209563fb557eea0e73354",
".git/FETCH_HEAD": "58db92b123f50e2e953814b111a24354",
"assets/AssetManifest.json": "de8406ee0b5966f1583ddb9568e93b17",
"assets/NOTICES": "dd0932ff319e0b10cb318633d7b3fedc",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/AssetManifest.bin.json": "aa7d356e4ffc9d42c34fab0ac6e67d3e",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "b4e59b547baeaa70c02afdd9c2f6f17f",
"assets/fonts/MaterialIcons-Regular.otf": "5d79516351676190b7c3ea59198e0bac",
"assets/assets/images/joystick_small_circle.png": "1961c8d8519937077a99b284754e9cad",
"assets/assets/images/ball.png": "7ca488a591159682c72f9c749984e80a",
"assets/assets/images/shield.svg": "78f3d6d1769c417147b025ccec498d40",
"assets/assets/images/background.jpg": "4bc428282cdb962391c5521b8be590ca",
"assets/assets/images/joystick_big_circle.png": "3c0be9897a659a0b9fc7537628825934",
"assets/assets/images/status_success.svg": "ca0a75735bab77454433adcaf3434848",
"assets/assets/images/starship.svg": "da64d70111208675fff0204d9c7328e5",
"assets/assets/images/spaceman.riv": "4d4d95d44ac2ab588249fbdf55b214a5",
"assets/assets/images/asteroid.svg": "8823605f9351ff44155ed5f7c894495f",
"assets/assets/images/status_failure.svg": "eab96a80e3053b239b3b9c57fe61125c",
"assets/assets/images/gas.svg": "8382eab30bee050f1e5fcf0f40eb913a",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
