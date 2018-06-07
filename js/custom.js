//----------------Btn-Scroll-------------------//
$(document).ready(function(){
$('a.scrollTo').on('click', function(){
    // data-scrollTo = section scrolling to name
    var scrollTo = $(this).attr('data-scrollTo');
    // toggle active class on and off. added 1/24/17
    $( "a.scrollTo" ).each(function() {
        if(scrollTo == $(this).attr('data-scrollTo')){
            $(this).addClass('active');
        }else{
            $(this).removeClass('active');
        }
    });
    // animate and scroll to the section
    $('body, html').animate({
        // the magic - scroll to section
        "scrollTop": $('#'+scrollTo).offset().top
    }, 1000 );
    return false;
})
});
//----------------Btn-Scroll-End-------------------//
//----------------Scroll-Top-------------------//
// Create Function
function backToTop() {
    if (jQuery(this).scrollTop () > 100) {
        jQuery("#scrollTop").fadeIn(900);
    } else {
        jQuery("#scrollTop").fadeOut(500);
    }
};
jQuery( window ).scroll( function() {
    // call function
    backToTop();
});
jQuery( document ).ready ( function () {
    // #scrollTop click function
    jQuery("#scrollTop").click ( function () {
        jQuery('html,body').animate({
            scrollTop: 0
        }, 500); // you can increase or Decrease animation speed like 200 or 700
    });
});
//----------------Scroll-Top-------------------//
//----------------Equal height-------------------//
equalheight = function(container){

    var currentTallest = 0,
        currentRowStart = 0,
        rowDivs = new Array(),
        jQueryel,
        topPosition = 0;

    jQuery(container).each(function() {

        jQueryel = jQuery(this);
        jQuery(jQueryel).height('auto')
        topPostion = jQueryel.position().top;

        if (currentRowStart != topPostion) {
            for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
                rowDivs[currentDiv].height(currentTallest);
            }
            rowDivs.length = 0; // empty the array
            currentRowStart = topPostion;
            currentTallest = jQueryel.height();
            rowDivs.push(jQueryel);
        } else {
            rowDivs.push(jQueryel);
            currentTallest = (currentTallest < jQueryel.height()) ? (jQueryel.height()) : (currentTallest);
        }
        for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
            rowDivs[currentDiv].height(currentTallest);
        }
    });
};

jQuery(window).load(function(){
    equalheight('.col-sm-6 .equal-height');
});
jQuery(window).resize(function(){
    equalheight('.col-sm-6 .equal-height');
});
