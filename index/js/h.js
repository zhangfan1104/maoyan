$(function(){
    $(".city-list").hide();
    $(".download-icon").hide();
    $("#no").hide();
    $("#yes").hide();

    var l = window.location.search;   
    var ll = l.substring (1,l.length);

    
       
        $.ajax({
            url:" " ,
            
            success: function(result){
               $("#checkResult").html(result);
            }
         });
    
   

    if(ll == ''){
        $(".user-avatar").mouseenter(function(){
            $("#no").show();
            $(".user-avatar").css({"border-left":"1px solid #d8d8d8",
                                "border-right":"1px solid #d8d8d8",
                                "border-bottom":"2px solid rgb(255, 255, 255)"});
            $("#xz3").addClass("xz");
            $("#xz3").addClass("xxz");
            $("#xz3").removeClass("xzz");
        });
    
        $(".user-info").mouseleave(function(){
            $("#no").hide(); 
            $(".user-avatar").css("border","0px");
            $("#xz3").addClass("xzz");
            $("#xz3").removeClass("xxz");
            $("#xz3").removeClass("xz");
        });
    }else{
        $(".user-avatar").mouseenter(function(){
            $("#yes").show();
            $(".user-avatar").css({"border-left":"1px solid #d8d8d8",
                                "border-right":"1px solid #d8d8d8",
                                "border-bottom":"2px solid rgb(255, 255, 255)"});
            $("#xz3").addClass("xz");
            $("#xz3").addClass("xxz");
            $("#xz3").removeClass("xzz");
        });
    
        $(".user-info").mouseleave(function(){
            $("#yes").hide(); 
            $(".user-avatar").css("border","0px");
            $("#xz3").addClass("xzz");
            $("#xz3").removeClass("xxz");
            $("#xz3").removeClass("xz");
        });
    }

    $("#sy").click(function () { 
        window.location.href="../index/index.html?"+ll;

    });    
    $("#dy").click(function () { 
        window.location.href="../dianying/film.html?"+ll;

    });
    $("#yy").click(function () { 
        window.location.href="../yingyuan/cinema.html?"+ll;

    });
    $("#bd").click(function () { 
        window.location.href="../bangdan/pop%20list.html?"+ll;

    });

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

    $(".app-download").mouseleave(function(){
        $(".download-icon").hide(); 
        $(".aap").css("border","0px");
        $("#xz2").addClass("xzz");
        $("#xz2").removeClass("xxz");
        $("#xz2").removeClass("xz");
    });




});
