(window.webpackJsonp=window.webpackJsonp||[]).push([[205],{276:function(e,t,i){"use strict";i.r(t),i.d(t,"frontMatter",(function(){return o})),i.d(t,"metadata",(function(){return l})),i.d(t,"toc",(function(){return c})),i.d(t,"default",(function(){return d}));var n=i(3),a=i(7),r=(i(0),i(362)),o={id:"sliding-window-rate-limiting",title:"How to implement Sliding Window Rate Limiting app using ASP.NET Core & Redis",sidebar_label:"Sliding Window Rate Limiting app  using ASP.NET",slug:"/develop/dotnet/aspnetcore/rate-limiting/sliding-window",authors:["steve"]},l={unversionedId:"develop/dotnet/aspnetcore/rate-limiting/sliding-window/sliding-window-rate-limiting",id:"develop/dotnet/aspnetcore/rate-limiting/sliding-window/sliding-window-rate-limiting",isDocsHomePage:!1,title:"How to implement Sliding Window Rate Limiting app using ASP.NET Core & Redis",description:"In this tutorial, we'll learn how to build a sliding window rate limiter for ASP.NET Core using Redis.",source:"@site/docs/develop/dotnet/aspnetcore/rate-limiting/sliding-window/index-sliding-rate-limiter.md",slug:"/develop/dotnet/aspnetcore/rate-limiting/sliding-window",permalink:"/develop/dotnet/aspnetcore/rate-limiting/sliding-window",editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/develop/dotnet/aspnetcore/rate-limiting/sliding-window/index-sliding-rate-limiter.md",version:"current",lastUpdatedAt:1648152977,sidebar_label:"Sliding Window Rate Limiting app  using ASP.NET",sidebar:"docs",previous:{title:"How to implement a Fixed Window Rate Limiting app using ASP.NET Core & Redis",permalink:"/develop/dotnet/aspnetcore/rate-limiting/fixed-window"},next:{title:"Configurable Sliding Window Rate Limiting Middleware for Redis & ASP.NET Core",permalink:"/develop/dotnet/aspnetcore/rate-limiting/middleware"}},c=[{value:"What is A Sliding Window Rate Limiter",id:"what-is-a-sliding-window-rate-limiter",children:[]},{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Startup Redis",id:"startup-redis",children:[]},{value:"Create Project",id:"create-project",children:[]},{value:"Initialize The Multiplexer",id:"initialize-the-multiplexer",children:[]},{value:"Inject the ConnectionMultiplexer",id:"inject-the-connectionmultiplexer",children:[]},{value:"Add a Simple Route",id:"add-a-simple-route",children:[]},{value:"Sliding Window Rate Limiter Lua Script",id:"sliding-window-rate-limiter-lua-script",children:[]},{value:"Update the Controller for rate limiting",id:"update-the-controller-for-rate-limiting",children:[]},{value:"Resources",id:"resources",children:[]}],s={toc:c};function d(e){var t=e.components,i=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},s,i,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"In this tutorial, we'll learn how to build a sliding window rate limiter for ASP.NET Core using Redis."),Object(r.b)("h2",{id:"what-is-a-sliding-window-rate-limiter"},"What is A Sliding Window Rate Limiter"),Object(r.b)("p",null,"The pattern that we are implementing here is a sliding window rate limiter. A sliding window rate limiter, unlike a fixed window, restricts requests for a discrete window prior to the current request under evaluation. As opposed to a fixed window rate limiter which groups the requests into a bucket based on a very definitive time window. For example, if you have a 10 req/minute rate limiter, on a fixed window, you could encounter a case where the rate-limiter allows 20 requests inside of a minute. That's because if first 10 requests are on the left hand side of the current window, and the next 20 requests are on the right hand side of the window, both have enough space in their respective buckets to be allowed through. If you sent those same 20 requests through a sliding window limited rate limiter on the other hand, if they are all sent within 60 seconds of each other, only 10 will make it through. Using Sorted Sets and Lua scripts, implementing one of these rate limiters is a breeze."),Object(r.b)("h2",{id:"prerequisites"},"Prerequisites"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Must have the ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://dotnet.microsoft.com/download/dotnet/5.0"}),".NET 5+ SDK")," installed"),Object(r.b)("li",{parentName:"ul"},"Some way of running Redis, for this tutorial we'll use ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://www.docker.com/products/docker-desktop"}),"Docker Desktop")),Object(r.b)("li",{parentName:"ul"},"IDE for writing C# ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://code.visualstudio.com/download"}),"VS Code"),", ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://visualstudio.microsoft.com/"}),"Visual Studio"),", or ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://www.jetbrains.com/rider/"}),"Rider"))),Object(r.b)("h2",{id:"startup-redis"},"Startup Redis"),Object(r.b)("p",null,"Before we begin, startup Redis. For this example, we'll use the ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://hub.docker.com/_/redis"}),"Redis docker image"),":"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"docker run -p 6379:6379 redis\n")),Object(r.b)("h2",{id:"create-project"},"Create Project"),Object(r.b)("p",null,"In your terminal, navigate to where you want the app to live and run:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"dotnet new webapi -n SlidingWindowRateLimiter --no-https\n")),Object(r.b)("p",null,"Cd into the ",Object(r.b)("inlineCode",{parentName:"p"},"SlidingWindowRateLimiter")," folder and run the command ",Object(r.b)("inlineCode",{parentName:"p"},"dotnet add package StackExchange.Redis"),"."),Object(r.b)("p",null,"Open ",Object(r.b)("inlineCode",{parentName:"p"},"SlidingWindowRateLimiter.csproj")," in Rider, Visual Studio, or open the folder in VS Code. In the ",Object(r.b)("inlineCode",{parentName:"p"},"Controllers")," folder, add an API controller called ",Object(r.b)("inlineCode",{parentName:"p"},"RateLimitedController"),", when all this is complete, ",Object(r.b)("inlineCode",{parentName:"p"},"RateLimitedController.cs")," should look like the following:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-csharp"}),'namespace SlidingWindowRateLimiter.Controllers\n{\n    [ApiController]\n    [Route("api/[controller]")]\n    public class RateLimitedController : ControllerBase\n    {        \n    }\n}\n')),Object(r.b)("h2",{id:"initialize-the-multiplexer"},"Initialize The Multiplexer"),Object(r.b)("p",null,"To use Redis, we're going to initialize an instance of the ConnectionMultiplexer from ",Object(r.b)("inlineCode",{parentName:"p"},"StackExchange.Redis"),", to do so, go to the ",Object(r.b)("inlineCode",{parentName:"p"},"ConfigureServices")," method inside of ",Object(r.b)("inlineCode",{parentName:"p"},"Startup.cs")," and add the following line:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-csharp"}),'services.AddSingleton<IConnectionMultiplexer>(ConnectionMultiplexer.Connect("localhost"));\n')),Object(r.b)("h2",{id:"inject-the-connectionmultiplexer"},"Inject the ConnectionMultiplexer"),Object(r.b)("p",null,"In ",Object(r.b)("inlineCode",{parentName:"p"},"RateLimitedController.cs")," inject the ConnectionMultiplexer into the controller and pull out an ",Object(r.b)("inlineCode",{parentName:"p"},"IDatabase")," object from it with the following:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-csharp"}),"private readonly IDatabase _db;\npublic RateLimitedController(IConnectionMultiplexer mux)\n{\n    _db = mux.GetDatabase();\n}\n")),Object(r.b)("h2",{id:"add-a-simple-route"},"Add a Simple Route"),Object(r.b)("p",null,"We will add a simple route that we will Rate Limit; it will be a POST request route on our controller. This POST request will use ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Basic_access_authentication"}),"Basic auth")," - this means that each request is going to expect a header of the form ",Object(r.b)("inlineCode",{parentName:"p"},"Authorization: Basic <base64encoded>")," where the ",Object(r.b)("inlineCode",{parentName:"p"},"base64encoded")," will be a string of the form ",Object(r.b)("inlineCode",{parentName:"p"},"apiKey:apiSecret")," base64 encoded, e.g. ",Object(r.b)("inlineCode",{parentName:"p"},"Authorization: Basic QWxhZGRpbjpvcGVuIHNlc2FtZQ=="),". This route will parse the key out of the header and return an OK result."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-csharp"}),"[HttpPost]\n[HttpGet]\n[Route(\"sliding\")]\npublic async Task<IActionResult> Sliding([FromHeader]string authorization)\n{\n    var encoded = string.Empty;\n    if(!string.IsNullOrEmpty(authorization)) encoded = AuthenticationHeaderValue.Parse(authorization).Parameter;\n    if (string.IsNullOrEmpty(encoded)) return new UnauthorizedResult();\n    var apiKey = Encoding.UTF8.GetString(Convert.FromBase64String(encoded)).Split(':')[0];\n    return Ok();\n}\n")),Object(r.b)("p",null,"With that setup, you should run the project with a ",Object(r.b)("inlineCode",{parentName:"p"},"dotnet run"),", and if you issue a POST request to ",Object(r.b)("inlineCode",{parentName:"p"},"https://localhost:5001/api/RateLimited/sliding")," - with apiKey ",Object(r.b)("inlineCode",{parentName:"p"},"foobar")," and password ",Object(r.b)("inlineCode",{parentName:"p"},"password"),", you will get a 200 OK response back."),Object(r.b)("p",null,"You can use this cURL request to elicit that response:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),'curl -X POST -H "Content-Length: 0" --user "foobar:password" http://localhost:5000/api/RateLimited/single\n')),Object(r.b)("h2",{id:"sliding-window-rate-limiter-lua-script"},"Sliding Window Rate Limiter Lua Script"),Object(r.b)("p",null,"To implement this pattern we will need to do the following:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"The client will create a key for the server to check, this key will be of the format ",Object(r.b)("inlineCode",{parentName:"li"},"route:apikey")),Object(r.b)("li",{parentName:"ol"},"That key will map to a sorted set in Redis, we will check the current time, and shave off any requests in the sorted set that are outside of our window"),Object(r.b)("li",{parentName:"ol"},"We will then check the cardinality of the sorted set"),Object(r.b)("li",{parentName:"ol"},"If the cardinality is less than our limit, we will",Object(r.b)("ol",{parentName:"li"},Object(r.b)("li",{parentName:"ol"},"Add a new member to our sorted set with a score of the current time in seconds, and a member of the current time in microseconds"),Object(r.b)("li",{parentName:"ol"},"Set the expiration for our sorted set to the window length"),Object(r.b)("li",{parentName:"ol"},"return 0"))),Object(r.b)("li",{parentName:"ol"},"If the cardinality is greater than or equal to our limit we will return 1")),Object(r.b)("p",null,"The trick here is that everything needs to happen atomically, we want to be able to trim the set, check its cardinality, add an item to it, and set it's expiration, all without anything changing in the interim. Fortunately this is a perfect place to use a ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://redis.io/commands/eval"}),"Lua Script"),". Specifically we are going to be using the StackExchange script preparation engine to drive our lua script, meaning we can use ",Object(r.b)("inlineCode",{parentName:"p"},"@variable_name")," in place of a particular position in ",Object(r.b)("inlineCode",{parentName:"p"},"ARGV")," or ",Object(r.b)("inlineCode",{parentName:"p"},"KEYS")," in the script. Our Lua script will be: "),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"local current_time = redis.call('TIME')\nlocal trim_time = tonumber(current_time[1]) - @window\nredis.call('ZREMRANGEBYSCORE', @key, 0, trim_time)\nlocal request_count = redis.call('ZCARD',@key)\n\nif request_count < tonumber(@max_requests) then\n    redis.call('ZADD', @key, current_time[1], current_time[1] .. current_time[2])\n    redis.call('EXPIRE', @key, @window)\n    return 0\nend\nreturn 1\n")),Object(r.b)("p",null,"In order to use that in our app, we will create a new static class called ",Object(r.b)("inlineCode",{parentName:"p"},"Scripts")," which will hold the text of the script, and prepare the script to run with ",Object(r.b)("inlineCode",{parentName:"p"},"StackExchange.Redis"),". Create a new file called ",Object(r.b)("inlineCode",{parentName:"p"},"Scripts.cs")," and add the following to it."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-csharp"}),"using StackExchange.Redis;\n\nnamespace SlidingWindowRateLimiter\n{\n    public static class Scripts\n    {\n        public static LuaScript SlidingRateLimiterScript => LuaScript.Prepare(SlidingRateLimiter);\n        private const string SlidingRateLimiter = @\"\n            local current_time = redis.call('TIME')\n            local trim_time = tonumber(current_time[1]) - @window\n            redis.call('ZREMRANGEBYSCORE', @key, 0, trim_time)\n            local request_count = redis.call('ZCARD',@key)\n\n            if request_count < tonumber(@max_requests) then\n                redis.call('ZADD', @key, current_time[1], current_time[1] .. current_time[2])\n                redis.call('EXPIRE', @key, @window)\n                return 0\n            end\n            return 1\n            \";\n    }\n}\n")),Object(r.b)("h2",{id:"update-the-controller-for-rate-limiting"},"Update the Controller for rate limiting"),Object(r.b)("p",null,"Back in our ",Object(r.b)("inlineCode",{parentName:"p"},"RateLimitedController")," Sliding method, we will add a few lines of code to check if we should throttle the API request, replace the return statement with the following:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-csharp"}),'var limited = ((int) await _db.ScriptEvaluateAsync(Scripts.SlidingRateLimiterScript,\n    new {key = new RedisKey($"{Request.Path}:{apiKey}"), window = 30, max_requests = 10})) == 1;\nreturn limited ? new StatusCodeResult(429) : Ok();\n')),Object(r.b)("p",null,"The whole method should look like this now:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-csharp"}),'[HttpPost]\n[HttpGet]\n[Route("sliding")]\npublic async Task<IActionResult> Sliding([FromHeader] string authorization)\n{\n    var encoded = string.Empty;\n    if(!string.IsNullOrEmpty(authorization)) encoded = AuthenticationHeaderValue.Parse(authorization).Parameter;\n    if (string.IsNullOrEmpty(encoded)) return new UnauthorizedResult();\n    var apiKey = Encoding.UTF8.GetString(Convert.FromBase64String(encoded)).Split(\':\')[0];\n    var limited = ((int) await _db.ScriptEvaluateAsync(Scripts.SlidingRateLimiterScript,\n        new {key = new RedisKey($"{Request.Path}:{apiKey}"), window = 30, max_requests = 10})) == 1;\n    return limited ? new StatusCodeResult(429) : Ok();\n}\n')),Object(r.b)("p",null,"Now, if we start our server back up with ",Object(r.b)("inlineCode",{parentName:"p"},"dotnet run")," and try running the following command:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),'for n in {1..20}; do echo $(curl -s -w " HTTP %{http_code}, %{time_total} s" -X POST -H "Content-Length: 0" --user "foobar:password" http://localhost:5000/api/ratelimited/sliding); sleep 0.5; done\n')),Object(r.b)("p",null,"You will see some of your requests return a ",Object(r.b)("inlineCode",{parentName:"p"},"200"),", and 10 will return a ",Object(r.b)("inlineCode",{parentName:"p"},"429"),". If you wait for some and run the above command again you may see some behavior where every other request goes through. That's because the window slides every second and only the previous 30 seconds requests are considered when determining whether to throttle the request. The above command the first time will produce an output something like this:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-text"}),'HTTP 200, 0.081806 s\nHTTP 200, 0.003170 s\nHTTP 200, 0.002217 s\nHTTP 200, 0.001632 s\nHTTP 200, 0.001508 s\nHTTP 200, 0.001928 s\nHTTP 200, 0.001647 s\nHTTP 200, 0.001656 s\nHTTP 200, 0.001699 s\nHTTP 200, 0.001667 s\n{"status":429,"traceId":"00-4af32d651483394292e35258d94ec4be-6c174cc42ca1164c-00"} HTTP 429, 0.012612 s\n{"status":429,"traceId":"00-7b24da2422f5b144a1345769e210b78a-75cc1deb1f260f46-00"} HTTP 429, 0.001688 s\n{"status":429,"traceId":"00-0462c9d489ce4740860ae4798e6c4869-2382f37f7e112741-00"} HTTP 429, 0.001578 s\n{"status":429,"traceId":"00-127f5493caf8e044a9f29757fbf91f0a-62187f6cf2833640-00"} HTTP 429, 0.001722 s\n{"status":429,"traceId":"00-89a4c2f7e2021a4d90264f9d040d250c-34443a5fdb2cff4f-00"} HTTP 429, 0.001718 s\n{"status":429,"traceId":"00-f1505b800f30da4b993bebb89f902401-dfbadcb1bc3b8e45-00"} HTTP 429, 0.001663 s\n{"status":429,"traceId":"00-621cf2b2f32c184fb08d0d483788897d-1c01af67cf88d440-00"} HTTP 429, 0.001601 s\n{"status":429,"traceId":"00-e310ba5214d7874dbd653a8565f38df4-216f1a4b8c4b574a-00"} HTTP 429, 0.001456 s\n{"status":429,"traceId":"00-52a7074239a5e84c9ded96166c0ef042-4dfedf1d60e3fd46-00"} HTTP 429, 0.001550 s\n{"status":429,"traceId":"00-5e03e785895f2f459c85ade852664703-c9ad961397284643-00"} HTTP 429, 0.001535 s\n{"status":429,"traceId":"00-ba2ac0f8fd902947a4789786b0f683a8-be89b14fa88d954c-00"} HTTP 429, 0.001451 s\n')),Object(r.b)("h2",{id:"resources"},"Resources"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"You can find the code used for this tutorial in ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/redis-developer/sliding-window-rate-limiter-aspnet"}),"GitHub"))))}d.isMDXComponent=!0},362:function(e,t,i){"use strict";i.d(t,"a",(function(){return p})),i.d(t,"b",(function(){return m}));var n=i(0),a=i.n(n);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function l(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function c(e,t){if(null==e)return{};var i,n,a=function(e,t){if(null==e)return{};var i,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var s=a.a.createContext({}),d=function(e){var t=a.a.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):l(l({},t),e)),i},p=function(e){var t=d(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var i=e.components,n=e.mdxType,r=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=d(i),b=n,m=p["".concat(o,".").concat(b)]||p[b]||u[b]||r;return i?a.a.createElement(m,l(l({ref:t},s),{},{components:i})):a.a.createElement(m,l({ref:t},s))}));function m(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=i.length,o=new Array(r);o[0]=b;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var s=2;s<r;s++)o[s]=i[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,i)}b.displayName="MDXCreateElement"}}]);