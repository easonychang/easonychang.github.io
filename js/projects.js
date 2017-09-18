$(document).ready(function(){
    $(".slide-down").click(function(){
        $(".long-descrip").slideDown("slow");
        $(".short").hide();
        $(".slide-down").hide();
        $(".slide-up").show();
    });

    $(".slide-up").click(function(){
        $(".long-descrip").slideUp(1);
        $(".short").show();
        $(".slide-down").show();
        $(".slide-up").hide();
    });

    $(".slide-down-two").click(function(){
        $(".long-descrip-two").slideDown("slow");
        $(".short-two").hide();
        $(".slide-down-two").hide();
        $(".slide-up-two").show();
    });

    $(".slide-up-two").click(function(){
        $(".long-descrip-two").slideUp(1);
        $(".short-two").show();
        $(".slide-down-two").show();
        $(".slide-up-two").hide();
    });
});
