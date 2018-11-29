!function(e){function t(i){if(n[i])return n[i].exports;var r=n[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,i){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:i})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=3)}([function(e,t,n){e.exports=n.p+"public/fonts/slkscr-webfont.eot"},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),s=n(5),a=i(s),l=n(4),u=i(l),c=n(6),h=i(c),f=n(7),d=i(f),p=n(8),y=function(){function e(t,n,i,o){var s=this;r(this,e),this.element=document.getElementById(t),this.width=n,this.height=i,this.board=new a.default(n,i),this.ball=new u.default(8,1,i,n),this.leftPaddle=new h.default(this.board,6,56,!0,p.KEYS.a,p.KEYS.z),this.rightPaddle=new h.default(this.board,6,56,!1,p.KEYS.up,p.KEYS.down),this.boardGap=5,this.scoreboard=new d.default(this.ball,40,140),this.pause=!1,this.pause=document.addEventListener("keydown",function(e){e.keyCode!==p.KEYS.spaceBar||s.gameOver||(s.pause=!s.pause,console.log("pause"))})}return o(e,[{key:"render",value:function(){this.pause||this.gameOver||(10!=this.scoreboard.playerOneScore&&10!=this.scoreboard.playerTwoScore||(this.gameOver=!0,this.scoreboard.ping4.play()),document.getElementById("game").innerHTML="",document.getElementById("scoreboard").innerHTML="",this.board.render(),this.ball.render(this.leftPaddle,this.rightPaddle),this.leftPaddle.render(),this.rightPaddle.render(),this.scoreboard.render())}}]),e}();t.default=y},function(e,t,n){var i=n(9);"string"==typeof i&&(i=[[e.i,i,""]]);n(14)(i,{});i.locals&&(e.exports=i.locals)},function(e,t,n){"use strict";n(2);var i=n(1),r=function(e){return e&&e.__esModule?e:{default:e}}(i),o=new r.default("game",512,256);!function e(){o.render(),requestAnimationFrame(e)}()},function(e,t,n){"use strict";function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){var n=[],i=!0,r=!1,o=void 0;try{for(var s,a=e[Symbol.iterator]();!(i=(s=a.next()).done)&&(n.push(s.value),!t||n.length!==t);i=!0);}catch(e){r=!0,o=e}finally{try{!i&&a.return&&a.return()}finally{if(r)throw o}}return n}return function(t,n){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),o=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),s=function(){function e(t,n,r,o){i(this,e),this.radius=t,this.boardHeight=r,this.boardWidth=o,this.direction=1,this.xPos=this.boardWidth/2,this.yPos=this.boardHeight/2,this.vy=0,this.ping1=new Audio("public/sounds/pong-01.wav"),this.ping2=new Audio("public/sounds/pong-02.wav"),this.ping3=new Audio("public/sounds/pong-03.wav"),this.reset()}return o(e,[{key:"paddleCollision",value:function(e,t){if(this.vx<0){var n=e.coordinates(e.xPos,e.yPos,e.width,e.height),i=r(n,4),o=(i[0],i[1]),s=i[2],a=i[3];this.xPos-this.radius<=o&&this.yPos>=s&&this.yPos<=a&&(this.vx=-this.vx,this.ping1.play())}else{var l=t.coordinates(t.xPos,t.yPos,t.width,t.height),u=r(l,4),c=u[0],h=(u[1],u[2]),f=u[3];this.xPos+this.radius>=c&&this.yPos>=h&&this.yPos<=f&&(this.vx=-this.vx,this.ping2.play())}}},{key:"wallCollision",value:function(){this.yPos<=this.radius&&(this.vy=-this.vy),this.yPos+this.radius>=this.boardHeight&&(this.vy=-this.vy)}},{key:"reset",value:function(){this.xPos=this.boardWidth/2,this.yPos=this.boardHeight/2,this.vy=0,this.vy=Math.floor(10*Math.random()-5),this.vx=this.direction*(6-Math.abs(this.vy))}},{key:"render",value:function(e,t){this.xPos+=this.vx,this.yPos+=this.vy,this.wallCollision(),this.paddleCollision(e,t),document.getElementById("container").innerHTML+='<circle cx="'+this.xPos+'" cy="'+this.yPos+'" r="'+this.radius+'" style="fill:#000000"/>'}}]),e}();t.default=s},function(e,t,n){"use strict";function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),o=function(){function e(t,n){i(this,e),this.width=t,this.height=n}return r(e,[{key:"render",value:function(e){document.getElementById("game").innerHTML='<svg id="container" width="'+this.width+'" height="'+this.height+'" fill="#353535"></svg>',document.getElementById("container").innerHTML+='<line id="divider" x1="256" y1="0" x2="256" y2="256" stroke="black" stroke-dasharray="4"/>'}}]),e}();t.default=o},function(e,t,n){"use strict";function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),o=function(){function e(t,n,r,o,s,a){var l=this;i(this,e),this.width=n,this.height=r,this.speed=10,this.score=0,this.isLeft=o,this.xPos=o?0:504,this.board=t,this.yPos=t.height/2-r/2,document.addEventListener("keydown",function(e){switch(e.keyCode){case s:l.yPos-=l.speed,l.yPos=Math.max(0,l.yPos);break;case a:l.yPos+=l.speed,l.yPos=Math.min(t.height-l.height,l.yPos)}})}return r(e,[{key:"coordinates",value:function(){return[this.xPos,this.xPos+this.width,this.yPos,this.yPos+this.height]}},{key:"render",value:function(e){document.getElementById("container").innerHTML+='<rect x="'+this.xPos+'" y="'+this.yPos+'" width="'+this.width+'" height="'+this.height+'" fill="#353535"></svg>'}}]),e}();t.default=o},function(e,t,n){"use strict";function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),o=function(){function e(t,n,r){i(this,e),this.width=r,this.height=n,this.playerOneScore=0,this.playerTwoScore=0,this.ball=t,this.ping4=new Audio("public/sounds/pong-04.wav")}return r(e,[{key:"ballCollision",value:function(){this.ball.xPos<=this.ball.radius&&(this.playerTwoScore++,this.ball.reset()),this.ball.xPos+this.ball.radius>=this.ball.boardWidth&&(this.playerOneScore++,this.ball.reset())}},{key:"render",value:function(e){this.ballCollision(),document.getElementById("scoreboard").innerHTML+="<p>Player 1 score: "+this.playerOneScore+"</p> <p>Player 2 score: "+this.playerTwoScore+"</p>"}}]),e}();t.default=o},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.SVG_NS="http://www.w3.org/2000/svg",t.KEYS={a:65,z:90,up:38,down:40,spaceBar:32}},function(e,t,n){t=e.exports=n(10)(),t.push([e.i,'a,abbr,acronym,address,applet,article,aside,audio,b,big,blockquote,body,canvas,caption,center,cite,code,dd,del,details,dfn,div,dl,dt,em,embed,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,header,hgroup,html,i,iframe,img,ins,kbd,label,legend,li,mark,menu,nav,object,ol,output,p,pre,q,ruby,s,samp,section,small,span,strike,strong,sub,summary,sup,table,tbody,td,tfoot,th,thead,time,tr,tt,u,ul,var,video{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block}body{line-height:1}ol,ul{list-style:none}blockquote,q{quotes:none}blockquote:after,blockquote:before,q:after,q:before{content:"";content:none}table{border-collapse:collapse;border-spacing:0}@font-face{font-family:Silkscreen Web;src:url('+n(0)+");src:url("+n(0)+'?#iefix) format("embedded-opentype"),url('+n(13)+') format("woff"),url('+n(12)+') format("truetype"),url('+n(11)+'#silkscreennormal) format("svg");font-weight:400;font-style:normal}html{font-size:16px}body{align-items:center;display:flex;font-family:Silkscreen Web,monotype;height:100vh;justify-content:center;width:100%}h1{font-size:2.5rem;margin-bottom:1rem;text-align:center}#scoreboard{display:flex;justify-content:space-around;font-family:Silkscreen Web,monotype}',""])},function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var i={},r=0;r<this.length;r++){var o=this[r][0];"number"==typeof o&&(i[o]=!0)}for(r=0;r<t.length;r++){var s=t[r];"number"==typeof s[0]&&i[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="("+s[2]+") and ("+n+")"),e.push(s))}},e}},function(e,t,n){e.exports=n.p+"public/fonts/slkscr-webfont.svg"},function(e,t,n){e.exports=n.p+"public/fonts/slkscr-webfont.ttf"},function(e,t,n){e.exports=n.p+"public/fonts/slkscr-webfont.woff"},function(e,t){function n(e,t){for(var n=0;n<e.length;n++){var i=e[n],r=f[i.id];if(r){r.refs++;for(var o=0;o<r.parts.length;o++)r.parts[o](i.parts[o]);for(;o<i.parts.length;o++)r.parts.push(l(i.parts[o],t))}else{for(var s=[],o=0;o<i.parts.length;o++)s.push(l(i.parts[o],t));f[i.id]={id:i.id,refs:1,parts:s}}}}function i(e){for(var t=[],n={},i=0;i<e.length;i++){var r=e[i],o=r[0],s=r[1],a=r[2],l=r[3],u={css:s,media:a,sourceMap:l};n[o]?n[o].parts.push(u):t.push(n[o]={id:o,parts:[u]})}return t}function r(e,t){var n=y(),i=g[g.length-1];if("top"===e.insertAt)i?i.nextSibling?n.insertBefore(t,i.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),g.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(t)}}function o(e){e.parentNode.removeChild(e);var t=g.indexOf(e);t>=0&&g.splice(t,1)}function s(e){var t=document.createElement("style");return t.type="text/css",r(e,t),t}function a(e){var t=document.createElement("link");return t.rel="stylesheet",r(e,t),t}function l(e,t){var n,i,r;if(t.singleton){var l=v++;n=b||(b=s(t)),i=u.bind(null,n,l,!1),r=u.bind(null,n,l,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=a(t),i=h.bind(null,n),r=function(){o(n),n.href&&URL.revokeObjectURL(n.href)}):(n=s(t),i=c.bind(null,n),r=function(){o(n)});return i(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;i(e=t)}else r()}}function u(e,t,n,i){var r=n?"":i.css;if(e.styleSheet)e.styleSheet.cssText=m(t,r);else{var o=document.createTextNode(r),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(o,s[t]):e.appendChild(o)}}function c(e,t){var n=t.css,i=t.media;if(i&&e.setAttribute("media",i),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}function h(e,t){var n=t.css,i=t.sourceMap;i&&(n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */");var r=new Blob([n],{type:"text/css"}),o=e.href;e.href=URL.createObjectURL(r),o&&URL.revokeObjectURL(o)}var f={},d=function(e){var t;return function(){return void 0===t&&(t=e.apply(this,arguments)),t}},p=d(function(){return/msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase())}),y=d(function(){return document.head||document.getElementsByTagName("head")[0]}),b=null,v=0,g=[];e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");t=t||{},void 0===t.singleton&&(t.singleton=p()),void 0===t.insertAt&&(t.insertAt="bottom");var r=i(e);return n(r,t),function(e){for(var o=[],s=0;s<r.length;s++){var a=r[s],l=f[a.id];l.refs--,o.push(l)}if(e){n(i(e),t)}for(var s=0;s<o.length;s++){var l=o[s];if(0===l.refs){for(var u=0;u<l.parts.length;u++)l.parts[u]();delete f[l.id]}}}};var m=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()}]);