(function($,sr){

  // debouncing function from John Hann
  // http://unscriptable.com/index.php/2009/03/20/debouncing-javascript-methods/
  var debounce = function (func, threshold, execAsap) {
      var timeout;

      return function debounced () {
          var obj = this, args = arguments;
          function delayed () {
              if (!execAsap)
                  func.apply(obj, args);
              timeout = null;
          };

          if (timeout)
              clearTimeout(timeout);
          else if (execAsap)
              func.apply(obj, args);

          timeout = setTimeout(delayed, threshold || 100);
      };
  }
  // smartresize 
  jQuery.fn[sr] = function(fn){  return fn ? this.bind('resize', debounce(fn)) : this.trigger(sr); };

})(jQuery,'smartresize');

var $ = jQuery;


(function(){


  ///////////////////////////////
  // Set Home Slideshow Height
  ///////////////////////////////

  function setHomeBannerHeight() {
    var windowHeight = jQuery(window).height(); 
    jQuery('#header').height(windowHeight);
  }

  ///////////////////////////////
  // Center Home Slideshow Text
  ///////////////////////////////

  function centerHomeBannerText() {
      var bannerText = jQuery('#header > .center');
      var bannerTextTop = (jQuery('#header').actual('height')/2) - (jQuery('#header > .center').actual('height')/2) - 40;   
      bannerText.css('padding-top', bannerTextTop+'px');    
      bannerText.show();
  }

  function setHeaderBackground() {    
    var scrollTop = jQuery(window).scrollTop(); // our current vertical position from the top 
    
    if (scrollTop > 300 || jQuery(window).width() < 700) { 
      jQuery('#header .top').addClass('solid');
    } else {
      jQuery('#header .top').removeClass('solid');    
    }
  }




  ///////////////////////////////
  // Initialize
  ///////////////////////////////

  jQuery.noConflict();
  setHomeBannerHeight();
  centerHomeBannerText();

  //Resize events
  jQuery(window).smartresize(function(){
    setHomeBannerHeight();
    centerHomeBannerText();
  });
  
})();


  ///////////////////////////////
  // Smooth Scroll
  ///////////////////////////////


smoothScroll.init();




  ///////////////////////////////
  // Animate Css
  ///////////////////////////////
var $ = jQuery;

function animationHover(element, animation){
    element = $(element);
    element.hover(
        function() {
            element.addClass('animated ' + animation);        
        },
        function(){
            //wait for animation to finish before removing classes
            window.setTimeout( function(){
                element.removeClass('animated ' + animation);
            }, 2000);         
        });
}

$(document).ready(function(){
    $('#scrollToContent').each(function() {
        animationHover(this, 'pulse');
    });
});



  ///////////////////////////////
  // Header Fixed
  ///////////////////////////////



var menu = $('#navigation');
var origOffsetY = menu.offset().top;

function scroll() {
   if ($(window).scrollTop() >= origOffsetY) {
       $('#navigation').addClass('nav-wrap');
       $('#about-me').addClass('exp');
       //$('.content').addClass('menu-padding');
   } else {
       $('#navigation').removeClass('nav-wrap');
       $('#about-me').removeClass('exp');
       //$('.content').removeClass('menu-padding');
   }



}

 document.onscroll = scroll;





///////////////////////////////
// scroll to top
///////////////////////////////


$(window).scroll(function() {
    if ($(this).scrollTop() >= 250) {        // If page is scrolled more than 250px
        $('#return-to-top').fadeIn(200);    // Fade in the arrow
    } else {
        $('#return-to-top').fadeOut(200);   // Else fade out the arrow
    }
});
$('#return-to-top').click(function() {      // When arrow is clicked
    $('body,html').animate({
        scrollTop : 0                       // Scroll to top of body
    }, 500);
});

document.onreadystatechange = function () {
  var state = document.readyState
  if (state == 'interactive') {
      $('#contents').css('display', 'none');
  } else if (state == 'complete') {
        $("#load").fadeOut("slow");
        $('#load').css('display', 'none');
        $('#contents').css('display', 'block');
  }
}

function hover(element) {
  element.setAttribute('src', 'assets/images/logo-hover.svg');
}

function unhover(element) {
  element.setAttribute('src', 'assets/images/logo.svg');
}