/* The Mains Gazette offline support: the app shell is cached; data files are fetched fresh when online. */
const CACHE='mainsgazette-v1';
const SHELL=['./','index.html','data/themes.js','data/dossier.js','manifest.webmanifest','icons/icon.svg','icons/icon-192.png'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(SHELL)).then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',e=>{
  const u=new URL(e.request.url);
  if(e.request.method!=='GET'||u.origin!==location.origin)return;
  const fresh=u.pathname.endsWith('.js')&&u.pathname.includes('/data/')||e.request.mode==='navigate';
  if(fresh){e.respondWith(fetch(e.request).then(r=>{const c=r.clone();caches.open(CACHE).then(x=>x.put(e.request,c));return r}).catch(()=>caches.match(e.request).then(r=>r||caches.match('index.html'))));return}
  e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request)));
});
