var arr_image = ["2.jpg","6.jpg","3.jpg","4.jpg"];
var products =[
    {id:0,name:"dell laptob",image:"dell_laptob.jpg",category:"laptobs",price:"600$"},
    {id:1,name:"hp laptob",image:"hp_laptob.jpg",category:"laptobs",price:"550$"},
    {id:2,name:"drone",image:"drone_image.jpg",category:"devices",price:"170$"},
    {id:3,name:"camera",image:"camera_image.jpg",category:"devices",price:"110$"},
    {id:4,name:"iphone",image:"iphone_phone.jpg",category:"phones",price:"370$"},
    {id:5,name:"samsung",image:"samsung_phone.jpg",category:"phones",price:"300$"},

];

var selectors = document.querySelectorAll("th");
var image = document.getElementById("imageSlider");
var currentIndex = 0;
var dis_pro = document.getElementById("displayProducts");
var userName = document.getElementById("userName");

//Slider Images

window.addEventListener("load",function () {
    this.setInterval(() => {
        currentIndex++;
        if (currentIndex == 4) {
            currentIndex =0;
        }
        image.setAttribute("src",arr_image[currentIndex])
    }, 3000);

    var cartData =JSON.parse(localStorage.getItem("cartData"));
    document.getElementById("cartNum").innerHTML = cartData.length;
})

//------------------------------------------





//get username
window.addEventListener("load",function() {
    var userInfoObjec = document.cookie.split(";")
    var user_info_arr = [];
    for(var i=0;i<userInfoObjec.length;i++){
        user_info_arr.push(userInfoObjec[i].split("="))
        
    }
    console.log(user_info_arr.length);
    for(var x=0;x<user_info_arr.length;x++){
        console.log(user_info_arr[x][0]);
        if (user_info_arr[x][0] == "userName") {
            var name = user_info_arr[x][1];
        }
    }
    userName.innerHTML = name;   

    
})

//clear cookie

function cleardata() {
    var user_info = document.cookie.split(";");
    var user_info_arr = [];
   

    for(var i=0;i<user_info.length;i++){
        user_info_arr.push(user_info[i].split("="));
    }
    for(var x=0;x<user_info_arr.length;x++){
        document.cookie = user_info_arr[x][0] + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }

    location.href = "signUp.html";
}


var above = document.getElementById("arrow_above");
above.addEventListener("click",function () {
    
    location.href="#navbar";
    
    
    
})

function nextSlider() {
    currentIndex++;
    if (currentIndex == arr_image.length) {
        currentIndex = 0;
    }
    image.setAttribute("src",arr_image[currentIndex])

}

function prevSlider() {
    currentIndex--;
    if (currentIndex == -1) {
        currentIndex = arr_image.length -1;
    }
    image.setAttribute("src",arr_image[currentIndex])


}
