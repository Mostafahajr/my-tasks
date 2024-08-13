var clk_plus = document.getElementById("clk-plus");
var clk_minus = document.getElementById("clk-minus");

var img = document.getElementById("img_wid");

var w = img.width;

console.log(window.innerWidth);

var windo_w = window.innerWidth;

clk_plus.onclick = function () {
    console.log(img.style.width);
    w=w+50;
    if (w >= windo_w) {
        img.style.width=windo_w +"px";
        return;
    }
    
    img.style.width=w + "px";
}

clk_minus.onclick = function () {

    
    if (w <= 300) {
        
        img.style.width="300px";
        return;
    }
    w=w-50;
    img.style.width=w + "px";
}


