"use strict";(self.webpackChunkloop_architectural_materials=self.webpackChunkloop_architectural_materials||[]).push([[685],{8731:function(m,l,t){var e=t(6540),r=t(4794),c=t(2532);l.A=i=>{let{link:s,gatsbyImage:o,title:n,description:a}=i;return e.createElement(e.Fragment,null,e.createElement(r.Link,{to:`${s}`,className:"grid grid-flow-row"},e.createElement("div",{className:"relative block overflow-hidden bg-gray-100 rounded-md h-60 lg:h-72 group"},e.createElement(c.G,{image:o,alt:`${n} Background Image`,className:"!absolute object-cover object-center w-full h-full transition duration-500 group-hover:scale-110"}),e.createElement("div",{className:"absolute inset-0 z-10 bg-[#000000] opacity-40 transition duration-500 group-hover:opacity-0"}),e.createElement("div",{className:"absolute z-20 grid w-full h-full grid-rows-2 text-white"},e.createElement("h3",{className:"text-2xl font-bold leading-none transitional-product-card-inner place-self-start"},n),e.createElement("div",{className:"text-base font-normal transition duration-500 place-self-end justify-self-start"},e.createElement("p",{className:"transitional-product-card-inner-description"},a))))))}},6543:function(m,l,t){t.d(l,{A:function(){return c}});var e=t(6540),r=t(4794);function c(i){let{children:s}=i;return e.createElement(e.Fragment,null,e.createElement(r.Slice,{alias:"navbar"}),e.createElement("main",{className:"w-full min-h-full mx-auto bg-white max-w-7xl print:bg-transparent"},s),e.createElement(r.Slice,{alias:"footer"}))}},9176:function(m,l,t){t.r(l),t.d(l,{default:function(){return o}});var e=t(6540),r=t(6543),c=t(4794),i=()=>{const{blogPosts:{nodes:n}}=(0,c.useStaticQuery)("2554830902");return n},s=t(8731),o=()=>{const n=i();return e.createElement(r.A,null,e.createElement("div",{className:"max-w-6xl px-4 py-6 mx-auto sm:px-6 lg:py-8 lg:px-8"},e.createElement("h1",{className:"mt-2 mb-8 text-3xl font-bold tracking-tight md:mb-12 sm:text-4xl"},"Announcements"),e.createElement("article",{className:"grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 md:gap-4"},n.map(a=>e.createElement(s.A,{key:a.id,link:`/announcements/${a.slug}`,gatsbyImage:a.heroImage.gatsbyImageData,title:a.title,description:a.body.childMarkdownRemark.excerpt})))))}}}]);
