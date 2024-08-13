
$.fn.getSlider=function () {
    $(this).on("click",function () {
        
        let imageSrc = $(this).attr("src");
        $(".slider").css("display","grid");
        $ (".slider .slideImages img").attr("src",imageSrc);
        
        let currentIndex = 0;
        let images =$(".container img");
        let imageslide = $(".slider .slideImages img").attr("src"); 
        
        for (let i = 0; i < images.length; i++) {
            let imageSrc = images.eq(i).attr("src");
            if (imageSrc == imageslide) {
                currentIndex = i;
            }
        }
        $("#next").hover(function () {
            $("#next").animate({opacity:.5},500);
        },function () {
            $("#next").animate({opacity:1},500);
            
        })
        $("#next").on("click",function () {
           
            
            $(".slider .slideImages img").animate({"opacity":0},0)
            currentIndex++;
            if (currentIndex == images.length) {
                currentIndex = 0;
            }
            
            imageslide = images.eq(currentIndex).attr("src");
            console.log(imageslide);
            $(".slider .slideImages img").attr("src",imageslide).animate({"opacity":1},1500);

        })
        $("#prev").hover(function () {
            $("#prev").animate({opacity:.5},500);
        },function () {
            $("#prev").animate({opacity:1},500);
            
        })
        $("#prev").on("click",function () {
            
            
            $(".slider .slideImages img").animate({"opacity":0},0)
            currentIndex--;
            if (currentIndex == -1) {
                currentIndex = images.length - 1;
            }
            console.log(currentIndex);
            imageslide = images.eq(currentIndex).attr("src");
            console.log(imageslide);
            $(".slider .slideImages img").attr("src",imageslide).animate({"opacity":1},1500);
        })
        $("#close").hover(function () {
            $("#close").animate({opacity:.5},500);
        },function () {
            $("#close").animate({opacity:1},500);
        })
        $("#close").on("click",function () {
           
            $(".slider").css("display","none");
        })
    })
}


$(".container img").getSlider();
