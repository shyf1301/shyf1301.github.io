// build time:Mon Oct 03 2022 21:17:04 GMT+0800 (香港标准时间)
var Home=location.href,Pages=4,xhr,xhrUrl="";var Diaspora={L:function(i,t,r){if(i==xhrUrl){return false}xhrUrl=i;if(xhr){xhr.abort()}xhr=$.ajax({type:"GET",url:i,timeout:1e4,success:function(e){t(e);xhrUrl=""},error:function(e,t,a){if(t=="abort"){r&&r()}else{window.location.href=i}xhrUrl=""}})},P:function(){return!!("ontouchstart"in window)},PS:function(){if(!(window.history&&history.pushState)){return}history.replaceState({u:Home,t:document.title},document.title,Home);window.addEventListener("popstate",function(e){var t=e.state;if(!t)return;document.title=t.t;if(t.u==Home){$("#preview").css("position","fixed");setTimeout(function(){$("#preview").removeClass("show");$("#container").show();window.scrollTo(0,parseInt($("#container").data("scroll")));setTimeout(function(){$("#preview").html("");$(window).trigger("resize")},300)},0)}else{Diaspora.loading();Diaspora.L(t.u,function(e){document.title=t.t;$("#preview").html($(e).filter("#single"));Diaspora.preview();setTimeout(function(){Diaspora.player()},0)})}})},HS:function(e,a){var t=e.data("id")||0,i=e.attr("href"),r=e.attr("title")+" - "+$("#config-title").text();if(!$("#preview").length||!(window.history&&history.pushState))location.href=i;Diaspora.loading();var o={d:t,t:r,u:i};Diaspora.L(i,function(e){if(!$(e).filter("#single").length){location.href=i;return}switch(a){case"push":history.pushState(o,r,i);break;case"replace":history.replaceState(o,r,i);break}document.title=r;$("#preview").html($(e).filter("#single"));switch(a){case"push":Diaspora.preview();break;case"replace":window.scrollTo(0,0);Diaspora.loaded();break}setTimeout(function(){Diaspora.player();$("#top").show();comment=$("#gitalk-container");if(comment.data("ae")==true){comment.click()}},0);if(window.MathJax){var t=document.getElementById("single");MathJax.Hub.Queue(["Typeset",MathJax.Hub,t])}})},preview:function(){$("#preview").one("transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd",function(){var e=$("#preview").hasClass("show");if(!!e){$("#container").hide()}else{$("#container").show()}Diaspora.loaded()});setTimeout(function(){$("#preview").addClass("show");$("#container").data("scroll",window.scrollY);setTimeout(function(){$("#preview").css({position:"static","overflow-y":"auto"})},500)},0)},player:function(){var t=$("#audio");if(!t.length){$(".icon-play").css({color:"#dedede",cursor:"not-allowed"});return}var e=$("#audio source").eq(0).attr("src");if(e==""&&t[0].src==""){audiolist=$("#audio-list li");mp3=audiolist.eq([Math.floor(Math.random()*audiolist.size())]);t[0].src=mp3.data("url")}if(t.eq(0).data("autoplay")==true){t[0].play()}t.on({timeupdate:function(){var e=t[0].currentTime/t[0].duration*100;$(".bar").css("width",e+"%");if(e/5<=1){t[0].volume=e/5}else{t[0].volume=1}},ended:function(){$(".icon-pause").removeClass("icon-pause").addClass("icon-play")},playing:function(){$(".icon-play").removeClass("icon-play").addClass("icon-pause")}})},loading:function(){var e=window.innerWidth;var t='<style class="loaderstyle" id="loaderstyle'+e+'">'+"@-moz-keyframes loader"+e+"{100%{background-position:"+e+"px 0}}"+"@-webkit-keyframes loader"+e+"{100%{background-position:"+e+"px 0}}"+".loader"+e+"{-webkit-animation:loader"+e+" 3s linear infinite;-moz-animation:loader"+e+" 3s linear infinite;}"+"</style>";$(".loaderstyle").remove();$("head").append(t);$("#loader").removeClass().addClass("loader"+e).show()},loaded:function(){$("#loader").removeClass().hide()},F:function(e,t,a){var i=$(e).parent().height(),r=$(e).parent().width(),o=a/t;if(i/r>o){e.style.height=i+"px";e.style.width=i/o+"px"}else{e.style.width=r+"px";e.style.height=r*o+"px"}e.style.left=(r-parseInt(e.style.width))/2+"px";e.style.top=(i-parseInt(e.style.height))/2+"px"}};$(function(){if(Diaspora.P()){$("body").addClass("touch")}if($("#preview").length){var n={};n.t=$("#cover");n.w=n.t.attr("width");n.h=n.t.attr("height");(n.o=function(){$("#mark").height(window.innerHeight)})();if(n.t.prop("complete")){setTimeout(function(){n.t.load()},0)}n.t.on("load",function(){(n.f=function(){var e=$("#mark").width(),t=$("#mark").height(),a,i,r,o;o=e>=1e3||t>=1e3?1e3:500;if(e>=t){r=e/o*50;i=r;a=r*e/t}else{r=t/o*50;a=r;i=r*t/e}$(".layer").css({width:e+a,height:t+i,marginLeft:-.5*a,marginTop:-.5*i});if(!n.w){n.w=n.t.width();n.h=n.t.height()}Diaspora.F($("#cover")[0],n.w,n.h)})();setTimeout(function(){$("html, body").removeClass("loading")},1e3);var e=document.getElementById("mark");var t=new Parallax(e);$("#vibrant polygon").css("fill","#1b336c");$("#vibrant div").css("background-color","#1b336c");$(".icon-menu").css("color","#6487bc");$(".icon-search").css("color","#6487bc")});if(!n.t.attr("src")){alert("Please set the post thumbnail")}$("#preview").css("min-height",window.innerHeight);Diaspora.PS();$(".pview a").addClass("pviewa");var e;$(window).on("resize",function(){clearTimeout(e);e=setTimeout(function(){if(!Diaspora.P()&&location.href==Home){n.o();n.f()}if($("#loader").attr("class")){Diaspora.loading()}},500)})}else{$("#single").css("min-height",window.innerHeight);setTimeout(function(){$("html, body").removeClass("loading")},1e3);window.addEventListener("popstate",function(e){if(e.state)location.href=e.state.u});Diaspora.player();$(".icon-icon, .image-icon").attr("href","/");$("#top").show()}$(window).on("scroll",function(){if($(".scrollbar").length&&!Diaspora.P()&&!$(".icon-images").hasClass("active")){var e=$(window).scrollTop(),t=$("#top").width(),a=document.body.scrollHeight,i=$(window).height();var r=t/(a-i)*e;$(".scrollbar").width(r);if(e>80&&window.innerWidth>800){$(".subtitle").fadeIn()}else{$(".subtitle").fadeOut()}}});$(window).on("touchmove",function(e){if($("body").hasClass("mu")){e.preventDefault()}});var u=function(e,r,o){"use strict";$.ajax({url:e,dataType:"xml",success:function(e){var t=$("entry",e).map(function(){return{title:$("title",this).text(),content:$("content",this).text(),url:$("url",this).text()}}).get();var a=document.getElementById(r);var i=document.getElementById(o);a.addEventListener("input",function(){var h='<ul class="search-result-list">';var p=this.value.trim().toLowerCase().split(/[\s\-]+/);i.innerHTML="";if(this.value.trim().length<=0){return}t.forEach(function(e){var a=true;var t=[];var i=e.title.trim().toLowerCase();var r=e.content.trim().replace(/<[^>]+>/g,"").toLowerCase();var o=e.url;var n=-1;var s=-1;var l=-1;if(i!=""&&r!=""){p.forEach(function(e,t){n=i.indexOf(e);s=r.indexOf(e);if(n<0&&s<0){a=false}else{if(s<0){s=0}if(t==0){l=s}}})}if(a){h+="<li><a href='"+o+"' class='search-result-title' target='_blank'>"+i+"</a>";var c=e.content.trim().replace(/<[^>]+>/g,"");if(l>=0){var d=l-6;var u=l+6;if(d<0){d=0}if(d==0){u=10}if(u>c.length){u=c.length}var f=c.substr(d,u);p.forEach(function(e){var t=new RegExp(e,"gi");f=f.replace(t,'<em class="search-keyword">'+e+"</em>")});h+='<p class="search-result">'+f+"...</p>"}}});i.innerHTML=h})}})};var f=window.searchDbPath||"/search.xml";if(document.getElementById("local-search-input")!==null){u(f,"local-search-input","local-search-result")}var h=null;$("body").on("click",function(i){var r=$(i.target).attr("class")||"",e=$(i.target).attr("rel")||"";if(i.target.nodeName=="IMG"&&$(i.target).parents("div.content").length>0){r="pimg"}if(!r&&!e)return;switch(true){case r.indexOf("switchmenu")!=-1:window.scrollTo(0,0);$("html, body").toggleClass("mu");if(h!==null){h.destroy();h=null}else{if($("#hitokoto").data("st")==true){$.get("https://v1.hitokoto.cn/",function(e){var e=e;var t=e.hitokoto+" ——  By ";var a={strings:[t+e.from],typeSpeed:90,startDelay:500};h=new Typed(".hitokoto .typed",a)})}}return false;break;case r.indexOf("switchsearch")!=-1:$("body").removeClass("mu");if(h!==null){h.destroy();h=null}setTimeout(function(){Diaspora.HS($(i.target),"push");$(".toc").fadeIn(1e3);u(f,"local-search-input","local-search-result")},300);return false;break;case r.indexOf("more")!=-1:r=$(".more");if(r.data("status")=="loading"){return false}var t=parseInt(r.data("page"))||1;if(t==1){r.data("page",1)}if(t>=Pages){return}r.html("加载中...").data("status","loading");Diaspora.loading();Diaspora.L(r.attr("href"),function(e){var t=$(e).find(".more").attr("href");if(t!=undefined){r.attr("href",t).html("加载更多").data("status","loaded");r.data("page",parseInt(r.data("page"))+1)}else{$("#pager").remove()}var a=$(window).scrollTop();$("#primary").append($(e).find(".post"));$(window).scrollTop(a+100);Diaspora.loaded();$("html,body").animate({scrollTop:a+400},500)},function(){r.html("加载更多").data("status","loaded")});return false;break;case r.indexOf("icon-home")!=-1:$(".toc").fadeOut(100);if($("#preview").hasClass("show")){history.back()}else{location.href=$(".icon-home").data("url")}return false;break;case r.indexOf("icon-scan")!=-1:if($(".icon-scan").hasClass("tg")){$("#qr").toggle()}else{$(".icon-scan").addClass("tg");$("#qr").qrcode({width:128,height:128,text:location.href}).toggle()}return false;break;case r.indexOf("icon-play")!=-1:$("#audio")[0].play();$(".icon-play").removeClass("icon-play").addClass("icon-pause");return false;break;case r.indexOf("icon-pause")!=-1:$("#audio")[0].pause();$(".icon-pause").removeClass("icon-pause").addClass("icon-play");return false;break;case r.indexOf("cover")!=-1:Diaspora.HS($(i.target).parent(),"push");return false;break;case r.indexOf("posttitle")!=-1:Diaspora.HS($(i.target),"push");return false;break;case e=="prev"||e=="next":if(e=="prev"){var a=$("#prev_next a")[0].text}else{var a=$("#prev_next a")[1].text}$(i.target).attr("title",a);Diaspora.HS($(i.target),"replace");return false;break;case r.indexOf("toc-text")!=-1||r.indexOf("toc-link")!=-1||r.indexOf("toc-number")!=-1:hash="";if(i.target.nodeName=="SPAN"){hash=$(i.target).parent().attr("href")}else{hash=$(i.target).attr("href")}to=$(decodeURI(hash));$("html,body").animate({scrollTop:to.offset().top-50},300);return false;break;case r.indexOf("pviewa")!=-1:$("body").removeClass("mu");if(h!==null){h.destroy();h=null}setTimeout(function(){Diaspora.HS($(i.target),"push");$(".toc").fadeIn(1e3)},300);return false;break;case r.indexOf("pimg")!=-1:var o=$(".pswp").get(0);if(o){var n=[];var s=0;var l=[];$(".content img").each(function(e,t){if(i.target.src==t.src){s=e}var a={src:t.src,w:t.naturalWidth,h:t.naturalHeight};l.push(t);n.push(a)});var c={index:s,shareEl:false,zoomEl:false,allowRotationOnUserZoom:true,history:false,getThumbBoundsFn:function(e){var t=l[e],a=window.pageYOffset||document.documentElement.scrollTop,i=t.getBoundingClientRect();return{x:i.left,y:i.top+a,w:i.width}}};var d=new PhotoSwipe(o,PhotoSwipeUI_Default,n,c);d.init()}return false;break;case-1!=r.indexOf("comment"):if($("#gitalk-container").data("enable")==true){Diaspora.loading(),comment=$("#gitalk-container");gitalk=new Gitalk({clientID:comment.data("ci"),clientSecret:comment.data("cs"),repo:comment.data("r"),owner:comment.data("o"),admin:comment.data("a"),id:decodeURI(window.location.pathname),distractionFreeMode:comment.data("d")});$(".comment").removeClass("link");gitalk.render("gitalk-container");Diaspora.loaded()}else{$("#gitalk-container").html("你在期待什么？")}return false;break;default:return true;break}});comment=$("#gitalk-container");if(comment.data("ae")==true){comment.click()}});
//rebuild by neat 