(window.webpackJsonp=window.webpackJsonp||[]).push([[106],{174:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return o})),n.d(t,"default",(function(){return p}));var a=n(3),i=n(7),r=(n(0),n(183)),c=(n(188),n(189),n(184),n(185),{id:"index-tls",title:"How to Use SSL/TLS With Redis Enterprise",sidebar_label:"How to Use SSL/TLS With Redis Enterprise",slug:"/howtos/security/",keywords:["java","node.js","python","ssl","tls"]}),s={unversionedId:"howtos/security/index-tls",id:"howtos/security/index-tls",isDocsHomePage:!1,title:"How to Use SSL/TLS With Redis Enterprise",description:"Header",source:"@site/docs/howtos/security/tls.mdx",slug:"/howtos/security/",permalink:"/howtos/security/",editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/howtos/security/tls.mdx",version:"current",sidebar_label:"How to Use SSL/TLS With Redis Enterprise",sidebar:"docs",previous:{title:"HackerNews Clone using RedisJSON",permalink:"/howtos/hackernews"},next:{title:"Building an Analytics dashboard app using Redis",permalink:"/howtos/analytics"}},o=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Simple  Test",id:"simple--test",children:[]},{value:"Step 1. Get the Certificate from Redis Cluster",id:"step-1-get-the-certificate-from-redis-cluster",children:[]},{value:"Step 2. Generate a New Client Certificate",id:"step-2-generate-a-new-client-certificate",children:[]},{value:"Step 3. Configure the Redis Database",id:"step-3-configure-the-redis-database",children:[]},{value:"Step 4. Connect to the Database using the Certificate",id:"step-4-connect-to-the-database-using-the-certificate",children:[{value:"Step  4.1 Using Redis-CLI",id:"step--41-using-redis-cli",children:[]},{value:"Step 4.2 Using Python",id:"step-42-using-python",children:[]},{value:"Step 4.3 Using Node.JS",id:"step-43-using-nodejs",children:[]},{value:"Step 4.4 Using Java",id:"step-44-using-java",children:[]}]},{value:"Conclusion",id:"conclusion",children:[]}],l={toc:o};function p(e){var t=e.components,c=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},l,c,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,Object(r.b)("img",{alt:"Header",src:n(611).default})),Object(r.b)("p",null,"In this article, you will see how to secure your Redis databases using SSL (Secure Sockets Layer). In the production environment, it is always recommended to use SSL to protect the data that moves between various computers (client applications and Redis servers). Transport Level Security (TLS) guarantees that only allowed applications/computers are connected to the database, and also that data is not viewed or altered by a middle man process."),Object(r.b)("p",null,"You can secure the connections between your client applications and Redis cluster using:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"One-Way SSL: the client (your application) get the certificate from the server (Redis cluster), validate it, and then all communications are encrypted"),Object(r.b)("li",{parentName:"ul"},"Two-Way SSL: (aka mutual SSL) here both the client and the server authenticate each other and validate that both ends are trusted.")),Object(r.b)("p",null,"In this article, we will focus on the Two-Way SSL, and using Redis Enterprise."),Object(r.b)("h3",{id:"prerequisites"},"Prerequisites"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"A Redis Enterprise 6.0.x database, (my database is protected by the password ",Object(r.b)("inlineCode",{parentName:"li"},"secretdb01"),", and listening on port ",Object(r.b)("inlineCode",{parentName:"li"},"12000"),")"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"redis-cli")," to run basic commands"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"/develop/python/"}),"Python"),", ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"/develop/node"}),"Node"),", and ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"/develop/java"}),"Java")," installed if you want to test various languages.")),Object(r.b)("h3",{id:"simple--test"},"Simple  Test"),Object(r.b)("p",null,"Let's make sure that the database is available:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"redis-cli -p 12000 -a secretdb01 INFO SERVER\n")),Object(r.b)("p",null,"This should print the Server information."),Object(r.b)("h2",{id:"step-1-get-the-certificate-from-redis-cluster"},"Step 1. Get the Certificate from Redis Cluster"),Object(r.b)("p",null,"Assuming tha you have an access to the Redis Enterprise Cluster, you need to access the nodes to retrieve the certificate (that is a self-generated one by default)."),Object(r.b)("p",null,"The cluster certificate is located at: ",Object(r.b)("inlineCode",{parentName:"p"},"/etc/opt/redislabs/proxy_cert.pem"),"."),Object(r.b)("p",null,'Next, copy the cluster certificate on each client machine; note that once it is done you can use this certificate to connect using "One-Way SSL", but this is not just the purpose of this article.'),Object(r.b)("p",null,"In this tutorial, we will be using Docker to copy the certificate."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"docker cp redis-node1:/etc/opt/redislabs/proxy_cert.pem ./certificates\n")),Object(r.b)("h2",{id:"step-2-generate-a-new-client-certificate"},"Step 2. Generate a New Client Certificate"),Object(r.b)("p",null,"Using the Two-Way SSL, you need to have a certificate for the client that will be used by Redis database proxy to trust the client.In this tutorial, we will use a self-signed certificate using OpenSSL. We will be creating a certificate for an application named ",Object(r.b)("inlineCode",{parentName:"p"},"app_001"),". Please note that you can create as many certificates as you want, or reuse this one for all servers/applications."),Object(r.b)("p",null,"Open a terminal and run the following commands:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"\nopenssl req \\\n  -nodes \\\n -newkey rsa:2048 \\\n -keyout client_key_app_001.pem \\\n -x509 \\\n -days 36500 \\\n -out client_cert_app_001.pem\n\n")),Object(r.b)("p",null,"This command generate a new client key (",Object(r.b)("inlineCode",{parentName:"p"},"client_key_001.pem"),") and certificate (",Object(r.b)("inlineCode",{parentName:"p"},"client_cert_001.pem"),") with no passphrase."),Object(r.b)("h2",{id:"step-3-configure-the-redis-database"},"Step 3. Configure the Redis Database"),Object(r.b)("p",null,"The next step is to take the certificate and add it to the database you want to protect. "),Object(r.b)("p",null,"Let's copy the certificate and paste it into the Redis Enterprise Web Console."),Object(r.b)("p",null,"Copy the certificate in your clipboard:"),Object(r.b)("p",null,"Mac:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"pbcopy < client_cert_app_001.pem\n")),Object(r.b)("p",null,"Linux:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"})," xclip -sel clip < client_cert_app_001.pem\n")),Object(r.b)("p",null,"Windows:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"clip < client_cert_app_001.pem\n")),Object(r.b)("p",null,"Go to the Redis Enterprise Admin Web Console and enable TLS on your database:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Edit the database configuration"),Object(r.b)("li",{parentName:"ol"},"Check TLS"),Object(r.b)("li",{parentName:"ol"},'Select "Require TLS for All communications"'),Object(r.b)("li",{parentName:"ol"},'Check "Enforce client authentication"'),Object(r.b)("li",{parentName:"ol"},"Paste the certificate in the text area"),Object(r.b)("li",{parentName:"ol"},"Click the Save button to save the certificate"),Object(r.b)("li",{parentName:"ol"},"Click the Update button to save the configuration.")),Object(r.b)("p",null,Object(r.b)("img",{alt:"Security Configuration",src:n(612).default})),Object(r.b)("p",null,"The database is now protected, and it is mandatory to use the SSL certificate to connect to it."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"redis-cli -p 12000 -a secretdb01 INFO SERVER\n(error) ERR unencrypted connection is prohibited\n")),Object(r.b)("h2",{id:"step-4-connect-to-the-database-using-the-certificate"},"Step 4. Connect to the Database using the Certificate"),Object(r.b)("p",null,'In all these examples, you will be using a "self-signed" certificate, so that you don\'t need to check the validity of the hostname. You should adapt the connections/TLS information based on your certificate configuration.'),Object(r.b)("h3",{id:"step--41-using-redis-cli"},"Step  4.1 Using Redis-CLI"),Object(r.b)("p",null,"To connect to a SSL protected database using ",Object(r.b)("inlineCode",{parentName:"p"},"redis-cli")," you have to use ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.stunnel.org/index.html"}),Object(r.b)("inlineCode",{parentName:"a"},"stunnel")),"."),Object(r.b)("p",null,"Create a ",Object(r.b)("inlineCode",{parentName:"p"},"stunnel.conf")," file with the following content:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"cert = /path_to/certificates/client_cert_app_001.pem\nkey = /path_to/certificates/client_key_app_001.pem\ncafile = /path_to/certificates/proxy_cert.pem\nclient = yes\n\n[redislabs]\naccept = 127.0.0.1:6380\nconnect = 127.0.0.1:12000\n\n")),Object(r.b)("p",null,"Start stunnel using the command"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"stunnel ./stunnel.conf\n")),Object(r.b)("p",null,"This will start a process that listen to port ",Object(r.b)("inlineCode",{parentName:"p"},"6380")," and used as a proxy to the Redis Enterprise database on port ",Object(r.b)("inlineCode",{parentName:"p"},"12000"),"."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"redis-cli -p 6380 -a secretdb01 INFO SERVER\n")),Object(r.b)("h3",{id:"step-42-using-python"},"Step 4.2 Using Python"),Object(r.b)("p",null,"Using Python, you have to set the SSL connection parameters:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),"#!/usr/local/bin/python3\n\nimport redis\nimport pprint\n\ntry:\n  r = redis.StrictRedis(\n    password='secretdb01',\n    decode_responses=True,\n    host='localhost',\n    port=12000,\n    ssl=True, \n    ssl_keyfile='./client_key_app_001.pem', \n    ssl_certfile='./client_cert_app_001.pem', \n    ssl_cert_reqs='required', \n    ssl_ca_certs='./proxy_cert.pem',\n    )\n\n  info = r.info()\n  pprint.pprint(info)\n\nexcept Exception as err:\n  print(\"Error connecting to Redis: {}\".format(err))\n")),Object(r.b)("p",null,'More information in the documentation "',Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/develop/python/"}),"Using Redis with Python"),'".'),Object(r.b)("h3",{id:"step-43-using-nodejs"},"Step 4.3 Using Node.JS"),Object(r.b)("p",null,"For ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"http://redis.js.org/"}),"Node Redis"),", use the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://nodejs.org/api/tls.html"}),"TLS")," library to configure the client connection:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"var redis = require(\"redis\");\nvar tls = require('tls');\nvar fs = require('fs');\n\nvar ssl = {\n    key: fs.readFileSync('../certificates/client_key_app_001.pem',encoding='ascii'),\n    cert: fs.readFileSync('../certificates/client_cert_app_001.pem',encoding='ascii'),\n    ca: [ fs.readFileSync('../certificates/proxy_cert.pem',encoding='ascii') ],\n    checkServerIdentity: () => { return null; },\n};\n\nvar client = redis.createClient(12000,'127.0.0.1', \n    {\n      password : 'secretdb01',\n      tls: ssl\n    }\n);\n        \nclient.info( \"SERVER\", function (err, reply) {\n    console.log(reply);\n} );\n\n")),Object(r.b)("p",null,'More information in the documentation "',Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/develop/node"}),"Using Redis with Node.js"),'".'),Object(r.b)("h3",{id:"step-44-using-java"},"Step 4.4 Using Java"),Object(r.b)("p",null,"In Java, to be able to connect using SSL, you have to install all the certificates in the Java environment using the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.oracle.com/en/java/javase/11/tools/keytool.html"}),"keytool")," utility."),Object(r.b)("p",null,"Create a ",Object(r.b)("strong",{parentName:"p"},"keystore")," file that stores the key and certificate you have created earlier:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),'openssl pkcs12 -export \\\n  -in ./client_cert_app_001.pem \\\n  -inkey ./client_key_app_001.pem \\\n  -out client-keystore.p12 \\\n  -name "APP_01_P12"\n')),Object(r.b)("p",null,"As you can see the keystore is used to store the credentials associated with you client; it will be used later with the ",Object(r.b)("inlineCode",{parentName:"p"},"-javax.net.ssl.keyStore")," system property in the Java application."),Object(r.b)("p",null,"In addition to the keys tore, you also have to create a trust store, that is used to store other credentials for example in our case the redis cluster certificate."),Object(r.b)("p",null,"Create a ",Object(r.b)("strong",{parentName:"p"},"trust store")," file and add the Redis cluster certificate to it"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),'keytool -genkey \\\n  -dname "cn=CLIENT_APP_01" \\\n  -alias truststorekey \\\n  -keyalg RSA \\\n  -keystore ./client-truststore.p12 \\\n  -keypass secret\n  -storepass secret\n  -storetype pkcs12\n')),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"keytool -import \\\n  -keystore ./client-truststore.p12 \\\n  -file ./proxy_cert.pem \\\n  -alias redis-cluster-crt\n")),Object(r.b)("p",null,"The trustore will be used later with the ",Object(r.b)("inlineCode",{parentName:"p"},"-javax.net.ssl.trustStore")," system property in the Java application."),Object(r.b)("p",null,"You can now run the Java application with the following environment variables:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"java -Djavax.net.ssl.keyStore=/path_to/certificates/java/client-keystore.p12 \\\n-Djavax.net.ssl.keyStorePassword=secret \\\n-Djavax.net.ssl.trustStore=/path_to/certificates/java/client-truststore.p12 \\\n-Djavax.net.ssl.trustStorePassword=secret \\\n-jar MyApp.jar\n")),Object(r.b)("p",null,"For this example and simplicity, I will hard code these property in the Java code itself:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'\nimport redis.clients.jedis.Jedis;\nimport java.net.URI;\n\npublic class SSLTest {\n\n    public static void main(String[] args) {\n\n        System.setProperty("javax.net.ssl.keyStore", "/path_to/certificates/client-keystore.p12");\n        System.setProperty("javax.net.ssl.keyStorePassword", "secret");\n\n        System.setProperty("javax.net.ssl.trustStore","/path_to/certificates/client-truststore.p12");\n        System.setProperty("javax.net.ssl.trustStorePassword","secret");\n\n        URI uri = URI.create("rediss://127.0.0.1:12000");\n\n        Jedis jedis = new Jedis(uri);\n        jedis.auth("secretdb01");\n\n\n        System.out.println(jedis.info("SERVER"));\n        jedis.close();\n    }\n\n}\n')),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"line 8-12, the system environment variables are set to point to the keystore and trust store (this should be externalized)"),Object(r.b)("li",{parentName:"ul"},"line 14, the Redis URL start with ",Object(r.b)("inlineCode",{parentName:"li"},"rediss")," with 2 s to indicate that the connection should be encrypted"),Object(r.b)("li",{parentName:"ul"},"line 17, set the database password")),Object(r.b)("p",null,'More information in the documentation "',Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/develop/java"}),"Using Redis with Java"),'".'),Object(r.b)("h2",{id:"conclusion"},"Conclusion"),Object(r.b)("p",null,"In this article, you have learned how to:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"retrieve the Redis Server certificate"),Object(r.b)("li",{parentName:"ul"},"generate a client certificate"),Object(r.b)("li",{parentName:"ul"},"protect your database to enforce transport level security (TLS) with 2 ways authentication"),Object(r.b)("li",{parentName:"ul"},"connect to the database from ",Object(r.b)("inlineCode",{parentName:"li"},"redis-cli"),", Python, Node and Java")))}p.isMDXComponent=!0},185:function(e,t,n){"use strict";var a=n(0),i=n.n(a),r=n(183),c=n(191);n(184),n(55);t.a=function(e){var t=i.a.useState(!1),n=t[0],a=t[1];return i.a.createElement("div",{className:"ri-container"},i.a.createElement("div",{className:"ri-description-short"},i.a.createElement("div",{className:"ri-icon"},i.a.createElement("span",{className:"fe fe-zap"})),i.a.createElement("div",{className:"ri-detail"},i.a.createElement("div",{className:"ri-title"},i.a.createElement("a",{href:e.page},e.title)),i.a.createElement("div",{className:"ri-description"},e.description,i.a.Children.count(e.children)>0&&i.a.createElement("span",{className:"ri-more fe fe-more-horizontal",onClick:function(){return a(!n)}})))),n&&i.a.createElement("div",{className:"ri-description-long"},i.a.createElement(r.a,{components:c.a},e.children)))}},186:function(e,t,n){"use strict";var a=n(0),i=n(187);t.a=function(){var e=Object(a.useContext)(i.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},187:function(e,t,n){"use strict";var a=n(0),i=Object(a.createContext)(void 0);t.a=i},188:function(e,t,n){"use strict";var a=n(0),i=n.n(a),r=n(186),c=n(190),s=n(56),o=n.n(s),l=37,p=39;t.a=function(e){var t=e.lazy,n=e.block,s=e.defaultValue,b=e.values,u=e.groupId,d=e.className,h=Object(r.a)(),m=h.tabGroupChoices,j=h.setTabGroupChoices,O=Object(a.useState)(s),f=O[0],y=O[1],v=a.Children.toArray(e.children);if(null!=u){var g=m[u];null!=g&&g!==f&&b.some((function(e){return e.value===g}))&&y(g)}var S=function(e){y(e),null!=u&&j(u,e)},N=[];return i.a.createElement("div",null,i.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(c.a)("tabs",{"tabs--block":n},d)},b.map((function(e){var t=e.value,n=e.label;return i.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":f===t,className:Object(c.a)("tabs__item",o.a.tabItem,{"tabs__item--active":f===t}),key:t,ref:function(e){return N.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case p:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case l:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(N,e.target,e)},onFocus:function(){return S(t)},onClick:function(){S(t)}},n)}))),t?Object(a.cloneElement)(v.filter((function(e){return e.props.value===f}))[0],{className:"margin-vert--md"}):i.a.createElement("div",{className:"margin-vert--md"},v.map((function(e,t){return Object(a.cloneElement)(e,{key:t,hidden:e.props.value!==f})}))))}},189:function(e,t,n){"use strict";var a=n(3),i=n(0),r=n.n(i);t.a=function(e){var t=e.children,n=e.hidden,i=e.className;return r.a.createElement("div",Object(a.a)({role:"tabpanel"},{hidden:n,className:i}),t)}},611:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/tls-1e7e2d24525b6d38705cdbca9b008b78.jpeg"},612:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/tls2-503f00085716901e3134c38734c1c920.jpeg"}}]);