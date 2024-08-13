// var arrImages = Array.from(document.querySelectorAll("img"));
// var currentIndex = 0;
// var play = null;

// function next() {
    
//     arrImages[currentIndex].classList.remove("active");
//     currentIndex++;
//     var arrLength = arrImages.length;
//     if(currentIndex == arrLength)
//         currentIndex = 0;
//     arrImages[currentIndex].classList.add("active");

// }

// function prev() {
//     arrImages[currentIndex].classList.remove("active");
//     currentIndex--;
//     console.log(currentIndex);
//     var arrLength = arrImages.length;
//     if(currentIndex == -1)
//         currentIndex = arrLength-1;
//     arrImages[currentIndex].classList.add("active");

// }




// function playval() {
    
//         play = setInterval(function () {
//             arrImages[currentIndex].classList.remove("active");
//             currentIndex++;
//             var arrLength = arrImages.length;
//             if(currentIndex == arrLength)
//             currentIndex = 0;
//             arrImages[currentIndex].classList.add("active");
//         },2000)
    
        
    
    
// }

// function stop(){
//     clearInterval(play);
// }



var imagesSrc = ["1.jpg","2.jpg","3.jpg","4.jpg"];
var image = document.querySelector("img");
var counterIndex = 0;

function next() {
    counterIndex++;
    if (counterIndex == imagesSrc.length) {
        counterIndex = 0;
    }
    image.setAttribute("src",imagesSrc[counterIndex]);
    

}
function prev() {
    counterIndex--;
    if (counterIndex == -1) {
        counterIndex = imagesSrc.length -1;
    }
    image.setAttribute("src",imagesSrc[counterIndex]);
    

}


var play = null;

function playval() {
    play = setInterval(function(){
        counterIndex++;
        if (counterIndex == imagesSrc.length) {
            counterIndex = 0;
        }
        image.setAttribute("src",imagesSrc[counterIndex]);
    },2000)
}

function stop() {
    setTimeout(function () {
        clearInterval(play);
    },1000)
}
