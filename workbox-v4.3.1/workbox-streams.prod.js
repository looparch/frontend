this.workbox=this.workbox||{},this.workbox.streams=function(u){"use strict";try{self["workbox:streams:4.3.1"]&&_()}catch{}function l(r){const n=r.map(s=>Promise.resolve(s).then(e=>function(t){return t.body&&t.body.getReader?t.body.getReader():t.getReader?t.getReader():new Response(t).body.getReader()}(e)));let o,a;const c=new Promise((s,e)=>{o=s,a=e});let d=0;return{done:c,stream:new ReadableStream({pull(s){return n[d].then(e=>e.read()).then(e=>{if(e.done)return++d>=n.length?(s.close(),void o()):this.pull(s);s.enqueue(e.value)}).catch(e=>{throw a(e),e})},cancel(){o()}})}}function p(r={}){const n=new Headers(r);return n.has("content-type")||n.set("content-type","text/html"),n}function m(r,n){const{done:o,stream:a}=l(r),c=p(n);return{done:o,response:new Response(a,{headers:c})}}let i;function h(){if(i===void 0)try{new ReadableStream({start(){}}),i=!0}catch{i=!1}return i}return u.concatenate=l,u.concatenateToResponse=m,u.isSupported=h,u.strategy=function(r,n){return async({event:o,url:a,params:c})=>{if(h()){const{done:e,response:t}=m(r.map(w=>w({event:o,url:a,params:c})),n);return o.waitUntil(e),t}const d=await Promise.all(r.map(e=>e({event:o,url:a,params:c})).map(async e=>{const t=await e;return t instanceof Response?t.blob():t})),s=p(n);return new Response(new Blob(d),{headers:s})}},u}({});
