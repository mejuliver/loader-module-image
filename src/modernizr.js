!function(A,e,n){function a(A,e){return typeof A===e}function o(){var A,e,n,o,s,t,r;for(var f in l)if(l.hasOwnProperty(f)){if(A=[],e=l[f],e.name&&(A.push(e.name.toLowerCase()),e.options&&e.options.aliases&&e.options.aliases.length))for(n=0;n<e.options.aliases.length;n++)A.push(e.options.aliases[n].toLowerCase());for(o=a(e.fn,"function")?e.fn():e.fn,s=0;s<A.length;s++)t=A[s],r=t.split("."),1===r.length?Modernizr[r[0]]=o:(!Modernizr[r[0]]||Modernizr[r[0]]instanceof Boolean||(Modernizr[r[0]]=new Boolean(Modernizr[r[0]])),Modernizr[r[0]][r[1]]=o),i.push((o?"":"no-")+r.join("-"))}}function s(A){var e=u.className,n=Modernizr._config.classPrefix||"";if(c&&(e=e.baseVal),Modernizr._config.enableJSClass){var a=new RegExp("(^|\\s)"+n+"no-js(\\s|$)");e=e.replace(a,"$1"+n+"js$2")}Modernizr._config.enableClasses&&(e+=" "+n+A.join(" "+n),c?u.className.baseVal=e:u.className=e)}function t(A,e){if("object"==typeof A)for(var n in A)f(A,n)&&t(n,A[n]);else{A=A.toLowerCase();var a=A.split("."),o=Modernizr[a[0]];if(2==a.length&&(o=o[a[1]]),"undefined"!=typeof o)return Modernizr;e="function"==typeof e?e():e,1==a.length?Modernizr[a[0]]=e:(!Modernizr[a[0]]||Modernizr[a[0]]instanceof Boolean||(Modernizr[a[0]]=new Boolean(Modernizr[a[0]])),Modernizr[a[0]][a[1]]=e),s([(e&&0!=e?"":"no-")+a.join("-")]),Modernizr._trigger(A,e)}return Modernizr}var i=[],l=[],r={_version:"3.6.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(A,e){var n=this;setTimeout(function(){e(n[A])},0)},addTest:function(A,e,n){l.push({name:A,fn:e,options:n})},addAsyncTest:function(A){l.push({name:null,fn:A})}},Modernizr=function(){};Modernizr.prototype=r,Modernizr=new Modernizr;var f,u=e.documentElement,c="svg"===u.nodeName.toLowerCase();!function(){var A={}.hasOwnProperty;f=a(A,"undefined")||a(A.call,"undefined")?function(A,e){return e in A&&a(A.constructor.prototype[e],"undefined")}:function(e,n){return A.call(e,n)}}(),r._l={},r.on=function(A,e){this._l[A]||(this._l[A]=[]),this._l[A].push(e),Modernizr.hasOwnProperty(A)&&setTimeout(function(){Modernizr._trigger(A,Modernizr[A])},0)},r._trigger=function(A,e){if(this._l[A]){var n=this._l[A];setTimeout(function(){var A,a;for(A=0;A<n.length;A++)(a=n[A])(e)},0),delete this._l[A]}},Modernizr._q.push(function(){r.addTest=t}),Modernizr.addAsyncTest(function(){var A=new Image;A.onerror=function(){t("webpalpha",!1,{aliases:["webp-alpha"]})},A.onload=function(){t("webpalpha",1==A.width,{aliases:["webp-alpha"]})},A.src="data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA=="}),Modernizr.addAsyncTest(function(){var A=new Image;A.onerror=function(){t("webplossless",!1,{aliases:["webp-lossless"]})},A.onload=function(){t("webplossless",1==A.width,{aliases:["webp-lossless"]})},A.src="data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA="}),Modernizr.addAsyncTest(function(){function A(A,e,n){function a(e){var a=e&&"load"===e.type?1==o.width:!1,s="webp"===A;t(A,s&&a?new Boolean(a):a),n&&n(e)}var o=new Image;o.onerror=a,o.onload=a,o.src=e}var e=[{uri:"data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoBAAEAAwA0JaQAA3AA/vuUAAA=",name:"webp"},{uri:"data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA==",name:"webp.alpha"},{uri:"data:image/webp;base64,UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA",name:"webp.animation"},{uri:"data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=",name:"webp.lossless"}],n=e.shift();A(n.name,n.uri,function(n){if(n&&"load"===n.type)for(var a=0;a<e.length;a++)A(e[a].name,e[a].uri)})}),o(),s(i),delete r.addTest,delete r.addAsyncTest;for(var p=0;p<Modernizr._q.length;p++)Modernizr._q[p]();A.Modernizr=Modernizr}(window,document);