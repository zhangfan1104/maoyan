$(function(){
    
    $("#uuu2").hide();

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