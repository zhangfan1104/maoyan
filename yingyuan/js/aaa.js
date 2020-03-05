$(function(){
     
    $("ul.tags li").click(function(){
        $(this).addClass("active");
        $(this).children().removeClass("ac");
        $(this).siblings().removeClass("active");
        $(this).siblings().children().addClass("ac");

    });

    $("#tabs1").click(function(){
       
        var na = $(".active1").children().text();
        $.ajax({
            url:" " ,
            data:{" ":na},
            success: function(result){
               $("#checkResult").html(result);
            }
         });
    });
});
