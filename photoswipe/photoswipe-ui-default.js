// build time:Mon Aug 15 2022 22:00:14 GMT+0800 (香港标准时间)
(function(e,t){if(typeof define==="function"&&define.amd){define(t)}else if(typeof exports==="object"){module.exports=t()}else{e.PhotoSwipeUI_Default=t()}})(this,function(){"use strict";var e=function(o,s){var n=this;var e=false,i=true,t,a,r,l,u,c,f,p=true,d,m,h,w,v,g,b,_,C={barsSize:{top:44,bottom:"auto"},closeElClasses:["item","caption","zoom-wrap","ui","top-bar"],timeToIdle:4e3,timeToIdleOutside:1e3,loadingIndicatorDelay:1e3,addCaptionHTMLFn:function(e,t){if(!e.title){t.children[0].innerHTML="";return false}t.children[0].innerHTML=e.title;return true},closeEl:true,captionEl:true,fullscreenEl:true,zoomEl:true,shareEl:true,counterEl:true,arrowEl:true,preloaderEl:true,tapToClose:false,tapToToggleControls:true,clickToCloseNonZoomable:true,shareButtons:[{id:"facebook",label:"Share on Facebook",url:"https://www.facebook.com/sharer/sharer.php?u={{url}}"},{id:"twitter",label:"Tweet",url:"https://twitter.com/intent/tweet?text={{text}}&url={{url}}"},{id:"pinterest",label:"Pin it",url:"http://www.pinterest.com/pin/create/button/"+"?url={{url}}&media={{image_url}}&description={{text}}"},{id:"download",label:"Download image",url:"{{raw_image_url}}",download:true}],getImageURLForShare:function(){return o.currItem.src||""},getPageURLForShare:function(){return window.location.href},getTextForShare:function(){return o.currItem.title||""},indexIndicatorSep:" / ",fitControlsWidth:1200},T,D;var I=function(e){if(T){return true}e=e||window.event;if(_.timeToIdle&&_.mouseUsed&&!m){R()}var t=e.target||e.srcElement,n,o=t.getAttribute("class")||"",i;for(var r=0;r<M.length;r++){n=M[r];if(n.onTap&&o.indexOf("pswp__"+n.name)>-1){n.onTap();i=true}}if(i){if(e.stopPropagation){e.stopPropagation()}T=true;var l=s.features.isOldAndroid?600:30;D=setTimeout(function(){T=false},l)}},A=function(){return!o.likelyTouchDevice||_.mouseUsed||screen.width>_.fitControlsWidth},E=function(e,t,n){s[(n?"add":"remove")+"Class"](e,"pswp__"+t)},F=function(){var e=_.getNumItemsFn()===1;if(e!==b){E(a,"ui--one-slide",e);b=e}},x=function(){E(f,"share-modal--hidden",p)},S=function(){p=!p;if(!p){x();setTimeout(function(){if(!p){s.addClass(f,"pswp__share-modal--fade-in")}},30)}else{s.removeClass(f,"pswp__share-modal--fade-in");setTimeout(function(){if(p){x()}},300)}if(!p){U()}return false},P=function(e){e=e||window.event;var t=e.target||e.srcElement;o.shout("shareLinkClick",e,t);if(!t.href){return false}if(t.hasAttribute("download")){return true}window.open(t.href,"pswp_share","scrollbars=yes,resizable=yes,toolbar=no,"+"location=yes,width=550,height=420,top=100,left="+(window.screen?Math.round(screen.width/2-275):100));if(!p){S()}return false},U=function(){var e="",t,n,o,i,r;for(var l=0;l<_.shareButtons.length;l++){t=_.shareButtons[l];o=_.getImageURLForShare(t);i=_.getPageURLForShare(t);r=_.getTextForShare(t);n=t.url.replace("{{url}}",encodeURIComponent(i)).replace("{{image_url}}",encodeURIComponent(o)).replace("{{raw_image_url}}",o).replace("{{text}}",encodeURIComponent(r));e+='<a href="'+n+'" target="_blank" '+'class="pswp__share--'+t.id+'"'+(t.download?"download":"")+">"+t.label+"</a>";if(_.parseShareButtonOut){e=_.parseShareButtonOut(t,e)}}f.children[0].innerHTML=e;f.children[0].onclick=P},k=function(e){for(var t=0;t<_.closeElClasses.length;t++){if(s.hasClass(e,"pswp__"+_.closeElClasses[t])){return true}}},K,L,O=0,R=function(){clearTimeout(L);O=0;if(m){n.setIdle(false)}},y=function(e){e=e?e:window.event;var t=e.relatedTarget||e.toElement;if(!t||t.nodeName==="HTML"){clearTimeout(L);L=setTimeout(function(){n.setIdle(true)},_.timeToIdleOutside)}},Z=function(){if(_.fullscreenEl&&!s.features.isOldAndroid){if(!t){t=n.getFullscreenAPI()}if(t){s.bind(document,t.eventK,n.updateFullscreen);n.updateFullscreen();s.addClass(o.template,"pswp--supports-fs")}else{s.removeClass(o.template,"pswp--supports-fs")}}},q=function(){if(_.preloaderEl){z(true);h("beforeChange",function(){clearTimeout(g);g=setTimeout(function(){if(o.currItem&&o.currItem.loading){if(!o.allowProgressiveImg()||o.currItem.img&&!o.currItem.img.naturalWidth){z(false)}}else{z(true)}},_.loadingIndicatorDelay)});h("imageLoadComplete",function(e,t){if(o.currItem===t){z(true)}})}},z=function(e){if(v!==e){E(w,"preloader--active",!e);v=e}},B=function(e){var t=e.vGap;if(A()){var n=_.barsSize;if(_.captionEl&&n.bottom==="auto"){if(!l){l=s.createEl("pswp__caption pswp__caption--fake");l.appendChild(s.createEl("pswp__caption__center"));a.insertBefore(l,r);s.addClass(a,"pswp__ui--fit")}if(_.addCaptionHTMLFn(e,l,true)){var o=l.clientHeight;t.bottom=parseInt(o,10)||44}else{t.bottom=n.top}}else{t.bottom=n.bottom==="auto"?0:n.bottom}t.top=n.top}else{t.top=t.bottom=0}},H=function(){if(_.timeToIdle){h("mouseUsed",function(){s.bind(document,"mousemove",R);s.bind(document,"mouseout",y);K=setInterval(function(){O++;if(O===2){n.setIdle(true)}},_.timeToIdle/2)})}},N=function(){h("onVerticalDrag",function(e){if(i&&e<.95){n.hideControls()}else if(!i&&e>=.95){n.showControls()}});var t;h("onPinchClose",function(e){if(i&&e<.9){n.hideControls();t=true}else if(t&&!i&&e>.9){n.showControls()}});h("zoomGestureEnded",function(){t=false;if(t&&!i){n.showControls()}})};var M=[{name:"caption",option:"captionEl",onInit:function(e){r=e}},{name:"share-modal",option:"shareEl",onInit:function(e){f=e},onTap:function(){S()}},{name:"button--share",option:"shareEl",onInit:function(e){c=e},onTap:function(){S()}},{name:"button--zoom",option:"zoomEl",onTap:o.toggleDesktopZoom},{name:"counter",option:"counterEl",onInit:function(e){u=e}},{name:"button--close",option:"closeEl",onTap:o.close},{name:"button--arrow--left",option:"arrowEl",onTap:o.prev},{name:"button--arrow--right",option:"arrowEl",onTap:o.next},{name:"button--fs",option:"fullscreenEl",onTap:function(){if(t.isFullscreen()){t.exit()}else{t.enter()}}},{name:"preloader",option:"preloaderEl",onInit:function(e){w=e}}];var W=function(){var i,r,l;var e=function(e){if(!e){return}var t=e.length;for(var n=0;n<t;n++){i=e[n];r=i.className;for(var o=0;o<M.length;o++){l=M[o];if(r.indexOf("pswp__"+l.name)>-1){if(_[l.option]){s.removeClass(i,"pswp__element--disabled");if(l.onInit){l.onInit(i)}}else{s.addClass(i,"pswp__element--disabled")}}}}};e(a.children);var t=s.getChildByClass(a,"pswp__top-bar");if(t){e(t.children)}};n.init=function(){s.extend(o.options,C,true);_=o.options;a=s.getChildByClass(o.scrollWrap,"pswp__ui");h=o.listen;N();h("beforeChange",n.update);h("doubleTap",function(e){var t=o.currItem.initialZoomLevel;if(o.getZoomLevel()!==t){o.zoomTo(t,e,333)}else{o.zoomTo(_.getDoubleTapZoom(false,o.currItem),e,333)}});h("preventDragEvent",function(e,t,n){var o=e.target||e.srcElement;if(o&&o.getAttribute("class")&&e.type.indexOf("mouse")>-1&&(o.getAttribute("class").indexOf("__caption")>0||/(SMALL|STRONG|EM)/i.test(o.tagName))){n.prevent=false}});h("bindEvents",function(){s.bind(a,"pswpTap click",I);s.bind(o.scrollWrap,"pswpTap",n.onGlobalTap);if(!o.likelyTouchDevice){s.bind(o.scrollWrap,"mouseover",n.onMouseOver)}});h("unbindEvents",function(){if(!p){S()}if(K){clearInterval(K)}s.unbind(document,"mouseout",y);s.unbind(document,"mousemove",R);s.unbind(a,"pswpTap click",I);s.unbind(o.scrollWrap,"pswpTap",n.onGlobalTap);s.unbind(o.scrollWrap,"mouseover",n.onMouseOver);if(t){s.unbind(document,t.eventK,n.updateFullscreen);if(t.isFullscreen()){_.hideAnimationDuration=0;t.exit()}t=null}});h("destroy",function(){if(_.captionEl){if(l){a.removeChild(l)}s.removeClass(r,"pswp__caption--empty")}if(f){f.children[0].onclick=null}s.removeClass(a,"pswp__ui--over-close");s.addClass(a,"pswp__ui--hidden");n.setIdle(false)});if(!_.showAnimationDuration){s.removeClass(a,"pswp__ui--hidden")}h("initialZoomIn",function(){if(_.showAnimationDuration){s.removeClass(a,"pswp__ui--hidden")}});h("initialZoomOut",function(){s.addClass(a,"pswp__ui--hidden")});h("parseVerticalMargin",B);W();if(_.shareEl&&c&&f){p=true}F();H();Z();q()};n.setIdle=function(e){m=e;E(a,"ui--idle",e)};n.update=function(){if(i&&o.currItem){n.updateIndexIndicator();if(_.captionEl){_.addCaptionHTMLFn(o.currItem,r);E(r,"caption--empty",!o.currItem.title)}e=true}else{e=false}if(!p){S()}F()};n.updateFullscreen=function(e){if(e){setTimeout(function(){o.setScrollOffset(0,s.getScrollY())},50)}s[(t.isFullscreen()?"add":"remove")+"Class"](o.template,"pswp--fs")};n.updateIndexIndicator=function(){if(_.counterEl){u.innerHTML=o.getCurrentIndex()+1+_.indexIndicatorSep+_.getNumItemsFn()}};n.onGlobalTap=function(e){e=e||window.event;var t=e.target||e.srcElement;if(T){return}if(e.detail&&e.detail.pointerType==="mouse"){if(k(t)){o.close();return}if(s.hasClass(t,"pswp__img")){if(o.getZoomLevel()===1&&o.getZoomLevel()<=o.currItem.fitRatio){if(_.clickToCloseNonZoomable){o.close()}}else{o.toggleDesktopZoom(e.detail.releasePoint)}}}else{if(_.tapToToggleControls){if(i){n.hideControls()}else{n.showControls()}}if(_.tapToClose&&(s.hasClass(t,"pswp__img")||k(t))){o.close();return}}};n.onMouseOver=function(e){e=e||window.event;var t=e.target||e.srcElement;E(a,"ui--over-close",k(t))};n.hideControls=function(){s.addClass(a,"pswp__ui--hidden");i=false};n.showControls=function(){i=true;if(!e){n.update()}s.removeClass(a,"pswp__ui--hidden")};n.supportsFullscreen=function(){var e=document;return!!(e.exitFullscreen||e.mozCancelFullScreen||e.webkitExitFullscreen||e.msExitFullscreen)};n.getFullscreenAPI=function(){var e=document.documentElement,t,n="fullscreenchange";if(e.requestFullscreen){t={enterK:"requestFullscreen",exitK:"exitFullscreen",elementK:"fullscreenElement",eventK:n}}else if(e.mozRequestFullScreen){t={enterK:"mozRequestFullScreen",exitK:"mozCancelFullScreen",elementK:"mozFullScreenElement",eventK:"moz"+n}}else if(e.webkitRequestFullscreen){t={enterK:"webkitRequestFullscreen",exitK:"webkitExitFullscreen",elementK:"webkitFullscreenElement",eventK:"webkit"+n}}else if(e.msRequestFullscreen){t={enterK:"msRequestFullscreen",exitK:"msExitFullscreen",elementK:"msFullscreenElement",eventK:"MSFullscreenChange"}}if(t){t.enter=function(){d=_.closeOnScroll;_.closeOnScroll=false;if(this.enterK==="webkitRequestFullscreen"){o.template[this.enterK](Element.ALLOW_KEYBOARD_INPUT)}else{return o.template[this.enterK]()}};t.exit=function(){_.closeOnScroll=d;return document[this.exitK]()};t.isFullscreen=function(){return document[this.elementK]}}return t}};return e});
//rebuild by neat 