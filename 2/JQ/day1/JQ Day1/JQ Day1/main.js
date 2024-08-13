// window.onload=function(){

// }

$(document).ready(function(){
    // alert("Hello")
//     console.log($("div")[0]);
//    console.log( document.getElementsByTagName("div")[0]);
    $("p").eq(0).css("color","red");
    // $("p").slice(2).css("color","yellow");
    $("p:lt(2)").css("color",'orange')
   
    $("p:gt(2)").css("color",'green');

    // selection - css selector
    // attach events
    function myFunc()
    {
        // alert("Clicked 2")
    }
    // element properties
    document.getElementById("cssBtn").click=function()
    {
        // code
    }

    $("#cssBtn").click(function(){
        // alert("Clicked");
    });

    $("#cssBtn").click(myFunc);

    // event listener
    $("#cssBtn").on("click",function(){
        //code
    })
    // $("#cssBtn").off("click","*");

    //Add Content
    $("#cntBtn").click(function()
    {
        $("h1").html("Text is <u>Added</u> here");
        $("h1").text("Text is <u>Added</u> here");
        // $("input").eq(1).val("New value");
    })

    // add css
    $("#cssBtn").on("click",function(){
        //code
        //inline-style
        // $("h1").css("color",'red');
        // $("h1").css({
        //     "color":'orange',
        //     "background-color":'blue'
        // });

        // $("h1").addClass("c1");
        $("h1").toggleClass("c1");
           

    });

    //attr

    $("#attrBtn").click(function(){
        $("h1").attr("id","newID");
        $("h1").attr({
            id:'newID',
            class:'c1'
        })
    })

    //create element
    $("#createBtn").on("click",creatingElement);
    function creatingElement()
    {
        var elem1=$("<h2>New element added</h2>");
        var elem2="<h2>New element added 2</h2>";
        var elem3=document.createElement("h2");
        elem3.innerHTML="NEw Element added 3";
        var firstp=$("p");


        $("#container").append(elem1,elem2,elem3,firstp.clone());
        // $(elem1,elem2,elem3).appendTo("#container");
        // $("#container").prepend(elem1,elem2,elem3);
        
    }

    // remove element

    $("#removeBtn").click(function()
        {
            $("li").empty()
        })

        
        $("h1").hover(function(){
            $(this).css("color",'green');
        },function(){
            $(this).css("color",'yellow');
        });

        

})