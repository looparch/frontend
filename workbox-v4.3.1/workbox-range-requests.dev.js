this.workbox=this.workbox||{},this.workbox.rangeRequests=function(u,i,l,o){"use strict";try{self["workbox:range-requests:4.3.1"]&&_()}catch{}function f(a,e,t){l.assert.isInstance(a,Blob,{moduleName:"workbox-range-requests",funcName:"calculateEffectiveBoundaries",paramName:"blob"});const n=a.size;if(t>n||e<0)throw new i.WorkboxError("range-not-satisfiable",{size:n,end:t,start:e});let s,r;return e===null?(s=n-t,r=n):t===null?(s=e,r=n):(s=e,r=t+1),{start:s,end:r}}function g(a){l.assert.isType(a,"string",{moduleName:"workbox-range-requests",funcName:"parseRangeHeader",paramName:"rangeHeader"});const e=a.trim().toLowerCase();if(!e.startsWith("bytes="))throw new i.WorkboxError("unit-must-be-bytes",{normalizedRangeHeader:e});if(e.includes(","))throw new i.WorkboxError("single-range-only",{normalizedRangeHeader:e});const t=/(\d*)-(\d*)/.exec(e);if(t===null||!(t[1]||t[2]))throw new i.WorkboxError("invalid-range-values",{normalizedRangeHeader:e});return{start:t[1]===""?null:Number(t[1]),end:t[2]===""?null:Number(t[2])}}async function d(a,e){try{if(l.assert.isInstance(a,Request,{moduleName:"workbox-range-requests",funcName:"createPartialResponse",paramName:"request"}),l.assert.isInstance(e,Response,{moduleName:"workbox-range-requests",funcName:"createPartialResponse",paramName:"originalResponse"}),e.status===206)return e;const t=a.headers.get("range");if(!t)throw new i.WorkboxError("no-range-header");const n=g(t),s=await e.blob(),r=f(s,n.start,n.end),b=s.slice(r.start,r.end),h=b.size,c=new Response(b,{status:206,statusText:"Partial Content",headers:e.headers});return c.headers.set("Content-Length",h),c.headers.set("Content-Range",`bytes ${r.start}-${r.end-1}/`+s.size),c}catch(t){return o.logger.warn("Unable to construct a partial response; returning a 416 Range Not Satisfiable response instead."),o.logger.groupCollapsed("View details here."),o.logger.log(t),o.logger.log(a),o.logger.log(e),o.logger.groupEnd(),new Response("",{status:416,statusText:"Range Not Satisfiable"})}}class w{async cachedResponseWillBeUsed({request:e,cachedResponse:t}){return t&&e.headers.has("range")?await d(e,t):t}}return u.createPartialResponse=d,u.Plugin=w,u}({},workbox.core._private,workbox.core._private,workbox.core._private);
