// الحصول على العنصر canvas من HTML
var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');
var color = document.getElementById("inputColor")
var btn = document.getElementById("changeColor");
var index = 1;



btn.addEventListener("click",function () {


if (index == 1) {
    var centerX = canvas.width/Math.floor(Math.random() * 30);
    var centerY = canvas.height/Math.floor(Math.random() * 30);

context.beginPath();
context.strokeStyle = color.value; 
context.arc(centerX,centerY,30,0,2*Math.PI);
context.stroke();
}

})


color.addEventListener("input",function () {
    context.clearRect(0,0,canvas.width,canvas.height)
})
