this.workbox=this.workbox||{},this.workbox.googleAnalytics=function(w,y,T,h,i,s,p,l,b){"use strict";try{self["workbox:google-analytics:4.3.1"]&&_()}catch{}const d="workbox-google-analytics",k=60*48,u="www.google-analytics.com",g="www.googletagmanager.com",R="/analytics.js",A="/gtag/js",S="/gtm.js",f=/^\/(\w+\/)?collect/,x=e=>async({queue:o})=>{let n;for(;n=await o.shiftRequest();){const{request:t,timestamp:c}=n,a=new URL(t.url);try{const r=t.method==="POST"?new URLSearchParams(await t.clone().text()):a.searchParams,P=c-(Number(r.get("qt"))||0),L=Date.now()-P;if(r.set("qt",L),e.parameterOverrides)for(const m of Object.keys(e.parameterOverrides)){const v=e.parameterOverrides[m];r.set(m,v)}typeof e.hitFilter=="function"&&e.hitFilter.call(null,r),await fetch(new Request(a.origin+a.pathname,{body:r.toString(),method:"POST",mode:"cors",credentials:"omit",headers:{"Content-Type":"text/plain"}})),i.logger.log(`Request for '${h.getFriendlyURL(a.href)}'has been replayed`)}catch(r){throw await o.unshiftRequest(n),i.logger.log(`Request for '${h.getFriendlyURL(a.href)}'failed to replay, putting it back in the queue.`),r}}i.logger.log("All Google Analytics request successfully replayed; the queue is now empty!")},G=e=>{const o=({url:t})=>t.hostname===u&&f.test(t.pathname),n=new b.NetworkOnly({plugins:[e]});return[new s.Route(o,n,"GET"),new s.Route(o,n,"POST")]},O=e=>{const o=({url:t})=>t.hostname===u&&t.pathname===R,n=new l.NetworkFirst({cacheName:e});return new s.Route(o,n,"GET")},E=e=>{const o=({url:t})=>t.hostname===g&&t.pathname===A,n=new l.NetworkFirst({cacheName:e});return new s.Route(o,n,"GET")},q=e=>{const o=({url:t})=>t.hostname===g&&t.pathname===S,n=new l.NetworkFirst({cacheName:e});return new s.Route(o,n,"GET")},N=(e={})=>{const o=T.cacheNames.getGoogleAnalyticsName(e.cacheName),n=new y.Plugin(d,{maxRetentionTime:k,onSync:x(e)}),t=[q(o),O(o),E(o),...G(n)],c=new p.Router;for(const a of t)c.registerRoute(a);c.addFetchListener()};return w.initialize=N,w}({},workbox.backgroundSync,workbox.core._private,workbox.core._private,workbox.core._private,workbox.routing,workbox.routing,workbox.strategies,workbox.strategies);
