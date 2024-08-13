// var colorBtn = document.getElementById("btnColor");
var colorVal =document.getElementById("colorVal");
var changeBtnColor = document.getElementsByTagName("button")


colorVal.addEventListener("input",function() {
    sessionStorage.setItem("color",colorVal.value);

    var color = sessionStorage.getItem("color");
    for (i = 0; i < changeBtnColor.length; i++) {
        
        changeBtnColor[i].style.backgroundColor = color;
        
    }


})
 window.addEventListener("load",function () {
    var color = sessionStorage.getItem("color");
    for (i = 0; i < changeBtnColor.length; i++) {
        
        changeBtnColor[i].style.backgroundColor = color;
        
    }
 })






