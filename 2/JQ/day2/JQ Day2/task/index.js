


// $("#sel").on("click",function () {
//     $("#content1").slideToggle("fast");
// })

$(".sel").on("click",function () {
    // $("#content2").slideToggle("fast");
    $(".content").not($(this).next()).slideUp("fast");
    $(this).next(".content").slideToggle("fast");
})


$(".container").mouseenter(function () {
    $(".container").animate({"left":"0px"},500);

}).mouseleave(function () {
    $(".container").animate({"left":"-100px"},500);
})

