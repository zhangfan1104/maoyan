function aaa(){
    var sp = document.getElementById("aa");
    var a = sp.childNodes[0].nodeValue;

if(a == "手机动态码登录"){
    sp.innerHTML = "普通方式登录"
    document.getElementById("tpp").src = "tp/tb4.png";

    document.getElementById("mm").setAttribute("placeholder","动态码");

    document.getElementById("cc").style.display="none";//隐藏
    document.getElementById("dtm").style.display='';//显示

    
}else{
    sp.innerHTML = "手机动态码登录"
    document.getElementById("tpp").src = "tp/tb3.png";
    document.getElementById("mm").setAttribute("placeholder","密码");
    document.getElementById("cc").style.display='';//显示
    document.getElementById("dtm").style.display="none";//隐藏
   
}
}


function f(){
    document.getElementById("kk1").style.borderColor = "red";
}
function b(){
    document.getElementById("kk1").style.borderColor = "rgba(66, 66, 66, 0.295)";
}
function ff(){
    document.getElementById("kk2").style.borderColor = "red";
}
function bb(){
    document.getElementById("kk2").style.borderColor = "rgba(66, 66, 66, 0.295)";
}

$(function () {
     
        
        // $.post(
        //     'http://localhost:8089/User/UserLogin' ,
        //     $("#dlf").serialize(),  
        //     function (resData) {       
        //        alert(resData);    
        //     }
        // );
        // $.ajax({
        //     type: "Get",
        //     url: 'http://localhost:8089/User/UserLogin',
        //     date:{uphone:uphone,upassword:upassword},
        //     // cache: false,
        //     // error: function () { },
        //     // jsonp: "callback",
        //     // dataType: "jsonp",
        //     success: function (result) {
        //         alert(result.info); 
        //     }
        // });
        
         $("#dlb").click(function () { 
             var aj = new XMLHttpRequest();
             var uphone = $(".u30").val();
             var upassword = $(".u31").val();
             var aaa = uphone +'/'+ upassword;
             aj.open('get','http://localhost:8089/User/UserLogin?'+aaa);
             aj.send();
             aj.onload = function(){
                 alert(aj.responseText);
             }
    });
})