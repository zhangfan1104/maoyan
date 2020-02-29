$(function(){
    $(".city-list").hide();
    $(".download-icon").hide();

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
    $(".aap").mouseenter(function(){
        $(".download-icon").show();
        $(".aap").css({"border-left":"1px solid #d8d8d8",
                            "border-right":"1px solid #d8d8d8",
                            "border-bottom":"2px solid rgb(255, 255, 255)"});
        $("#xz2").addClass("xz");
        $("#xz2").addClass("xxz");
        $("#xz2").removeClass("xzz");
    });

    $(".aap").mouseleave(function(){
        $(".download-icon").hide(); 
        $(".aap").css("border","0px");
        $("#xz2").addClass("xzz");
        $("#xz2").removeClass("xxz");
        $("#xz2").removeClass("xz");
    });
});