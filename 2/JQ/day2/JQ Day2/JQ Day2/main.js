$("#playBtn").click(playAnimation);

function playAnimation()
{
    // $("#container").fadeOut(5000,'swing',function(){
    //     // alert("Finished")
    // });

    // $("#container-reversed").fadeIn(5000);

    // $("#container").slideUp(5000);
    // $("#container-reversed").slideToggle(3000);
    // $("#container-reversed").fadeOut(5000);

    $("#container").animate({
        top:50,
        left:100,
        width:300
    },5000,'linear',function(){

    });
    $("#container").slideUp(3000);

}

$("#stopBtn").click(function()
    {
        // $("#container").stop();
        // $("#container").stop(clearQueue,jumeToTheEnd);
        // $("#container").stop(false,false);
        // $("#container").stop(true,false);
        // $("#container").stop(false,true);
        $("#container").stop(true,true);

    });


    $("#createBtn").click(function(){
        $("#holder").append("<p style='background-color:yellow'>New p</p>")
    })

    // $("p").click(function(){
    //     alert("clicked")
    // });

    $("body").on("click","p",function(){
        alert("New Clicked")
    });

    //Chaining 
    $("p").css("color","blue")
            .text("NEw Text Added")
            .attr("new-attr",'new value');

   
    // $("ul .listitem").css("color","red");
    // $("ul .listitem1").css("color","blue");

    // $("ul .listitem").css("color","red")
    //     .css("color","blue");
// traversing methods
    //direct children  ==>  ul > .listitem
    // $("ul").children(".listitem").css("color","red");

    // //find all children ==> ul listitem;

    // $("ul").find(".listitem1").css("color","blue");

    // $("ul").children(".listitem").css("color","red")
    //         .find(".listitem1").css("color","blue");
    
 $("ul").children(".listitem").css("color","red").end().find(".listitem1").css("color","blue");


$.fn.myFunc=function()
{
    $(this).text("New Text Added");
    $(this).css({
        "color":'red',
        "background-color":'yellow',
        "border":'2px solid red'
    });
    $(this).attr("new-attr",'new value')
}


$("p").myFunc();