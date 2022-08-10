// build time:Thu Aug 11 2022 00:55:35 GMT+0800 (香港标准时间)
(function(e,i){if(typeof define==="function"&&define.amd){define(i)}else if(typeof exports==="object"){module.exports=i()}else{e.PhotoSwipe=i()}})(this,function(){"use strict";var e=function(d,U,e,i){var h={features:null,bind:function(e,i,t,n){var o=(n?"remove":"add")+"EventListener";i=i.split(" ");for(var r=0;r<i.length;r++){if(i[r]){e[o](i[r],t,false)}}},isArray:function(e){return e instanceof Array},createEl:function(e,i){var t=document.createElement(i||"div");if(e){t.className=e}return t},getScrollY:function(){var e=window.pageYOffset;return e!==undefined?e:document.documentElement.scrollTop},unbind:function(e,i,t){h.bind(e,i,t,true)},removeClass:function(e,i){var t=new RegExp("(\\s|^)"+i+"(\\s|$)");e.className=e.className.replace(t," ").replace(/^\s\s*/,"").replace(/\s\s*$/,"")},addClass:function(e,i){if(!h.hasClass(e,i)){e.className+=(e.className?" ":"")+i}},hasClass:function(e,i){return e.className&&new RegExp("(^|\\s)"+i+"(\\s|$)").test(e.className)},getChildByClass:function(e,i){var t=e.firstChild;while(t){if(h.hasClass(t,i)){return t}t=t.nextSibling}},arraySearch:function(e,i,t){var n=e.length;while(n--){if(e[n][t]===i){return n}}return-1},extend:function(e,i,t){for(var n in i){if(i.hasOwnProperty(n)){if(t&&e.hasOwnProperty(n)){continue}e[n]=i[n]}}},easing:{sine:{out:function(e){return Math.sin(e*(Math.PI/2))},inOut:function(e){return-(Math.cos(Math.PI*e)-1)/2}},cubic:{out:function(e){return--e*e*e+1}}},detectFeatures:function(){if(h.features){return h.features}var e=h.createEl(),i=e.style,t="",n={};n.oldIE=document.all&&!document.addEventListener;n.touch="ontouchstart"in window;if(window.requestAnimationFrame){n.raf=window.requestAnimationFrame;n.caf=window.cancelAnimationFrame}n.pointerEvent=navigator.pointerEnabled||navigator.msPointerEnabled;if(!n.pointerEvent){var o=navigator.userAgent;if(/iP(hone|od)/.test(navigator.platform)){var r=navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);if(r&&r.length>0){r=parseInt(r[1],10);if(r>=1&&r<8){n.isOldIOSPhone=true}}}var a=o.match(/Android\s([0-9\.]*)/);var l=a?a[1]:0;l=parseFloat(l);if(l>=1){if(l<4.4){n.isOldAndroid=true}n.androidVersion=l}n.isMobileOpera=/opera mini|opera mobi/i.test(o)}var s=["transform","perspective","animationName"],f=["","webkit","Moz","ms","O"],u,c;for(var d=0;d<4;d++){t=f[d];for(var p=0;p<3;p++){u=s[p];c=t+(t?u.charAt(0).toUpperCase()+u.slice(1):u);if(!n[u]&&c in i){n[u]=c}}if(t&&!n.raf){t=t.toLowerCase();n.raf=window[t+"RequestAnimationFrame"];if(n.raf){n.caf=window[t+"CancelAnimationFrame"]||window[t+"CancelRequestAnimationFrame"]}}}if(!n.raf){var m=0;n.raf=function(e){var i=(new Date).getTime();var t=Math.max(0,16-(i-m));var n=window.setTimeout(function(){e(i+t)},t);m=i+t;return n};n.caf=function(e){clearTimeout(e)}}n.svg=!!document.createElementNS&&!!document.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect;h.features=n;return n}};h.detectFeatures();if(h.features.oldIE){h.bind=function(e,i,t,n){i=i.split(" ");var o=(n?"detach":"attach")+"Event",r,a=function(){t.handleEvent.call(t)};for(var l=0;l<i.length;l++){r=i[l];if(r){if(typeof t==="object"&&t.handleEvent){if(!n){t["oldIE"+r]=a}else{if(!t["oldIE"+r]){return false}}e[o]("on"+r,t["oldIE"+r])}else{e[o]("on"+r,t)}}}}}var p=this;var t=25,H=3;var m={allowPanToNext:true,spacing:.12,bgOpacity:1,mouseUsed:false,loop:true,pinchToClose:true,closeOnScroll:true,closeOnVerticalDrag:true,verticalDragRange:.75,hideAnimationDuration:333,showAnimationDuration:333,showHideOpacity:false,focus:true,escKey:true,arrowKeys:true,mainScrollEndFriction:.35,panEndFriction:.35,isClickableElement:function(e){return e.tagName==="A"},getDoubleTapZoom:function(e,i){if(e){return 1}else{return i.initialZoomLevel<.7?1:1.33}},maxSpreadZoom:1.33,modal:true,scaleMode:"fit"};h.extend(m,i);var n=function(){return{x:0,y:0}};var Y,W,B,v,G,a,X=n(),V=n(),y=n(),K,q,o,s={},x,$,j,J,Q,ee,ie=0,te={},u=n(),l,ne,c=0,oe,re,ae,le,se,fe,ue=true,r,ce=[],de,pe,me,he,ve,ye,g,xe={},ge=false,we,be=function(e,i){h.extend(p,i.publicMethods);ce.push(e)},Ie=function(e){var i=L();if(e>i-1){return e-i}else if(e<0){return i+e}return e},Ce={},f=function(e,i){if(!Ce[e]){Ce[e]=[]}return Ce[e].push(i)},w=function(e){var i=Ce[e];if(i){var t=Array.prototype.slice.call(arguments);t.shift();for(var n=0;n<i.length;n++){i[n].apply(p,t)}}},b=function(){return(new Date).getTime()},I=function(e){Di=e;p.bg.style.opacity=e*m.bgOpacity},De=function(e,i,t,n,o){if(!ge||o&&o!==p.currItem){n=n/(o?o.fitRatio:p.currItem.fitRatio)}e[se]=j+i+"px, "+t+"px"+J+" scale("+n+")"},C=function(e){if(Z){if(e){if(x>p.currItem.fitRatio){if(!ge){ht(p.currItem,false,true);ge=true}}else{if(ge){ht(p.currItem);ge=false}}}De(Z,y.x,y.y,x)}},Te=function(e){if(e.container){De(e.container.style,e.initialPosition.x,e.initialPosition.y,e.initialZoomLevel,e)}},Me=function(e,i){i[se]=j+e+"px, 0px"+J},Se=function(e,i){if(!m.loop&&i){var t=v+(u.x*ie-e)/u.x,n=Math.round(e-xi.x);if(t<0&&n>0||t>=L()-1&&n<0){e=xi.x+n*m.mainScrollEndFriction}}xi.x=e;Me(e,G)},Ae=function(e,i){var t=gi[e]-te[e];return V[e]+X[e]+t-t*(i/$)},D=function(e,i){e.x=i.x;e.y=i.y;if(i.id){e.id=i.id}},Ee=function(e){e.x=Math.round(e.x);e.y=Math.round(e.y)},Oe=null,ke=function(){if(Oe){h.unbind(document,"mousemove",ke);h.addClass(d,"pswp--has_mouse");m.mouseUsed=true;w("mouseUsed")}Oe=setTimeout(function(){Oe=null},100)},Re=function(){h.bind(document,"keydown",p);if(g.transform){h.bind(p.scrollWrap,"click",p)}if(!m.mouseUsed){h.bind(document,"mousemove",ke)}h.bind(window,"resize scroll orientationchange",p);w("bindEvents")},Ze=function(){h.unbind(window,"resize scroll orientationchange",p);h.unbind(window,"scroll",o.scroll);h.unbind(document,"keydown",p);h.unbind(document,"mousemove",ke);if(g.transform){h.unbind(p.scrollWrap,"click",p)}if(E){h.unbind(window,K,p)}clearTimeout(we);w("unbindEvents")},Pe=function(e,i){var t=ct(p.currItem,s,e);if(i){R=t}return t},Fe=function(e){if(!e){e=p.currItem}return e.initialZoomLevel},Le=function(e){if(!e){e=p.currItem}return e.w>0?m.maxSpreadZoom:1},ze=function(e,i,t,n){if(n===p.currItem.initialZoomLevel){t[e]=p.currItem.initialPosition[e];return true}else{t[e]=Ae(e,n);if(t[e]>i.min[e]){t[e]=i.min[e];return true}else if(t[e]<i.max[e]){t[e]=i.max[e];return true}}return false},_e=function(){if(se){var e=g.perspective&&!r;j="translate"+(e?"3d(":"(");J=g.perspective?", 0px)":")";return}se="left";h.addClass(d,"pswp--ie");Me=function(e,i){i.left=e+"px"};Te=function(e){var i=e.fitRatio>1?1:e.fitRatio,t=e.container.style,n=i*e.w,o=i*e.h;t.width=n+"px";t.height=o+"px";t.left=e.initialPosition.x+"px";t.top=e.initialPosition.y+"px"};C=function(){if(Z){var e=Z,i=p.currItem,t=i.fitRatio>1?1:i.fitRatio,n=t*i.w,o=t*i.h;e.width=n+"px";e.height=o+"px";e.left=y.x+"px";e.top=y.y+"px"}}},Ne=function(e){var i="";if(m.escKey&&e.keyCode===27){i="close"}else if(m.arrowKeys){if(e.keyCode===37){i="prev"}else if(e.keyCode===39){i="next"}}if(i){if(!e.ctrlKey&&!e.altKey&&!e.shiftKey&&!e.metaKey){if(e.preventDefault){e.preventDefault()}else{e.returnValue=false}p[i]()}}},Ue=function(e){if(!e){return}if(pi||di||P||ai){e.preventDefault();e.stopPropagation()}},He=function(){p.setScrollOffset(0,h.getScrollY())};var T={},Ye=0,We=function(e){if(T[e]){if(T[e].raf){pe(T[e].raf)}Ye--;delete T[e]}},Be=function(e){if(T[e]){We(e)}if(!T[e]){Ye++;T[e]={}}},Ge=function(){for(var e in T){if(T.hasOwnProperty(e)){We(e)}}},Xe=function(e,i,t,n,o,r,a){var l=b(),s;Be(e);var f=function(){if(T[e]){s=b()-l;if(s>=n){We(e);r(t);if(a){a()}return}r((t-i)*o(s/n)+i);T[e].raf=de(f)}};f()};var Ve={shout:w,listen:f,viewportSize:s,options:m,isMainScrollAnimating:function(){return P},getZoomLevel:function(){return x},getCurrentIndex:function(){return v},isDragging:function(){return E},isZooming:function(){return k},setScrollOffset:function(e,i){te.x=e;ye=te.y=i;w("updateScrollOffset",te)},applyZoomPan:function(e,i,t,n){y.x=i;y.y=t;x=e;C(n)},init:function(){if(Y||W){return}var e;p.framework=h;p.template=d;p.bg=h.getChildByClass(d,"pswp__bg");me=d.className;Y=true;g=h.detectFeatures();de=g.raf;pe=g.caf;se=g.transform;ve=g.oldIE;p.scrollWrap=h.getChildByClass(d,"pswp__scroll-wrap");p.container=h.getChildByClass(p.scrollWrap,"pswp__container");G=p.container.style;p.itemHolders=l=[{el:p.container.children[0],wrap:0,index:-1},{el:p.container.children[1],wrap:0,index:-1},{el:p.container.children[2],wrap:0,index:-1}];l[0].el.style.display=l[2].el.style.display="none";_e();o={resize:p.updateSize,orientationchange:function(){clearTimeout(we);we=setTimeout(function(){if(s.x!==p.scrollWrap.clientWidth){p.updateSize()}},500)},scroll:He,keydown:Ne,click:Ue};var i=g.isOldIOSPhone||g.isOldAndroid||g.isMobileOpera;if(!g.animationName||!g.transform||i){m.showAnimationDuration=m.hideAnimationDuration=0}for(e=0;e<ce.length;e++){p["init"+ce[e]]()}if(U){var t=p.ui=new U(p,h);t.init()}w("firstUpdate");v=v||m.index||0;if(isNaN(v)||v<0||v>=L()){v=0}p.currItem=lt(v);if(g.isOldIOSPhone||g.isOldAndroid){ue=false}d.setAttribute("aria-hidden","false");if(m.modal){if(!ue){d.style.position="absolute";d.style.top=h.getScrollY()+"px"}else{d.style.position="fixed"}}if(ye===undefined){w("initialLayout");ye=he=h.getScrollY()}var n="pswp--open ";if(m.mainClass){n+=m.mainClass+" "}if(m.showHideOpacity){n+="pswp--animate_opacity "}n+=r?"pswp--touch":"pswp--notouch";n+=g.animationName?" pswp--css_animation":"";n+=g.svg?" pswp--svg":"";h.addClass(d,n);p.updateSize();a=-1;c=null;for(e=0;e<H;e++){Me((e+a)*u.x,l[e].el.style)}if(!ve){h.bind(p.scrollWrap,q,p)}f("initialZoomInEnd",function(){p.setContent(l[0],v-1);p.setContent(l[2],v+1);l[0].el.style.display=l[2].el.style.display="block";if(m.focus){d.focus()}Re()});p.setContent(l[1],v);p.updateCurrItem();w("afterInit");if(!ue){Q=setInterval(function(){if(!Ye&&!E&&!k&&x===p.currItem.initialZoomLevel){p.updateSize()}},1e3)}h.addClass(d,"pswp--visible")},close:function(){if(!Y){return}Y=false;W=true;w("close");Ze();it(p.currItem,null,true,p.destroy)},destroy:function(){w("destroy");if(et){clearTimeout(et)}d.setAttribute("aria-hidden","true");d.className=me;if(Q){clearInterval(Q)}h.unbind(p.scrollWrap,q,p);h.unbind(window,"scroll",p);Ei();Ge();Ce=null},panTo:function(e,i,t){if(!t){if(e>R.min.x){e=R.min.x}else if(e<R.max.x){e=R.max.x}if(i>R.min.y){i=R.min.y}else if(i<R.max.y){i=R.max.y}}y.x=e;y.y=i;C()},handleEvent:function(e){e=e||window.event;if(o[e.type]){o[e.type](e)}},goTo:function(e){e=Ie(e);var i=e-v;c=i;v=e;p.currItem=lt(v);ie-=i;Se(u.x*ie);Ge();P=false;p.updateCurrItem()},next:function(){p.goTo(v+1)},prev:function(){p.goTo(v-1)},updateCurrZoomItem:function(e){if(e){w("beforeChange",0)}if(l[1].el.children.length){var i=l[1].el.children[0];if(h.hasClass(i,"pswp__zoom-wrap")){Z=i.style}else{Z=null}}else{Z=null}R=p.currItem.bounds;$=x=p.currItem.initialZoomLevel;y.x=R.center.x;y.y=R.center.y;if(e){w("afterChange")}},invalidateCurrItems:function(){ee=true;for(var e=0;e<H;e++){if(l[e].item){l[e].item.needsUpdate=true}}},updateCurrItem:function(e){if(c===0){return}var i=Math.abs(c),t;if(e&&i<2){return}p.currItem=lt(v);ge=false;w("beforeChange",c);if(i>=H){a+=c+(c>0?-H:H);i=H}for(var n=0;n<i;n++){if(c>0){t=l.shift();l[H-1]=t;a++;Me((a+2)*u.x,t.el.style);p.setContent(t,v-i+n+1+1)}else{t=l.pop();l.unshift(t);a--;Me(a*u.x,t.el.style);p.setContent(t,v+i-n-1-1)}}if(Z&&Math.abs(c)===1){var o=lt(ne);if(o.initialZoomLevel!==x){ct(o,s);ht(o);Te(o)}}c=0;p.updateCurrZoomItem();ne=v;w("afterChange")},updateSize:function(e){if(!ue&&m.modal){var i=h.getScrollY();if(ye!==i){d.style.top=i+"px";ye=i}if(!e&&xe.x===window.innerWidth&&xe.y===window.innerHeight){return}xe.x=window.innerWidth;xe.y=window.innerHeight;d.style.height=xe.y+"px"}s.x=p.scrollWrap.clientWidth;s.y=p.scrollWrap.clientHeight;He();u.x=s.x+Math.round(s.x*m.spacing);u.y=s.y;Se(u.x*ie);w("beforeResize");if(a!==undefined){var t,n,o;for(var r=0;r<H;r++){t=l[r];Me((r+a)*u.x,t.el.style);o=v+r-1;if(m.loop&&L()>2){o=Ie(o)}n=lt(o);if(n&&(ee||n.needsUpdate||!n.bounds)){p.cleanSlide(n);p.setContent(t,o);if(r===1){p.currItem=n;p.updateCurrZoomItem(true)}n.needsUpdate=false}else if(t.index===-1&&o>=0){p.setContent(t,o)}if(n&&n.container){ct(n,s);ht(n);Te(n)}}ee=false}$=x=p.currItem.initialZoomLevel;R=p.currItem.bounds;if(R){y.x=R.center.x;y.y=R.center.y;C(true)}w("resize")},zoomTo:function(i,e,t,n,o){if(e){$=x;gi.x=Math.abs(e.x)-y.x;gi.y=Math.abs(e.y)-y.y;D(V,y)}var r=Pe(i,false),a={};ze("x",r,a,i);ze("y",r,a,i);var l=x;var s={x:y.x,y:y.y};Ee(a);var f=function(e){if(e===1){x=i;y.x=a.x;y.y=a.y}else{x=(i-l)*e+l;y.x=(a.x-s.x)*e+s.x;y.y=(a.y-s.y)*e+s.y}if(o){o(e)}C(e===1)};if(t){Xe("customZoomTo",0,1,t,n||h.easing.sine.inOut,f)}else{f(1)}}};var Ke=30,qe=10;var $e,je,M={},Je={},S={},A={},Qe={},ei=[],ii={},ti,ni=[],oi={},ri,ai,li,si=0,fi=n(),ui=0,E,ci,di,pi,mi,hi,O,k,vi,yi,R,xi=n(),Z,P,gi=n(),wi=n(),bi,Ii,Ci,Di,Ti,Mi=function(e,i){return e.x===i.x&&e.y===i.y},Si=function(e,i){return Math.abs(e.x-i.x)<t&&Math.abs(e.y-i.y)<t},Ai=function(e,i){oi.x=Math.abs(e.x-i.x);oi.y=Math.abs(e.y-i.y);return Math.sqrt(oi.x*oi.x+oi.y*oi.y)},Ei=function(){if(mi){pe(mi);mi=null}},Oi=function(){if(E){mi=de(Oi);Vi()}},ki=function(){return!(m.scaleMode==="fit"&&x===p.currItem.initialZoomLevel)},Ri=function(e,i){if(!e||e===document){return false}if(e.getAttribute("class")&&e.getAttribute("class").indexOf("pswp__scroll-wrap")>-1){return false}if(i(e)){return e}return Ri(e.parentNode,i)},Zi={},Pi=function(e,i){Zi.prevent=!Ri(e.target,m.isClickableElement);w("preventDragEvent",e,i,Zi);return Zi.prevent},Fi=function(e,i){i.x=e.pageX;i.y=e.pageY;i.id=e.identifier;return i},Li=function(e,i,t){t.x=(e.x+i.x)*.5;t.y=(e.y+i.y)*.5},zi=function(e,i,t){if(e-je>50){var n=ni.length>2?ni.shift():{};n.x=i;n.y=t;ni.push(n);je=e}},_i=function(){var e=y.y-p.currItem.initialPosition.y;return 1-Math.abs(e/(s.y/2))},Ni={},Ui={},Hi=[],Yi,Wi=function(e){while(Hi.length>0){Hi.pop()}if(!fe){if(e.type.indexOf("touch")>-1){if(e.touches&&e.touches.length>0){Hi[0]=Fi(e.touches[0],Ni);if(e.touches.length>1){Hi[1]=Fi(e.touches[1],Ui)}}}else{Ni.x=e.pageX;Ni.y=e.pageY;Ni.id="";Hi[0]=Ni}}else{Yi=0;ei.forEach(function(e){if(Yi===0){Hi[0]=e}else if(Yi===1){Hi[1]=e}Yi++})}return Hi},Bi=function(e,i){var t,n=0,o=y[e]+i[e],r,a=i[e]>0,l=xi.x+i.x,s=xi.x-ii.x,f,u;if(o>R.min[e]||o<R.max[e]){t=m.panEndFriction}else{t=1}o=y[e]+i[e]*t;if(m.allowPanToNext||x===p.currItem.initialZoomLevel){if(!Z){u=l}else if(bi==="h"&&e==="x"&&!di){if(a){if(o>R.min[e]){t=m.panEndFriction;n=R.min[e]-o;r=R.min[e]-V[e]}if((r<=0||s<0)&&L()>1){u=l;if(s<0&&l>ii.x){u=ii.x}}else{if(R.min.x!==R.max.x){f=o}}}else{if(o<R.max[e]){t=m.panEndFriction;n=o-R.max[e];r=V[e]-R.max[e]}if((r<=0||s>0)&&L()>1){u=l;if(s>0&&l<ii.x){u=ii.x}}else{if(R.min.x!==R.max.x){f=o}}}}if(e==="x"){if(u!==undefined){Se(u,true);if(u===ii.x){hi=false}else{hi=true}}if(R.min.x!==R.max.x){if(f!==undefined){y.x=f}else if(!hi){y.x+=i.x*t}}return u!==undefined}}if(!P){if(!hi){if(x>p.currItem.fitRatio){y[e]+=i[e]*t}}}},Gi=function(e){if(e.type==="mousedown"&&e.button>0){return}if(rt){e.preventDefault();return}if(li&&e.type==="mousedown"){return}if(Pi(e,true)){e.preventDefault()}w("pointerDown");if(fe){var i=h.arraySearch(ei,e.pointerId,"id");if(i<0){i=ei.length}ei[i]={x:e.pageX,y:e.pageY,id:e.pointerId}}var t=Wi(e),n=t.length;O=null;Ge();if(!E||n===1){E=Ii=true;h.bind(window,K,p);ri=Ti=Ci=ai=hi=pi=ci=di=false;bi=null;w("firstTouchStart",t);D(V,y);X.x=X.y=0;D(A,t[0]);D(Qe,A);ii.x=u.x*ie;ni=[{x:A.x,y:A.y}];je=$e=b();Pe(x,true);Ei();Oi()}if(!k&&n>1&&!P&&!hi){$=x;di=false;k=ci=true;X.y=X.x=0;D(V,y);D(M,t[0]);D(Je,t[1]);Li(M,Je,wi);gi.x=Math.abs(wi.x)-y.x;gi.y=Math.abs(wi.y)-y.y;vi=yi=Ai(M,Je)}},Xi=function(e){e.preventDefault();if(fe){var i=h.arraySearch(ei,e.pointerId,"id");if(i>-1){var t=ei[i];t.x=e.pageX;t.y=e.pageY}}if(E){var n=Wi(e);if(!bi&&!pi&&!k){if(xi.x!==u.x*ie){bi="h"}else{var o=Math.abs(n[0].x-A.x)-Math.abs(n[0].y-A.y);if(Math.abs(o)>=qe){bi=o>0?"h":"v";O=n}}}else{O=n}}},Vi=function(){if(!O){return}var e=O.length;if(e===0){return}D(M,O[0]);S.x=M.x-A.x;S.y=M.y-A.y;if(k&&e>1){A.x=M.x;A.y=M.y;if(!S.x&&!S.y&&Mi(O[1],Je)){return}D(Je,O[1]);if(!di){di=true;w("zoomGestureStarted")}var i=Ai(M,Je);var t=Ji(i);if(t>p.currItem.initialZoomLevel+p.currItem.initialZoomLevel/15){Ti=true}var n=1,o=Fe(),r=Le();if(t<o){if(m.pinchToClose&&!Ti&&$<=p.currItem.initialZoomLevel){var a=o-t;var l=1-a/(o/1.2);I(l);w("onPinchClose",l);Ci=true}else{n=(o-t)/o;if(n>1){n=1}t=o-n*(o/3)}}else if(t>r){n=(t-r)/(o*6);if(n>1){n=1}t=r+n*o}if(n<0){n=0}vi=i;Li(M,Je,fi);X.x+=fi.x-wi.x;X.y+=fi.y-wi.y;D(wi,fi);y.x=Ae("x",t);y.y=Ae("y",t);ri=t>x;x=t;C()}else{if(!bi){return}if(Ii){Ii=false;if(Math.abs(S.x)>=qe){S.x-=O[0].x-Qe.x}if(Math.abs(S.y)>=qe){S.y-=O[0].y-Qe.y}}A.x=M.x;A.y=M.y;if(S.x===0&&S.y===0){return}if(bi==="v"&&m.closeOnVerticalDrag){if(!ki()){X.y+=S.y;y.y+=S.y;var s=_i();ai=true;w("onVerticalDrag",s);I(s);C();return}}zi(b(),M.x,M.y);pi=true;R=p.currItem.bounds;var f=Bi("x",S);if(!f){Bi("y",S);Ee(y);C()}}},Ki=function(e){if(g.isOldAndroid){if(li&&e.type==="mouseup"){return}if(e.type.indexOf("touch")>-1){clearTimeout(li);li=setTimeout(function(){li=0},600)}}w("pointerUp");if(Pi(e,false)){e.preventDefault()}var i;if(fe){var t=h.arraySearch(ei,e.pointerId,"id");if(t>-1){i=ei.splice(t,1)[0];if(navigator.pointerEnabled){i.type=e.pointerType||"mouse"}else{var n={4:"mouse",2:"touch",3:"pen"};i.type=n[e.pointerType];if(!i.type){i.type=e.pointerType||"mouse"}}}}var o=Wi(e),r,a=o.length;if(e.type==="mouseup"){a=0}if(a===2){O=null;return true}if(a===1){D(Qe,o[0])}if(a===0&&!bi&&!P){if(!i){if(e.type==="mouseup"){i={x:e.pageX,y:e.pageY,type:"mouse"}}else if(e.changedTouches&&e.changedTouches[0]){i={x:e.changedTouches[0].pageX,y:e.changedTouches[0].pageY,type:"touch"}}}w("touchRelease",e,i)}var l=-1;if(a===0){E=false;h.unbind(window,K,p);Ei();if(k){l=0}else if(ui!==-1){l=b()-ui}}ui=a===1?b():-1;if(l!==-1&&l<150){r="zoom"}else{r="swipe"}if(k&&a<2){k=false;if(a===1){r="zoomPointerUp"}w("zoomGestureEnded")}O=null;if(!pi&&!di&&!P&&!ai){return}Ge();if(!ti){ti=qi()}ti.calculateSwipeSpeed("x");if(ai){var s=_i();if(s<m.verticalDragRange){p.close()}else{var f=y.y,u=Di;Xe("verticalDrag",0,1,300,h.easing.cubic.out,function(e){y.y=(p.currItem.initialPosition.y-f)*e+f;I((1-u)*e+u);C()});w("onVerticalDrag",1)}return}if((hi||P)&&a===0){var c=ji(r,ti);if(c){return}r="zoomPointerUp"}if(P){return}if(r!=="swipe"){Qi();return}if(!hi&&x>p.currItem.fitRatio){$i(ti)}},qi=function(){var i,t;var n={lastFlickOffset:{},lastFlickDist:{},lastFlickSpeed:{},slowDownRatio:{},slowDownRatioReverse:{},speedDecelerationRatio:{},speedDecelerationRatioAbs:{},distanceOffset:{},backAnimDestination:{},backAnimStarted:{},calculateSwipeSpeed:function(e){if(ni.length>1){i=b()-je+50;t=ni[ni.length-2][e]}else{i=b()-$e;t=Qe[e]}n.lastFlickOffset[e]=A[e]-t;n.lastFlickDist[e]=Math.abs(n.lastFlickOffset[e]);if(n.lastFlickDist[e]>20){n.lastFlickSpeed[e]=n.lastFlickOffset[e]/i}else{n.lastFlickSpeed[e]=0}if(Math.abs(n.lastFlickSpeed[e])<.1){n.lastFlickSpeed[e]=0}n.slowDownRatio[e]=.95;n.slowDownRatioReverse[e]=1-n.slowDownRatio[e];n.speedDecelerationRatio[e]=1},calculateOverBoundsAnimOffset:function(i,e){if(!n.backAnimStarted[i]){if(y[i]>R.min[i]){n.backAnimDestination[i]=R.min[i]}else if(y[i]<R.max[i]){n.backAnimDestination[i]=R.max[i]}if(n.backAnimDestination[i]!==undefined){n.slowDownRatio[i]=.7;n.slowDownRatioReverse[i]=1-n.slowDownRatio[i];if(n.speedDecelerationRatioAbs[i]<.05){n.lastFlickSpeed[i]=0;n.backAnimStarted[i]=true;Xe("bounceZoomPan"+i,y[i],n.backAnimDestination[i],e||300,h.easing.sine.out,function(e){y[i]=e;C()})}}}},calculateAnimOffset:function(e){if(!n.backAnimStarted[e]){n.speedDecelerationRatio[e]=n.speedDecelerationRatio[e]*(n.slowDownRatio[e]+n.slowDownRatioReverse[e]-n.slowDownRatioReverse[e]*n.timeDiff/10);n.speedDecelerationRatioAbs[e]=Math.abs(n.lastFlickSpeed[e]*n.speedDecelerationRatio[e]);n.distanceOffset[e]=n.lastFlickSpeed[e]*n.speedDecelerationRatio[e]*n.timeDiff;y[e]+=n.distanceOffset[e]}},panAnimLoop:function(){if(T.zoomPan){T.zoomPan.raf=de(n.panAnimLoop);n.now=b();n.timeDiff=n.now-n.lastNow;n.lastNow=n.now;n.calculateAnimOffset("x");n.calculateAnimOffset("y");C();n.calculateOverBoundsAnimOffset("x");n.calculateOverBoundsAnimOffset("y");if(n.speedDecelerationRatioAbs.x<.05&&n.speedDecelerationRatioAbs.y<.05){y.x=Math.round(y.x);y.y=Math.round(y.y);C();We("zoomPan");return}}}};return n},$i=function(e){e.calculateSwipeSpeed("y");R=p.currItem.bounds;e.backAnimDestination={};e.backAnimStarted={};if(Math.abs(e.lastFlickSpeed.x)<=.05&&Math.abs(e.lastFlickSpeed.y)<=.05){e.speedDecelerationRatioAbs.x=e.speedDecelerationRatioAbs.y=0;e.calculateOverBoundsAnimOffset("x");e.calculateOverBoundsAnimOffset("y");return true}Be("zoomPan");e.lastNow=b();e.panAnimLoop()},ji=function(e,i){var t;if(!P){si=v}var n;if(e==="swipe"){var o=A.x-Qe.x,r=i.lastFlickDist.x<10;if(o>Ke&&(r||i.lastFlickOffset.x>20)){n=-1}else if(o<-Ke&&(r||i.lastFlickOffset.x<-20)){n=1}}var a;if(n){v+=n;if(v<0){v=m.loop?L()-1:0;a=true}else if(v>=L()){v=m.loop?0:L()-1;a=true}if(!a||m.loop){c+=n;ie-=n;t=true}}var l=u.x*ie;var s=Math.abs(l-xi.x);var f;if(!t&&l>xi.x!==i.lastFlickSpeed.x>0){f=333}else{f=Math.abs(i.lastFlickSpeed.x)>0?s/Math.abs(i.lastFlickSpeed.x):333;f=Math.min(f,400);f=Math.max(f,250)}if(si===v){t=false}P=true;w("mainScrollAnimStart");Xe("mainScroll",xi.x,l,f,h.easing.cubic.out,Se,function(){Ge();P=false;si=-1;if(t||si!==v){p.updateCurrItem()}w("mainScrollAnimComplete")});if(t){p.updateCurrItem(true)}return t},Ji=function(e){return 1/yi*e*$},Qi=function(){var e=x,i=Fe(),t=Le();if(x<i){e=i}else if(x>t){e=t}var n=1,o,r=Di;if(Ci&&!ri&&!Ti&&x<i){p.close();return true}if(Ci){o=function(e){I((n-r)*e+r)}}p.zoomTo(e,0,200,h.easing.cubic.out,o);return true};be("Gestures",{publicMethods:{initGestures:function(){var e=function(e,i,t,n,o){oe=e+i;re=e+t;ae=e+n;if(o){le=e+o}else{le=""}};fe=g.pointerEvent;if(fe&&g.touch){g.touch=false}if(fe){if(navigator.pointerEnabled){e("pointer","down","move","up","cancel")}else{e("MSPointer","Down","Move","Up","Cancel")}}else if(g.touch){e("touch","start","move","end","cancel");r=true}else{e("mouse","down","move","up")}K=re+" "+ae+" "+le;q=oe;if(fe&&!r){r=navigator.maxTouchPoints>1||navigator.msMaxTouchPoints>1}p.likelyTouchDevice=r;o[oe]=Gi;o[re]=Xi;o[ae]=Ki;if(le){o[le]=o[ae]}if(g.touch){q+=" mousedown";K+=" mousemove mouseup";o.mousedown=o[oe];o.mousemove=o[re];o.mouseup=o[ae]}if(!r){m.allowPanToNext=false}}}});var et,it=function(l,e,s,i){if(et){clearTimeout(et)}rt=true;ot=true;var f;if(l.initialLayout){f=l.initialLayout;l.initialLayout=null}else{f=m.getThumbBoundsFn&&m.getThumbBoundsFn(v)}var u=s?m.hideAnimationDuration:m.showAnimationDuration;var c=function(){We("initialZoom");if(!s){I(1);if(e){e.style.display="block"}h.addClass(d,"pswp--animated-in");w("initialZoom"+(s?"OutEnd":"InEnd"))}else{p.template.removeAttribute("style");p.bg.removeAttribute("style")}if(i){i()}rt=false};if(!u||!f||f.x===undefined){w("initialZoom"+(s?"Out":"In"));x=l.initialZoomLevel;D(y,l.initialPosition);C();d.style.opacity=s?0:1;I(1);if(u){setTimeout(function(){c()},u)}else{c()}return}var t=function(){var r=B,a=!p.currItem.src||p.currItem.loadError||m.showHideOpacity;if(l.miniImg){l.miniImg.style.webkitBackfaceVisibility="hidden"}if(!s){x=f.w/l.w;y.x=f.x;y.y=f.y-he;p[a?"template":"bg"].style.opacity=.001;C()}Be("initialZoom");if(s&&!r){h.removeClass(d,"pswp--animated-in")}if(a){if(s){h[(r?"remove":"add")+"Class"](d,"pswp--animate_opacity")}else{setTimeout(function(){h.addClass(d,"pswp--animate_opacity")},30)}}et=setTimeout(function(){w("initialZoom"+(s?"Out":"In"));if(!s){x=l.initialZoomLevel;D(y,l.initialPosition);C();I(1);if(a){d.style.opacity=1}else{I(1)}et=setTimeout(c,u+20)}else{var i=f.w/l.w,t={x:y.x,y:y.y},n=x,o=Di,e=function(e){if(e===1){x=i;y.x=f.x;y.y=f.y-ye}else{x=(i-n)*e+n;y.x=(f.x-t.x)*e+t.x;y.y=(f.y-ye-t.y)*e+t.y}C();if(a){d.style.opacity=1-e}else{I(o-e*o)}};if(r){Xe("initialZoom",0,1,u,h.easing.cubic.out,e,c)}else{e(1);et=setTimeout(c,u+20)}}},s?25:90)};t()};var tt,F={},nt=[],ot,rt,at={index:0,errorMsg:'<div class="pswp__error-msg"><a href="%url%" target="_blank">The image</a> could not be loaded.</div>',forceProgressiveLoading:false,preload:[1,1],getNumItemsFn:function(){return tt.length}};var lt,L,st,ft=function(){return{center:{x:0,y:0},max:{x:0,y:0},min:{x:0,y:0}}},ut=function(e,i,t){var n=e.bounds;n.center.x=Math.round((F.x-i)/2);n.center.y=Math.round((F.y-t)/2)+e.vGap.top;n.max.x=i>F.x?Math.round(F.x-i):n.center.x;n.max.y=t>F.y?Math.round(F.y-t)+e.vGap.top:n.center.y;n.min.x=i>F.x?0:n.center.x;n.min.y=t>F.y?e.vGap.top:n.center.y},ct=function(e,i,t){if(e.src&&!e.loadError){var n=!t;if(n){if(!e.vGap){e.vGap={top:0,bottom:0}}w("parseVerticalMargin",e)}F.x=i.x;F.y=i.y-e.vGap.top-e.vGap.bottom;if(n){var o=F.x/e.w;var r=F.y/e.h;e.fitRatio=o<r?o:r;var a=m.scaleMode;if(a==="orig"){t=1}else if(a==="fit"){t=e.fitRatio}if(t>1){t=1}e.initialZoomLevel=t;if(!e.bounds){e.bounds=ft()}}if(!t){return}ut(e,e.w*t,e.h*t);if(n&&t===e.initialZoomLevel){e.initialPosition=e.bounds.center}return e.bounds}else{e.w=e.h=0;e.initialZoomLevel=e.fitRatio=1;e.bounds=ft();e.initialPosition=e.bounds.center;return e.bounds}},dt=function(e,i,t,n,o,r){if(i.loadError){return}if(n){i.imageAppended=true;ht(i,n,i===p.currItem&&ge);t.appendChild(n);if(r){setTimeout(function(){if(i&&i.loaded&&i.placeholder){i.placeholder.style.display="none";i.placeholder=null}},500)}}},pt=function(e){e.loading=true;e.loaded=false;var i=e.img=h.createEl("pswp__img","img");var t=function(){e.loading=false;e.loaded=true;if(e.loadComplete){e.loadComplete(e)}else{e.img=null}i.onload=i.onerror=null;i=null};i.onload=t;i.onerror=function(){e.loadError=true;t()};i.src=e.src;return i},mt=function(e,i){if(e.src&&e.loadError&&e.container){if(i){e.container.innerHTML=""}e.container.innerHTML=m.errorMsg.replace("%url%",e.src);return true}},ht=function(e,i,t){if(!e.src){return}if(!i){i=e.container.lastChild}var n=t?e.w:Math.round(e.w*e.fitRatio),o=t?e.h:Math.round(e.h*e.fitRatio);if(e.placeholder&&!e.loaded){e.placeholder.style.width=n+"px";e.placeholder.style.height=o+"px"}i.style.width=n+"px";i.style.height=o+"px"},vt=function(){if(nt.length){var e;for(var i=0;i<nt.length;i++){e=nt[i];if(e.holder.index===e.index){dt(e.index,e.item,e.baseDiv,e.img,false,e.clearPlaceholder)}}nt=[]}};be("Controller",{publicMethods:{lazyLoadItem:function(e){e=Ie(e);var i=lt(e);if(!i||(i.loaded||i.loading)&&!ee){return}w("gettingData",e,i);if(!i.src){return}pt(i)},initController:function(){h.extend(m,at,true);p.items=tt=e;lt=p.getItemAt;L=m.getNumItemsFn;st=m.loop;if(L()<3){m.loop=false}f("beforeChange",function(e){var i=m.preload,t=e===null?true:e>=0,n=Math.min(i[0],L()),o=Math.min(i[1],L()),r;for(r=1;r<=(t?o:n);r++){p.lazyLoadItem(v+r)}for(r=1;r<=(t?n:o);r++){p.lazyLoadItem(v-r)}});f("initialLayout",function(){p.currItem.initialLayout=m.getThumbBoundsFn&&m.getThumbBoundsFn(v)});f("mainScrollAnimComplete",vt);f("initialZoomInEnd",vt);f("destroy",function(){var e;for(var i=0;i<tt.length;i++){e=tt[i];if(e.container){e.container=null}if(e.placeholder){e.placeholder=null}if(e.img){e.img=null}if(e.preloader){e.preloader=null}if(e.loadError){e.loaded=e.loadError=false}}nt=null})},getItemAt:function(e){if(e>=0){return tt[e]!==undefined?tt[e]:false}return false},allowProgressiveImg:function(){return m.forceProgressiveLoading||!r||m.mouseUsed||screen.width>1200},setContent:function(i,t){if(m.loop){t=Ie(t)}var e=p.getItemAt(i.index);if(e){e.container=null}var n=p.getItemAt(t),o;if(!n){i.el.innerHTML="";return}w("gettingData",t,n);i.index=t;i.item=n;var r=n.container=h.createEl("pswp__zoom-wrap");if(!n.src&&n.html){if(n.html.tagName){r.appendChild(n.html)}else{r.innerHTML=n.html}}mt(n);ct(n,s);if(n.src&&!n.loadError&&!n.loaded){n.loadComplete=function(e){if(!Y){return}if(i&&i.index===t){if(mt(e,true)){e.loadComplete=e.img=null;ct(e,s);Te(e);if(i.index===v){p.updateCurrZoomItem()}return}if(!e.imageAppended){if(g.transform&&(P||rt)){nt.push({item:e,baseDiv:r,img:e.img,index:t,holder:i,clearPlaceholder:true})}else{dt(t,e,r,e.img,P||rt,true)}}else{if(!rt&&e.placeholder){e.placeholder.style.display="none";e.placeholder=null}}}e.loadComplete=null;e.img=null;w("imageLoadComplete",t,e)};if(h.features.transform){var a="pswp__img pswp__img--placeholder";a+=n.msrc?"":" pswp__img--placeholder--blank";var l=h.createEl(a,n.msrc?"img":"");if(n.msrc){l.src=n.msrc}ht(n,l);r.appendChild(l);n.placeholder=l}if(!n.loading){pt(n)}if(p.allowProgressiveImg()){if(!ot&&g.transform){nt.push({item:n,baseDiv:r,img:n.img,index:t,holder:i})}else{dt(t,n,r,n.img,true,true)}}}else if(n.src&&!n.loadError){o=h.createEl("pswp__img","img");o.style.opacity=1;o.src=n.src;ht(n,o);dt(t,n,r,o,true)}if(!ot&&t===v){Z=r.style;it(n,o||n.img)}else{Te(n)}i.el.innerHTML="";i.el.appendChild(r)},cleanSlide:function(e){if(e.img){e.img.onload=e.img.onerror=null}e.loaded=e.loading=e.img=e.imageAppended=false}}});var yt,xt={},gt=function(e,i,t){var n=document.createEvent("CustomEvent"),o={origEvent:e,target:e.target,releasePoint:i,pointerType:t||"touch"};n.initCustomEvent("pswpTap",true,true,o);e.target.dispatchEvent(n)};be("Tap",{publicMethods:{initTap:function(){f("firstTouchStart",p.onTapStart);f("touchRelease",p.onTapRelease);f("destroy",function(){xt={};yt=null})},onTapStart:function(e){if(e.length>1){clearTimeout(yt);yt=null}},onTapRelease:function(e,i){if(!i){return}if(!pi&&!ci&&!Ye){var t=i;if(yt){clearTimeout(yt);yt=null;if(Si(t,xt)){w("doubleTap",t);return}}if(i.type==="mouse"){gt(e,i,"mouse");return}var n=e.target.tagName.toUpperCase();if(n==="BUTTON"||h.hasClass(e.target,"pswp__single-tap")){gt(e,i);return}D(xt,t);yt=setTimeout(function(){gt(e,i);yt=null},300)}}}});var z;be("DesktopZoom",{publicMethods:{initDesktopZoom:function(){if(ve){return}if(r){f("mouseUsed",function(){p.setupDesktopZoom()})}else{p.setupDesktopZoom(true)}},setupDesktopZoom:function(e){z={};var i="wheel mousewheel DOMMouseScroll";f("bindEvents",function(){h.bind(d,i,p.handleMouseWheel)});f("unbindEvents",function(){if(z){h.unbind(d,i,p.handleMouseWheel)}});p.mouseZoomedIn=false;var t,n=function(){if(p.mouseZoomedIn){h.removeClass(d,"pswp--zoomed-in");p.mouseZoomedIn=false}if(x<1){h.addClass(d,"pswp--zoom-allowed")}else{h.removeClass(d,"pswp--zoom-allowed")}o()},o=function(){if(t){h.removeClass(d,"pswp--dragging");t=false}};f("resize",n);f("afterChange",n);f("pointerDown",function(){if(p.mouseZoomedIn){t=true;h.addClass(d,"pswp--dragging")}});f("pointerUp",o);if(!e){n()}},handleMouseWheel:function(e){if(x<=p.currItem.fitRatio){if(m.modal){if(!m.closeOnScroll||Ye||E){e.preventDefault()}else if(se&&Math.abs(e.deltaY)>2){B=true;p.close()}}return true}e.stopPropagation();z.x=0;if("deltaX"in e){if(e.deltaMode===1){z.x=e.deltaX*18;z.y=e.deltaY*18}else{z.x=e.deltaX;z.y=e.deltaY}}else if("wheelDelta"in e){if(e.wheelDeltaX){z.x=-.16*e.wheelDeltaX}if(e.wheelDeltaY){z.y=-.16*e.wheelDeltaY}else{z.y=-.16*e.wheelDelta}}else if("detail"in e){z.y=e.detail}else{return}Pe(x,true);var i=y.x-z.x,t=y.y-z.y;if(m.modal||i<=R.min.x&&i>=R.max.x&&t<=R.min.y&&t>=R.max.y){e.preventDefault()}p.panTo(i,t)},toggleDesktopZoom:function(e){e=e||{x:s.x/2+te.x,y:s.y/2+te.y};var i=m.getDoubleTapZoom(true,p.currItem);var t=x===i;p.mouseZoomedIn=!t;p.zoomTo(t?p.currItem.initialZoomLevel:i,e,333);h[(!t?"add":"remove")+"Class"](d,"pswp--zoomed-in")}}});var wt={history:true,galleryUID:1};var bt,It,Ct,Dt,Tt,Mt,_,St,At,Et,N,Ot,kt=function(){return N.hash.substring(1)},Rt=function(){if(bt){clearTimeout(bt)}if(Ct){clearTimeout(Ct)}},Zt=function(){var e=kt(),i={};if(e.length<5){return i}var t,n=e.split("&");for(t=0;t<n.length;t++){if(!n[t]){continue}var o=n[t].split("=");if(o.length<2){continue}i[o[0]]=o[1]}if(m.galleryPIDs){var r=i.pid;i.pid=0;for(t=0;t<tt.length;t++){if(tt[t].pid===r){i.pid=t;break}}}else{i.pid=parseInt(i.pid,10)-1}if(i.pid<0){i.pid=0}return i},Pt=function(){if(Ct){clearTimeout(Ct)}if(Ye||E){Ct=setTimeout(Pt,500);return}if(Dt){clearTimeout(It)}else{Dt=true}var e=v+1;var i=lt(v);if(i.hasOwnProperty("pid")){e=i.pid}var t=_+"&"+"gid="+m.galleryUID+"&"+"pid="+e;if(!St){if(N.hash.indexOf(t)===-1){Et=true}}var n=N.href.split("#")[0]+"#"+t;if(Ot){if("#"+t!==window.location.hash){history[St?"replaceState":"pushState"]("",document.title,n)}}else{if(St){N.replace(n)}else{N.hash=t}}St=true;It=setTimeout(function(){Dt=false},60)};be("History",{publicMethods:{initHistory:function(){h.extend(m,wt,true);if(!m.history){return}N=window.location;Et=false;At=false;St=false;_=kt();Ot="pushState"in history;if(_.indexOf("gid=")>-1){_=_.split("&gid=")[0];_=_.split("?gid=")[0]}f("afterChange",p.updateURL);f("unbindEvents",function(){h.unbind(window,"hashchange",p.onHashChange)});var e=function(){Mt=true;if(!At){if(Et){history.back()}else{if(_){N.hash=_}else{if(Ot){history.pushState("",document.title,N.pathname+N.search)}else{N.hash=""}}}}Rt()};f("unbindEvents",function(){if(B){e()}});f("destroy",function(){if(!Mt){e()}});f("firstUpdate",function(){v=Zt().pid});var i=_.indexOf("pid=");if(i>-1){_=_.substring(0,i);if(_.slice(-1)==="&"){_=_.slice(0,-1)}}setTimeout(function(){if(Y){h.bind(window,"hashchange",p.onHashChange)}},40)},onHashChange:function(){if(kt()===_){At=true;p.close();return}if(!Dt){Tt=true;p.goTo(Zt().pid);Tt=false}},updateURL:function(){Rt();if(Tt){return}if(!St){Pt()}else{bt=setTimeout(Pt,800)}}}});h.extend(p,Ve)};return e});
//rebuild by neat 