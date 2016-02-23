$(function (){
    $('.nav-menu-button').click(function(e) {
        e.preventDefault();
        thisdata = $(this).attr('data-collapse');
        
        if (thisdata === "toggle"){
            $(".nav-menu-collapse").slideToggle(500);
        }
    });
});