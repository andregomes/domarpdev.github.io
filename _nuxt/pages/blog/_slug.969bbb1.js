(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{302:function(t,e,n){var content=n(306);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(20).default)("083745fe",content,!0,{sourceMap:!1})},305:function(t,e,n){"use strict";var o=n(302);n.n(o).a},306:function(t,e,n){var o=n(19),r=n(307),c=n(308);e=o(!1);var l=r(c);e.push([t.i,".article-container{margin:10px 25px}.nuxt-content h2{font-weight:700;font-size:28px}.nuxt-content h3{font-weight:700;font-size:22px}.nuxt-content p{margin-bottom:20px}.icon.icon-link{background-image:url("+l+");display:inline-block;width:20px;height:20px;background-size:20px 20px}.v-application code{background-color:transparent}",""]),t.exports=e},307:function(t,e,n){"use strict";t.exports=function(t,e){return e||(e={}),"string"!=typeof(t=t&&t.__esModule?t.default:t)?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),e.hash&&(t+=e.hash),/["'() \t\n]/.test(t)||e.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t)}},308:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0Ij48cGF0aCBjbGFzcz0iaGVyb2ljb24tdWkiIGQ9Ik0xMS4wMyA4aDMuOTRsMS4wNi00LjI0YTEgMSAwIDEgMSAxLjk0LjQ4TDE3LjAzIDhIMjBhMSAxIDAgMCAxIDAgMmgtMy40N2wtMSA0SDE4YTEgMSAwIDEgMSAwIDJoLTIuOTdsLTEuMDYgNC4yNWExIDEgMCAxIDEtMS45NC0uNDlsLjk0LTMuNzZIOS4wM2wtMS4wNiA0LjI1YTEgMSAwIDEgMS0xLjk0LS40OUw2Ljk3IDE2SDRhMSAxIDAgMCAxIDAtMmgzLjQ3bDEtNEg2YTEgMSAwIDAgMSAwLTJoMi45N2wxLjA2LTQuMjRhMSAxIDAgMSAxIDEuOTQuNDhMMTEuMDMgOHptLS41IDJsLTEgNGgzLjk0bDEtNGgtMy45NHoiLz48L3N2Zz4="},326:function(t,e,n){"use strict";n.r(e);n(43);var o=n(11),r={name:"PageSlug",asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var n,o,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,o=t.params,e.next=3,n("blog",o.slug).fetch();case 3:return r=e.sent,e.abrupt("return",{post:r});case 5:case"end":return e.stop()}}),e)})))()},methods:{formatDate:function(t){return new Date(t).toLocaleDateString("en",{year:"numeric",month:"long",day:"numeric"})}},head:function(){return console.log(this.post),{title:this.post.title,titleTemplate:"%s - Pramod Devireddy",meta:[{hid:"description",name:"description",content:this.post.description},{hid:"og:title",property:"og:title",content:this.post.title},{hid:"og:description",property:"og:description",content:this.post.description},{hid:"og:type",property:"og:type",content:"article"},{hid:"twitter:title",name:"twitter:title",content:this.post.title},{hid:"twitter:description",name:"twitter:description",content:this.post.description}]}}},c=(n(305),n(59)),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"article-container"},[n("h1",[t._v(t._s(t.post.title))]),t._v(" "),n("p",[t._v(t._s(t.post.description))]),t._v(" "),n("p",[t._v("post last updated: "+t._s(t.formatDate(t.post.updatedAt)))]),t._v(" "),n("nuxt-content",{attrs:{document:t.post}}),t._v(" "),n("nav",[n("ul",t._l(t.post.toc,(function(link){return n("li",{key:link.id},[n("NuxtLink",{attrs:{to:"#"+link.id}},[t._v(t._s(link.text))])],1)})),0)])],1)}),[],!1,null,null,null);e.default=component.exports}}]);