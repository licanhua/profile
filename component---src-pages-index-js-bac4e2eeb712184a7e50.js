"use strict";(self.webpackChunklicanhua_blog=self.webpackChunklicanhua_blog||[]).push([[678],{9535:function(e,t,a){var l=a(7294),i=a(5444),n=a(6125);t.Z=function(){var e,t,r=(0,i.useStaticQuery)("3257411868"),c=null===(e=r.site.siteMetadata)||void 0===e?void 0:e.author,o=null===(t=r.site.siteMetadata)||void 0===t?void 0:t.social;return l.createElement("div",{className:"bio"},l.createElement(n.S,{className:"bio-avatar",layout:"fixed",formats:["auto","webp","avif"],src:"../images/profile-pic.png",width:50,height:50,quality:95,alt:"Profile picture",__imageData:a(1550)}),(null==c?void 0:c.name)&&l.createElement("p",null,"Written by ",l.createElement("strong",null,c.name)," ",(null==c?void 0:c.summary)||null," ",l.createElement("a",{href:"https://twitter.com/"+((null==o?void 0:o.twitter)||"")},"You should follow them on Twitter")))}},7198:function(e,t,a){var l=a(7294),i=a(5444);t.Z=function(e){var t,a=e.location,n=e.title,r=e.children,c="/"===a.pathname;return t=c?l.createElement("h1",{className:"main-heading"},l.createElement(i.Link,{to:"/"},n)):l.createElement(i.Link,{className:"header-link-home",to:"/"},n),l.createElement("div",{className:"global-wrapper","data-is-root-path":c},l.createElement("header",{className:"global-header"},t),l.createElement("main",null,r),l.createElement("footer",null,"© ",(new Date).getFullYear(),", Built with"," ",l.createElement("a",{href:"https://www.gatsbyjs.com"},"Gatsby")))}},6179:function(e,t,a){var l=a(7294),i=a(5186),n=a(5444),r=function(e){var t,a,r,c=e.description,o=e.lang,s=e.meta,m=e.title,p=(0,n.useStaticQuery)("2841359383").site,d=c||p.siteMetadata.description,u=null===(t=p.siteMetadata)||void 0===t?void 0:t.title;return l.createElement(i.q,{htmlAttributes:{lang:o},title:m,titleTemplate:u?"%s | "+u:null,meta:[{name:"description",content:d},{property:"og:title",content:m},{property:"og:description",content:d},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:(null===(a=p.siteMetadata)||void 0===a||null===(r=a.social)||void 0===r?void 0:r.twitter)||""},{name:"twitter:title",content:m},{name:"twitter:description",content:d}].concat(s)})};r.defaultProps={lang:"en",meta:[],description:""},t.Z=r},7704:function(e,t,a){a.r(t);var l=a(7294),i=a(5444),n=a(9535),r=a(7198),c=a(6179);t.default=function(e){var t,a=e.data,o=e.location,s=(null===(t=a.site.siteMetadata)||void 0===t?void 0:t.title)||"Title",m=a.allMarkdownRemark.nodes;return 0===m.length?l.createElement(r.Z,{location:o,title:s},l.createElement(c.Z,{title:"All posts"}),l.createElement(n.Z,null),l.createElement("p",null,'No blog posts found. Add markdown posts to "content/blog" (or the directory you specified for the "gatsby-source-filesystem" plugin in gatsby-config.js).')):l.createElement(r.Z,{location:o,title:s},l.createElement(c.Z,{title:"All posts"}),l.createElement(n.Z,null),l.createElement("ol",{style:{listStyle:"none"}},m.map((function(e){var t=e.frontmatter.title||e.fields.slug;return l.createElement("li",{key:e.fields.slug},l.createElement("article",{className:"post-list-item",itemScope:!0,itemType:"http://schema.org/Article"},l.createElement("header",null,l.createElement("h2",null,l.createElement(i.Link,{to:e.fields.slug,itemProp:"url"},l.createElement("span",{itemProp:"headline"},t))),l.createElement("small",null,e.frontmatter.date)),l.createElement("section",null,l.createElement("p",{dangerouslySetInnerHTML:{__html:e.frontmatter.description||e.excerpt},itemProp:"description"}))))}))))}},1550:function(e){e.exports=JSON.parse('{"layout":"fixed","backgroundColor":"#181818","images":{"fallback":{"src":"/static/646898c68204d33f7f062ce145628dc4/e5610/profile-pic.png","srcSet":"/static/646898c68204d33f7f062ce145628dc4/e5610/profile-pic.png 50w,\\n/static/646898c68204d33f7f062ce145628dc4/e9b55/profile-pic.png 100w","sizes":"50px"},"sources":[{"srcSet":"/static/646898c68204d33f7f062ce145628dc4/d4bf4/profile-pic.avif 50w,\\n/static/646898c68204d33f7f062ce145628dc4/ee81f/profile-pic.avif 100w","type":"image/avif","sizes":"50px"},{"srcSet":"/static/646898c68204d33f7f062ce145628dc4/3faea/profile-pic.webp 50w,\\n/static/646898c68204d33f7f062ce145628dc4/6a679/profile-pic.webp 100w","type":"image/webp","sizes":"50px"}]},"width":50,"height":50}')}}]);
//# sourceMappingURL=component---src-pages-index-js-bac4e2eeb712184a7e50.js.map