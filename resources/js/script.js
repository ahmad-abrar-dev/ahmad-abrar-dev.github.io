
/* GLOBAL VARIABLE*/
// make sure doesnt loop something same in pt
var unloopImg = true;
var unloopSkill = true;

(function($) {
    "use strict"; 

    /* Card Slider - Swiper */
	var cardSlider = new Swiper('.card-slider', {
		autoplay: {
            delay: 4000,
            disableOnInteraction: false
		},
        loop: true,
        navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev'
		},
		slidesPerView: 3,
		spaceBetween: 20,
        breakpoints: {
            // when window is <= 992px
            992: {
                slidesPerView: 2
            },
            // when window is <= 768px
            768: {
                slidesPerView: 1
            } 
        }
    });

     

})(jQuery);



// on click event
// $('.page-scroll').on('click', function(e){
    
//     //get href value
//     var tujuan = $(this).attr('href');
//     //get this element
//     var elementTujuan = $(tujuan);
    

//     $('html').animate({
//         scrollTop : elementTujuan.offset().top - 50
//     }, 1250, 'easeInOutExpo');
//     // add "," after } to add more time action what we need
//     //default swing

//     e.preventDefault();
// });

//--parallax--//
//about
$(window).on('load', function(){
//     //jumbotron
//     // $('.jumbotron img, .jumbotron h1, .jumbotron p').addClass('show-all');
//     // $('.quote').addClass('showQuote');
//     // $('.right-side').addClass('showSide');
//     // $('.flash-info').addClass('showInfo');

    //show image
    var src   = "assets/img/logo/cc_logo.png";
    var modal = '<div id="myModal" class="modal-foto" style="display:none;"><span class="close">&times;</span><img class="modal-content-maximize" id="imgShow" src="'+ src +'"></div>'
    $('body').append(modal);

    
    $('.close').click(function (e) { 
        var modal = $("#myModal");
        modal.css("display", "none");

    });
    $('.modal-foto').click(function (e) { 
        $(this).css("display", "none");
    });
    
    
    
});


$('.img-container').click(function (e) { 
    
    var src = $(this).find('img').attr("src");
    
    var modal = $("#myModal");
    $("#imgShow").attr("src", src);
    modal.css("display", "block");
    
});

//gallery
$(window).scroll(function(){

    // to get the scroll position of the window
    var wScroll = $(this).scrollTop();

    // $('.jumbotron img').css({
    //     transform : 'translate(0, '+ wScroll/3.4 +'%)'
    // });
    // $('.jumbotron h1').css({
    //     transform : 'translate(0, '+ wScroll/1 +'%)'
    // });
    // $('.jumbotron p').css({
    //     transform : 'translate(0, '+ wScroll/1.2 +'%)'
    // });

    if (unloopImg) {
        if ( wScroll > $('.gallery').offset().top - 500 ) {
            $('.gallery img').each(function(i){
                setTimeout(function(){
                    $('.gallery img').eq(i).addClass('show-thumb');
                }, 500 * (i +1));
                // , timer * index
            });
            // $('.gallery .thumbnail').addClass('show-thumb');
            unloopImg = false;
        }
    }
     

    // if ( wScroll >= $('.contact').offset().top - 500) {
    //     activeh2r('contact');
    // }
    // else if ( wScroll >= $('.gallery').offset().top - 350 ) {
    //     activeh2r('gallery');
    // }
    // else if ( wScroll >= $('.project').offset().top - 350 ) {
    //     activeh2r('project');
    // }
    if ( wScroll >= $('.skill').offset().top - 350 ) {
        // activeh2r('skill');
        
        //skillbar
        if (unloopSkill) {
            $('.skill .card').each(function(i){
                setTimeout(function(){
                    $('.skill .card').eq(i).addClass('show-skill');
                    $('.describe-skill').eq(i).skillBars({
                        from: 0,
                        speed: 3500, 
                        interval: 100,
                        decimals: 0,
                    });
                }, 150 * (i + 1));
                // , timer * index
            });
            unloopSkill = false;
        }
    }

});

(function($) {

	"use strict";

	/*---------------------------------------------------- */
	/* Preloader
	------------------------------------------------------ */ 
    $(window).on('load', function() {

      // will first fade out the loading animation 
      $("#preloader").delay(2000).fadeOut("slow");
        // $("#loader").delay(5000).fadeOut(function(){

            // will fade out the whole DIV that covers the website.

        // });       

  	})
})(jQuery);
