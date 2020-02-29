$(function(){
    var z = window.location.search;   //location.search是从当前URL的?号开始的字符串
    var zz = z.substring (3,4);
    if(zz == 0 ){
        $("#uu2").hide();
        $("#dd").addClass("red");
        $("#xx").removeClass("red");
    }
    if(zz == 1 ){
        $("#uuu2").hide();
    }

    $("#dd").click(function(){
        $("#dd").addClass("red");
        $("#xx").removeClass("red");
        $("#uu2").hide();
        $("#uuu2").show();

    });

    $("#xx").click(function(){
        $("#xx").addClass("red");
        $("#dd").removeClass("red");
        $("#uu2").show();
        $("#uuu2").hide();

     });
 

});