/*! For license information please see f7f5558eefd7ea3d1e9300a36c24127838d6804d-c863eef6ca9e1e5378ed.js.LICENSE.txt */
"use strict";(self.webpackChunkloop_architectural_materials=self.webpackChunkloop_architectural_materials||[]).push([[856],{4842:function(e,t,r){r.d(t,{Z:function(){return i}});var n=r(7294),u=r(1883);function i(e){let{children:t}=e;return n.createElement(n.Fragment,null,n.createElement(u.Slice,{alias:"navbar"}),n.createElement("main",{className:"w-full min-h-full mx-auto bg-white max-w-7xl print:bg-transparent"},t),n.createElement(u.Slice,{alias:"footer"}))}},3323:function(e,t,r){r.d(t,{H:function(){return mt}});var n=r(7294),u=r(6746);const i=e=>{let{title:t,description:r,pathname:i}=e;const{title:a,description:c,image:o,siteUrl:s,instagramUrl:l,linkedInUrl:f}=(0,u.Z)(),p={title:t||a,description:r||c,image:""+s+o,url:""+s+(i||"")},g={"@context":"http://schema.org","@type":"WebSite",name:p.title,url:p.url,sameAs:[l,f],potentialAction:{"@type":"SearchAction",target:s+"/search/?all_products%5Bquery%5D={search_term_string}","query-input":"required name=search_term_string"}},h={"@context":"http://schema.org","@type":"Organization",name:p.title,legalName:p.title+", LLC",url:p.url,logo:p.image,foundingDate:"2009",address:{"@type":"PostalAddress",streetAddress:"3110 N 16th Street",addressLocality:"Phoenix",addressRegion:"AZ",postalCode:"85016",addressCountry:"USA"},contactPoint:{"@type":"ContactPoint",contactType:"sales",email:"info@looparch.com",url:p.url+"/contact/"},sameAs:[l,f]},d={"@context":"http://schema.org","@type":"LocalBusiness",address:{"@type":"PostalAddress",streetAddress:"3110 N 16th Street",addressLocality:"Phoenix",addressRegion:"AZ",postalCode:"85016",addressCountry:"USA"},telephone:"602-810-1502",image:p.image,priceRange:"$$$",description:""+p.description,name:p.title,openingHours:"Mo,Tu,We,Th,Fr 09:00-17:00",geo:{"@type":"GeoCoordinates",latitude:"33.484319",longitude:"-112.047970"},sameAs:["https://www.instagram.com/looparch/","https://www.facebook.com/looparch/","https://www.pinterest.com/looparchitecturalmaterials"]};return n.createElement(n.Fragment,null,n.createElement("script",{type:"application/ld+json"},JSON.stringify(g)),n.createElement("script",{type:"application/ld+json"},JSON.stringify(h)),n.createElement("script",{type:"application/ld+json"},JSON.stringify(d)))};function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a.apply(this,arguments)}function c(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e))&&"[object Arguments]"!==Object.prototype.toString.call(e))return;var r=[],n=!0,u=!1,i=void 0;try{for(var a,c=e[Symbol.iterator]();!(n=(a=c.next()).done)&&(r.push(a.value),!t||r.length!==t);n=!0);}catch(o){u=!0,i=o}finally{try{n||null==c.return||c.return()}finally{if(u)throw i}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function o(e){return function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function s(e){return null==e}function l(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return s(e)?t:Boolean(e)}function f(e){return"string"==typeof e}function p(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return s(e)?t:f(e)?e:String(e)}function g(e,t){var r=p(e),n=l(t);return""===r?"":(n&&(r=r.toLowerCase()),r.substr(0,1).toUpperCase()+r.substr(1))}function h(e){return p(e,"").toLowerCase()}var d="\\s\\uFEFF\\xA0",v="\\uD800-\\uDBFF",m="\\uDC00-\\uDFFF",y="\\u0300-\\u036F\\u1AB0-\\u1AFF\\u1DC0-\\u1DFF\\u20D0-\\u20FF\\uFE20-\\uFE2F",b="\\0-\\u02FF\\u0370-\\u1AAF\\u1B00-\\u1DBF\\u1E00-\\u20CF\\u2100-\\uD7FF\\uE000-\\uFE1F\\uFE30-\\uFFFF",x=new RegExp("(["+b+"]|["+v+"]["+m+"]|["+v+"](?!["+m+"])|(?:[^"+v+"]|^)["+m+"])(["+y+"]+)","g"),w=new RegExp("(["+v+"])(["+m+"])","g"),F=new RegExp("((?:["+b+"]|["+v+"]["+m+"]|["+v+"](?!["+m+"])|(?:[^"+v+"]|^)["+m+"])(?:["+y+"]+))|(["+v+"]["+m+"])|([\\n\\r\\u2028\\u2029])|(.)","g"),E=new RegExp("["+d+"]"),A=new RegExp("^["+d+"]+"),C=new RegExp("["+d+"]+$"),k=new RegExp("^\\d+$"),S=/[-[\]{}()*+!<=:?./\\^$|#,]/g,D=/[^A-Za-z0-9]/g,O=/[<>&"'`]/g,B=/(%{1,2})(?:(\d+)\$)?(\+)?([ 0]|'.{1})?(-)?(\d+)?(?:\.(\d+))?([bcdiouxXeEfgGs])?/g,j=/\.?0+$/g,L=/<([A-Za-z0-9]+)>/g,N="a-z\\xB5\\xDF-\\xF6\\xF8-\\xFF\\u0101\\u0103\\u0105\\u0107\\u0109\\u010B\\u010D\\u010F\\u0111\\u0113\\u0115\\u0117\\u0119\\u011B\\u011D\\u011F\\u0121\\u0123\\u0125\\u0127\\u0129\\u012B\\u012D\\u012F\\u0131\\u0133\\u0135\\u0137\\u0138\\u013A\\u013C\\u013E\\u0140\\u0142\\u0144\\u0146\\u0148\\u0149\\u014B\\u014D\\u014F\\u0151\\u0153\\u0155\\u0157\\u0159\\u015B\\u015D\\u015F\\u0161\\u0163\\u0165\\u0167\\u0169\\u016B\\u016D\\u016F\\u0171\\u0173\\u0175\\u0177\\u017A\\u017C\\u017E-\\u0180\\u0183\\u0185\\u0188\\u018C\\u018D\\u0192\\u0195\\u0199-\\u019B\\u019E\\u01A1\\u01A3\\u01A5\\u01A8\\u01AA\\u01AB\\u01AD\\u01B0\\u01B4\\u01B6\\u01B9\\u01BA\\u01BD-\\u01BF\\u01C6\\u01C9\\u01CC\\u01CE\\u01D0\\u01D2\\u01D4\\u01D6\\u01D8\\u01DA\\u01DC\\u01DD\\u01DF\\u01E1\\u01E3\\u01E5\\u01E7\\u01E9\\u01EB\\u01ED\\u01EF\\u01F0\\u01F3\\u01F5\\u01F9\\u01FB\\u01FD\\u01FF\\u0201\\u0203\\u0205\\u0207\\u0209\\u020B\\u020D\\u020F\\u0211\\u0213\\u0215\\u0217\\u0219\\u021B\\u021D\\u021F\\u0221\\u0223\\u0225\\u0227\\u0229\\u022B\\u022D\\u022F\\u0231\\u0233-\\u0239\\u023C\\u023F\\u0240\\u0242\\u0247\\u0249\\u024B\\u024D\\u024F",R="\\x41-\\x5a\\xc0-\\xd6\\xd8-\\xde\\u0100\\u0102\\u0104\\u0106\\u0108\\u010a\\u010c\\u010e\\u0110\\u0112\\u0114\\u0116\\u0118\\u011a\\u011c\\u011e\\u0120\\u0122\\u0124\\u0126\\u0128\\u012a\\u012c\\u012e\\u0130\\u0132\\u0134\\u0136\\u0139\\u013b\\u013d\\u013f\\u0141\\u0143\\u0145\\u0147\\u014a\\u014c\\u014e\\u0150\\u0152\\u0154\\u0156\\u0158\\u015a\\u015c\\u015e\\u0160\\u0162\\u0164\\u0166\\u0168\\u016a\\u016c\\u016e\\u0170\\u0172\\u0174\\u0176\\u0178\\u0179\\u017b\\u017d\\u0181\\u0182\\u0184\\u0186\\u0187\\u0189-\\u018b\\u018e-\\u0191\\u0193\\u0194\\u0196-\\u0198\\u019c\\u019d\\u019f\\u01a0\\u01a2\\u01a4\\u01a6\\u01a7\\u01a9\\u01ac\\u01ae\\u01af\\u01b1-\\u01b3\\u01b5\\u01b7\\u01b8\\u01bc\\u01c4\\u01c5\\u01c7\\u01c8\\u01ca\\u01cb\\u01cd\\u01cf\\u01d1\\u01d3\\u01d5\\u01d7\\u01d9\\u01db\\u01de\\u01e0\\u01e2\\u01e4\\u01e6\\u01e8\\u01ea\\u01ec\\u01ee\\u01f1\\u01f2\\u01f4\\u01f6-\\u01f8\\u01fa\\u01fc\\u01fe\\u0200\\u0202\\u0204\\u0206\\u0208\\u020a\\u020c\\u020e\\u0210\\u0212\\u0214\\u0216\\u0218\\u021a\\u021c\\u021e\\u0220\\u0222\\u0224\\u0226\\u0228\\u022a\\u022c\\u022e\\u0230\\u0232\\u023a\\u023b\\u023d\\u023e\\u0241\\u0243-\\u0246\\u0248\\u024a\\u024c\\u024e",_=new RegExp("(?:["+R+"]["+y+"]*)?(?:["+N+"]["+y+"]*)+|(?:["+R+"]["+y+"]*)+(?!["+N+"])|["+"\\d]+|[\\u2700-\\u27BF]|[^\\x00-\\x2F\\x3A-\\x40\\x5B-\\x60\\x7b-\\xBF\\xD7\\xF7\\u2000-\\u206F"+d+"]+","g"),P=/[A-Z\xC0-\xD6\xD8-\xDE]?[a-z\xDF-\xF6\xF8-\xFF]+|[A-Z\xC0-\xD6\xD8-\xDE]+(?![a-z\xDF-\xF6\xF8-\xFF])|\d+/g,U=new RegExp("^(?:["+N+R+"]["+y+"]*)+$"),I=new RegExp("^((?:["+N+R+"]["+y+"]*)|["+"\\d])+$"),Z=/^[\x01-\xFF]*$/;function z(e,t){return null==e?t:e}function $(e){return s(e)?null:f(e)?e:String(e)}function T(e,t,r){var n,u=p(e);if(s(t))n=Z.test(u)?P:_;else if(t instanceof RegExp)n=t;else{var i=$(z(r,""));n=new RegExp($(t),i)}return z(u.match(n),[])}function J(e,t){return 0===t?h(e):g(e,!0)}function W(e){var t=p(e);return""===t?"":T(t).map(h).join("-")}function q(e,t){var r=t.toLowerCase(),n=t.toUpperCase();return e+(t===r?n:r)}function G(e,t,r){return e<=t?t:e>=r?r:e}var H=9007199254740991;function V(e){return e===1/0?H:e===-1/0?-H:~~e}function Y(e,t,r){var n=p(e),u=s(t)?n.length:G(V(t),0,H),i=p(r,"...");return u>=n.length?n:n.substr(0,t-i.length)+i}var M=55296,X=56319,Q=56320,K=57343;function ee(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return s(e)?t:"number"==typeof e?e:Number(e)}function te(e,t){return e!=e?t:e}function re(e,t){var r=p(e),n=r.length,u=ee(t);if(!((u=te(u,0))<0||u>=n)){var i,a,c=r.charCodeAt(u);return(a=c)>=M&&a<=X&&n>u+1&&function(e){return e>=Q&&e<=K}(i=r.charCodeAt(u+1))?function(e,t){return 1024*(e-M)+t-Q+65536}(c,i):c}}var ne=Array.prototype.reduce;function ue(){this.index=0}ue.prototype.increment=function(){this.index++},ue.prototype.incrementOnEmptyPosition=function(e){s(e)&&this.increment()},ue.prototype.getIndexByPosition=function(e){return s(e)?this.index:e-1};var ie="i",ae="b",ce="c",oe="d",se="o",le="u",fe="x",pe="X",ge="e",he="E",de="f",ve="g",me="G",ye="s",be="+",xe="-",we=2,Fe=8,Ee=16;function Ae(e,t){for(var r=p(e),n=s(t)?1:G(V(t),0,H),u="";n;)1&n&&(u+=r),n>1&&(r+=r),n>>=1;return u}function Ce(e,t){return Ae(e,V(t/e.length)+t%e.length).substr(0,t)}function ke(e,t,r){var n=p(e),u=s(t)?0:G(V(t),0,H),i=p(r," ");return u<=n.length?n:Ce(i,u-n.length)+n}function Se(e,t,r){var n=p(e),u=s(t)?0:G(V(t),0,H),i=p(r," ");return u<=n.length?n:n+Ce(i,u-n.length)}function De(e,t,r){return r.signSpecifier===be&&e>=0&&(t=be+t),t}function Oe(e,t){var r,n=parseFloat(e);isNaN(n)&&(n=0);var u=ee(t.precision,6);switch(t.typeSpecifier){case de:r=n.toFixed(u);break;case ge:r=n.toExponential(u);break;case he:r=n.toExponential(u).toUpperCase();break;case ve:case me:r=function(e,t,r){if(0===e)return"0";var n=0===t?1:t,u=e.toPrecision(n).replace(j,"");r.typeSpecifier===me&&(u=u.toUpperCase());return u}(n,u,t)}return p(r=De(n,r,t))}function Be(e,t){var r=parseInt(e);switch(isNaN(r)&&(r=0),r>>>=0,t.typeSpecifier){case ce:r=String.fromCharCode(r);break;case ae:r=r.toString(we);break;case se:r=r.toString(Fe);break;case fe:r=r.toString(Ee);break;case pe:r=r.toString(Ee).toUpperCase()}return p(r)}function je(e,t){var r=parseInt(e);return isNaN(r)&&(r=0),De(r,$(r),t)}function Le(e,t){var r=e,n=t.precision;return!s(n)&&r.length>n&&(r=Y(r,n,"")),r}function Ne(e,t){var r;switch(t.typeSpecifier){case ye:r=Le;break;case oe:case ie:r=je;break;case ce:case ae:case se:case fe:case pe:case le:r=Be;break;case de:case ge:case he:case ve:case me:r=Oe}return function(e,t){var r=t.width;return s(r)||e.length>=r?e:(t.alignmentSpecifier===xe?Se:ke)(e,r,t.getPaddingCharacter())}(r(e,t),t)}function Re(e){this.percent=e.percent,this.signSpecifier=e.signSpecifier,this.paddingSpecifier=e.paddingSpecifier,this.alignmentSpecifier=e.alignmentSpecifier,this.width=e.width,this.precision=e.precision,this.typeSpecifier=e.typeSpecifier}function _e(e,t,r,n,u,i,a,c,o,l,f){var p=new Re({percent:n,signSpecifier:i,paddingSpecifier:a,alignmentSpecifier:c,width:ee(o,null),precision:ee(l,null),typeSpecifier:f});if(p.isPercentLiteral())return r.slice(1);var g=e.getIndexByPosition(u);return e.incrementOnEmptyPosition(u),function(e,t,r){if(s(r.typeSpecifier))throw new Error("sprintf(): Unknown type specifier");if(e>t-1)throw new Error("sprintf(): Too few arguments");if(e<0)throw new Error("sprintf(): Argument number must be greater than zero")}(g,t.length,p),Ne(t[g],p)}function Pe(e){var t=p(e);if(""===t)return t;for(var r=arguments.length,n=new Array(r>1?r-1:0),u=1;u<r;u++)n[u-1]=arguments[u];var i=_e.bind(void 0,new ue,n);return t.replace(B,i)}Re.prototype.isPercentLiteral=function(){return"%%"===this.percent},Re.prototype.getPaddingCharacter=function(){var e=z(this.paddingSpecifier," ");return 2===e.length&&"'"===e[0]&&(e=e[1]),e};var Ue={"<":"&lt;",">":"&gt;","&":"&amp;",'"':"&quot;","'":"&#x27;","`":"&#x60;"};function Ie(e){return Ue[e]}var Ze={"<":/(&lt;)|(&#x0*3c;)|(&#0*60;)/gi,">":/(&gt;)|(&#x0*3e;)|(&#0*62;)/gi,"&":/(&amp;)|(&#x0*26;)|(&#0*38;)/gi,'"':/(&quot;)|(&#x0*22;)|(&#0*34;)/gi,"'":/(&#x0*27;)|(&#0*39;)/gi,"`":/(&#x0*60;)|(&#0*96;)/gi},ze=Object.keys(Ze);function $e(e,t){return e.replace(Ze[t],t)}var Te={3:"Ξξ",8:"Θθ",A:"AÀÁÂÃÄÅĀĂĄǍǞǠǺȀȂȦȺΆΑА",B:"BƁƂɃΒБ",C:"CÇĆĈĊČƇȻЦ",D:"DĎĐƉƊƋÐΔД",E:"EÈÉÊËĒĔĖĘĚƎƐȄȆȨΈΕЕЭ",F:"FƑΦФ",G:"GĜĞĠĢƓǤǦǴΓГҐ",H:"HĤĦȞΉΗХ",I:"IÌÍÎÏĨĪĬĮİƗǏȈȊΊΙΪІИ",J:"JĴɈЙ",K:"KĶƘǨΚК",L:"LĹĻĽĿŁȽΛЛ",M:"MƜΜМ",N:"NÑŃŅŇƝǸȠΝН",O:"OÒÓÔÕÖØŌŎŐƆƟƠǑǪǬǾȌȎȪȬȮȰΌΟО",P:"PƤΠП",Q:"QɊ",R:"RŔŖŘȐȒɌΡР",S:"SŚŜŞŠȘΣС",T:"TŢŤŦƬƮȚȾΤТ",U:"UÙÚÛÜŨŪŬŮŰŲƯǓǕǗǙǛȔȖɄУЪ",V:"VƲɅВ",W:"WŴΏΩ",X:"XΧ",Y:"YÝŶŸƳȲɎΎΥΫЫ",Z:"ZŹŻŽƵȤΖЗ",a:"aàáâãäåāăąǎǟǡǻȁȃȧɐάαа",b:"bƀƃɓβб",c:"cçćĉċčƈȼц",d:"dďđƌɖɗðδд",e:"eèéêëēĕėęěǝȅȇȩɇɛέεеэ",f:"fƒφф",g:"gĝğġģǥǧǵɠγгґ",h:"hĥħȟɥήηх",i:"iìíîïĩīĭįıǐȉȋɨΐίιϊиі",j:"jĵǰɉй",k:"kķƙǩκк",l:"lĺļľŀłſƚɫλл",m:"mɯɱμм",n:"nñńņňŉƞǹɲνн",o:"oòóôõöøōŏőơǒǫǭǿȍȏȫȭȯȱɔɵοόо",p:"pƥπп",q:"qɋ",r:"rŕŗřȑȓɍɽρр",s:"sßśŝşšșȿςσс",t:"tţťŧƭțʈτт",u:"uùúûüũūŭůűųưǔǖǘǚǜȕȗʉуъ",v:"vʋʌв",w:"wŵωώ",x:"xχ",y:"yýÿŷƴȳɏΰυϋύы",z:"zźżžƶȥɀζз",OE:"Œ",oe:"œ",AE:"ÆǢǼ",ae:"æǣǽ",hv:"ƕ",OI:"Ƣ",oi:"ƣ",DZ:"ǄǱ",Dz:"ǅǲ",dz:"ǆǳ",LJ:"Ǉ",Lj:"ǈ",lj:"ǉ",NJ:"Ǌ",Nj:"ǋ",nj:"ǌ",OU:"Ȣ",ou:"ȣ",TH:"Þ",th:"þ",PS:"Ψ",ps:"ψ",Yo:"Ё",Ye:"Є",Yi:"Ї",Zh:"Ж",Ch:"Ч",Sh:"ШЩ","":"ЪЬь",Yu:"Ю",Ya:"Я",zh:"ж",ch:"ч",sh:"шщ",yu:"ю",ya:"я",yo:"ё",ye:"є",yi:"ї"},Je=null;function We(e){var t=(null!==Je||(Je={},Object.keys(Te).forEach((function(e){for(var t=Te[e],r=0;r<t.length;r++){var n=t[r];Je[n]=e}}))),Je)[e];return t||e}function qe(e,t){return t}function Ge(e){var t=p(e);return""===t?"":t.replace(D,We).replace(x,qe)}function He(e,t){return e.length===t.length?0:e.length<t.length?1:-1}function Ve(e,t,r){var n=p(e),u=$(t);return null!==u&&(""===u||(r=s(r)?0:G(V(r),0,n.length),-1!==n.indexOf(u,r)))}var Ye=Array.prototype.reduce;function Me(e,t){var r=p(e);if(""===t||""===r)return r;var n=$(t);if(s(n))return r.replace(A,"");var u=!0;return Ye.call(r,(function(e,t){return u&&Ve(n,t)?e:(u=!1,e+t)}),"")}var Xe=Array.prototype.reduceRight;function Qe(e,t){var r=p(e);if(""===t||""===r)return r;var n=$(t);if(s(n))return r.replace(C,"");var u=!0;return Xe.call(r,(function(e,t){return u&&Ve(n,t)?e:(u=!1,t+e)}),"")}var Ke="width",et="newLine",tt="indent",rt="cut";function nt(e){var t=p(e);return U.test(t)}function ut(e,t,r){var n=0;return(!(arguments.length>3&&void 0!==arguments[3])||arguments[3])&&(n=1-t.length),e.substr(r+n,t.length).toLowerCase()===t}var it=0,at=1,ct=2;function ot(e){for(var t=it,r="",n=0;t!==ct;){var u=e[n++].toLowerCase();switch(u){case"<":break;case">":t=ct;break;default:E.test(u)?t===at&&(t=ct):(t===it&&(t=at),"/"!==u&&(r+=u))}}return r}var st=null;var lt=null!==st?st:st="object"==typeof r.g&&r.g.Object===Object?r.g:"object"==typeof self&&self.Object===Object?self:new Function("return this")(),ft=lt.v;var pt={camelCase:function(e){var t=p(e);return""===t?"":T(t).map(J).join("")},capitalize:g,decapitalize:function(e){var t=p(e);return""===t?"":t.substr(0,1).toLowerCase()+t.substr(1)},kebabCase:W,lowerCase:h,snakeCase:function(e){var t=p(e);return""===t?"":T(t).map(h).join("_")},swapCase:function(e){return p(e).split("").reduce(q,"")},titleCase:function(e,t){var r=p(e),n=Array.isArray(t)?t:[],u=Z.test(r)?P:_;return r.replace(u,(function(e,t){return t>0&&n.indexOf(r[t-1])>=0?e.toLowerCase():g(e,!0)}))},upperCase:function(e){return p(e).toUpperCase()},count:function(e){return p(e).length},countGraphemes:function(e){return p(e).replace(x,"*").replace(w,"*").length},countSubstrings:function(e,t){var r=p(e),n=p(t),u=n.length,i=0,a=0;if(""===r||""===n)return i;do{-1!==(a=r.indexOf(n,a))&&(i++,a+=u)}while(-1!==a);return i},countWhere:function(e,t,r){var n=p(e);if(""===n||"function"!=typeof t)return 0;var u=t.bind(r);return ne.call(n,(function(e,t,r){return u(t,r,n)?e+1:e}),0)},countWords:function(e,t,r){return T(e,t,r).length},escapeHtml:function(e){return p(e).replace(O,Ie)},escapeRegExp:function(e){return p(e).replace(S,"\\$&")},unescapeHtml:function(e){var t=p(e);return ze.reduce($e,t)},sprintf:Pe,vprintf:function(e,t){return Pe.apply(void 0,[e].concat(o(z(t,[]))))},indexOf:function(e,t,r){return p(e).indexOf(t,r)},lastIndexOf:function(e,t,r){return p(e).lastIndexOf(t,r)},search:function(e,t,r){var n=p(e),u=s(r)?0:G(V(r),0,n.length),i=n.substr(u).search(t);return-1===i||isNaN(u)||(i+=u),i},charAt:function(e,t){return p(e).charAt(t)},codePointAt:re,first:function(e,t){var r=p(e),n=s(t)?1:G(V(t),0,H);return r.length<=n?r:r.substr(0,n)},graphemeAt:function(e,t){var r,n=p(e),u=ee(t),i=0;for(u=te(u,0);null!==(r=F.exec(n));){if(i===u)return F.lastIndex=0,r[0];i++}return""},last:function(e,t){var r=p(e),n=s(t)?1:G(V(t),0,H);return r.length<=n?r:r.substr(r.length-n,n)},prune:function(e,t,r){var n=p(e),u=s(t)?n.length:G(V(t),0,H),i=p(r,"...");if(u>=n.length)return n;var a=Z.test(n)?P:_,c=0;return n.replace(a,(function(e,t){var r=t+e.length;r<=u-i.length&&(c=r)})),n.substr(0,c)+i},slice:function(e,t,r){return p(e).slice(t,r)},substr:function(e,t,r){return p(e).substr(t,r)},substring:function(e,t,r){return p(e).substring(t,r)},truncate:Y,insert:function(e,t,r){var n=p(e),u=p(t),i=ee(r);return i<0||i>n.length||""===u?n:n.slice(0,i)+u+n.slice(i)},latinise:Ge,pad:function(e,t,r){var n=p(e),u=s(t)?0:G(V(t),0,H),i=p(r," ");if(u<=n.length)return n;var a=u-n.length,c=V(a/2),o=a%2;return Ce(i,c)+n+Ce(i,c+o)},padLeft:ke,padRight:Se,repeat:Ae,replace:function(e,t,r){return p(e).replace(t,r)},replaceAll:function e(t,r,n){var u=p(t);if(r instanceof RegExp){if(-1===r.flags.indexOf("g"))throw new TypeError("search argument is a non-global regular expression");return u.replace(r,n)}var i=p(r),a="function"==typeof n;a||(n=p(n));var c=i.length;if(0===c)return e(t,/(?:)/g,n);for(var o=c>1?c:1,s=[],l=u.indexOf(i,0);-1!==l;)s.push(l),l=u.indexOf(i,l+o);for(var f=0,g="",h=0;h<s.length;h++){var d=s[h],v=n;a&&(v=p(n.call(void 0,i,d,u))),g+=u.slice(f,d)+v,f=d+c}return f<u.length&&(g+=u.slice(f)),g},reverse:function(e){return p(e).split("").reverse().join("")},reverseGrapheme:function e(t){for(var r=p(t),n="",u=(r=r.replace(x,(function(t,r,n){return e(n)+r})).replace(w,"$2$1")).length;u--;)n+=r.charAt(u);return n},slugify:function(e){var t=p(e);return""===t?"":W(Ge(t).replace(D,"-"))},splice:function(e,t,r,n){var u=p(e),i=p(n),a=ee(t);a<0?(a=u.length+a)<0&&(a=0):a>u.length&&(a=u.length);var c=ee(r,u.length-a);return c<0&&(c=0),u.slice(0,a)+i+u.slice(a+c)},tr:function(e,t,r){var n,u,i=p(e);if(f(t)&&f(r))n=t.split(""),u=r.split("");else{var a=function(e){var t=Object.keys(e),r=t.sort(He).map((function(t){return e[t]}));return[t,r]}(z(t,{})),o=c(a,2);n=o[0],u=o[1]}var s=n.length;if(0===s)return i;for(var l="",g=u.length,h=0;h<i.length;h++){for(var d=!1,v=void 0,m=0;m<s&&m<g;m++){var y=n[m];if(i.substr(h,y.length)===y){d=!0,v=u[m],h=h+y.length-1;break}}l+=d?v:i[h]}return l},trim:function(e,t){var r=p(e);if(""===t||""===r)return r;var n=$(t);return s(n)?r.trim():Qe(Me(r,n),n)},trimLeft:Me,trimRight:Qe,wordWrap:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=p(e),n=function(e){return{width:ee(e[Ke],75),newLine:p(e[et],"\n"),indent:p(e[tt],""),cut:l(e[rt],!1)}}(t),u=n.width,i=n.newLine,a=n.indent,c=n.cut;if(""===r||u<=0)return a;for(var o=r.length,s=r.substring.bind(r),f=0,g="";o-f>u;)if(" "!==r[f]){var h=r.lastIndexOf(" ",u+f);h>=f?(g+=a+s(f,h)+i,f=h+1):c?(g+=a+s(f,u+f)+i,f+=u):(h=r.indexOf(" ",u+f))>=0?(g+=a+s(f,h)+i,f=h+1):(g+=a+s(f),f=o)}else f++;return f<o&&(g+=a+s(f)),g},endsWith:function(e,t,r){if(s(t))return!1;var n=p(e),u=p(t);if(""===u)return!0;r=s(r)?n.length:G(V(r),0,n.length),r-=u.length;var i=n.indexOf(u,r);return-1!==i&&i===r},includes:Ve,isAlpha:nt,isAlphaDigit:function(e){var t=p(e);return I.test(t)},isBlank:function(e){return 0===p(e).trim().length},isDigit:function(e){var t=p(e);return k.test(t)},isEmpty:function(e){return 0===p(e).length},isLowerCase:function(e){var t=p(e);return nt(t)&&t.toLowerCase()===t},isNumeric:function(e){var t="object"!=typeof e||s(e)?e:Number(e);return("number"==typeof t||"string"==typeof t)&&!isNaN(t-parseFloat(t))},isString:f,isUpperCase:function(e){var t=p(e);return nt(t)&&t.toUpperCase()===t},matches:function(e,t,r){var n,u=p(e),i=p(r);if(!(t instanceof RegExp)){if(null===(n=$(t)))return!1;t=new RegExp(n,i)}return t.test(u)},startsWith:function(e,t,r){var n=p(e),u=$(t);return null!==u&&(""===u||(r=s(r)?0:G(V(r),0,n.length),n.substr(r,u.length)===u))},chars:function(e){return p(e).split("")},codePoints:function(e){for(var t,r=p(e),n=r.length,u=[],i=0;i<n;)t=re(r,i),u.push(t),i+=t>65535?2:1;return u},graphemes:function(e){return z(p(e).match(F),[])},split:function(e,t,r){return p(e).split(t,r)},words:T,stripBom:function(e){var t=p(e);return""===t?"":"\ufeff"===t[0]?t.substring(1):t},stripTags:function(e,t,r){if(""===(e=p(e)))return"";if(!Array.isArray(t)){var n=p(t);t=""===n?[]:function(e){for(var t,r=[];null!==(t=L.exec(e));)r.push(t[1]);return r}(n)}for(var u=p(r),i=e.length,a=t.length>0,c=ut.bind(null,e),o=0,s=0,l="",f="",g=null,h=0;h<i;h++){var d=e[h],v=!1;switch(d){case"<":if(g)break;if(c("< ",h,!1)){v=!0;break}if(0===o){v=!0,o=1;break}if(1===o){s++;break}v=!0;break;case"!":if(1===o&&c("<!",h)){o=2;break}v=!0;break;case"-":if(2===o&&c("!--",h)){o=3;break}v=!0;break;case'"':case"'":1===o&&(g===d?g=null:g||(g=d)),v=!0;break;case"E":case"e":if(2===o&&c("doctype",h)){o=1;break}v=!0;break;case">":if(s>0){s--;break}if(g)break;if(1===o){if(g=null,o=0,a){var m=ot(f+=">");-1!==t.indexOf(m.toLowerCase())?l+=f:l+=u,f=""}else l+=u;break}if(2===o||3===o&&c("--\x3e",h)){g=null,o=0,f="";break}v=!0;break;default:v=!0}if(v)switch(o){case 0:l+=d;break;case 1:a&&(f+=d)}}return l},noConflict:function(){return this===lt.v&&(lt.v=ft),this},version:"1.4.0"};function gt(e,t){this._wrappedValue=e,this._explicitChain=t}function ht(e){return new gt(e,!1)}gt.prototype.value=function(){return this._wrappedValue},gt.prototype.valueOf=function(){return this.value()},gt.prototype.toJSON=function(){return this.value()},gt.prototype.toString=function(){return String(this.value())},gt.prototype.chain=function(){return new gt(this._wrappedValue,!0)},gt.prototype.thru=function(e){return"function"==typeof e?new gt(e(this._wrappedValue),this._explicitChain):this},gt.prototype._explicitChain=!0,Object.keys(pt).forEach((function(e){var t;gt.prototype[e]=(t=pt[e],function(){for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];var u=t.apply(void 0,[this._wrappedValue].concat(r));return this._explicitChain||"string"==typeof u?new gt(u,this._explicitChain):u})})),a(ht,pt,{chain:function(e){return new gt(e,!0)}});var dt=ht;const vt=e=>{let{pathname:t}=e;const r=(e=>{const{siteUrl:t}=(0,u.Z)(),r=e.split("/").filter((e=>""!==e)),n={"@context":"https://schema.org","@type":"BreadcrumbList",name:"Breadcrumbs",itemListElement:[]};let i=""+t;for(let u=0;u<r.length;u++){i+="/"+r[u];const e={"@type":"ListItem",position:u+1,item:{"@id":i,name:dt.titleCase(r[u].replace(/\-/g," "))}};n.itemListElement.push(e)}return n})(t);return n.createElement("script",{type:"application/ld+json"},JSON.stringify(r))},mt=e=>{let{title:t,description:r,pathname:a,children:c}=e;const{title:o,description:s,image:l,siteUrl:f,instagramUrl:p,linkedInUrl:g}=(0,u.Z)(),h=o,d={title:t||o,description:r||s,image:""+f+l,url:""+f||"",pathname:""+f+a||""};return n.createElement(n.Fragment,null,d.title===h&&n.createElement("title",{key:"title"},d.title),d.title!==h&&n.createElement("title",{key:"title"},d.title+" - "+h),n.createElement("meta",{name:"description",key:"description",content:d.description}),n.createElement("meta",{name:"image",key:"image",content:d.image}),n.createElement("meta",{name:"twitter:card",key:"twitter:card",content:"summary_large_image"}),n.createElement("meta",{name:"twitter:title",key:"twitter:title",content:d.title}),n.createElement("meta",{name:"twitter:url",key:"twitter:url",content:d.pathname}),n.createElement("meta",{name:"twitter:description",key:"twitter:description",content:d.description}),n.createElement("meta",{name:"twitter:image",key:"twitter:image",content:d.image}),n.createElement(i,{key:"site-seo"}),a&&n.createElement(vt,{key:"seo-breadcrumbs",pathname:a}),c)}},6746:function(e,t,r){var n=r(1883);t.Z=()=>(0,n.useStaticQuery)("2823708677").site.siteMetadata}}]);
//# sourceMappingURL=f7f5558eefd7ea3d1e9300a36c24127838d6804d-c863eef6ca9e1e5378ed.js.map