---
---

$(window).on('load', function() {

    //================================================//
    // Find out browser and adjust CSS
    //================================================//
    function browserSniff() {
        if (navigator.platform === 'iPhone' ||
            navigator.platform === 'iPad'   ||
            navigator.platform === 'Macintosh' ||
            navigator.platform === 'MacIntel'  ||
            navigator.platform === 'Linux' ||
            navigator.platform === 'Android' ||
            navigator.platform === 'MacPPC' ||
            navigator.platform === 'null' ||
            navigator.platform === 'Linux armv7l' ||
            navigator.platform === 'Linux armv8l') {
                $('.strike').addClass('mac');
        }
    }

    //================================================//
    // Fade out blanket
    //================================================//

    function blanketFade() {
        window.setTimeout(function() {
            $('.fade-logo').addClass('shrink');
            $('#focus-logo').addClass('spin');
        }, 500);

        window.setTimeout(function() {
            $('#blanket').fadeOut(500);
        }, 1200);
    };

    //================================================//
    // Strike through headings on scroll
    //================================================//

    function strikeOut() {
        // Kick off watcher on scroll
        $(window).on("scroll", function(){

            // Distance of element from top
            var pos1 = Math.floor($('h1.one').offset().top);
            var pos2 = Math.floor($('h1.two').offset().top);
            var pos3 = Math.floor($('h1.three').offset().top);
            var pos4 = Math.floor($('h1.four').offset().top);

            // Find middle of page and calc range either side
            var middlePage = Math.floor($(document).scrollTop() + $(window).height() / 2.0);
            var middleTop = middlePage - 10;
            var middleBottom = middlePage + 30;

            // Check element within range and add class
            if( pos1 >= middleTop && pos1 <= middleBottom ) {
                $('h1.one').addClass('active');
            }
            else if ( pos2 >= middleTop && pos2 <= middleBottom ) {
                $('h1.two').addClass('active');
            }
            else if ( pos3 >= middleTop && pos3 <= middleBottom ) {
                $('h1.three').addClass('active');
            }
            else if ( pos4 >= middleTop && pos4 <= middleBottom ) {
                $('h1.four').addClass('active');
            }
        });
    }

    //================================================//
    // SmoothScroll
    //================================================//

    (function(factory){if(typeof define==='function'&&define.amd){define(['jquery'],factory)}else if(typeof module==='object'&&module.exports){factory(require('jquery'))}else{factory(jQuery)}}(function($){var version='2.2.0';var optionOverrides={};var defaults={exclude:[],excludeWithin:[],offset:0,direction:'top',delegateSelector:null,scrollElement:null,scrollTarget:null,autoFocus:false,beforeScroll:function(){},afterScroll:function(){},easing:'swing',speed:400,autoCoefficient:2,preventDefault:true};var getScrollable=function(opts){var scrollable=[];var scrolled=false;var dir=opts.dir&&opts.dir==='left'?'scrollLeft':'scrollTop';this.each(function(){var el=$(this);if(this===document||this===window){return}if(document.scrollingElement&&(this===document.documentElement||this===document.body)){scrollable.push(document.scrollingElement);return false}if(el[dir]()>0){scrollable.push(this)}else{el[dir](1);scrolled=el[dir]()>0;if(scrolled){scrollable.push(this)}el[dir](0)}});if(!scrollable.length){this.each(function(){if(this===document.documentElement&&$(this).css('scrollBehavior')==='smooth'){scrollable=[this]}if(!scrollable.length&&this.nodeName==='BODY'){scrollable=[this]}})}if(opts.el==='first'&&scrollable.length>1){scrollable=[scrollable[0]]}return scrollable};var rRelative=/^([\-\+]=)(\d+)/;$.fn.extend({scrollable:function(dir){var scrl=getScrollable.call(this,{dir:dir});return this.pushStack(scrl)},firstScrollable:function(dir){var scrl=getScrollable.call(this,{el:'first',dir:dir});return this.pushStack(scrl)},smoothScroll:function(options,extra){options=options||{};if(options==='options'){if(!extra){return this.first().data('ssOpts')}return this.each(function(){var $this=$(this);var opts=$.extend($this.data('ssOpts')||{},extra);$(this).data('ssOpts',opts)})}var opts=$.extend({},$.fn.smoothScroll.defaults,options);var clickHandler=function(event){var escapeSelector=function(str){return str.replace(/(:|\.|\/)/g,'\\$1')};var link=this;var $link=$(this);var thisOpts=$.extend({},opts,$link.data('ssOpts')||{});var exclude=opts.exclude;var excludeWithin=thisOpts.excludeWithin;var elCounter=0;var ewlCounter=0;var include=true;var clickOpts={};var locationPath=$.smoothScroll.filterPath(location.pathname);var linkPath=$.smoothScroll.filterPath(link.pathname);var hostMatch=location.hostname===link.hostname||!link.hostname;var pathMatch=thisOpts.scrollTarget||(linkPath===locationPath);var thisHash=escapeSelector(link.hash);if(thisHash&&!$(thisHash).length){include=false}if(!thisOpts.scrollTarget&&(!hostMatch||!pathMatch||!thisHash)){include=false}else{while(include&&elCounter<exclude.length){if($link.is(escapeSelector(exclude[elCounter++]))){include=false}}while(include&&ewlCounter<excludeWithin.length){if($link.closest(excludeWithin[ewlCounter++]).length){include=false}}}if(include){if(thisOpts.preventDefault){event.preventDefault()}$.extend(clickOpts,thisOpts,{scrollTarget:thisOpts.scrollTarget||thisHash,link:link});$.smoothScroll(clickOpts)}};if(options.delegateSelector!==null){this.off('click.smoothscroll',options.delegateSelector).on('click.smoothscroll',options.delegateSelector,clickHandler)}else{this.off('click.smoothscroll').on('click.smoothscroll',clickHandler)}return this}});var getExplicitOffset=function(val){var explicit={relative:''};var parts=typeof val==='string'&&rRelative.exec(val);if(typeof val==='number'){explicit.px=val}else if(parts){explicit.relative=parts[1];explicit.px=parseFloat(parts[2])||0}return explicit};var onAfterScroll=function(opts){var $tgt=$(opts.scrollTarget);if(opts.autoFocus&&$tgt.length){$tgt[0].focus();if(!$tgt.is(document.activeElement)){$tgt.prop({tabIndex:-1});$tgt[0].focus()}}opts.afterScroll.call(opts.link,opts)};$.smoothScroll=function(options,px){if(options==='options'&&typeof px==='object'){return $.extend(optionOverrides,px)}var opts,$scroller,speed,delta;var explicitOffset=getExplicitOffset(options);var scrollTargetOffset={};var scrollerOffset=0;var offPos='offset';var scrollDir='scrollTop';var aniProps={};var aniOpts={};if(explicitOffset.px){opts=$.extend({link:null},$.fn.smoothScroll.defaults,optionOverrides)}else{opts=$.extend({link:null},$.fn.smoothScroll.defaults,options||{},optionOverrides);if(opts.scrollElement){offPos='position';if(opts.scrollElement.css('position')==='static'){opts.scrollElement.css('position','relative')}}if(px){explicitOffset=getExplicitOffset(px)}}scrollDir=opts.direction==='left'?'scrollLeft':scrollDir;if(opts.scrollElement){$scroller=opts.scrollElement;if(!explicitOffset.px&&!(/^(?:HTML|BODY)$/).test($scroller[0].nodeName)){scrollerOffset=$scroller[scrollDir]()}}else{$scroller=$('html, body').firstScrollable(opts.direction)}opts.beforeScroll.call($scroller,opts);scrollTargetOffset=explicitOffset.px?explicitOffset:{relative:'',px:($(opts.scrollTarget)[offPos]()&&$(opts.scrollTarget)[offPos]()[opts.direction])||0};aniProps[scrollDir]=scrollTargetOffset.relative+(scrollTargetOffset.px+scrollerOffset+opts.offset);speed=opts.speed;if(speed==='auto'){delta=Math.abs(aniProps[scrollDir]-$scroller[scrollDir]());speed=delta/opts.autoCoefficient}aniOpts={duration:speed,easing:opts.easing,complete:function(){onAfterScroll(opts)}};if(opts.step){aniOpts.step=opts.step}if($scroller.length){$scroller.stop().animate(aniProps,aniOpts)}else{onAfterScroll(opts)}};$.smoothScroll.version=version;$.smoothScroll.filterPath=function(string){string=string||'';return string.replace(/^\//,'').replace(/(?:index|default).[a-zA-Z]{3,4}$/,'').replace(/\/$/,'')};$.fn.smoothScroll.defaults=defaults}));

    //================================================//
    // Calls
    //================================================//
    $('a').smoothScroll({speed: 1000});
    blanketFade();
    strikeOut();
    browserSniff();
    console.log('Site by squareyes.info');

});