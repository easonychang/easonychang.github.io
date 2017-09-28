$(document).ready(function(){
    function expand(p1, p2, p3, p4){
        $(p1).slideDown("slow");
        $(p2).hide();
        $(p3).hide();
        $(p4).show();
    }

    function compress(p1, p2, p3, p4){
        $(p1).slideUp(1);
        $(p2).show();
        $(p3).show();
        $(p4).hide();
    }


    $(".slide-down").click(function(){     
        compress(".long-descrip-two",".short-two",".slide-down-two",".slide-up-two");        
        compress(".long-descrip-three",".short-three",".slide-down-three",".slide-up-three");
        compress(".long-descrip-four",".short-four",".slide-down-four",".slide-up-four");   
        expand(".long-descrip",".short",".slide-down",".slide-up");
    });
    

    $(".slide-up").click(function(){
        compress(".long-descrip",".short",".slide-down",".slide-up");
    });
 

    $(".slide-down-two").click(function(){
        compress(".long-descrip",".short",".slide-down",".slide-up");             
        compress(".long-descrip-three",".short-three",".slide-down-three",".slide-up-three");
        compress(".long-descrip-four",".short-four",".slide-down-four",".slide-up-four");   
        expand(".long-descrip-two",".short-two",".slide-down-two",".slide-up-two");
    });

    $(".slide-up-two").click(function(){
        compress(".long-descrip-two",".short-two",".slide-down-two",".slide-up-two");
        
    });

    $(".slide-down-three").click(function(){
        compress(".long-descrip",".short",".slide-down",".slide-up");        
        compress(".long-descrip-two",".short-two",".slide-down-two",".slide-up-two");        
        compress(".long-descrip-four",".short-four",".slide-down-four",".slide-up-four");
        expand(".long-descrip-three",".short-three",".slide-down-three",".slide-up-three");
    });

    $(".slide-up-three").click(function(){
        compress(".long-descrip-three",".short-three",".slide-down-three",".slide-up-three");
        
    });

    $(".slide-down-four").click(function(){
        compress(".long-descrip",".short",".slide-down",".slide-up");        
        compress(".long-descrip-two",".short-two",".slide-down-two",".slide-up-two");        
        compress(".long-descrip-three",".short-three",".slide-down-three",".slide-up-three");     
        expand(".long-descrip-four",".short-four",".slide-down-four",".slide-up-four");
    });

    $(".slide-up-four").click(function(){
        compress(".long-descrip-four",".short-four",".slide-down-four",".slide-up-four");
    });
});
