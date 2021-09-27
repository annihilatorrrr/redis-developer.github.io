(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{252:function(e,t,n){"use strict";var a=n(0),r=n.n(a),c=n(250),i=n(258);n(251),n(55);t.a=function(e){var t=r.a.useState(!1),n=t[0],a=t[1];return r.a.createElement("div",{className:"ri-container"},r.a.createElement("div",{className:"ri-description-short"},r.a.createElement("div",{className:"ri-icon"},r.a.createElement("span",{className:"fe fe-zap"})),r.a.createElement("div",{className:"ri-detail"},r.a.createElement("div",{className:"ri-title"},r.a.createElement("a",{href:e.page},e.title)),r.a.createElement("div",{className:"ri-description"},e.description,r.a.Children.count(e.children)>0&&r.a.createElement("span",{className:"ri-more fe fe-more-horizontal",onClick:function(){return a(!n)}})))),n&&r.a.createElement("div",{className:"ri-description-long"},r.a.createElement(c.a,{components:i.a},e.children)))}},253:function(e,t,n){"use strict";var a=n(0),r=n(254);t.a=function(){var e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},254:function(e,t,n){"use strict";var a=n(0),r=Object(a.createContext)(void 0);t.a=r},255:function(e,t,n){"use strict";var a=n(0),r=n.n(a),c=n(253),i=n(257),s=n(56),o=n.n(s),l=37,d=39;t.a=function(e){var t=e.lazy,n=e.block,s=e.defaultValue,u=e.values,b=e.groupId,p=e.className,h=Object(c.a)(),m=h.tabGroupChoices,f=h.setTabGroupChoices,v=Object(a.useState)(s),g=v[0],j=v[1],O=a.Children.toArray(e.children);if(null!=b){var N=m[b];null!=N&&N!==g&&u.some((function(e){return e.value===N}))&&j(N)}var w=function(e){j(e),null!=b&&f(b,e)},y=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":n},p)},u.map((function(e){var t=e.value,n=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":g===t,className:Object(i.a)("tabs__item",o.a.tabItem,{"tabs__item--active":g===t}),key:t,ref:function(e){return y.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case d:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case l:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(y,e.target,e)},onFocus:function(){return w(t)},onClick:function(){w(t)}},n)}))),t?Object(a.cloneElement)(O.filter((function(e){return e.props.value===g}))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},O.map((function(e,t){return Object(a.cloneElement)(e,{key:t,hidden:e.props.value!==g})}))))}},256:function(e,t,n){"use strict";var a=n(3),r=n(0),c=n.n(r);t.a=function(e){var t=e.children,n=e.hidden,r=e.className;return c.a.createElement("div",Object(a.a)({role:"tabpanel"},{hidden:n,className:r}),t)}},380:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/cachingapp-c57ca30014acc4dd3d61d39766b77d99.png"},381:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/cachingdemo-49c982bef33902ca1584de7476c56616.png"},78:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return o})),n.d(t,"default",(function(){return d}));var a=n(3),r=n(7),c=(n(0),n(250)),i=(n(255),n(256),n(251),n(252),{id:"index-caching",title:"How to cache REST API responses Using Redis & NodeJS",sidebar_label:"How to cache REST API responses Using Redis & NodeJS",slug:"/howtos/caching"}),s={unversionedId:"howtos/caching/index-caching",id:"howtos/caching/index-caching",isDocsHomePage:!1,title:"How to cache REST API responses Using Redis & NodeJS",description:"Author: Ajeet Singh Raina",source:"@site/docs/howtos/caching/index-caching.mdx",slug:"/howtos/caching",permalink:"/howtos/caching",editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/howtos/caching/index-caching.mdx",version:"current",sidebar_label:"How to cache REST API responses Using Redis & NodeJS",sidebar:"docs",previous:{title:"How to build a Rate Limiter using Redis",permalink:"/howtos/ratelimiting"},next:{title:"1. Getting Started",permalink:"/howtos/moviesdatabase/getting-started"}},o=[{value:"Pre-requisite",id:"pre-requisite",children:[{value:"1. Install NodeJS",id:"1-install-nodejs",children:[]},{value:"2. Clone the repository",id:"2-clone-the-repository",children:[]},{value:"3. Copy .env.sample to create .env",id:"3-copy-envsample-to-create-env",children:[]},{value:"4. Run frontend",id:"4-run-frontend",children:[]},{value:"5. Run backend",id:"5-run-backend",children:[]}]}],l={toc:o};function d(e){var t=e.components,i=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},l,i,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"Author: ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://twitter.com/ajeetsraina"}),"Ajeet Singh Raina")),Object(c.b)("p",null,Object(c.b)("img",{alt:"My Image",src:n(380).default})),Object(c.b)("p",null,"This app returns the number of repositories a Github account has. When you first search for an account, the server calls Github's API to return the response. This can take some time. The server then adds the details of this slow response to Redis for future requests. When you search again, the next response comes directly from Redis cache instead of calling Github. The responses become much faster."),Object(c.b)("h2",{id:"pre-requisite"},"Pre-requisite"),Object(c.b)("h3",{id:"1-install-nodejs"},"1. Install NodeJS"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{}),"brew install node\n")),Object(c.b)("h3",{id:"2-clone-the-repository"},"2. Clone the repository"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{}),"git clone https://github.com/redis-developer/basic-caching-demo-nodejs\n")),Object(c.b)("h3",{id:"3-copy-envsample-to-create-env"},"3. Copy .env.sample to create .env"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{}),"- REDIS_ENDPOINT_URI: Redis server URI\n- REDIS_PASSWORD: Password to the server\n")),Object(c.b)("h3",{id:"4-run-frontend"},"4. Run frontend"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{}),"cd client\nyarn\nyarn serve\n")),Object(c.b)("h3",{id:"5-run-backend"},"5. Run backend"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{}),"yarn\nyarn start\n")),Object(c.b)("p",null,"Open up https://localhost:8081 and you can see a basic caching demo application up and running."),Object(c.b)("p",null,Object(c.b)("img",{alt:"My Image",src:n(381).default})))}d.isMDXComponent=!0}}]);