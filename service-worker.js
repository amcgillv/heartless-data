"use strict";var precacheConfig=[["/heartless-data/index.html","44acb264901fd94bcc21d441ce5a5d8f"],["/heartless-data/static/css/main.8cbb7c1f.css","849fa8b2896ef3ca486c3ff79e8cf670"],["/heartless-data/static/js/main.5c97f2d2.js","4e39bdc7362738ddaa3bb8b55767bd95"],["/heartless-data/static/media/biggrayground.e9d457cd.svg","e9d457cdb9bb726bc43976270dd2b688"],["/heartless-data/static/media/bigpink-08.1d0bf495.svg","1d0bf4956f40b1a4ab909d4789182bd5"],["/heartless-data/static/media/bigpurp.3c89c645.svg","3c89c645871f4f05cba18a629e25c174"],["/heartless-data/static/media/breakup_boysquig-08.b3fa2524.svg","b3fa252434c09433cb59472b4860bb19"],["/heartless-data/static/media/breakup_girlsquig-09.34c315e1.svg","34c315e16dbbc0e6c6ddca3773369f54"],["/heartless-data/static/media/calculations_Calculations.c74ebe1b.svg","c74ebe1bd99f79211cac89a0784f785b"],["/heartless-data/static/media/calendar.81a1ba6b.svg","81a1ba6b1348716b0c081809451d7508"],["/heartless-data/static/media/chart1-08.d0f875d8.svg","d0f875d8cf6055024b3fa8238a864790"],["/heartless-data/static/media/gray-08.5a1f93ae.svg","5a1f93ae3a24bcde25ff09d73cf78c7f"],["/heartless-data/static/media/heartchart-09.27bcb0fa.svg","27bcb0faff4d36594fcd27266ad5a5be"],["/heartless-data/static/media/heartchart1-10.a4d20af3.svg","a4d20af37872e8aca1bdf104253fe93f"],["/heartless-data/static/media/height_Height.44ce7281.svg","44ce72816092b50dd429a3011a958ba8"],["/heartless-data/static/media/logo.5d5d9eef.svg","5d5d9eefa31e5e13a6610d9fa7a283bb"],["/heartless-data/static/media/parallax1.3d310e8d.svg","3d310e8d24fb8250dc1af4b5851af5c7"],["/heartless-data/static/media/pinkscrib_Tile.2105d669.svg","2105d669f430c1847f451617aea4261a"],["/heartless-data/static/media/purple-09.2279d6c9.svg","2279d6c9d47638b60993a34445074fa9"],["/heartless-data/static/media/redcover_Tile.9a286f2e.svg","9a286f2ed762716583cae2df4cd15d00"],["/heartless-data/static/media/title_heart.357ba185.svg","357ba1850db9d41f91bb9afffd31b8a4"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,t,s){var r=new URL(e);return s&&r.pathname.match(s)||(r.search+=(r.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),r.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return t.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],s=new URL(a,self.location),r=createCacheKey(s,hashParamName,t,/\.\w{8}\./);return[s.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(s){return setOfCachedUrls(s).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return s.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,t=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),s="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,s),e=urlsToCacheKeys.has(t));var r="/heartless-data/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(t=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});