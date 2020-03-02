$(function(){
     
    $("ul.tags li").click(function(){
        $(this).addClass("active");
        $(this).children().removeClass("ac");
        $(this).siblings().removeClass("active");
        $(this).siblings().children().addClass("ac");

    });
});
