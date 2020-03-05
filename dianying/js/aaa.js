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
            //  var aj = new XMLHttpRequest();
            //  var na = $(".active1").find("a").val();
            //  var ta = $(".active").find("a").val()
            //  var aaa = uphone +'/'+ upassword;
            // //  if(uphone == ''){
            // //     window.location.href="../index/index.html"
            // //  }else{
            // //     window.location.href="../index/index.html?"+11
            // //  }
            //  aj.open('get','http://localhost:8089/User/UserLogin?'+aaa);
            //  aj.send();
            //  aj.onload = function(){
            //     window.location.href="../index/index.html?;"+aj.responseText
            //  }
});
