$(document).ready(function(){
    $('.page-header__burger,.dropdown-menu__close-icon').click(function(event){
        $('.page-header__burger,.dropdown-menu').toggleClass('active');
    });

    $('.slides-mobile').slick({
        dots: true
    
       
    });

    $('.certificate__slides').slick({
        dots: true
    
    });

    $('.purple_button').click(function(event){
        $('.purple_button,.slides-laptop').toggleClass('active');
    });

    $('.button,.popup-menu__close-icon,.popup-menu__button').click(function(event){
        $('.popup-menu,body').toggleClass('active');
    });

    $('.header-call').on('click', function() {
        $('html, body').animate({
          scrollTop: $('.company').offset().top
        }, 700);
      });



});
