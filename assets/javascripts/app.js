---
---

$(window).on('load', function() {

    //================================================//
    // Fade out blanket
    //================================================//

    function blanketFade() {
        window.setTimeout(function() {
            $('figure').addClass('shrink');
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
            var middleTop = middlePage - 20;
            var middleBottom = middlePage + 20;

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
    // Calls
    //================================================//

    blanketFade();
    strikeOut();

});