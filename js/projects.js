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
});
