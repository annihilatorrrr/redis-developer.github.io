(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{111:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return o})),t.d(r,"metadata",(function(){return c})),t.d(r,"toc",(function(){return s})),t.d(r,"default",(function(){return l}));var n=t(3),a=t(7),i=(t(0),t(120)),o={id:"index-software",title:"Install and Create Redis database from Source",sidebar_label:"Redis from Source",slug:"/create/resoftware"},c={unversionedId:"create/resoftware/index-software",id:"create/resoftware/index-software",isDocsHomePage:!1,title:"Install and Create Redis database from Source",description:"Download, extract and compile Redis",source:"@site/docs/create/resoftware/index-resoftware.mdx",slug:"/create/resoftware",permalink:"/create/resoftware",editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/create/resoftware/index-resoftware.mdx",version:"current",sidebar_label:"Redis from Source",sidebar:"docs",previous:{title:"Install and create Redis database using Docker",permalink:"/create/docker"},next:{title:"Explore Data",permalink:"/explore/"}},s=[{value:"Download, extract and compile Redis",id:"download-extract-and-compile-redis",children:[]},{value:"Running Redis Server",id:"running-redis-server",children:[]},{value:"Interacting with Redis Client",id:"interacting-with-redis-client",children:[]}],d={toc:s};function l(e){var r=e.components,t=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},d,t,{components:r,mdxType:"MDXLayout"}),Object(i.b)("h3",{id:"download-extract-and-compile-redis"},"Download, extract and compile Redis"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"wget http://download.redis.io/redis-stable.tar.gz\ntar xvzf redis-stable.tar.gz\ncd redis-stable\nmake\n")),Object(i.b)("p",null,"It is a good idea to copy both the Redis server and the command line interface into the proper places, either manually using the following commands:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"sudo cp src/redis-server /usr/local/bin/\nsudo cp src/redis-cli /usr/local/bin/\n")),Object(i.b)("p",null,"Or just using ",Object(i.b)("inlineCode",{parentName:"p"},"sudo make install.")),Object(i.b)("p",null,"The binaries that are now compiled are available in the src directory. "),Object(i.b)("h3",{id:"running-redis-server"},"Running Redis Server"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"$ redis-server\n")),Object(i.b)("h3",{id:"interacting-with-redis-client"},"Interacting with Redis Client"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),'$ src/redis-cli\nredis> set foo bar\nOK\nredis> get foo\n"bar"\n')),Object(i.b)("p",null,"Please note: By default, Redis has 0-15 indexes for databases, you can change that number databases NUMBER in redis.conf."))}l.isMDXComponent=!0},120:function(e,r,t){"use strict";t.d(r,"a",(function(){return u})),t.d(r,"b",(function(){return f}));var n=t(0),a=t.n(n);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var d=a.a.createContext({}),l=function(e){var r=a.a.useContext(d),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},u=function(e){var r=l(e.components);return a.a.createElement(d.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return a.a.createElement(a.a.Fragment,{},r)}},b=a.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=l(t),b=n,f=u["".concat(o,".").concat(b)]||u[b]||p[b]||i;return t?a.a.createElement(f,c(c({ref:r},d),{},{components:t})):a.a.createElement(f,c({ref:r},d))}));function f(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var i=t.length,o=new Array(i);o[0]=b;var c={};for(var s in r)hasOwnProperty.call(r,s)&&(c[s]=r[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var d=2;d<i;d++)o[d]=t[d];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);