this.workbox=this.workbox||{},this.workbox.streams=function(l,o,m){"use strict";try{self["workbox:streams:4.3.1"]&&_()}catch{}function R(e){return e.body&&e.body.getReader?e.body.getReader():e.getReader?e.getReader():new Response(e).body.getReader()}function g(e){m.assert.isArray(e,{moduleName:"workbox-streams",funcName:"concatenate",paramName:"sourcePromises"});const r=e.map(n=>Promise.resolve(n).then(t=>R(t)));let a,c;const i=new Promise((n,t)=>{a=n,c=t});let s=0;const p=[],d=new ReadableStream({pull(n){return r[s].then(t=>t.read()).then(t=>{if(t.done){if(p.push(["Reached the end of source:",e[s]]),s++,s>=r.length){{o.logger.groupCollapsed(`Concatenating ${r.length} sources.`);for(const f of p)Array.isArray(f)?o.logger.log(...f):o.logger.log(f);o.logger.log("Finished reading all sources."),o.logger.groupEnd()}n.close(),a();return}return this.pull(n)}else n.enqueue(t.value)}).catch(t=>{throw o.logger.error("An error occurred:",t),c(t),t})},cancel(){o.logger.warn("The ReadableStream was cancelled."),a()}});return{done:i,stream:d}}function h(e={}){const r=new Headers(e);return r.has("content-type")||r.set("content-type","text/html"),r}function w(e,r){const{done:a,stream:c}=g(e),i=h(r),s=new Response(c,{headers:i});return{done:a,response:s}}let u;function b(){if(u===void 0)try{new ReadableStream({start(){}}),u=!0}catch{u=!1}return u}function y(e,r){return async({event:a,url:c,params:i})=>{if(b()){const{done:d,response:n}=w(e.map(t=>t({event:a,url:c,params:i})),r);return a.waitUntil(d),n}o.logger.log("The current browser doesn't support creating response streams. Falling back to non-streaming response instead.");const s=await Promise.all(e.map(d=>d({event:a,url:c,params:i})).map(async d=>{const n=await d;return n instanceof Response?n.blob():n})),p=h(r);return new Response(new Blob(s),{headers:p})}}return l.concatenate=g,l.concatenateToResponse=w,l.isSupported=b,l.strategy=y,l}({},workbox.core._private,workbox.core._private);
