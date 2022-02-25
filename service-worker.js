 const version = 4
 const cachename = 'app-cache-v'+version
 

 const arquivos = [
     "./",
     "./afront.html",
     "./main.js",
     "./service-worker.js",
     "./manifest.json",
     "./estilos.css",
     "./imagens/afront.png",
     "./imagens/box-braid.png",
     "./imagens/boxeadora.png",
     "./imagens/croche.png",
     "./imagens/entrelace.png",
     "./imagens/fulani.png",
     "./imagens/ghanna.png",
     "./imagens/good.png",
     "./imagens/lemonade.png",
     "./imagens/Logo.png",
     "./imagens/logoafront.png",
     "./imagens/nago-fulani.png",
     "./imagens/nago.jpg",
     "./imagens/pri.png",
     "./imagens/rabo.png",
     "./imagens/twist.png",
     "./imagens/icone192.png",
     "./imagens/icone512.png",
     "./imagens/box-braid2.jpg",
     "./imagens/box-braid3.jpg",
     "./imagens/box-braid4.jpg",
     "./imagens/box-braid5.jpg",
     "./imagens/box-braid6.jpg",
     "./imagens/box-braid7.jpg",
     "./imagens/box-braid8.jpg",
     "./imagens/box-braid9.jpg",
     "./imagens/box-braid10.jpg",
     "./imagens/box-braid11.jpg",
     "./imagens/box-braid12.jpg",
     "./imagens/boxeadora1.jpg",
     "./imagens/boxeadora2.jpg",
     "./imagens/boxeadora3.jpg",
     "./imagens/boxeadora4.jpg",
     "./imagens/boxeadora5.jpg",
     "./imagens/boxeadora6.jpg",
     "./imagens/boxeadora7.jpg",
     "./imagens/boxeadora8.jpg",
     "./imagens/boxeadora9.jpg",
     "./imagens/boxeadora10.jpg",
     "./imagens/boxeadora11.jpg",
     "./imagens/boxeadora12.jpg",
     "./imagens/boxeadora13.jpg",
     "./imagens/boxeadora14.jpg",
     "./imagens/cover.png",
     "./imagens/croche2.jpg",
     "./imagens/croche3.jpg",
     "./imagens/croche4.jpg",
     "./imagens/entrelace1.jpg",
     "./imagens/entrelace2.jpg",
     "./imagens/entrelace3.jpg",
     "./imagens/entrelace4.jpg",
     "./imagens/entrelace5.jpg",
     "./imagens/entrelace6.jpg",
     "./imagens/entrelace7.jpg",
     "./imagens/entrelace8.jpg",
     "./imagens/entrelace9.jpg",
     "./imagens/entrelace10.jpg",
     "./imagens/entrelace11.jpg",
     "./imagens/entrelace12.jpg",
     "./imagens/entrelace13.jpg",
     "./imagens/entrelace14.jpg",
     "./imagens/Fulani1.jpg",
     "./imagens/Fulani2.jpg",
     "./imagens/Fulani3.jpg",
     "./imagens/Fulani4.jpg",
     "./imagens/Fulani5.jpg",
     "./imagens/ghanna1.jpg",
     "./imagens/ghanna2.jpg",
     "./imagens/ghanna3.jpg",
     "./imagens/ghanna4.jpg",
     "./imagens/ghanna5.jpg",
     "./imagens/lemonade1.jpg",
     "./imagens/lemonade2.jpg",
     "./imagens/lemonade3.jpg",
     "./imagens/lemonade4.jpg",
     "./imagens/nago-fulani1.jpg",
     "./imagens/nago-fulani2.jpg",
     "./imagens/nago-fulani3.jpg",
     "./imagens/nago-fulani4.jpg",
     "./imagens/nago-fulani5.jpg",
     "./imagens/nago-fulani6.jpg",
     "./imagens/nago-fulani7.jpg",
     "./imagens/nago1.jpg",
     "./imagens/nago2.jpg",
     "./imagens/nago3.jpg",
     "./imagens/nago4.jpg",
     "./imagens/nago5.jpg",
     "./imagens/nago6.jpg",
     "./imagens/nago7.jpg",
     "./imagens/nago8.jpg",
     "./imagens/nago9.jpg",
     "./imagens/nago10.jpg",
     "./imagens/nago12.jpg",
     "./imagens/nago13.jpg",
     "./imagens/nago14.jpg",
     "./imagens/nago15.jpg",
     "./imagens/nago16.jpg",
     "./imagens/nago17.jpg",
     "./imagens/nago18.jpg",
     "./imagens/nago19.jpg",
     "./imagens/nago20.jpg",
     "./imagens/rabo1.jpg",
     "./imagens/rabo2.jpg",
     "./imagens/rabo3.jpg",
     "./imagens/rabo4.jpg",
   ]
 

   self.addEventListener('install', function(event) {
     event.waitUntil(
       caches.open(cachename).then(function(cache) {
         return cache.addAll(arquivos);
       })
     );
   });
   

   self.addEventListener('fetch', function(event) {
     event.respondWith(caches.match(event.request).then(function(response) {
       if (response !== undefined) {
         return response;
       } else {
         return fetch(event.request).then(function (response) {
           let responseClone = response.clone();
           
           caches.open(cachename).then(function (cache) {
             cache.put(event.request, responseClone);
           });
           return response;
         }).catch(function () {
           return caches.match('./afront.html');
         });
       }
     }));
   });