// build time:Wed Apr 01 2020 22:44:11 GMT+0800 (China Standard Time)
NexT.utils=NexT.$u={wrapImageWithFancyBox:function(){$(".content img").not("[hidden]").not(".group-picture img, .post-gallery img").each(function(){var i=$(this);var e=i.attr("title");var t=i.parent("a");if(t.size()<1){var a=i.attr("data-original")?this.getAttribute("data-original"):this.getAttribute("src");t=i.wrap('<a href="'+a+'"></a>').parent("a")}t.addClass("fancybox fancybox.image");t.attr("rel","group");if(e){t.append('<p class="image-caption">'+e+"</p>");t.attr("title",e)}});$(".fancybox").fancybox({helpers:{overlay:{locked:false}}})},lazyLoadPostsImages:function(){$("#posts").find("img").lazyload({effect:"fadeIn",threshold:0})},registerTabsTag:function(){var i=".tabs ul.nav-tabs ";$(function(){$(window).bind("hashchange",function(){var e=location.hash;if(e!==""){$(i+'li:has(a[href="'+e+'"])').addClass("active").siblings().removeClass("active");$(e).addClass("active").siblings().removeClass("active")}}).trigger("hashchange")});$(i+".tab").on("click",function(i){i.preventDefault();if(!$(this).hasClass("active")){$(this).addClass("active").siblings().removeClass("active");var e=$(this).find("a").attr("href");$(e).addClass("active").siblings().removeClass("active");if(location.hash!==""){history.pushState("",document.title,window.location.pathname+window.location.search)}}})},registerESCKeyEvent:function(){$(document).on("keyup",function(i){var e=i.which===27&&$(".search-popup").is(":visible");if(e){$(".search-popup").hide();$(".search-popup-overlay").remove();$("body").css("overflow","")}})},registerBackToTop:function(){var i=50;var e=$(".back-to-top");$(window).on("scroll",function(){e.toggleClass("back-to-top-on",window.pageYOffset>i);var t=$(window).scrollTop();var a=NexT.utils.getContentVisibilityHeight();var n=t/a;var s=Math.round(n*100);var o=s>100?100:s;$("#scrollpercent>span").html(o)});e.on("click",function(){$("body").velocity("scroll")})},embeddedVideoTransformer:function(){var i=$("iframe");var e=["www.youtube.com","player.vimeo.com","player.youku.com","music.163.com","www.tudou.com"];var t=new RegExp(e.join("|"));i.each(function(){var i=this;var e=$(this);var s=a(e);var o;if(this.src.search(t)>0){var r=n(s.width,s.height);e.width("100%").height("100%").css({position:"absolute",top:"0",left:"0"});var c=document.createElement("div");c.className="fluid-vids";c.style.position="relative";c.style.marginBottom="20px";c.style.width="100%";c.style.paddingTop=r+"%";c.style.paddingTop===""&&(c.style.paddingTop="50%");var d=i.parentNode;d.insertBefore(c,i);c.appendChild(i);if(this.src.search("music.163.com")>0){o=a(e);var h=o.width>s.width||o.height<s.height;if(h){c.style.paddingTop=n(o.width,s.height)+"%"}}}});function a(i){return{width:i.width(),height:i.height()}}function n(i,e){return e/i*100}},addActiveClassToMenuItem:function(){var i=window.location.pathname;i=i==="/"?i:i.substring(0,i.length-1);$('.menu-item a[href^="'+i+'"]:first').parent().addClass("menu-item-active")},hasMobileUA:function(){var i=window.navigator;var e=i.userAgent;var t=/iPad|iPhone|Android|Opera Mini|BlackBerry|webOS|UCWEB|Blazer|PSP|IEMobile|Symbian/g;return t.test(e)},isTablet:function(){return window.screen.width<992&&window.screen.width>767&&this.hasMobileUA()},isMobile:function(){return window.screen.width<767&&this.hasMobileUA()},isDesktop:function(){return!this.isTablet()&&!this.isMobile()},escapeSelector:function(i){return i.replace(/[!"$%&'()*+,.\/:;<=>?@[\\\]^`{|}~]/g,"\\$&")},displaySidebar:function(){if(!this.isDesktop()||this.isPisces()||this.isGemini()){return}$(".sidebar-toggle").trigger("click")},isMist:function(){return CONFIG.scheme==="Mist"},isPisces:function(){return CONFIG.scheme==="Pisces"},isGemini:function(){return CONFIG.scheme==="Gemini"},getScrollbarWidth:function(){var i=$("<div />").addClass("scrollbar-measure").prependTo("body");var e=i[0];var t=e.offsetWidth-e.clientWidth;i.remove();return t},getContentVisibilityHeight:function(){var i=$("#content").height(),e=$(window).height(),t=i>e?i-e:$(document).height()-e;return t},getSidebarb2tHeight:function(){var i=CONFIG.sidebar.b2t?$(".back-to-top").height():0;return i},getSidebarSchemePadding:function(){var i=$(".sidebar-nav").css("display")=="block"?$(".sidebar-nav").outerHeight(true):0,e=$(".sidebar-inner"),t=e.innerWidth()-e.width(),a=this.isPisces()||this.isGemini()?t*2+i+CONFIG.sidebar.offset*2+this.getSidebarb2tHeight():t*2+i/2;return a}};$(document).ready(function(){i();function i(){var i;$(window).on("resize",function(){i&&clearTimeout(i);i=setTimeout(function(){var i=document.body.clientHeight-NexT.utils.getSidebarSchemePadding();e(i)},0)});var t=NexT.utils.getScrollbarWidth();if($(".sidebar-panel").height()>document.body.clientHeight-NexT.utils.getSidebarSchemePadding()){$(".site-overview").css("width","calc(100% + "+t+"px)")}$(".post-toc").css("width","calc(100% + "+t+"px)");e(document.body.clientHeight-NexT.utils.getSidebarSchemePadding())}function e(i){i=i||"auto";$(".site-overview, .post-toc").css("max-height",i)}});
//rebuild by neat 