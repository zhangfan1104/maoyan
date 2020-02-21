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
