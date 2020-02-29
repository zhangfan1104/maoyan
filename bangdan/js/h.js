$(function(){
    $(".city-list").hide();

    $(".city-selected").mouseenter(function(){
        $(".city-selected").css({"border-left":"1px solid #d8d8d8",
                            "border-right":"1px solid #d8d8d8",
                            "border-bottom":"2px solid rgb(255, 255, 255)"});
    
        $(".city-list").show();
        $("#xz1").addClass("xz");
        $("#xz1").addClass("xxz");
        $("#xz1").removeClass("xzz");
    });
    
    $(".city-container").mouseleave(function(){
        $(".city-selected").css("border","0px");
        $(".city-list").hide();
        $("#xz1").addClass("xzz");
        $("#xz1").removeClass("xxz");
        $("#xz1").removeClass("xz");
    });
});