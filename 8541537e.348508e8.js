(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{142:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return s})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return r})),a.d(t,"default",(function(){return d}));var i=a(3),n=a(7),o=(a(0),a(203)),s=(a(208),a(209),a(204),a(205),{id:"index-slowlog",title:"Debugging Redis using RedisInsight Slowlog Tool",sidebar_label:"Debugging Redis using Slowlog",slug:"/explore/redisinsight/slowlog"}),l={unversionedId:"explore/redisinsight/slowlog/index-slowlog",id:"explore/redisinsight/slowlog/index-slowlog",isDocsHomePage:!1,title:"Debugging Redis using RedisInsight Slowlog Tool",description:"RedisInsight, a free GUI for Redis, allows you to identify and troubleshoot bottlenecks with the Slowlog analysis tool. If you are experiencing high latency and high CPU usage with Redis operations and looking for a tool for debugging and tracing your Redis database, RedisInsight Slow Log is a perfect tool for you.",source:"@site/docs/explore/redisinsight/slowlog/index-slowlog.mdx",slug:"/explore/redisinsight/slowlog",permalink:"/explore/redisinsight/slowlog",editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/explore/redisinsight/slowlog/index-slowlog.mdx",version:"current",sidebar_label:"Debugging Redis using Slowlog",sidebar:"docs",previous:{title:"Visualize Redis database keys using RedisInsight Browser Tool",permalink:"/explore/redisinsight/browser"},next:{title:"Manage and Optimize Redis using RedisInsight Memory Analyzer Tool",permalink:"/explore/redisinsight/memoryanalyzer"}},r=[{value:"Step 1. Create a Redis database",id:"step-1-create-a-redis-database",children:[]},{value:"Step 2: Download RedisInsight",id:"step-2-download-redisinsight",children:[]},{value:"Step 3. Connect to the database using RedisInsight GUI",id:"step-3-connect-to-the-database-using-redisinsight-gui",children:[]},{value:"Step 4: Click \u201cSlowlog\u201d and then \u201cConfigure Slowlog\u201d",id:"step-4-click-slowlog-and-then-configure-slowlog",children:[]},{value:"Step 5. Configure Slowlog",id:"step-5-configure-slowlog",children:[]},{value:"Step 6. Prepare a script to add large dataset to Redis database",id:"step-6-prepare-a-script-to-add-large-dataset-to-redis-database",children:[]},{value:"Step 7. Configuring the execution time",id:"step-7-configuring-the-execution-time",children:[]},{value:"Additional Links",id:"additional-links",children:[]}],c={toc:r};function d(e){var t=e.components,s=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(i.a)({},c,s,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"RedisInsight, a free GUI for Redis, allows you to identify and troubleshoot bottlenecks with the Slowlog analysis tool. If you are experiencing high latency and high CPU usage with Redis operations and looking for a tool for debugging and tracing your Redis database, RedisInsight Slow Log is a perfect tool for you."),Object(o.b)("p",null,"Redis Slow Log is highly effective at showing the actual processing time of each slow command. The Redis slowlog is a log of all commands which exceed a specified run time. Please note that the network latency is not included in the measurement, just the time taken to actually execute the command. Redis Slow Log is a list of slow operations for your Redis instance."),Object(o.b)("p",null,"Follow the below steps to see how Slowlog is leveraged to troubleshoot performance issues."),Object(o.b)("h2",{id:"step-1-create-a-redis-database"},"Step 1. Create a Redis database"),Object(o.b)("p",null,"Follow ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"https://developer.redislabs.com/create"}),"https://developer.redislabs.com/create")," to install and create Redis database"),Object(o.b)("h2",{id:"step-2-download-redisinsight"},"Step 2: Download RedisInsight"),Object(o.b)("p",null,"To install RedisInsight on your local system, you need to first download the software from Redis Labs website."),Object(o.b)("p",null,Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"https://redislabs.com/redis-enterprise/redis-insight/#insight-form"}),"Click this link ")," to access a form that allows you to select the operating system of your choice."),Object(o.b)("p",null,Object(o.b)("img",{alt:"My Image",src:a(508).default})),Object(o.b)("p",null,"Run the installer. After the web server starts, open http://YOUR_HOST_IP:8001 and add a Redis database connection."),Object(o.b)("p",null,'Select "Connect to a Redis database"\n',Object(o.b)("img",{alt:"My Image",src:a(509).default})),Object(o.b)("p",null,"Enter the requested details, including Name, Host (endpoint), Port, and Password.  Then click \u201cADD REDIS DATABASE\u201d."),Object(o.b)("h2",{id:"step-3-connect-to-the-database-using-redisinsight-gui"},"Step 3. Connect to the database using RedisInsight GUI"),Object(o.b)("p",null,Object(o.b)("img",{alt:"alt_text",src:a(510).default,title:"image_tooltip"})),Object(o.b)("h2",{id:"step-4-click-slowlog-and-then-configure-slowlog"},"Step 4: Click \u201cSlowlog\u201d and then \u201cConfigure Slowlog\u201d"),Object(o.b)("p",null,Object(o.b)("img",{alt:"alt_text",src:a(511).default,title:"image_tooltip"})),Object(o.b)("h2",{id:"step-5-configure-slowlog"},"Step 5. Configure Slowlog"),Object(o.b)("p",null,"There are two configurations related to slowlog query - "),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"slowlog-log-slower-than: Used to set the evaluation time of slow query, that is to say, commands that exceed this configuration item will be treated as slow operations and recorded in the slow query log. Its execution unit is microseconds (1 second equals 1000000 microseconds);"),Object(o.b)("li",{parentName:"ul"},"slowlog-max-len: Used to configure the maximum number of records in the slow query log.")),Object(o.b)("p",null,"Please note that a negative number disables the slowlog, while a value of zero forces the logging of every command. Slowlog-max-len is the length of the slowlog. The minimum value is zero. When a new command is logged and the slowlog is already at its maximum length, the oldest one is removed from the queue of logged commands in order to make space. The configuration can be done by editing redis.conf or while the server is running using the CONFIG GET and CONFIG SET commands."),Object(o.b)("p",null,"Slowlog will log the last X number(amount) of queries which took more time than Y microseconds to run. You can set this either in redis.conf or at runtime using CONFIG command"),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-bash"})," CONFIG SET slowlog-log-slower-than 500\n CONFIG SET slowlog-max-len 50\n")),Object(o.b)("p",null,Object(o.b)("img",{alt:"alt_text",src:a(512).default,title:"image_tooltip"})),Object(o.b)("h2",{id:"step-6-prepare-a-script-to-add-large-dataset-to-redis-database"},"Step 6. Prepare a script to add large dataset to Redis database"),Object(o.b)("p",null,"To see slowlog in action, let us pick up a large dataset. Create a file called importcities.py and add the below content:"),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-python"}),' import csv\n import config\n from redis import Redis\n\n # Database Connection\n host = config.REDIS_CFG["host"]\n port = config.REDIS_CFG["port"]\n pwd = config.REDIS_CFG["password"]\n redis = Redis(host=host, port=port, password=pwd, charset="utf-8", decode_responses=True)\n\n # Import Cities\n print("Importing ...")\n\n count = 0\n\n with open("data/worldcities.csv", \'r\') as cities:\n    reader = csv.DictReader(cities)\n    for row in reader:\n        id = row["id"]\n        name = row["city_ascii"]\n        lng = row["lng"]\n        lat = row["lat"]\n        country = row["country"]\n        pop = row["population"]\n\n        print("id = {}, name = {}, lng = {}, lat = {}".format(id, name, lng, lat))\n        count += 1\n\n        redis.hmset("ct:{}".format(id), { "_id" : id, "name" : name, "country" : country, "population" : pop })\n        redis.geoadd("idx:cities", lng, lat, id)\n        redis.hset("idx:city_by_name", name, id)\n\n')),Object(o.b)("p",null,"Create a file called config.py as shown below:"),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-python"}),' REDIS_CFG = {\n        "host" : "localhost",\n        "port" : 6379,\n        "password" : ""\n }\n\n')),Object(o.b)("p",null,"Ensure that you provide the right host and port details."),Object(o.b)("p",null,"Execute the script:"),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-bash"})," python3 importcities.py\n")),Object(o.b)("p",null,"You will see the below results:"),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-bash"})," id = 762, name = Labatt Ontario Breweries, lng = -81.2467, lat = 42.9778\n id = 915, name = Ninkasi Brewing, lng = -123.11, lat = 44.0569\n id = 930, name = Oaken Barrel Brewing, lng = -86.0901, lat = 39.615\n Import of 16790 records completed\n\n")),Object(o.b)("p",null,"If you want to simulate slowlogs, then consider using KEYS command. It is always recommended NOT TO USE ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"https://redis.io/commands/keys"}),"KEYS")," in your regular application code. If you're looking for a way to find keys in a subset of your keyspace, consider using ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"https://redis.io/commands/scan"}),"SCAN")," or ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"https://redis.io/topics/data-types#sets"}),"sets"),"."),Object(o.b)("p",null,"The KEYS command may ruin performance when it is executed against large databases"),Object(o.b)("p",null,"Let us try to run KEYS * in RedisInsight CLI and see if it generates slowlog as shown below:"),Object(o.b)("p",null,Object(o.b)("img",{alt:"alt_text",src:a(513).default,title:"image_tooltip"})),Object(o.b)("p",null,"Run it one more time and you will notice below:"),Object(o.b)("p",null,Object(o.b)("img",{alt:"alt_text",src:a(514).default,title:"image_tooltip"})),Object(o.b)("p",null,"Try decreasing the execution time(50 ms), and you will notice that the below run query also gets logged into the slowlog "),Object(o.b)("p",null,Object(o.b)("img",{alt:"alt_text",src:a(515).default,title:"image_tooltip"})),Object(o.b)("h2",{id:"step-7-configuring-the-execution-time"},"Step 7. Configuring the execution time"),Object(o.b)("p",null,"Each entry in the slowlog contains four fields: a slowlog entry ID, the Unix timestamp of when the command was run, the execution time in microseconds, and an array with the command itself, along with any arguments. See the example output below:"),Object(o.b)("p",null,"In order to retrieve the slowlog queries, you have to use SLOWLOG GET X. Where X is the number of slow queries you want to retrieve."),Object(o.b)("p",null,Object(o.b)("img",{alt:"alt_text",src:a(516).default,title:"image_tooltip"})),Object(o.b)("p",null,"As shown above, the result displays a unique id, timestamp, time taken to execute the query in microseconds, and the actual command + parameter executed. It is important to note that  the Slow log is transient; there's no persistence for it so in the case of failover, the slowlog is lost. If you are looking to rely on a persistent slowlog, you'll be wanting to reconsider your design choices"),Object(o.b)("p",null,"Please note: If I choose \u201c0\u201d it forces the logging of every command while \u201c-1\u201d disabled the slowlog."),Object(o.b)("p",null,Object(o.b)("img",{alt:"alt_text",src:a(517).default,title:"image_tooltip"})),Object(o.b)("p",null,Object(o.b)("img",{alt:"alt_text",src:a(518).default,title:"image_tooltip"})),Object(o.b)("div",{className:"admonition admonition-important alert alert--info"},Object(o.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(i.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(i.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(i.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"important")),Object(o.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"In a clustered database, each node can have different values for slowlog.  You will need to use the configuration tool in order to configure slowlog for clustered databases."))),Object(o.b)("h2",{id:"additional-links"},"Additional Links"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(i.a)({parentName:"li"},{href:"/explore/redisinsight/browser"}),"Explore Redis keys using RedisInsight browser tool")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(i.a)({parentName:"li"},{href:"/explore/redisinsight/memoryanalyzer"}),"Memory Analysis using RedisInsight")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(i.a)({parentName:"li"},{href:"/explore/redisinsight/redisearch"}),"Unified Search and Analytics using RediSearch Browser Tool")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(i.a)({parentName:"li"},{href:"/explore/redisinsight/redistimeseries"}),"Managing time-series data using RedisTimeSeries Browser Tool")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(i.a)({parentName:"li"},{href:"/explore/redisinsight/profiler"}),"Analyze Your Redis commands using RedisInsight Profiler tool")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(i.a)({parentName:"li"},{href:"/explore/redisinsight/slowlog"}),"Debugging Redis using RedisInsight Slowlog Tool")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(i.a)({parentName:"li"},{href:"/explore/redisinsight/streams"}),"Using Redis Streams with RedisInsight"))))}d.isMDXComponent=!0},205:function(e,t,a){"use strict";var i=a(0),n=a.n(i),o=a(203),s=a(211);a(204),a(55);t.a=function(e){var t=n.a.useState(!1),a=t[0],i=t[1];return n.a.createElement("div",{className:"ri-container"},n.a.createElement("div",{className:"ri-description-short"},n.a.createElement("div",{className:"ri-icon"},n.a.createElement("span",{className:"fe fe-zap"})),n.a.createElement("div",{className:"ri-detail"},n.a.createElement("div",{className:"ri-title"},n.a.createElement("a",{href:e.page},e.title)),n.a.createElement("div",{className:"ri-description"},e.description,n.a.Children.count(e.children)>0&&n.a.createElement("span",{className:"ri-more fe fe-more-horizontal",onClick:function(){return i(!a)}})))),a&&n.a.createElement("div",{className:"ri-description-long"},n.a.createElement(o.a,{components:s.a},e.children)))}},206:function(e,t,a){"use strict";var i=a(0),n=a(207);t.a=function(){var e=Object(i.useContext)(n.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},207:function(e,t,a){"use strict";var i=a(0),n=Object(i.createContext)(void 0);t.a=n},208:function(e,t,a){"use strict";var i=a(0),n=a.n(i),o=a(206),s=a(210),l=a(56),r=a.n(l),c=37,d=39;t.a=function(e){var t=e.lazy,a=e.block,l=e.defaultValue,u=e.values,b=e.groupId,g=e.className,p=Object(o.a)(),m=p.tabGroupChoices,h=p.setTabGroupChoices,f=Object(i.useState)(l),w=f[0],O=f[1],j=i.Children.toArray(e.children);if(null!=b){var y=m[b];null!=y&&y!==w&&u.some((function(e){return e.value===y}))&&O(y)}var v=function(e){O(e),null!=b&&h(b,e)},x=[];return n.a.createElement("div",null,n.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(s.a)("tabs",{"tabs--block":a},g)},u.map((function(e){var t=e.value,a=e.label;return n.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":w===t,className:Object(s.a)("tabs__item",r.a.tabItem,{"tabs__item--active":w===t}),key:t,ref:function(e){return x.push(e)},onKeyDown:function(e){!function(e,t,a){switch(a.keyCode){case d:!function(e,t){var a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()}(e,t);break;case c:!function(e,t){var a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()}(e,t)}}(x,e.target,e)},onFocus:function(){return v(t)},onClick:function(){v(t)}},a)}))),t?Object(i.cloneElement)(j.filter((function(e){return e.props.value===w}))[0],{className:"margin-vert--md"}):n.a.createElement("div",{className:"margin-vert--md"},j.map((function(e,t){return Object(i.cloneElement)(e,{key:t,hidden:e.props.value!==w})}))))}},209:function(e,t,a){"use strict";var i=a(3),n=a(0),o=a.n(n);t.a=function(e){var t=e.children,a=e.hidden,n=e.className;return o.a.createElement("div",Object(i.a)({role:"tabpanel"},{hidden:a,className:n}),t)}},508:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/redisinsightinstall-b920e816c541305ea0ea2dd2593f5a0f.png"},509:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/redisinsight4-c10ff2035f21df96053f824b1eefd790.png"},510:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/image1-8f0cf7f11e5d716affde378f66b0d12a.png"},511:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/image2-71c25a7e0c7d40486db9e2c87366681b.png"},512:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/image3-010e694bbff97804f7a21557c0f89460.png"},513:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/image4-538586b0cbeda678460824ea5232d4ee.png"},514:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/image5-7965ff92896b645b244a9d227020c520.png"},515:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/image6-7628115cc1bab68d9a32b0e3c1617947.png"},516:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/image7-e46381de0ccf775e68ce489db49dac69.png"},517:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/image8-05dbaf7a14f664f18a9d49df06e27698.png"},518:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/image9-71bd9a256ac012b4230bf61d1dd0fe92.png"}}]);