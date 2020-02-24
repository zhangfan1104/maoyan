$(function(){
    $(".rf").hide();

     $("#xy").click(function(){
        var newWeb=window.open('_blank');
        newWeb.location='js/4.html';
     });
     $("#zc").click(function(){
        var newWeb=window.open('_blank');
        newWeb.location='js/2.html';
     });

    //  focus()获取焦点 attr(attr,value)修改属性
     $(".f").focus(function(){
         $(this).css("border-color","rgba(255, 0, 0, 0.973)");
     });

     $("#ph").focus(function(){
         $("#r").hide();
     });

    //  blur() 失去焦点  .val()取值
     $("#ph").blur(function(){   
         var a = $("#ph").val();        
         if($.trim(a).length == 11 && $.isNumeric(a)){ 
             $(this).css("border-color","rgba(136, 132, 132, 0.699)");
             $("#f1").hide();
             $("#r1").show();
         }else{
             $(this).css("border-color"," rgb(243, 101, 19)");
             $("#r1").hide();
             $("#f1").show();
         }
     });

     $("#dt").blur(function(){   
         var a = $("#dt").val();        
         if(a == "12345"){ 
             $(this).css("border-color","rgba(136, 132, 132, 0.699)");
             $("#f2").hide();
             $("#r2").show();
         }else{
             $(this).css("border-color"," rgb(243, 101, 19)");
             $("#r2").hide();
             $("#f2").show();
         }
     });

     $("#pw1").blur(function(){   
         var a = $("#pw1").val(); 
         var b = $("#pw2").val(); 
         if($.trim(a) != ""){  
             if($.trim(a).length > 7){ 
                 $(this).css("border-color","rgba(136, 132, 132, 0.699)");
                 $("#f6").hide();
                 $("#f3").hide();
                 $("#r3").show();
                 }else{
                     $(this).css("border-color"," rgb(243, 101, 19)");
                     $("#f6").hide();
                     $("#r3").hide();
                     $("#f3").show();
                     }
            if( a !== b && b != ""){
                $("#pw2").css("border-color"," rgb(243, 101, 19)");
                $("#r4").hide();
                $("#f5").hide();
                $("#f4").show();
            }
         }else {
            $(this).css("border-color"," rgb(243, 101, 19)");
            $("#r3").hide();
            $("#f3").hide();
            $("#f6").show();
         }

     });

     $("#pw2").blur(function(){   
         var a = $("#pw2").val();
         var b = $("#pw1").val(); 
         if($.trim(a) == ""){
             $(this).css("border-color"," rgb(243, 101, 19)");
             $("#r4").hide();
             $("#f4").hide();
             $("#f5").show();
         }else if(a === b ){ 
             $(this).css("border-color","rgba(136, 132, 132, 0.699)");
             $("#f4").hide();
             $("#f5").hide();
             $("#r4").show();
             }else{
                 $(this).css("border-color"," rgb(243, 101, 19)");
                 $("#r4").hide();
                 $("#f5").hide();
                 $("#f4").show();
         }
     });

// 只有一种类型 弱
// 字母+3个及以上数字/一种特殊符号 中
// 字母+数字+特殊符号 强
     $("#pw1").keyup(function(){
         var a =  $("#pw1").val();
         var s =/[a-z]/i;
         var z =/[0-9]/i;
         var q = /[`~!@#$%^&*()_+<>?:"{},.;'\/\[\]\\]/i; 
         var g = /[0-9]/g;
         if(z.test(a) || s.test(a) || q.test(a)){
             $("#fir").css({"background-color":" rgb(255, 94, 0)"});
             $("#fir").animate({"width":"88px"},500);
             if((s.test(a) && q.test(a)) || (a.match(g).length >= 3 &&  ((z.test(a) && s.test(a)) ||(z.test(a) && q.test(a))))){
                 $("#fir").css({"background-color":"rgb(255, 136, 0)"});
                 $("#sed").css({"background-color":"rgb(255, 136, 0)"});
                 $("#sed").animate({"width":"88px"},500);
                 if(z.test(a) &&  s.test(a) && q.test(a) && a.match(g).length >= 3 ){
                     $("#fir").css({"background-color":"rgb(50, 175, 33)"});
                     $("#sed").css({"background-color":"rgb(50, 175, 33)"});
                     $("#tir").css({"background-color":"rgb(50, 175, 33)"});
                     $("#tir").animate({"width":"88px"},500);
                 }else{
                     $("#tir").animate({"width":"0px"},500);
                     }
            }else{
                 $("#sed").animate({"width":"0px"},500);
                 }
         }else{
             $("#fir").animate({"width":"0px"},500);
         }
     });
});