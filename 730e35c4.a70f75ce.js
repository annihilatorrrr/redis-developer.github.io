(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{142:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return r})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return d}));var a=n(3),i=n(7),o=(n(0),n(225)),s={id:"index-antipatterns",title:"14 Anti-Patterns Every Redis Developer Should be Aware of",sidebar_label:"14 Anti-Patterns Every Redis Developer Should be Aware of",slug:"/howtos/antipatterns/"},r={unversionedId:"howtos/antipatterns/index-antipatterns",id:"howtos/antipatterns/index-antipatterns",isDocsHomePage:!1,title:"14 Anti-Patterns Every Redis Developer Should be Aware of",description:"antipattern",source:"@site/docs/howtos/antipatterns/index-antipatterns.mdx",slug:"/howtos/antipatterns/",permalink:"/howtos/antipatterns/",editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/howtos/antipatterns/index-antipatterns.mdx",version:"current",sidebar_label:"14 Anti-Patterns Every Redis Developer Should be Aware of",sidebar:"docs",previous:{title:"HackerNews Clone using RedisJSON",permalink:"/howtos/hackernews"},next:{title:"How to Use SSL/TLS With Redis Enterprise",permalink:"/howtos/security/"}},l=[{value:"1. Large databases running on a single shard/Redis instance",id:"1-large-databases-running-on-a-single-shardredis-instance",children:[]},{value:"2. One Request per connection",id:"2-one-request-per-connection",children:[]},{value:"3. Connecting directly to Redis instances",id:"3-connecting-directly-to-redis-instances",children:[]},{value:"4. More than one secondary shard (Redis OSS)",id:"4-more-than-one-secondary-shard-redis-oss",children:[]},{value:"5. Performing single operations",id:"5-performing-single-operations",children:[]},{value:"6. Caching keys without TTL (a bonus)",id:"6-caching-keys-without-ttl-a-bonus",children:[]},{value:"7. Endless Redis Replication Loop",id:"7-endless-redis-replication-loop",children:[]},{value:"8. Hot Keys",id:"8-hot-keys",children:[]},{value:"9. Using Keys command",id:"9-using-keys-command",children:[]},{value:"10. Running Ephemeral Redis as a primary database",id:"10-running-ephemeral-redis-as-a-primary-database",children:[]},{value:"11. Scanning keyspace by keyname",id:"11-scanning-keyspace-by-keyname",children:[]},{value:"12. Storing JSON blobs in a string",id:"12-storing-json-blobs-in-a-string",children:[]},{value:"13. Translating a table or JSON to a HASH without considering query pattern",id:"13-translating-a-table-or-json-to-a-hash-without-considering-query-pattern",children:[]},{value:"14. Going full time series database when all you needed was to know the ordering",id:"14-going-full-time-series-database-when-all-you-needed-was-to-know-the-ordering",children:[]},{value:"References",id:"references",children:[]}],c={toc:l};function d(e){var t=e.components,s=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},c,s,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("img",{alt:"antipattern",src:n(535).default})),Object(o.b)("p",null,'"Antipattern" basically refers to those practices and solutions that might seem to be a good fit initially but when it comes to implementation phase, it makes your code much more complex. Redis defaults are not the best for everyone. It is important to spend time and figure out what works best for you. Redis is a favorite data store of millions of developers due to its speed and performance, however it is important to make sure that it is being used properly, otherwise, problems can and will occur.'),Object(o.b)("p",null,"Let us look at the top 14 Redis anti-patterns to avoid:"),Object(o.b)("h3",{id:"1-large-databases-running-on-a-single-shardredis-instance"},"1. Large databases running on a single shard/Redis instance"),Object(o.b)("p",null,"With large databases running on a single shard/Redis instance, there are chances that the fail over, backup and recovery all will take longer. Hence, it\u2019s always recommended to keep shards to recommended sizes.  General conservative rule of thumb is 25Gb or 25K Ops/Second."),Object(o.b)("p",null,"Redis Enterprise recommends to shard if you have more than 25 GB of data and a high number of operations. Another aspect is if you have above 25,000 operations per second, then sharding can improve performance. With less number of operations/second, it can handle up to 50GB of data too."),Object(o.b)("h3",{id:"2-one-request-per-connection"},"2. One Request per connection"),Object(o.b)("p",null,"Many databases use the concept of REST as a primary interface\u2014send a plain old HTTP request to an endpoint with arguments encoded as POST. The database grabs the information and returns it as a response with a status code and closes the connection. Redis should be used differently\u2014the connection should be persistent and you should make requests as needed to a long-lived connection. However, well-meaning developers sometimes create a connection, run a command, and close the connection. While opening and closing connections per command will technically work, it\u2019s far from optimal and needlessly cuts into the performance of Redis as a whole.  "),Object(o.b)("p",null,"Using the OSS Cluster API, the connection to the nodes are maintained by the client as needed, so you\u2019ll have multiple connections open to different nodes at any given time. With Redis Enterprise, the connection is actually to a proxy, which takes care of the complexity of connections at the cluster level.\nOpening a connection each operation requires a lot of overhead to build up and tear down the TCP connection. Hence, it is recommended to use a connection pool (Jedis) or a Redis client that has a reactive design (Lettuce)."),Object(o.b)("h3",{id:"3-connecting-directly-to-redis-instances"},"3. Connecting directly to Redis instances"),Object(o.b)("p",null,"With a large number of clients, a reconnect flood will be able to simply overwhelm a single threaded Redis process and force a failover. Hence, it is recommended that you should run either twemproxy (OSS) or the Redis enterprise DMC proxy. Clients send requests to a proxy that is able to speak the Redis  protocol, instead of sending requests directly to the right Redis instance. The proxy will make sure to forward our request to the right Redis instance according to the configured partitioning schema and will send the replies back to the client."),Object(o.b)("h3",{id:"4-more-than-one-secondary-shard-redis-oss"},"4. More than one secondary shard (Redis OSS)"),Object(o.b)("p",null,"Redis OSS solves the quorum challenge by having an odd number of shards (primary + 2 secondary). Redis Enterprise solves the quorum challenge with an odd number of nodes. Redis Enterprise avoids a split-brain situation with only 2 copies of the data, which is more cost-efficient. In addition, the so-called \u2018quorum-only node' can be used to bring a cluster up to an odd number of nodes if an additional, not necessary data node would be too expensive."),Object(o.b)("h3",{id:"5-performing-single-operations"},"5. Performing single operations"),Object(o.b)("p",null,"Performing several operations serially increases connection overhead. Instead, use Redis Pipelining.  Pipelining is the process of sending multiple messages down the pipe without waiting on the reply from each - and (typically) processing the replies later when they come in. "),Object(o.b)("p",null,"Pipeling is completely a client side implementation. It is aimed at solving response latency issues in high network latency environments. So, the lesser the amount of time spent over the network in sending commands and reading responses, the better. This is effectively achieved by buffering. The client may (or may not) buffer the commands at the TCP stack (as mentioned in other answers) before they are sent to the server. Once they are sent to the server, the server executes them and buffers them on the server side. The benefit of the pipelining is a drastically improved protocol performance. The speedup gained by pipelining ranges from a factor of five for connections to localhost up to a factor of at least one hundred over slower internet connections.\nRead further here."),Object(o.b)("h3",{id:"6-caching-keys-without-ttl-a-bonus"},"6. Caching keys without TTL (a bonus)"),Object(o.b)("p",null,"Redis functions primarily as a key-value store.  It is possible to set timeout values on these keys. Said that, a timeout expiration automatically deletes the key. Additionally, when we use commands that delete or overwrite the contents of the key, it will clear the timeout. Redis TTL command is used to get the remaining time of the key expiry in seconds. TTL returns the remaining time to live of a key that has a timeout. This introspection capability allows a Redis client to check how many seconds a given key will continue to be part of the dataset.Keys will accumulate and end up being evicted. Hence, it is recommended to set TTLs on all caching keys. Further information here."),Object(o.b)("h3",{id:"7-endless-redis-replication-loop"},"7. Endless Redis Replication Loop"),Object(o.b)("p",null,"When attempting to replicate a very large active database over a slow or saturated link, replication never finishes due to the continuous updates. Hence, it is recommended to tune the slave and client buffers to allow for slower replication. Check out this detailed blog."),Object(o.b)("h3",{id:"8-hot-keys"},"8. Hot Keys"),Object(o.b)("p",null,"Redis can easily become the core of your app\u2019s operational data, holding valuable and frequently accessed information. However, if you centralize the access down to a few pieces of data accessed constantly, you create what is known as a hot-key problem. In a Redis cluster, the key is actually what determines where in the cluster that data is stored. The data is stored in one single, primary location based off of hashing that key. So, when you access a single key over and over again, you\u2019re actually accessing a single node/shard over and over again. Let\u2019s put it another way\u2014if you have a cluster of 99 nodes and you have a single key that gets a million requests in a second, all million of those requests will be going to a single node, not spread across the other 98 nodes.\nRedis even provides tools to find where your hot keys are located. Use redis-cli with the \u2013hotkeys argument alongside any other arguments you need to connect:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"})," $ redis-cli --hotkeys\n")),Object(o.b)("p",null,"When possible, the best defense is to avoid the development pattern that is creating the situation. Writing the data to multiple keys that reside in different shards will allow you to access the same data more frequently.\nIn nutshell, having specific keys that are accessed with every client operation. Hence, it's recommended to shard out hot keys using hashing algorithms. You can set policy to LFU and run redis-cli --hotkeys to determine."),Object(o.b)("h3",{id:"9-using-keys-command"},"9. Using Keys command"),Object(o.b)("p",null,"In Redis, the KEYS command can be used to perform exhaustive pattern matching on all stored keys. This is not advisable, as running this on an instance with a large number of keys could take a long time to complete, and will slow down the Redis instance in the process. In the relational world, this is equivalent to running an unbound query (SELECT...FROM without a WHERE clause). Execute this type of operation with care, and take necessary measures to ensure that your tenants are not performing a KEYS operation from within their application code. Use SCAN, which spreads the iteration over many calls, not tying up your whole server at one time."),Object(o.b)("h3",{id:"10-running-ephemeral-redis-as-a-primary-database"},"10. Running Ephemeral Redis as a primary database"),Object(o.b)("p",null,"Redis is often used as a primary storage engine for applications. Unlike using Redis as a cache, using Redis as a primary database requires two extra features to be effective. Any primary database should really be highly available. If a cache goes down, then generally your application is in a brown-out state. If a primary database goes down, your application also goes down. Similarly, if a cache goes down and you restart it empty, that\u2019s no big deal. For a primary database, though, that\u2019s a huge deal. Redis can handle these situations easily, but they generally require a different configuration than running as a cache.\nRedis as a primary database is great, but you\u2019ve got to support it by turning on the right features."),Object(o.b)("p",null,"With Redis open source, you need to set up Redis Sentinel for high availability. In Redis Enterprise, it\u2019s a core feature that you just need to turn on when creating the database. As for durability, both Redis Enterprise and open source Redis provide durability through AOF or snapshotting so your instance(s) start back up the way you left them."),Object(o.b)("h3",{id:"11-scanning-keyspace-by-keyname"},"11. Scanning keyspace by keyname"),Object(o.b)("p",null,"This is an extremely slow operation and will run  O(N) with N being the number of keys. It is recommended to use RediSearch to return information based on the contents of the data instead of iterating through the key space."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),' FT.SEARCH orders "@make: ford @model: explorer"\n 2SQL: SELECT * FROM orders WHERE make=ford AND model=explorer"\n')),Object(o.b)("h3",{id:"12-storing-json-blobs-in-a-string"},"12. Storing JSON blobs in a string"),Object(o.b)("p",null,"Microservices written in several languages may not marshal/unmarshal JSON in a consistent manner. Application logic will be required to lock/watch a key for atomic updates. JSON manipulation is often a very compute costly operation. Hence, it is recommended to use HASH data structure and also, RedisJSON module."),Object(o.b)("h3",{id:"13-translating-a-table-or-json-to-a-hash-without-considering-query-pattern"},"13. Translating a table or JSON to a HASH without considering query pattern"),Object(o.b)("p",null,"The only query mechanism is a SCAN which requires reading the data structure and limits filtering to the MATCH directive. It is recommended to store the table or JSON as a string. Break out the indexes into reverse indexes using a SET or SORTED SET and point back to the key for the string.\nUsing SELECT command and multiple databases inside one Redis instance"),Object(o.b)("p",null,"The usage of SELECT and multiple databases inside one Redis instance was mentioned as an anti-pattern by Salvatore (the creator of Redis). It is recommended to use a dedicated Redis instance for each database need. This is especially true in microservice architectures where client applications might step on each other's toes (noisy neighbor, database setup/teardown impact, maintenance, upgrade, ...)"),Object(o.b)("h3",{id:"14-going-full-time-series-database-when-all-you-needed-was-to-know-the-ordering"},"14. Going full time series database when all you needed was to know the ordering"),Object(o.b)("p",null,"The RedisTimeSeries module provides a direct compete to time series databases. But if the only query is based on ordering, it's unnecessary complexity. Hence, it is recommended to use a SORTED SET with a score of 0 for every value. The values are appended. Or use a timestamp for the score for simple time based queries"),Object(o.b)("h3",{id:"references"},"References"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://redis.com/blog/7-redis-worst-practices/"}),"7 Redis Worst Practices"))))}d.isMDXComponent=!0},225:function(e,t,n){"use strict";n.d(t,"a",(function(){return h})),n.d(t,"b",(function(){return m}));var a=n(0),i=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=i.a.createContext({}),d=function(e){var t=i.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},h=function(e){var t=d(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},p=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),h=d(n),p=a,m=h["".concat(s,".").concat(p)]||h[p]||u[p]||o;return n?i.a.createElement(m,r(r({ref:t},c),{},{components:n})):i.a.createElement(m,r({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=p;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r.mdxType="string"==typeof e?e:a,s[1]=r;for(var c=2;c<o;c++)s[c]=n[c];return i.a.createElement.apply(null,s)}return i.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},535:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/antipattern-8be69360b45966c852b6ee9070a11062.png"}}]);