(window.webpackJsonp=window.webpackJsonp||[]).push([[17,2],{263:function(t,e,r){"use strict";var n=r(11),o=r(1),c=r(3),d=r(106),l=r(19),v=r(13),f=r(190),m=r(39),x=r(105),_=r(189),h=r(4),y=r(73).f,E=r(31).f,C=r(17).f,N=r(264),I=r(265).trim,w="Number",k=o.Number,S=k.prototype,A=o.TypeError,M=c("".slice),j=c("".charCodeAt),O=function(t){var e=_(t,"number");return"bigint"==typeof e?e:T(e)},T=function(t){var e,r,n,o,c,d,l,code,v=_(t,"number");if(x(v))throw A("Cannot convert a Symbol value to a number");if("string"==typeof v&&v.length>2)if(v=I(v),43===(e=j(v,0))||45===e){if(88===(r=j(v,2))||120===r)return NaN}else if(48===e){switch(j(v,1)){case 66:case 98:n=2,o=49;break;case 79:case 111:n=8,o=55;break;default:return+v}for(d=(c=M(v,2)).length,l=0;l<d;l++)if((code=j(c,l))<48||code>o)return NaN;return parseInt(c,n)}return+v};if(d(w,!k(" 0o1")||!k("0b1")||k("+0x1"))){for(var D,F=function(t){var e=arguments.length<1?0:k(O(t)),r=this;return m(S,r)&&h((function(){N(r)}))?f(Object(e),r,F):e},L=n?y(k):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),R=0;L.length>R;R++)v(k,D=L[R])&&!v(F,D)&&C(F,D,E(k,D));F.prototype=S,S.constructor=F,l(o,w,F)}},264:function(t,e,r){var n=r(3);t.exports=n(1..valueOf)},265:function(t,e,r){var n=r(3),o=r(22),c=r(12),d=r(266),l=n("".replace),v="["+d+"]",f=RegExp("^"+v+v+"*"),m=RegExp(v+v+"*$"),x=function(t){return function(e){var r=c(o(e));return 1&t&&(r=l(r,f,"")),2&t&&(r=l(r,m,"")),r}};t.exports={start:x(1),end:x(2),trim:x(3)}},266:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},267:function(t,e,r){var content=r(280);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(60).default)("c09a18e0",content,!0,{sourceMap:!1})},273:function(t,e,r){"use strict";r.r(e);r(263);var n={name:"CardComponent2",props:{id:{type:Number,required:!0},name:{type:String,required:!0},date:{type:String,required:!0},shortDescription:{type:String,required:!0},image:{type:String,required:!0},alternative:{type:String,required:!0}}},o=(r(279),r(14)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"card"},[r("nuxt-link",{attrs:{to:"/events/"+t.id}},[r("div",{staticClass:"img-container"},[r("img",{staticClass:"card-img-top card-image",attrs:{src:t.image,alt:t.alternative}})]),t._v(" "),r("div",{staticClass:"card-body"},[r("p",{staticClass:"card-title title-font"},[t._v(t._s(t.name))]),t._v(" "),r("p",{staticClass:"card-title imp-info"},[t._v(t._s(t.date))]),t._v(" "),r("p",{staticClass:"card-text"},[t._v(t._s(t.shortDescription))])])])],1)}),[],!1,null,"1e91d607",null);e.default=component.exports},279:function(t,e,r){"use strict";r(267)},280:function(t,e,r){var n=r(59)(!1);n.push([t.i,"a[data-v-1e91d607]{text-decoration:none;color:inherit}.card[data-v-1e91d607]{width:15rem;border:2px solid var(--color1);background:var(--color2)}.card[data-v-1e91d607]:hover{background:var(--color1-light)}.img-container[data-v-1e91d607]{height:140px}.card-image[data-v-1e91d607]{margin-top:5px;background-position:50%;background-repeat:no-repeat;background-size:cover;border:1px solid var(--color1);width:100%;height:100%;-o-object-fit:cover;object-fit:cover;overflow:hidden}.card-text[data-v-1e91d607]{text-align:left}.card-title[data-v-1e91d607]{text-align:center}.card-body[data-v-1e91d607],.card-title[data-v-1e91d607]{font-size:clamp(15px,2vmax,20px)}",""]),t.exports=n},329:function(t,e,r){var content=r(349);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(60).default)("444c0579",content,!0,{sourceMap:!1})},348:function(t,e,r){"use strict";r(329)},349:function(t,e,r){var n=r(59)(!1);n.push([t.i,".flexbox-container[data-v-188f02a8]{justify-content:space-evenly}.sub-events-div[data-v-188f02a8]{display:flex;justify-content:space-between}.sub-events[data-v-188f02a8]{font-family:var(--title-font);color:#000;font-size:medium;text-decoration:none}.sub-events[data-v-188f02a8]:hover{text-decoration:underline;color:#000}",""]),t.exports=n},368:function(t,e,r){"use strict";r.r(e);var n=r(10),o=(r(61),{name:"WinterEventPage",head:{title:"Winter Events | VisitMantova",meta:[{hid:"description",name:"description",content:"Discover Mantova future winter events!"}]},components:{CardEvent:r(273).default},data:function(){return{}},asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$axios,e.next=3,r.get("/api/events/winter");case 3:return n=e.sent,data=n.data,e.abrupt("return",{eventList:data});case 6:case"end":return e.stop()}}),e)})))()}}),c=(r(348),r(14)),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"page container mt-5"},[r("h1",{staticClass:"display-4 title-font page-title"},[t._v("Winter Events")]),t._v(" "),r("div",{staticClass:"sub-events-div"},[r("nuxt-link",{staticClass:"display-4 title-font page-title sub-events",attrs:{to:"/eventList"}},[t._v("All Events")]),t._v(" "),r("nuxt-link",{staticClass:"display-4 title-font page-title sub-events",attrs:{to:"/eventSummer"}},[t._v("Summer Events")])],1),t._v(" "),r("div",{staticClass:"row mt-3 flexbox-container"},t._l(t.eventList,(function(t,e){return r("card-event",{key:"event-index-"+e,staticClass:"col-sm-2 m-2",attrs:{id:t.id,name:t.name,date:t.date_s,shortDescription:t.shortDescription,image:t.imagesUrl[0],alternative:t.imagesAlternative[0]}})})),1)])}),[],!1,null,"188f02a8",null);e.default=component.exports;installComponents(component,{CardEvent:r(273).default})}}]);