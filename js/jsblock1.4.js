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

    



});
