let img1 = document.getElementById("image1");
let img2 = document.getElementById("image2");
let img3 = document.getElementById("image3");

$(this).ready(function () {
    let newImg = $("<img>");
    newImg.attr("id","hoveredImg");
    $("body").append(newImg);
    $(img2).mouseenter(function () {
    
        $(img2).mousemove(function (event) {
            var x=event.pageX;
            var y=event.pageY;
            $("#hoveredImg").css("display","grid");
            $("#hoveredImg").attr("src",img2.getAttribute("src"));
            $("#hoveredImg").css({
                left:x+10+"px",
                top:y+10+"px"
            });
            $("text").text(x+" "+y)
        })
    }).mouseleave(function () {
        $(img2).off("mousemove");
        $("#hoveredImg").css("display","none");
    
    })
    $(img3).mouseenter(function () {
       
        $(img3).mousemove(function (event) {
            var x=event.pageX;
            var y=event.pageY;
            $("#hoveredImg").css("display","grid");
            $("#hoveredImg").attr("src",img3.getAttribute("src"));
            $("#hoveredImg").css({
                left:x+10+"px",
                top:y+10+"px"
            });
            $("text").text(x+" "+y)
        })
    }).mouseleave(function () {
        $(img3).off("mousemove");
        $("#hoveredImg").css("display","none");
    
    
    })
    
    $(img1).mouseenter(function () {
        
        $(img1).mousemove(function (event) {
            var x=event.pageX;
            var y=event.pageY;
            $("#hoveredImg").css("display","grid");
            $( $("#hoveredImg")).attr("src",img1.getAttribute("src"));
            $("#hoveredImg").css({
                left:x+10+"px",
                top:y+10+"px"
            });
            $("text").text(x+" "+y)
        })
    }).mouseleave(function () {
        $(img1).off("mousemove");
           $("#hoveredImg").css("display","none");
    
    })
    
    
    
})



