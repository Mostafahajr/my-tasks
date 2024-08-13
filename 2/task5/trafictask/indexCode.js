var divs=document.querySelectorAll(".traficLights div");
var p = document.getElementById("text")


// setTimeout(function () {
//     divs[0].style.background = "red";
//     p.innerHTML = "Go";
//     p.style.color ="red"
// },1000)
// setTimeout(function () {
    // divs[0].style.background = "#333"
    // divs[1].style.background = "yellow"
    // p.innerHTML = "ready";
    // p.style.color ="yellow"

// },2000)
// setTimeout(function () {
    // divs[0].style.background = "#333"
    // divs[1].style.background = "#333"
    // divs[2].style.background = "green"
    // p.innerHTML = "Go";
    // p.style.color ="green"


// },3000)


var index = 0;

setInterval(function () {
    index++;
    if(index == 4){
        index = 1;
    }
    if (index == 1) {
        divs[0].style.background = "red";
        divs[2].style.background = "#333"
        p.innerHTML = "Go";
        p.style.color ="red"
    }if (index == 2) {
        divs[0].style.background = "#333"
        divs[1].style.background = "yellow"
        p.innerHTML = "ready";
        p.style.color ="yellow"
        
    }if(index == 3){
        divs[0].style.background = "#333"
        divs[1].style.background = "#333"
        divs[2].style.background = "green"
        p.innerHTML = "Go";
        p.style.color ="green"
    
    }
},2000)
