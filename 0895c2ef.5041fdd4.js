(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{362:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var i=n(0),a=n.n(i);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),d=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=d(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=d(n),b=i,m=p["".concat(o,".").concat(b)]||p[b]||u[b]||r;return n?a.a.createElement(m,l(l({ref:t},s),{},{components:n})):a.a.createElement(m,l({ref:t},s))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=b;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<r;s++)o[s]=n[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},78:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return d}));var i=n(3),a=n(7),r=(n(0),n(362)),o={id:"index-rate-limiting",title:"How to implement a Fixed Window Rate Limiting app using ASP.NET Core & Redis",sidebar_label:"Fixed Window Rate Limiting app using ASP.NET",slug:"/develop/dotnet/aspnetcore/rate-limiting/fixed-window",authors:["steve"]},l={unversionedId:"develop/dotnet/aspnetcore/rate-limiting/fixed-window/index-rate-limiting",id:"develop/dotnet/aspnetcore/rate-limiting/fixed-window/index-rate-limiting",isDocsHomePage:!1,title:"How to implement a Fixed Window Rate Limiting app using ASP.NET Core & Redis",description:"In this tutorial, we will build an app that implements basic fixed-window rate limiting using Redis & ASP.NET Core.",source:"@site/docs/develop/dotnet/aspnetcore/rate-limiting/fixed-window/index-rate-limiting.mdx",slug:"/develop/dotnet/aspnetcore/rate-limiting/fixed-window",permalink:"/develop/dotnet/aspnetcore/rate-limiting/fixed-window",editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/develop/dotnet/aspnetcore/rate-limiting/fixed-window/index-rate-limiting.mdx",version:"current",lastUpdatedAt:1648152977,sidebar_label:"Fixed Window Rate Limiting app using ASP.NET",sidebar:"docs",previous:{title:".NET and Redis",permalink:"/develop/dotnet/"},next:{title:"How to implement Sliding Window Rate Limiting app using ASP.NET Core & Redis",permalink:"/develop/dotnet/aspnetcore/rate-limiting/sliding-window"}},c=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Startup Redis",id:"startup-redis",children:[]},{value:"Create Project",id:"create-project",children:[]},{value:"Initialize The Multiplexer",id:"initialize-the-multiplexer",children:[]},{value:"Inject the ConnectionMultiplexer",id:"inject-the-connectionmultiplexer",children:[]},{value:"Add a Simple Route",id:"add-a-simple-route",children:[]},{value:"Fixed Window Rate Limiting Lua Script",id:"fixed-window-rate-limiting-lua-script",children:[]},{value:"Loading the Script",id:"loading-the-script",children:[]},{value:"Executing the Script",id:"executing-the-script",children:[]},{value:"Resources",id:"resources",children:[]}],s={toc:c};function d(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(i.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"In this tutorial, we will build an app that implements basic fixed-window rate limiting using Redis & ASP.NET Core."),Object(r.b)("h2",{id:"prerequisites"},"Prerequisites"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Must have the ",Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"https://dotnet.microsoft.com/download/dotnet/5.0"}),".NET 5+ SDK")," installed"),Object(r.b)("li",{parentName:"ul"},"Some way of running Redis, for this tutorial we'll use ",Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"https://www.docker.com/products/docker-desktop"}),"Docker Desktop")),Object(r.b)("li",{parentName:"ul"},"IDE for writing C# ",Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"https://code.visualstudio.com/download"}),"VS Code"),", ",Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"https://visualstudio.microsoft.com/"}),"Visual Studio"),", or ",Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"https://www.jetbrains.com/rider/"}),"Rider"))),Object(r.b)("h2",{id:"startup-redis"},"Startup Redis"),Object(r.b)("p",null,"Before we begin, startup Redis. For this example, we'll use the ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"https://hub.docker.com/_/redis"}),"Redis docker image"),":"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-bash"})," docker run -dp 6379:6379 redis\n")),Object(r.b)("h2",{id:"create-project"},"Create Project"),Object(r.b)("p",null,"In your terminal, navigate to where you want the app to live and run:"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-bash"})," dotnet new webapi -n FixedRateLimiter --no-https\n")),Object(r.b)("p",null,"Change directory to ",Object(r.b)("inlineCode",{parentName:"p"},"FixedRateLimiter")," and run the below command: "),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"dotnet add package StackExchange.Redis")),Object(r.b)("p",null,"Open the ",Object(r.b)("inlineCode",{parentName:"p"},"FixedRateLimiter.csproj")," file in Visual Studio or Rider (or open the folder in VS Code) and in the ",Object(r.b)("inlineCode",{parentName:"p"},"Controllers")," folder, add an API controller called ",Object(r.b)("inlineCode",{parentName:"p"},"RateLimitedController"),", when all this is complete, ",Object(r.b)("inlineCode",{parentName:"p"},"RateLimitedController.cs")," should look like the following:"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-csharp"}),'  namespace FixedRateLimiter.Controllers\n {\n    [ApiController]\n    [Route("api/[controller]")]\n    public class RateLimitedController : ControllerBase\n    {\n        \n    }\n }\n')),Object(r.b)("h2",{id:"initialize-the-multiplexer"},"Initialize The Multiplexer"),Object(r.b)("p",null,"To use Redis, we're going to initialize an instance of the ConnectionMultiplexer from ",Object(r.b)("inlineCode",{parentName:"p"},"StackExchange.Redis"),", to do so, go to the ",Object(r.b)("inlineCode",{parentName:"p"},"ConfigureServices")," method inside of ",Object(r.b)("inlineCode",{parentName:"p"},"Startup.cs")," and add the following line:"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-csharp"}),' services.AddSingleton<IConnectionMultiplexer>(ConnectionMultiplexer.Connect("localhost"));\n')),Object(r.b)("h2",{id:"inject-the-connectionmultiplexer"},"Inject the ConnectionMultiplexer"),Object(r.b)("p",null,"In ",Object(r.b)("inlineCode",{parentName:"p"},"RateLimitedController.cs")," inject the ConnectionMultiplexer into the controller and pull out an ",Object(r.b)("inlineCode",{parentName:"p"},"IDatabase")," object from it with the following:"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-csharp"})," private readonly IDatabase _db;\n public RateLimitedController(IConnectionMultiplexer mux)\n {\n    _db = mux.GetDatabase();\n }\n")),Object(r.b)("h2",{id:"add-a-simple-route"},"Add a Simple Route"),Object(r.b)("p",null,"We will add a simple route that we will Rate Limit; it will be a POST request route on our controller. This POST request will use ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Basic_access_authentication"}),"Basic auth")," - this means that each request is going to expect a header of the form ",Object(r.b)("inlineCode",{parentName:"p"},"Authorization: Basic <base64encoded>")," where the ",Object(r.b)("inlineCode",{parentName:"p"},"base64encoded")," will be a string of the form ",Object(r.b)("inlineCode",{parentName:"p"},"apiKey:apiSecret")," base64 encoded, e.g. ",Object(r.b)("inlineCode",{parentName:"p"},"Authorization: Basic QWxhZGRpbjpvcGVuIHNlc2FtZQ=="),". This route will parse the key out of the header and return an OK result."),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-csharp"})," [HttpPost(\"simple\")]\n public async Task<IActionResult> Simple([FromHeader]string authorization)\n {\n    var encoded = string.Empty;\n    if(!string.IsNullOrEmpty(authorization)) encoded = AuthenticationHeaderValue.Parse(authorization).Parameter;\n    if (string.IsNullOrEmpty(encoded)) return new UnauthorizedResult();\n    var apiKey = Encoding.UTF8.GetString(Convert.FromBase64String(encoded)).Split(':')[0];\n    return Ok();\n }\n")),Object(r.b)("p",null,"With that setup, you should run the project with a ",Object(r.b)("inlineCode",{parentName:"p"},"dotnet run"),", and if you issue a POST request to ",Object(r.b)("inlineCode",{parentName:"p"},"https://localhost:5001/api/RateLimited/simple")," - with apiKey ",Object(r.b)("inlineCode",{parentName:"p"},"foobar")," and password ",Object(r.b)("inlineCode",{parentName:"p"},"password"),", you will get a 200 OK response back."),Object(r.b)("p",null,"You can use this cURL request to elicit that response:"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-bash"}),' curl -X POST -H "Content-Length: 0" --user "foobar:password" http://localhost:5000/api/RateLimited/simple\n')),Object(r.b)("h2",{id:"fixed-window-rate-limiting-lua-script"},"Fixed Window Rate Limiting Lua Script"),Object(r.b)("p",null,"We are going to build a Fixed Window Rate limiting script. A fixed Window Rate Limiter will limit the number of requests in a particular window in time. In our example, we will limit the number of requests to a specific route for a specific API Key. So, for example, if we have the apiKey ",Object(r.b)("inlineCode",{parentName:"p"},"foobar")," hitting our route ",Object(r.b)("inlineCode",{parentName:"p"},"api/ratelimited/simple")," at 12:00:05 and we have a 60-second window, in which you can send no more than ten requests, we need to:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Format a key from our info, e.g. Route:ApiKey:time-window - in our case, this would be ",Object(r.b)("inlineCode",{parentName:"li"},"api/ratelimited/simple:foobar:12:00")),Object(r.b)("li",{parentName:"ol"},"Increment the current value of that key"),Object(r.b)("li",{parentName:"ol"},"Set the expiration for that key for 60 seconds"),Object(r.b)("li",{parentName:"ol"},"If the current value of the key is less than or equal to the max requests allowed, increment the key and return false (not rate limited)"),Object(r.b)("li",{parentName:"ol"},"If the current value of the key is greater than or equal to the max number of requests allowed, return true (rate limited)")),Object(r.b)("p",null,"The issue we need to contend with here is that this rate-limiting requires atomicity for all our commands (e.g. between when we get and increment the key we don't want anyone coming in and hitting it). Because of this, we will run everything on the server through a ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"https://redis.io/commands/eval"}),"Lua script"),". Now there are two ways to write this Lua script. The traditional way, where you drive everything off of keys and arguments, the following "),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-sh"})," local key = KEYS[1]\n local max_requests = tonumber(ARGV[1])\n local expiry = tonumber(ARGV[2])\n local requests = redis.call('INCR',key)\n redis.call('EXPIRE', key, expiry)\n if requests < max_requests then\n     return 0\n else\n    return 1\n end\n")),Object(r.b)("p",null,"Alternatively, StackExchange.Redis contains support for a ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"https://stackexchange.github.io/StackExchange.Redis/Scripting.html"}),"more readable mode of scripting")," they will let you name arguments to your script, and the library will take care of filling in the appropriate items at execution time. That mode of scripting, which we will use here, will produce this script:"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-sh"})," local requests = redis.call('INCR',@key)\n redis.call('EXPIRE', @key, @expiry)\n if requests < tonumber(@maxRequests) then\n     return 0\n else\n     return 1\n end\n")),Object(r.b)("h2",{id:"loading-the-script"},"Loading the Script"),Object(r.b)("p",null,"To run a Lua script with StackExchange.Redis, you need to prepare a script and run it. So consequentially add a new file ",Object(r.b)("inlineCode",{parentName:"p"},"Scripts.cs")," to the project, and in that file add a new static class called ",Object(r.b)("inlineCode",{parentName:"p"},"Scripts"),"; this will contain a constant string containing our script and a getter property to prepare the script for execution."),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-csharp"})," using StackExchange.Redis;\n namespace FixedRateLimiter\n {\n     public static class Scripts\n     {\n         public static LuaScript RateLimitScript => LuaScript.Prepare(RATE_LIMITER);\n\n        private const string RATE_LIMITER = @\"            \n            local requests = redis.call('INCR',@key)\n            redis.call('EXPIRE', @key, @expiry)\n            if requests < tonumber(@maxRequests) then\n                return 0\n            else\n                return 1\n            end\n            \"; \n    }\n }\n")),Object(r.b)("h2",{id:"executing-the-script"},"Executing the Script"),Object(r.b)("p",null,"With the script setup, all that's left to do is build our key, run the script, and check the result. We already extracted the ",Object(r.b)("inlineCode",{parentName:"p"},"apiKey")," earlier, so; we will use that, the request path, and the current time to create our key. Then, we will run ",Object(r.b)("inlineCode",{parentName:"p"},"ScriptEvaluateAsync")," to execute the script, and we will use the result of that to determine whether to return a 429 or our JSON result. Add the following just ahead of the return in our ",Object(r.b)("inlineCode",{parentName:"p"},"Simple")," method:"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-csharp"}),' var script = Scripts.RateLimitScript;\n var key = $"{Request.Path.Value}:{apiKey}:{DateTime.Now:hh:mm}";\n var res = await _db.ScriptEvaluateAsync(script, new {key = new RedisKey(key), expiry = 60, maxRequests = 10});\n if ((int) res == 1)\n     return new StatusCodeResult(429);\n')),Object(r.b)("p",null,"Our ",Object(r.b)("inlineCode",{parentName:"p"},"Simple")," route's code should look like this:"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-csharp"}),' [HttpPost("simple")]\n public async Task<IActionResult> Simple([FromHeader]string authorization)\n {\n     var encoded = string.Empty;\n    if(!string.IsNullOrEmpty(authorization)) encoded = AuthenticationHeaderValue.Parse(authorization).Parameter;\n    if (string.IsNullOrEmpty(encoded)) return new UnauthorizedResult();\n    var apiKey = Encoding.UTF8.GetString(Convert.FromBase64String(encoded)).Split(\':\')[0];\n    var script = Scripts.RateLimitScript;\n    var key = $"{Request.Path.Value}:{apiKey}:{DateTime.UtcNow:hh:mm}";\n    var res = await _db.ScriptEvaluateAsync(script, new {key = new RedisKey(key), expiry = 60, maxRequests = 10});\n    if ((int) res == 1)\n        return new StatusCodeResult(429); \n    return new JsonResult(new {key});\n }\n')),Object(r.b)("p",null,"Now, if we start our server back up with ",Object(r.b)("inlineCode",{parentName:"p"},"dotnet run")," and try running the following command:"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-bash"}),' for n in {1..21}; do echo $(curl -s -w " HTTP %{http_code}, %{time_total} s" -X POST -H "Content-Length: 0" --user "foobar:password" http://localhost:5000/api/ratelimited/simple); sleep 0.5; done\n')),Object(r.b)("p",null,"You will see some of your requests return a ",Object(r.b)("inlineCode",{parentName:"p"},"200"),", and at least one request return a ",Object(r.b)("inlineCode",{parentName:"p"},"429"),". How many depends on the time at which you start sending the request. Recall, the requests are time-boxed on single-minute windows, so if you transition to the next minute in the middle of the 21 requests, the counter will reset. Hence, you should expect to receive somewhere between 10 and 20 OK results and between 1 and 11 ",Object(r.b)("inlineCode",{parentName:"p"},"429")," results. The Response should look something like this:"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-text"}),' HTTP 200, 0.002680 s\n HTTP 200, 0.001535 s\n HTTP 200, 0.001653 s\n HTTP 200, 0.001449 s\n HTTP 200, 0.001604 s\n HTTP 200, 0.001423 s\n HTTP 200, 0.001492 s\n HTTP 200, 0.001449 s\n HTTP 200, 0.001551 s\n {"status":429,"traceId":"00-16e9da63f77c994db719acff5333c509-f79ac0c862c5a04c-00"} HTTP 429, 0.001803 s\n {"status":429,"traceId":"00-3d2e4e8af851024db121935705d5425f-0e23eb80eae0d549-00"} HTTP 429, 0.001521 s\n {"status":429,"traceId":"00-b5e824c9ebc4f94aa0bda2a414afa936-8020a7b8f2845544-00"} HTTP 429, 0.001475 s\n {"status":429,"traceId":"00-bd6237c5d0362a409c436dcffd0d4a7a-87b544534f397247-00"} HTTP 429, 0.001549 s\n {"status":429,"traceId":"00-532d64033c54a148a98d8efe1f9f53b2-b1dbdc7d8fbbf048-00"} HTTP 429, 0.001476 s\n {"status":429,"traceId":"00-8c210b1c1178554fb10aa6a7540d3488-0fedba48e38fdd4b-00"} HTTP 429, 0.001606 s\n {"status":429,"traceId":"00-633178f569dc8c46badb937c0363cda8-ab1d1214b791644d-00"} HTTP 429, 0.001661 s\n {"status":429,"traceId":"00-12f01e448216c64b8bfe674f242a226f-d90ff362926aa14e-00"} HTTP 429, 0.001858 s\n {"status":429,"traceId":"00-63ef51cee3bcb6488b04395f09d94def-be9e4d6d6057754a-00"} HTTP 429, 0.001622 s\n {"status":429,"traceId":"00-80a971db60fdf543941e2457e35ac2fe-3555f5cb9c907e4c-00"} HTTP 429, 0.001710 s\n {"status":429,"traceId":"00-f718734ae0285343ac927df617eeef92-91a49e127f2e4245-00"} HTTP 429, 0.001582 s\n {"status":429,"traceId":"00-9da2569cce4d714480dd4f0edc0506d2-8a1ce375b1a9504f-00"} HTTP 429, 0.001629 s\n')),Object(r.b)("h2",{id:"resources"},"Resources"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"https://github.com/redis-developer/fixed-rate-limiter-aspnet-core"}),"Source Code")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"/develop/dotnet/aspnetcore/rate-limiting/sliding-window"}),"How to Implement Sliding Window Rate Limiting with ASP.NET Core & Redis")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"/develop/dotnet/aspnetcore/rate-limiting/middleware"}),"Configurable Sliding Window Rate Limiting Middleware for Redis & ASP.NET Core")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"/develop/dotnet/"}),"Getting Started with .NET and Redis"))),Object(r.b)("h2",{id:""}),Object(r.b)("div",null,Object(r.b)("a",{href:"https://launchpad.redis.com",target:"_blank",rel:"noopener",className:"link"}," ",Object(r.b)("img",{src:"/img/launchpad.png",className:"thumb",loading:"lazy",alt:"Redis Launchpad"}))))}d.isMDXComponent=!0}}]);