(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{337:function(e,t,a){"use strict";var o=a(0),n=a.n(o),r=a(335),s=a(342);a(336),a(59);t.a=function(e){var t=n.a.useState(!1),a=t[0],o=t[1];return n.a.createElement("div",{className:"ri-container"},n.a.createElement("div",{className:"ri-description-short"},n.a.createElement("div",{className:"ri-icon"},n.a.createElement("span",{className:"fe fe-zap"})),n.a.createElement("div",{className:"ri-detail"},n.a.createElement("div",{className:"ri-title"},n.a.createElement("a",{href:e.page},e.title)),n.a.createElement("div",{className:"ri-description"},e.description,n.a.Children.count(e.children)>0&&n.a.createElement("span",{className:"ri-more fe fe-more-horizontal",onClick:function(){return o(!a)}})))),a&&n.a.createElement("div",{className:"ri-description-long"},n.a.createElement(r.a,{components:s.a},e.children)))}},497:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/try-free-52c2cec515e5862b2f5021faf0fbbe53.png"},498:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/launch_database-9ba6a791eb0374aa22b735e42350f4a6.png"},499:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/create_heroku-adefbcbc7fe61ec48d1a65a3172f9f58.png"},500:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/heroku_app1_env-8d491cfd2c8859db457a5821eb59f94a.png"},501:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/heroku_ratelimiter-536e63f33448af8ad5c84987300831e4.png"},91:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return s})),a.d(t,"metadata",(function(){return i})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return p}));var o=a(3),n=a(7),r=(a(0),a(335)),s=(a(337),{id:"index-herokunodejs",title:"Deploy a NodeJS app on Heroku using Redis",sidebar_label:"How to deploy a NodeJS based application on Heroku using Redis",slug:"/create/heroku/herokunodejs",authors:["ajeet"]}),i={unversionedId:"create/heroku/herokunodejs/index-herokunodejs",id:"create/heroku/herokunodejs/index-herokunodejs",isDocsHomePage:!1,title:"Deploy a NodeJS app on Heroku using Redis",description:"Heroku is a platform as a service (PaaS) that enables developers to build, run, and operate applications entirely in the cloud. It is a platform for data as well as apps - providing a secure, scalable database-as-a-service with tons of developers tools like database followers, forking, dataclips and automated health checks.Heroku is widely popular as it makes the processes of deploying, configuring, scaling, tuning, and managing apps as simple and straightforward as possible, so that developers can focus on what\u2019s most important: building great apps that delight and engage customers.",source:"@site/docs/create/heroku/herokunodejs/index-herokunodejs.mdx",slug:"/create/heroku/herokunodejs",permalink:"/create/heroku/herokunodejs",editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/create/heroku/herokunodejs/index-herokunodejs.mdx",version:"current",lastUpdatedAt:1646390800,sidebar_label:"How to deploy a NodeJS based application on Heroku using Redis",sidebar:"docs",previous:{title:"Deploy Java app on Heroku using Redis",permalink:"/create/heroku/herokujava"},next:{title:"Deploy a Python app on Heroku using Redis",permalink:"/create/heroku/herokupython"}},c=[{value:"Step 2. Create a Heroku account",id:"step-2-create-a-heroku-account",children:[]},{value:"Step 3. Install Heroku CLI on your system",id:"step-3-install-heroku-cli-on-your-system",children:[]},{value:"Step 4. Login to Heroku",id:"step-4-login-to-heroku",children:[]},{value:"Step 5. Connect your application to Redis Enterprise Cloud",id:"step-5-connect-your-application-to-redis-enterprise-cloud",children:[]},{value:"Step 6. Setting up environment variables",id:"step-6-setting-up-environment-variables",children:[]},{value:"Step 7. Deploy your code",id:"step-7-deploy-your-code",children:[]},{value:"Step 8. Accessing the application",id:"step-8-accessing-the-application",children:[]},{value:"Next Step",id:"next-step",children:[]}],l={toc:c};function p(e){var t=e.components,s=Object(n.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},l,s,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Heroku is a platform as a service (PaaS) that enables developers to build, run, and operate applications entirely in the cloud. It is a platform for data as well as apps - providing a secure, scalable database-as-a-service with tons of developers tools like database followers, forking, dataclips and automated health checks.Heroku is widely popular as it makes the processes of deploying, configuring, scaling, tuning, and managing apps as simple and straightforward as possible, so that developers can focus on what\u2019s most important: building great apps that delight and engage customers."),Object(r.b)("h4",{id:"step-1-create-redis-enterprise-cloud"},"Step 1. Create Redis Enterprise Cloud"),Object(r.b)("p",null,"Create your free Redis Enterprise Cloud account by visiting ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://redis.com/try-free"}),"this link")),Object(r.b)("p",null,Object(r.b)("img",{alt:"recloud",src:a(497).default})),Object(r.b)("p",null,Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"/create/rediscloud"}),"Follow this link to create a Redis Enterprise Cloud")," subscription and database as shown below:"),Object(r.b)("p",null,Object(r.b)("img",{alt:"heroku",src:a(498).default})),Object(r.b)("p",null,"The database endpoint URL is unique for all and hence might be different in your case. Save it for future reference."),Object(r.b)("h3",{id:"step-2-create-a-heroku-account"},"Step 2. Create a Heroku account"),Object(r.b)("p",null,"If you are using Heroku for the first time, create your new Heroku account ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://signup.heroku.com/login"}),"through this link")),Object(r.b)("p",null,Object(r.b)("img",{alt:"heroku",src:a(499).default})),Object(r.b)("h3",{id:"step-3-install-heroku-cli-on-your-system"},"Step 3. Install Heroku CLI on your system"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-macos"})," brew install heroku\n")),Object(r.b)("h3",{id:"step-4-login-to-heroku"},"Step 4. Login to Heroku"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-bash"})," heroku login\n heroku: Press any key to open up the browser to login or q to exit:\n Opening browser to https://cli-auth.heroku.com/auth/cli/browser/XXXXXXXXXXA\n Logging in... done\n Logged in as your_email_address\n")),Object(r.b)("h3",{id:"step-5-connect-your-application-to-redis-enterprise-cloud"},"Step 5. Connect your application to Redis Enterprise Cloud"),Object(r.b)("p",null,"For this demonstration, we will be using a ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/redis-developer/basic-rate-limiting-demo-nodejs"}),"Sample Rate Limiting application")),Object(r.b)("h4",{id:"clone-the-repository"},"Clone the repository"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-bash"})," git clone https://github.com/redis-developer/basic-redis-rate-limiting-demo-nodejs\n")),Object(r.b)("p",null,"Run the commands below to get a functioning Git repository that contains a simple application as well as a package.json file."),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{}),"heroku create\nCreating app... done, \u2b22 rocky-lowlands-06306\nhttps://rocky-lowlands-06306.herokuapp.com/ | https://git.heroku.com/rocky-lowlands-06306.git\n")),Object(r.b)("h3",{id:"step-6-setting-up-environment-variables"},"Step 6. Setting up environment variables"),Object(r.b)("p",null,'Go to the Heroku dashboard, click "Settings" and set ',Object(r.b)("inlineCode",{parentName:"p"},"REDIS_ENDPOINT_URI")," and ",Object(r.b)("inlineCode",{parentName:"p"},"REDIS_PASSWORD")," under the Config Vars.\nRefer to Step 1 for the correct values to use."),Object(r.b)("p",null,Object(r.b)("img",{alt:"heroku",src:a(500).default})),Object(r.b)("p",null,"You now have a functioning Git repository that contains a simple application as well as a package.json file, which is used by Node\u2019s dependency manager."),Object(r.b)("h3",{id:"step-7-deploy-your-code"},"Step 7. Deploy your code"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{}),"$ git push heroku\n")),Object(r.b)("p",null,"Wait for few seconds and you will see the messages below:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{}),"remote: -----\x3e Launching...\nremote:        Released v3\nremote:        https://rocky-lowlands-06306.herokuapp.com/ deployed to Heroku\nremote: \nremote: Verifying deploy... done.\nTo https://git.heroku.com/rocky-lowlands-06306.git\n * [new branch]      main -> main\n\n")),Object(r.b)("h3",{id:"step-8-accessing-the-application"},"Step 8. Accessing the application"),Object(r.b)("p",null,"Open ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://rocky-lowlands-06306.herokuapp.com/"}),"https://rocky-lowlands-06306.herokuapp.com/"),"   to see your application"),Object(r.b)("p",null,Object(r.b)("img",{alt:"heroku",src:a(501).default})),Object(r.b)("h3",{id:"next-step"},"Next Step"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"/explore/redisinsight/"}),"Connecting to the database using RedisInsight")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"/howtos/moviesdatabase/getting-started/"}),"How to list & search Movies database using Redisearch"))))}p.isMDXComponent=!0}}]);