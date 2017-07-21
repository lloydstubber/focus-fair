---
---

$(document).ready(function() {

  // Function to strike out on scroll
  $(window).on("scroll", function(){
        if( $('body').scrollTop() > 50 && $('body').scrollTop() < 400){
          $('h1.one').addClass('active');
        }
        else if( $('body').scrollTop() > 400 && $('body').scrollTop() < 700){
          $('h1.two').addClass('active');
        }
        else if( $('body').scrollTop() > 700 && $('body').scrollTop() < 1100){
          $('h1.three').addClass('active');
        }
        else if( $('body').scrollTop() > 1100 && $('body').scrollTop() < 1300){
          $('h1.four').addClass('active');
        }

      });

  });


// function spellDemTing() {

//   var seeya = [
//     " ",
//     "S",
//     "Se",
//     "See",
//     "See y",
//     "See yo",
//     "See you",
//     "See you ",
//     "See you t",
//     "See you th",
//     "See you the",
//     "See you ther",
//     "See you there",
//     "See you there!"
//   ];
//           var i=0;
//         setInterval(function(){
//             $('h1.five').html(seeya[i]);
//             i++;
//           }, 100);
// };

// $(window).scroll(function() {
//    var hT = $('h1.five').offset().top,
//        hH = $('h1.five').outerHeight(),
//        wH = $(window).height(),
//        wS = $(this).scrollTop();

//    if ( wS > (hT+hH-wH) ){
//     spellDemTing();
//    }

// });