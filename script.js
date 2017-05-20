!function(jQuery,e,t,a){var r=function(){if(t.documentMode)return t.documentMode;for(var e=7;e>0;e--){var r=t.createElement("div");if(r.innerHTML="<!--[if IE "+e+"]><span></span><![endif]-->",r.getElementsByTagName("span").length)return r=null,e;r=null}return a}(),n=e.console||{log:function(){},time:function(){}},i="blast",s={latinPunctuation:"–—′’'“″„\"(«.…¡¿′’'”″“\")».…!?",latinLetters:"\\u0041-\\u005A\\u0061-\\u007A\\u00C0-\\u017F\\u0100-\\u01FF\\u0180-\\u027F"},l={abbreviations:new RegExp("[^"+s.latinLetters+"](e\\.g\\.)|(i\\.e\\.)|(mr\\.)|(mrs\\.)|(ms\\.)|(dr\\.)|(prof\\.)|(esq\\.)|(sr\\.)|(jr\\.)[^"+s.latinLetters+"]","ig"),innerWordPeriod:new RegExp("["+s.latinLetters+"].["+s.latinLetters+"]","ig"),onlyContainsPunctuation:new RegExp("[^"+s.latinPunctuation+"]"),adjoinedPunctuation:new RegExp("^["+s.latinPunctuation+"]+|["+s.latinPunctuation+"]+jQuery","g"),skippedElements:/(script|style|select|textarea)/i,hasPluginClass:new RegExp("(^| )"+i+"( |jQuery)","gi")};jQuery.fn[i]=function(d){function o(e){return e.replace(l.abbreviations,function(e){return e.replace(/\./g,"{{46}}")}).replace(l.innerWordPeriod,function(e){return e.replace(/\./g,"{{46}}")})}function c(e){return e.replace(/{{(\d{1,3})}}/g,function(e,t){return String.fromCharCode(t)})}function u(e,a){var r=t.createElement(a.tag);if(r.className=i,a.customClass&&(r.className+=" "+a.customClass,a.generateIndexID&&(r.id=a.customClass+"-"+f.blastedIndex)),"all"===a.delimiter&&/\s/.test(e.data)&&(r.style.whiteSpace="pre-line"),a.generateValueClass===!0&&!a.search&&("character"===a.delimiter||"word"===a.delimiter)){var n,s=e.data;"word"===a.delimiter&&l.onlyContainsPunctuation.test(s)&&(s=s.replace(l.adjoinedPunctuation,"")),n=i+"-"+a.delimiter.toLowerCase()+"-"+s.toLowerCase(),r.className+=" "+n}return a.aria&&r.setAttribute("aria-hidden","true"),r.appendChild(e.cloneNode(!1)),r}function g(e,t){var a=-1,r=0;if(3===e.nodeType&&e.data.length){if(f.nodeBeginning&&(e.data=t.search||"sentence"!==t.delimiter?c(e.data):o(e.data),f.nodeBeginning=!1),a=e.data.search(h),-1!==a){var n=e.data.match(h),i=n[0],s=n[1]||!1;""===i?a++:s&&s!==i&&(a+=i.indexOf(s),i=s);var d=e.splitText(a);d.splitText(i.length),r=1,t.search||"sentence"!==t.delimiter||(d.data=c(d.data));var p=u(d,t,f.blastedIndex);d.parentNode.replaceChild(p,d),f.wrappers.push(p),f.blastedIndex++}}else if(1===e.nodeType&&e.hasChildNodes()&&!l.skippedElements.test(e.tagName)&&!l.hasPluginClass.test(e.className))for(var m=0;m<e.childNodes.length;m++)f.nodeBeginning=!0,m+=g(e.childNodes[m],t);return r}function p(t,s){s.debug&&n.time("blast reversal");var l=!1;t.removeClass(i+"-root").removeAttr("aria-label").find("."+i).each(function(){var e=jQuery(this);if(e.closest("."+i+"-root").length)l=!0;else{var t=this.parentNode;7>=r&&t.firstChild.nodeName,t.replaceChild(this.firstChild,this),t.normalize()}}),e.Zepto?t.data(i,a):t.removeData(i),s.debug&&(n.log(i+": Reversed Blast"+(t.attr("id")?" on #"+t.attr("id")+".":".")+(l?" Skipped reversal on the children of one or more descendant root elements.":"")),n.timeEnd("blast reversal"))}var m=jQuery.extend({},jQuery.fn[i].defaults,d),h,f={};if(m.search.length&&("string"==typeof m.search||/^\d/.test(parseFloat(m.search))))m.delimiter=m.search.toString().replace(/[-[\]{,}(.)*+?|^jQuery\\\/]/g,"\\jQuery&"),h=new RegExp("(?:^|[^-"+s.latinLetters+"])("+m.delimiter+"('s)?)(?![-"+s.latinLetters+"])","i");else switch("string"==typeof m.delimiter&&(m.delimiter=m.delimiter.toLowerCase()),m.delimiter){case"all":h=/(.)/;break;case"letter":case"char":case"character":h=/(\S)/;break;case"word":h=/\s*(\S+)\s*/;break;case"sentence":h=/(?=\S)(([.]{2,})?[^!?]+?([.…!?]+|(?=\s+jQuery)|jQuery)(\s*[′’'”″“")»]+)*)/;break;case"element":h=/(?=\S)([\S\s]*\S)/;break;default:if(!(m.delimiter instanceof RegExp))return n.log(i+": Unrecognized delimiter, empty search string, or invalid custom Regex. Aborting."),!0;h=m.delimiter}if(this.each(function(){var e=jQuery(this),r=e.text();if(d!==!1){f={blastedIndex:0,nodeBeginning:!1,wrappers:f.wrappers||[]},e.data(i)===a||"search"===e.data(i)&&m.search!==!1||(p(e,m),m.debug&&n.log(i+": Removed element's existing Blast call.")),e.data(i,m.search!==!1?"search":m.delimiter),m.aria&&e.attr("aria-label",r),m.stripHTMLTags&&e.html(r);try{t.createElement(m.tag)}catch(s){m.tag="span",m.debug&&n.log(i+": Invalid tag supplied. Defaulting to span.")}e.addClass(i+"-root"),m.debug&&n.time(i),g(this,m),m.debug&&n.timeEnd(i)}else d===!1&&e.data(i)!==a&&p(e,m);m.debug&&jQuery.each(f.wrappers,function(e,t){n.log(i+" ["+m.delimiter+"] "+this.outerHTML),this.style.backgroundColor=e%2?"#f12185":"#075d9a"})}),d!==!1&&m.returnGenerated===!0){var b=jQuery().add(f.wrappers);return b.prevObject=this,b.context=this.context,b}return this},jQuery.fn.blast.defaults={returnGenerated:!0,delimiter:"word",tag:"span",search:!1,customClass:"",generateIndexID:!1,generateValueClass:!1,stripHTMLTags:!1,aria:!0,debug:!1}}(window.jQuery||window.Zepto,window,document);
(function(b,h,k,z){b.fn.pagepiling=function(M){function N(a){var f=b(".pp-section.active").index(".pp-section");a=a.index(".pp-section");return f>a?"up":"down"}function l(a,f){var d={destination:a,animated:f,activeSection:b(".pp-section.active"),anchorLink:a.data("anchor"),sectionIndex:a.index(".pp-section"),toMove:a,yMovement:N(a),leavingSection:b(".pp-section.active").index(".pp-section")+1};d.activeSection.is(a)||("undefined"===typeof d.animated&&(d.animated=!0),"undefined"!==typeof d.anchorLink&&
O(d.anchorLink,d.sectionIndex),d.destination.addClass("active").siblings().removeClass("active"),d.sectionsToMove=P(d),"down"===d.yMovement?(d.translate3d="vertical"!==c.direction?"translate3d(-100%, 0px, 0px)":"translate3d(0px, -100%, 0px)",d.scrolling="-100%",c.css3||d.sectionsToMove.each(function(a){a!=d.activeSection.index(".pp-section")&&b(this).css(v(d.scrolling))}),d.animateSection=d.activeSection):(d.translate3d="translate3d(0px, 0px, 0px)",d.scrolling="0",d.animateSection=a),b.isFunction(c.onLeave)&&
c.onLeave.call(this,d.leavingSection,d.sectionIndex+1,d.yMovement),Q(d),R(d.anchorLink),S(d.anchorLink,d.sectionIndex),A=d.anchorLink,B=(new Date).getTime())}function Q(a){c.css3?(C(a.animateSection,a.translate3d,a.animated),a.sectionsToMove.each(function(){C(b(this),a.translate3d,a.animated)}),setTimeout(function(){w(a)},c.scrollingSpeed)):(a.scrollOptions=v(a.scrolling),a.animated?a.animateSection.animate(a.scrollOptions,c.scrollingSpeed,c.easing,function(){D(a);w(a)}):(a.animateSection.css(v(a.scrolling)),
setTimeout(function(){D(a);w(a)},400)))}function w(a){b.isFunction(c.afterLoad)&&c.afterLoad.call(this,a.anchorLink,a.sectionIndex+1)}function P(a){return"down"===a.yMovement?b(".pp-section").map(function(f){if(f<a.destination.index(".pp-section"))return b(this)}):b(".pp-section").map(function(f){if(f>a.destination.index(".pp-section"))return b(this)})}function D(a){"up"===a.yMovement&&a.sectionsToMove.each(function(f){b(this).css(v(a.scrolling))})}function v(a){return"vertical"===c.direction?{top:a}:
{left:a}}function O(a,b){c.anchors.length?(location.hash=a,E(location.hash)):E(String(b))}function E(a){a=a.replace("#","");b("body")[0].className=b("body")[0].className.replace(/\b\s?pp-viewing-[^\s]+\b/g,"");b("body").addClass("pp-viewing-"+a)}function x(){return(new Date).getTime()-B<600+c.scrollingSpeed?!0:!1}function C(a,b,d){a.toggleClass("pp-easing",d);a.css({"-webkit-transform":b,"-moz-transform":b,"-ms-transform":b,transform:b})}function m(a){var f=(new Date).getTime();a=a||k.event;var d=
a.wheelDelta||-a.deltaY||-a.detail,c=Math.max(-1,Math.min(1,d)),e="undefined"!==typeof a.wheelDeltaX||"undefined"!==typeof a.deltaX;a=Math.abs(a.wheelDeltaX)<Math.abs(a.wheelDelta)||Math.abs(a.deltaX)<Math.abs(a.deltaY)||!e;149<n.length&&n.shift();n.push(Math.abs(d));d=f-F;F=f;200<d&&(n=[]);if(!x())return f=b(".pp-section.active").filter(".pp-scrollable"),d=G(n,10),e=G(n,70),d>=e&&a&&(0>c?p("down",f):0<c&&p("up",f)),!1}function G(a,b){for(var d=0,c=a.slice(Math.max(a.length-b,1)),e=0;e<c.length;e++)d+=
c[e];return Math.ceil(d/b)}function p(a,b){var d,c;"down"==a?(d="bottom",c=e.moveSectionDown):(d="top",c=e.moveSectionUp);if(0<b.length)if(d="top"===d?!b.scrollTop():"bottom"===d?b.scrollTop()+1+b.innerHeight()>=b[0].scrollHeight:void 0,d)c();else return!0;else c()}function H(){return k.PointerEvent?{down:"pointerdown",move:"pointermove",up:"pointerup"}:{down:"MSPointerDown",move:"MSPointerMove",up:"MSPointerUp"}}function I(a){var b=[];b.y="undefined"!==typeof a.pageY&&(a.pageY||a.pageX)?a.pageY:
a.touches[0].pageY;b.x="undefined"!==typeof a.pageX&&(a.pageY||a.pageX)?a.pageX:a.touches[0].pageX;return b}function J(a){return"undefined"===typeof a.pointerType||"mouse"!=a.pointerType}function T(a){a=a.originalEvent;J(a)&&(a=I(a),q=a.y,r=a.x)}function U(a){var f=a.originalEvent;if(!K(a.target)&&J(f)){var d=b(".pp-section.active").filter(".pp-scrollable");d.length||a.preventDefault();x()||(a=I(f),t=a.y,u=a.x,"horizontal"===c.direction&&Math.abs(r-u)>Math.abs(q-t)?Math.abs(r-u)>g.width()/100*c.touchSensitivity&&
(r>u?p("down",d):u>r&&p("up",d)):Math.abs(q-t)>g.height()/100*c.touchSensitivity&&(q>t?p("down",d):t>q&&p("up",d)))}}function K(a,f){f=f||0;var d=b(a).parent();return f<c.normalScrollElementTouchThreshold&&d.is(c.normalScrollElements)?!0:f==c.normalScrollElementTouchThreshold?!1:K(d,++f)}function V(){b("body").append('<div id="pp-nav"><ul></ul></div>');var a=b("#pp-nav");a.css("color",c.navigation.textColor);a.addClass(c.navigation.position);for(var f=0;f<b(".pp-section").length;f++){var d="";c.anchors.length&&
(d=c.anchors[f]);if("undefined"!==c.navigation.tooltips){var e=c.navigation.tooltips[f];"undefined"===typeof e&&(e="")}a.find("ul").append('<li data-tooltip="'+e+'"><a href="#'+d+'"><span></span></a></li>')}a.find("span").css("border-color",c.navigation.bulletsColor)}function S(a,f){c.navigation&&(b("#pp-nav").find(".active").removeClass("active"),a?b("#pp-nav").find('a[href="#'+a+'"]').addClass("active"):b("#pp-nav").find("li").eq(f).find("a").addClass("active"))}function R(a){c.menu&&(b(c.menu).find(".active").removeClass("active"),
b(c.menu).find('[data-menuanchor="'+a+'"]').addClass("active"))}function W(){var a=h.createElement("p"),b,d={webkitTransform:"-webkit-transform",OTransform:"-o-transform",msTransform:"-ms-transform",MozTransform:"-moz-transform",transform:"transform"};h.body.insertBefore(a,null);for(var c in d)a.style[c]!==z&&(a.style[c]="translate3d(1px,1px,1px)",b=k.getComputedStyle(a).getPropertyValue(d[c]));h.body.removeChild(a);return b!==z&&0<b.length&&"none"!==b}var e=b.fn.pagepiling,g=b(this),A,B=0,L="ontouchstart"in
k||0<navigator.msMaxTouchPoints||navigator.maxTouchPoints,q=0,r=0,t=0,u=0,n=[],c=b.extend(!0,{direction:"vertical",menu:null,verticalCentered:!0,sectionsColor:[],anchors:[],scrollingSpeed:700,easing:"easeInQuart",loopBottom:!1,loopTop:!1,css3:!0,navigation:{textColor:"#000",bulletsColor:"#000",position:"right",tooltips:[]},normalScrollElements:null,normalScrollElementTouchThreshold:5,touchSensitivity:5,keyboardScrolling:!0,sectionSelector:".section",animateAnchor:!1,afterLoad:null,onLeave:null,afterRender:null},
M);b.extend(b.easing,{easeInQuart:function(a,b,c,e,g){return e*(b/=g)*b*b*b+c}});e.setScrollingSpeed=function(a){c.scrollingSpeed=a};e.setMouseWheelScrolling=function(a){a?g.get(0).addEventListener?(g.get(0).addEventListener("mousewheel",m,!1),g.get(0).addEventListener("wheel",m,!1)):g.get(0).attachEvent("onmousewheel",m):g.get(0).addEventListener?(g.get(0).removeEventListener("mousewheel",m,!1),g.get(0).removeEventListener("wheel",m,!1)):g.get(0).detachEvent("onmousewheel",m)};e.setAllowScrolling=
function(a){a?(e.setMouseWheelScrolling(!0),L&&(a=H(),g.off("touchstart "+a.down).on("touchstart "+a.down,T),g.off("touchmove "+a.move).on("touchmove "+a.move,U))):(e.setMouseWheelScrolling(!1),L&&(a=H(),g.off("touchstart "+a.down),g.off("touchmove "+a.move)))};e.setKeyboardScrolling=function(a){c.keyboardScrolling=a};e.moveSectionUp=function(){var a=b(".pp-section.active").prev(".pp-section");!a.length&&c.loopTop&&(a=b(".pp-section").last());a.length&&l(a)};e.moveSectionDown=function(){var a=b(".pp-section.active").next(".pp-section");
!a.length&&c.loopBottom&&(a=b(".pp-section").first());a.length&&l(a)};e.moveTo=function(a){var c="",c=isNaN(a)?b(h).find('[data-anchor="'+a+'"]'):b(".pp-section").eq(a-1);0<c.length&&l(c)};b(c.sectionSelector).each(function(){b(this).addClass("pp-section")});c.css3&&(c.css3=W());b(g).css({overflow:"hidden","-ms-touch-action":"none","touch-action":"none"});e.setAllowScrolling(!0);b.isEmptyObject(c.navigation)||V();var y=b(".pp-section").length;b(".pp-section").each(function(a){b(this).data("data-index",
a);b(this).css("z-index",y);a||0!==b(".pp-section.active").length||b(this).addClass("active");"undefined"!==typeof c.anchors[a]&&b(this).attr("data-anchor",c.anchors[a]);"undefined"!==typeof c.sectionsColor[a]&&b(this).css("background-color",c.sectionsColor[a]);c.verticalCentered&&!b(this).hasClass("pp-scrollable")&&b(this).addClass("pp-table").wrapInner('<div class="pp-tableCell" style="height:100%" />');--y}).promise().done(function(){c.navigation&&(b("#pp-nav").css("margin-top","-"+b("#pp-nav").height()/
2+"px"),b("#pp-nav").find("li").eq(b(".pp-section.active").index(".pp-section")).find("a").addClass("active"));b(k).on("load",function(){var a=k.location.hash.replace("#",""),a=b(h).find('.pp-section[data-anchor="'+a+'"]');0<a.length&&l(a,c.animateAnchor)});b.isFunction(c.afterRender)&&c.afterRender.call(this)});b(k).on("hashchange",function(){var a=k.location.hash.replace("#","").split("/")[0];a.length&&a&&a!==A&&(a=isNaN(a)?b(h).find('[data-anchor="'+a+'"]'):b(".pp-section").eq(a-1),l(a))});b(h).keydown(function(a){if(c.keyboardScrolling&&
!x())switch(a.which){case 38:case 33:e.moveSectionUp();break;case 40:case 34:e.moveSectionDown();break;case 36:e.moveTo(1);break;case 35:e.moveTo(b(".pp-section").length);break;case 37:e.moveSectionUp();break;case 39:e.moveSectionDown()}});c.normalScrollElements&&(b(h).on("mouseenter",c.normalScrollElements,function(){e.setMouseWheelScrolling(!1)}),b(h).on("mouseleave",c.normalScrollElements,function(){e.setMouseWheelScrolling(!0)}));var F=(new Date).getTime();b(h).on("click touchstart","#pp-nav a",
function(a){a.preventDefault();a=b(this).parent().index();l(b(".pp-section").eq(a))});b(h).on({mouseenter:function(){var a=b(this).data("tooltip");b('<div class="pp-tooltip '+c.navigation.position+'">'+a+"</div>").hide().appendTo(b(this)).fadeIn(200)},mouseleave:function(){b(this).find(".pp-tooltip").fadeOut(200,function(){b(this).remove()})}},"#pp-nav li")}})(jQuery,document,window);

particlesJS.load('particles-js', 'particles.json', function() {
  console.log('Checking the console! Smart move ... Hope you like the website');
});


$(document).ready(function() {
    TweenMax.to($('#about-col'), 0.8, {y : -450, ease: 'Power4.easeInOut'});
    $('#about-me').on('click', function() {
        TweenMax.to($('#about-col'), 0.8, {y : 0, ease: 'Power4.easeInOut'});
        TweenMax.from($('.fa-times'), 0.8, {y : -60, ease: 'Power2.easeInOut', delay: 0.2});
        $('#top-image').addClass('darken');
        $('video').addClass('darken');
        $('#design').addClass('darken');
        $('#code').addClass('darken');
        $('.mg').addClass('darken');
        $('#arrow').addClass('darken');
    });

    function messageOne(){
    	jQuery( '#loader-txt' ).html( "<p>Rohit Girdhar - Frontend Developer and UI Designer</p>" );

    	var chars = jQuery('#loader-txt').blast({ delimiter: 'character' }),
    			tl = new TimelineLite();
    			tl.set(chars, {autoAlpha: 0});

    	tl.staggerTo(chars, .2, {autoAlpha: 1, delay: 1, ease: Power1.easeOut}, .015)
    		.staggerTo(chars, .2, {autoAlpha: 0, delay: 2, ease: Power1.easeOut}, .015);
    }

    document.getElementById('logo').draggable = false;

    TweenMax.to(jQuery('#loader'), 2, {autoAlpha:0, delay: 5.5});
    $('.fa-times').on('click', function() {
        TweenMax.to($('.fa-times'), 0.8, {y : 0, ease: 'Power2.easeInOut', delay: 0.2});
        TweenMax.to($('#about-col'), 0.8, {y : -450, ease: 'Power4.easeInOut'});
        $('#top-image').removeClass('darken');
        $('video').removeClass('darken');
        $('#design').removeClass('darken');
        $('#code').removeClass('darken');
        $('.mg').removeClass('darken');
        $('#arrow').removeClass('darken');
    });

    $('#work-together').mouseover(function() {
        $(this).removeClass('blur-text');
    });

    $('#work-together').mouseout(function() {
        $(this).addClass('blur-text');
    });

    $('#work-together').on('click', function() {
        TweenMax.to($('.work-section'), 0.9, { transform: "translate3d(100vw, 0, 0)" , ease: 'Power2.easeInOut'});
        TweenMax.to($('#top-image'), 0.3, { transform: "translate3d(12vw, 0, 0)" , ease: 'Power4.easeInOut', delay: '-0.1'});
        TweenMax.to($('#work-together'), 0.3, { transform: "translate3d(12vw, 0, 0)" , ease: 'Power4.easeInOut', delay: '-0.1'});
        TweenMax.to($('video'), 0.3, { transform: "translate3d(12vw, 0, 0)" , ease: 'Power4.easeInOut', delay: '-0.1'});
        TweenMax.to($('#design'), 0.3, { transform: "translate3d(12vw, 0, 0)" , ease: 'Power4.easeInOut', delay: '-0.1'});
        TweenMax.to($('#code'), 0.3, { transform: "translate3d(12vw, 0, 0)" , ease: 'Power4.easeInOut', delay: '-0.1'});
        TweenMax.to($('#self-name'), 0.3, { transform: "translate3d(12vw, 0, 0)" , ease: 'Power4.easeInOut', delay: '-0.3'});
        TweenMax.to($('.img-container'), 0.3, { transform: "translate3d(12vw, 0, 0)" , ease: 'Power4.easeInOut', delay: '-0.1'});
        TweenMax.to($('#arrow'), 0.3, { transform: "translate3d(12vw, 0, 0)" , ease: 'Power4.easeInOut', delay: '-0.1'});
        TweenMax.from($('#email-address'), 0.7, { x: -400 , ease: 'Power4.easeInOut', delay: '-1'});

        $('#top-image').addClass('darken');
        $('#work-together').addClass('darken');
        $('video').addClass('darken');
        $('#design').addClass('darken');
        $('#code').addClass('darken');
        $('#self-name').addClass('darken');
        $('.img-container').addClass('darken');
        $('#arrow').addClass('darken');
    });

    $('.fa-angle-left').on('click', function() {
        TweenMax.to($('.work-section'), 0.7, { transform: "translate3d(0vw, 0, 0)" , ease: 'Power2.easeInOut'});
        TweenMax.to($('#top-image'), 0.3, { transform: "translate3d(0vw, 0, 0)" , ease: 'Power4.easeInOut', delay: '-0.1'});
        TweenMax.to($('#work-together'), 0.3, { transform: "translate3d(0, 0, 0)" , ease: 'Power4.easeInOut', delay: '-0.1'});
        TweenMax.to($('video'), 0.3, { transform: "translate3d(0, 0, 0)" , ease: 'Power4.easeInOut', delay: '-0.1'});
        TweenMax.to($('#design'), 0.3, { transform: "translate3d(0, 0, 0)" , ease: 'Power4.easeInOut', delay: '-0.1'});
        TweenMax.to($('#code'), 0.3, { transform: "translate3d(0, 0, 0)" , ease: 'Power4.easeInOut', delay: '-0.1'});
        TweenMax.to($('#self-name'), 0.3, { transform: "translate3d(0, 0, 0)" , ease: 'Power4.easeInOut', delay: '-0.1'});
        TweenMax.to($('.img-container'), 0.3, { transform: "translate3d(0, 0, 0)" , ease: 'Power4.easeInOut', delay: '-0.1'});
        TweenMax.to($('#arrow'), 0.3, { transform: "translate3d(0, 0, 0)" , ease: 'Power4.easeInOut', delay: '-0.1'});

        $('#top-image').removeClass('darken');
        $('#work-together').removeClass('darken');
        $('video').removeClass('darken');
        $('#design').removeClass('darken');
        $('#code').removeClass('darken');
        $('#self-name').removeClass('darken');
        $('.img-container').removeClass('darken');
        $('#arrow').removeClass('darken');
    });


    $.fn.extend({
    animateCss: function (animationName) {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        this.addClass('animated ' + animationName).one(animationEnd, function() {
            $(this).removeClass('animated ' + animationName);
        });
    }
});
for(i=0; i<10; i++) {
    setInterval(function() {$('#code').animateCss('bounce');
}, 5000);
}

for(i=0; i<10; i++) {
    setInterval(function() {$('#design').animateCss('shake');
}, 5000);
}

    messageOne();
});


$(document).ready(function() {


    function getAge() {
      // Returns my age in years to 9 decimal places
      var birth = Date.parse("05/14/1997 00:00"); // My time of birth, in milliseconds.
      var today = new Date(); // Right now, in milliseconds
      var difference = today - birth; // My age, in milliseconds
      var seconds = difference / 1000; // My age, in seconds
      var yearsOld = seconds / 31536000; // My age, in years
      return yearsOld.toFixed(9);
    }


    function updateAge() {
      // Put my age in the about paragraph if it's on-screen
      var agespan = $('#myage');
      // Determine whether any part of the element is onscreen (vertically)
      var top = $(window).scrollTop(); // Top of window
      var bottom = top + $(window).height(); // Bottom of window
      var elemtop = agespan.offset().top; // Top of element
      var elembottom = elemtop + agespan.outerHeight(); // Bottom of element
      var isinview = (elembottom > top && elemtop < bottom && !document.hidden); // Element is onscreen?
      if (isinview) {
        agespan.text(getAge()); // Load current age into the span
      }
    }
  // Initially load text into span regardless
  $('#myage').text(getAge());
  setInterval(updateAge, 33);

  function getMousePos(e) {
      var posx = 0;
      var posy = 0;
      if (!e) var e = window.event;
      if (e.pageX || e.pageY) 	{
          posx = e.pageX;
          posy = e.pageY;
      }
      else if (e.clientX || e.clientY) 	{
          posx = e.clientX + document.body.scrollLeft
              + document.documentElement.scrollLeft;
          posy = e.clientY + document.body.scrollTop
              + document.documentElement.scrollTop;
      }
      return {
          x : posx,
          y : posy
      }
  }
});



// (function(window) {

// 	'use strict';

// 	/**
// 	 * **************************************************************************
// 	 * utils
// 	 * **************************************************************************
// 	 */

// 	// from https://gist.github.com/desandro/1866474
// 	var lastTime = 0;
// 	var prefixes = 'webkit moz ms o'.split(' ');
// 	// get unprefixed rAF and cAF, if present
// 	var requestAnimationFrame = window.requestAnimationFrame;
// 	var cancelAnimationFrame = window.cancelAnimationFrame;
// 	// loop through vendor prefixes and get prefixed rAF and cAF
// 	var prefix;
// 	for( var i = 0; i < prefixes.length; i++ ) {
// 		if ( requestAnimationFrame && cancelAnimationFrame ) {
// 			break;
// 		}
// 		prefix = prefixes[i];
// 		requestAnimationFrame = requestAnimationFrame || window[ prefix + 'RequestAnimationFrame' ];
// 		cancelAnimationFrame  = cancelAnimationFrame  || window[ prefix + 'CancelAnimationFrame' ] ||
// 		window[ prefix + 'CancelRequestAnimationFrame' ];
// 	}

// 	// fallback to setTimeout and clearTimeout if either request/cancel is not supported
// 	if ( !requestAnimationFrame || !cancelAnimationFrame ) {
// 		requestAnimationFrame = function( callback, element ) {
// 			var currTime = new Date().getTime();
// 			var timeToCall = Math.max( 0, 16 - ( currTime - lastTime ) );
// 			var id = window.setTimeout( function() {
// 				callback( currTime + timeToCall );
// 			}, timeToCall );
// 			lastTime = currTime + timeToCall;
// 			return id;
// 		};

// 		cancelAnimationFrame = function( id ) {
// 			window.clearTimeout( id );
// 		};
// 	}

// 	function extend( a, b ) {
// 		for( var key in b ) {
// 			if( b.hasOwnProperty( key ) ) {
// 				a[key] = b[key];
// 			}
// 		}
// 		return a;
// 	}

// 	// from http://www.quirksmode.org/js/events_properties.html#position
// 	function getMousePos(e) {
// 		var posx = 0;
// 		var posy = 0;
// 		if (!e) var e = window.event;
// 		if (e.pageX || e.pageY) 	{
// 			posx = e.pageX;
// 			posy = e.pageY;
// 		}
// 		else if (e.clientX || e.clientY) 	{
// 			posx = e.clientX + document.body.scrollLeft
// 				+ document.documentElement.scrollLeft;
// 			posy = e.clientY + document.body.scrollTop
// 				+ document.documentElement.scrollTop;
// 		}
// 		return {
// 			x : posx,
// 			y : posy
// 		}
// 	}

// 	// from http://www.sberry.me/articles/javascript-event-throttling-debouncing
// 	function throttle(fn, delay) {
// 		var allowSample = true;

// 		return function(e) {
// 			if (allowSample) {
// 				allowSample = false;
// 				setTimeout(function() { allowSample = true; }, delay);
// 				fn(e);
// 			}
// 		};
// 	}

// 	/***************************************************************************/

// 	/**
// 	 * TiltFx fn
// 	 * @param {HTMLElement} img element
// 	 * @param {object} options
// 	 */
// 	function TiltFx(el, options) {
// 		if(el) {
// 			this.el = el;
// 			this.options = extend( {}, this.options );
// 			extend( this.options, options );
// 			this._init();
// 			this._initEvents();
// 		}
// 	}

// 	/**
// 	 * TiltFx options.
// 	 */
// 	TiltFx.prototype.options = {
// 		// number of extra image elements (div with background-image) to add to the DOM - min:0, max:64 (for a higher number, it's recommended to remove the transitions of .tilt__front in the stylesheet.
// 		extraImgs : 2,
// 		// set scale factor - value what use to set scale gradients for each extra img
// 		extraImgsScaleGrade: 0,
// 		// the opacity value for all the image elements.
// 		opacity : 0.7,
// 		// when use set array of opacity for each image from bottom to top
// 		customImgsOpacity: false,
// 		// by default the first layer does not move.
// 		bgfixed : true,
// 		// use reset style for mouseleave event
// 		resetOnLeave: true,
// 		// image element's movement configuration
// 		movement : {
// 			perspective : 1000, // perspective value
// 			translateX : 30, // a relative movement of -10px to 10px on the x-axis (setting a negative value reverses the direction)
// 			translateY : 30, // a relative movement of -10px to 10px on the y-axis
// 			translateZ : -50, // a relative movement of -20px to 20px on the z-axis (perspective value must be set). Also, this specific translation is done when the mouse moves vertically.
// 			rotateX : 0, // a relative rotation of -2deg to 2deg on the x-axis (perspective value must be set)
// 			rotateY : 0, // a relative rotation of -2deg to 2deg on the y-axis (perspective value must be set)
// 			rotateZ : 10 // z-axis rotation; by default there's no rotation on the z-axis (perspective value must be set)
// 		},
// 		// element for relative custom position offset
// 		element : {
// 			// element what will be bind to mousemove
// 			mouseMoveWatcher: null,
// 			// element for set bounds of mousemove
// 			viewWatcher: null
// 		}
// 	}

// 	/**
// 	 * Initialize: build the necessary structure for the image elements and replace it with the HTML img element.
// 	 */
// 	TiltFx.prototype._init = function() {
// 		this.tiltWrapper = document.createElement('div');
// 		this.tiltWrapper.className = 'tilt';

// 		// main image element.
// 		this.tiltImgBack = document.createElement('div');
// 		this.tiltImgBack.className = 'tilt__back';
// 		this.tiltImgBack.tiltFxType = 'back';
// 		this.tiltImgBack.style.backgroundImage = 'url(' + this.el.src + ')';
// 		this.tiltWrapper.appendChild(this.tiltImgBack);

// 		// image elements limit.
// 		if( this.options.extraImgs < 1 ) {
// 			this.imgCount = 0;
// 		}
// 		else if( this.options.extraImgs > 64 ) {
// 			this.imgCount = 64;
// 		}
// 		else {
// 			this.imgCount = this.options.extraImgs;
// 		}

// 		if( !this.options.movement.perspective ) {
// 			this.options.movement.perspective = 0;
// 		}

// 		// add the extra image elements.
// 		this.imgElems = [];
// 		var frontExtraImagesCount = this.imgCount;
// 		var customImgsOpacity = this.options.customImgsOpacity;

// 		if( !this.options.bgfixed ) {
// 			this.imgElems.push(this.tiltImgBack);
// 			++this.imgCount;
// 		}

// 		for(var i = 0; i < frontExtraImagesCount; ++i) {
// 			var el = document.createElement('div');
// 			el.className = 'tilt__front';
// 			el.style.backgroundImage = 'url(' + this.el.src + ')';
// 			this.tiltWrapper.appendChild(el);
// 			this.imgElems.push(el);
// 		}

// 		// set opacity for images
// 		this._initSetImagesOpacity();

// 		// add it to the DOM and remove original img element.
// 		this.el.parentNode.insertBefore(this.tiltWrapper, this.el);
// 		this.el.parentNode.removeChild(this.el);

// 		// set mosemove element area and view restrictions
// 		this._setViewWatcher(this);
// 		this._setMouseMoveWatcher(this);

// 		// viewWatcher properties: width/height/left/top
// 		this._calcView(this);
// 	};

// 	/**
// 	 * Set images opacity.
// 	 * @private
// 	 */
// 	TiltFx.prototype._initSetImagesOpacity = function() {
// 		if(this.options.customImgsOpacity) {
// 			for(var i = 0, len = this.imgElems.length; i < len; ++i) {
// 				var opacity = (this.options.customImgsOpacity[i])
// 					? this.options.customImgsOpacity[i]
// 					: this.options.opacity;

// 				this.imgElems[i].style.opacity = opacity;

// 			}

// 		}
// 		else {
// 			for(var i = 0, len = this.imgElems.length; i < len; ++i) {
// 				if(this.imgElems[i].tiltFxType === 'back') {
// 					continue;
// 				}

// 				this.imgElems[i].style.opacity = this.options.opacity;
// 			}

// 		}
// 	};

// 	TiltFx.prototype._calcView = function(self) {
// 		self.view = {
// 			width : self.viewWatcher.offsetWidth,
// 			height : self.viewWatcher.offsetHeight
// 		};
// 	};

// 	TiltFx.prototype._setMouseMoveWatcher = function(self) {
// 		var isSet = false;

// 		if(self.options.element && self.options.element.mouseMoveWatcher) {
// 			var mouseMoveWatcherElement = document.querySelector(self.options.element.mouseMoveWatcher);

// 			self.mouseMoveWatcher = mouseMoveWatcherElement;
// 			isSet = true;
// 		}

// 		if(!isSet) {
// 			self.mouseMoveWatcher = self.viewWatcher;
// 		}
// 	};

// 	TiltFx.prototype._setViewWatcher = function(self) {
// 		var isSet = false;

// 		if(self.options.element && self.options.element.viewWatcher) {
// 			var customElementRelative = document.querySelector(self.options.element.viewWatcher);

// 			if(customElementRelative) {
// 				self.viewWatcher = customElementRelative;
// 				isSet = true;
// 			}
// 		}

// 		if(!isSet) {
// 			self.viewWatcher = self.tiltWrapper;
// 		}
// 	};

// 	/**
// 	 * Initialize the events on the main wrapper.
// 	 */
// 	TiltFx.prototype._initEvents = function() {
// 		var self = this,
// 			moveOpts = self.options.movement;

// 		// mousemove event..
// 		self.mouseMoveWatcher.addEventListener('mousemove', function(ev) {
// 			requestAnimationFrame(function() {
// 					// mouse position relative to the document.
// 				var mousepos = getMousePos(ev),
// 					// document scrolls.
// 					docScrolls = {
// 						left : document.body.scrollLeft + document.documentElement.scrollLeft,
// 						top : document.body.scrollTop + document.documentElement.scrollTop
// 					},
// 					bounds = self.tiltWrapper.getBoundingClientRect(),
// 					// mouse position relative to the main element (tiltWrapper).
// 					relmousepos = {
// 						x : mousepos.x - bounds.left - docScrolls.left,
// 						y : mousepos.y - bounds.top - docScrolls.top
// 					};

// 				// configure the movement for each image element.
// 				for(var i = 0, len = self.imgElems.length; i < len; ++i) {
// 					var el = self.imgElems[i],
// 						rotX = moveOpts.rotateX ? 2 * ((i+1)*moveOpts.rotateX/self.imgCount) / self.view.height * relmousepos.y - ((i+1)*moveOpts.rotateX/self.imgCount) : 0,
// 						rotY = moveOpts.rotateY ? 2 * ((i+1)*moveOpts.rotateY/self.imgCount) / self.view.width * relmousepos.x - ((i+1)*moveOpts.rotateY/self.imgCount) : 0,
// 						rotZ = moveOpts.rotateZ ? 2 * ((i+1)*moveOpts.rotateZ/self.imgCount) / self.view.width * relmousepos.x - ((i+1)*moveOpts.rotateZ/self.imgCount) : 0,
// 						transX = moveOpts.translateX ? 2 * ((i+1)*moveOpts.translateX/self.imgCount) / self.view.width * relmousepos.x - ((i+1)*moveOpts.translateX/self.imgCount) : 0,
// 						transY = moveOpts.translateY ? 2 * ((i+1)*moveOpts.translateY/self.imgCount) / self.view.height * relmousepos.y - ((i+1)*moveOpts.translateY/self.imgCount) : 0,
// 						transZ = moveOpts.translateZ ? 2 * ((i+1)*moveOpts.translateZ/self.imgCount) / self.view.height * relmousepos.y - ((i+1)*moveOpts.translateZ/self.imgCount) : 0,

// 						scale = 1 + (self.options.extraImgsScaleGrade * (len - (i+1))),
// 						scaleCss = (scale !== 1) ? ' scale(' + scale + ', ' + scale + ')' : '';

// 					el.style.WebkitTransform =
// 						'perspective(' + moveOpts.perspective + 'px)' +
// 						' translate3d(' + transX + 'px,' + transY + 'px,' + transZ + 'px)' +
// 						' rotate3d(1,0,0,' + rotX + 'deg)' +
// 						' rotate3d(0,1,0,' + rotY + 'deg)' +
// 						' rotate3d(0,0,1,' + rotZ + 'deg)' +
// 						scaleCss;

// 					el.style.transform =
// 						'perspective(' + moveOpts.perspective + 'px)' +
// 						' translate3d(' + transX + 'px,' + transY + 'px,' + transZ + 'px)' +
// 						' rotate3d(1,0,0,' + rotX + 'deg)' +
// 						' rotate3d(0,1,0,' + rotY + 'deg)' +
// 						' rotate3d(0,0,1,' + rotZ + 'deg)' +
// 						scaleCss;
// 				}
// 			});
// 		});

// 		// reset all when mouse leaves the main wrapper.
// 		if(self.options.resetOnLeave) {
// 			self.mouseMoveWatcher.addEventListener('mouseleave', function () {
// 				setTimeout(function () {
// 					for (var i = 0, len = self.imgElems.length; i < len; ++i) {
// 						var el = self.imgElems[i];
// 						el.style.WebkitTransform = 'perspective(' + moveOpts.perspective + 'px) translate3d(0,0,0) rotate3d(1,1,1,0deg)';
// 						el.style.transform = 'perspective(' + moveOpts.perspective + 'px) translate3d(0,0,0) rotate3d(1,1,1,0deg)';
// 					}
// 				}, 60);

// 			});
// 		}

// 		// window resize
// 		window.addEventListener('resize', throttle(function() {
// 			// recalculate viewWatcher properties: width/height/left/top
// 			self._calcView(self);
// 		}, 50));
// 	};

// 	/**
// 	 * Init tiltFx on each imgs with the class "tilt-effect"
// 	 */
// 	TiltFx.prototype.init = function() {
// 		// search for imgs with the class "tilt-effect"
// 		[].slice.call(document.querySelectorAll('img.tilt-effect')).forEach(function(img) {
// 			new TiltFx(img, JSON.parse(img.getAttribute('data-tilt-options')));
// 		});
// 	};

// 	(new TiltFx()).init();

// 	window.TiltFx = TiltFx;

// })(window);
