(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{176:function(e,t,r){"use strict";var i=r(3),a=r(13),n=r(12),s=r(75),c=r(72),o=r(5),l=r(95).f,p=r(94).f,u=r(8).f,f=r(93).trim,N=i.Number,h=N,I=N.prototype,d="Number"==n(r(73)(I)),b="trim"in String.prototype,g=function(e){var t=c(e,!1);if("string"==typeof t&&t.length>2){var r,i,a,n=(t=b?t.trim():f(t,3)).charCodeAt(0);if(43===n||45===n){if(88===(r=t.charCodeAt(2))||120===r)return NaN}else if(48===n){switch(t.charCodeAt(1)){case 66:case 98:i=2,a=49;break;case 79:case 111:i=8,a=55;break;default:return+t}for(var s,o=t.slice(2),l=0,p=o.length;l<p;l++)if((s=o.charCodeAt(l))<48||s>a)return NaN;return parseInt(o,i)}}return+t};if(!N(" 0o1")||!N("0b1")||N("+0x1")){N=function(e){var t=arguments.length<1?0:e,r=this;return r instanceof N&&(d?o((function(){I.valueOf.call(r)})):"Number"!=n(r))?s(new h(g(t)),r,N):g(t)};for(var m,E=r(7)?l(h):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),A=0;E.length>A;A++)a(h,m=E[A])&&!a(N,m)&&u(N,m,p(h,m));N.prototype=I,I.constructor=N,r(9)(i,"Number",N)}},348:function(e,t,r){"use strict";r.r(t);r(176);var i={name:"bili-player",props:{aid:{type:String},cid:{type:String},page:{type:Number,default:1}}},a=r(0),n=Object(a.a)(i,(function(){var e=this.$createElement;return(this._self._c||e)("iframe",{attrs:{src:"//player.bilibili.com/player.html?aid="+this.aid+"&cid="+this.cid+"&page="+this.page,scrolling:"no",frameborder:"no",width:"560px",height:"420px",allowfullscreen:"true"}})}),[],!1,null,"0b3cc51a",null);t.default=n.exports}}]);