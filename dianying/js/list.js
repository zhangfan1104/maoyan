var tabs =document.getElementById("tabs").getElementsByTagName("li");
console.log(tabs)
for (var i=0; i<tabs.length; i++){
    tabs[i].onclick =showlist;
}

function showlist() {

    for (var  i=0; i<tabs.length;i++){
        if (tabs[i]===this) {
            tabs[i].className="active";
        }
        else {
            tabs[i].className = "";
        }
    }
}

var tabs1=document.getElementById("tabs1").getElementsByTagName("li");
var list1=document.getElementById("list1").getElementsByTagName("dd")
console.log(tabs1);
for (var i=0; i<tabs1.length; i++){
    tabs1[i].onclick =showlist1;
}
function showlist1() {
    for (var  i=0; i<tabs1.length;i++){
        if (tabs1[i]===this) {
            tabs1[i].className="active1";
            list1[i].className="active2";  
        }
        else {
            tabs1[i].className = "";
            list1[i].className=""
        }
    }
    }
