$(document).ready(function(){
    $('.header-burger,.crest').click(function(event){
        $('.header-burger,.header-menu-box').toggleClass('active');
    });

    $('.slides_mobile').slick({
        dots: true
    
       
    });

    $('.purple_button').click(function(event){
        $('.purple_button,.slides_laptop').toggleClass('active');
    });



});
