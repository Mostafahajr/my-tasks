
var products =[
    {id:0,name:"dell laptob",image:"images/lab_1.jpg",category:"laptobs",price:600,numOfPro:0},
    {id:1,name:"hp laptob",image:"images/lab_2.jpg",category:"laptobs",price:550,numOfPro:0},
    {id:2,name:"drone",image:"images/drone_1.jpg",category:"devices",price:170,numOfPro:0},
    {id:3,name:"camera",image:"images/camera.jpg",category:"devices",price:110,numOfPro:0},
    {id:4,name:"iphone",image:"images/phone_1.jpg",category:"phones",price:370,numOfPro:0},
    {id:5,name:"samsung",image:"images/phone_2.jpg",category:"phones",price:300,numOfPro:0},

];

var cart = JSON.parse(localStorage.getItem("cartData"));

var sum=0;
var selectors = document.querySelectorAll("th");
var image = document.getElementById("imageSlider");
var currentIndex = 0;
var dis_pro = document.getElementById("displayProducts");
var userName = document.getElementById("userName");
var user_show_name;
//create Card Elements
function createElements(name,imageSrc,price,i) {
    var divCard = document.createElement("div");
    divCard.classList.add("card");
    divCard.setAttribute("onclick","showProduct("+i+")")

    var cardimage = document.createElement("img");
    cardimage.setAttribute("src",imageSrc);
    cardimage.classList.add("proImage");
    

    var div_content = document.createElement("div");
    div_content.classList.add("content");


    var div_container_content = document.createElement("div");
    var heading = document.createElement("h3");
    
    heading.innerText= name;
    var proPrice = document.createElement("p");
    proPrice.innerText= price+" $";

    
    div_container_content.append(heading,proPrice)
    div_content.append(div_container_content)
    // var divBtn = document.createElement("div");
    // divBtn.classList.add("cardBtns");

    // var showBtn = "<button id='showBtn' onclick='showProduct("+i+")'>show</button>"
    // // showBtn.setAttribute("id","showBtn");
    // // showBtn.innerHTML = "show";

    var addCartBtn =document.createElement("img");
    addCartBtn.setAttribute("src","images/garden_cart.png");
    addCartBtn.classList.add("cartGarden")
    addCartBtn.setAttribute("onclick","addTocart("+i+")")

    //  "<img src='' class='cartGarden'>"
    // addCartBtn.setAttribute("id","addCartBtn");
    // addCartBtn.innerHTML = "add cart";

    
    divCard.append(cardimage,div_content,addCartBtn);
    
    dis_pro.append(divCard)
}
//---------------------------------------------
//filter products
function filterProducts(e) {
    dis_pro.innerHTML="";
    var getTarget= e.target.getAttribute("id");
    e.target.classList.toggle("active");
    for (let i = 0; i < products.length; i++) {
        if (getTarget == products[i].category) {
            createElements(products[i].name,products[i].image,products[i].price,i);
        }

        if (getTarget == "all") {
            createElements(products[i].name,products[i].image,products[i].price,i);
        }
        
    }
    
}
//get username
window.addEventListener("load",function() {
     for (var i = 0; i < products.length; i++) {
        
    createElements(products[i].name,products[i].image,products[i].price,i);
}


    var userInfoObjec = document.cookie.split(";")
    var user_info_arr = [];
    for(var i=0;i<userInfoObjec.length;i++){
        user_info_arr.push(userInfoObjec[i].split("="))
        
    }
    
    for(var x=0;x<user_info_arr.length;x++){
        
        if (user_info_arr[x][0] == "userName") {
            user_show_name = user_info_arr[x][1];
        }
    }
    userName.innerHTML = user_show_name; 

    document.getElementById("cartNum").innerHTML = cart.length;
    // cartlength();  

    
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
//add to cart
function addTocart(index) {
    
    for(var i=0;i<products.length;i++){
        if (products[i].id == index ) {
            for(var x=0;x<cart.length;x++){
                if (cart[x].id == index) {
                    alert("you already add this items");
                    return;
                }
            }  
             
                cart.push(products[i]);
            
           
        }
    }
    
    document.getElementById("cartNum").innerHTML = cart.length;
   
    setLocalStorage("cartData",cart);
        
        
}
//show Product Details
var proDetails = document.getElementById("proDetails");
function showProduct(index) {

        
        setLocalStorage("show_product",products[index]);
        location.href="showProduct.html";

   

    
}



// var divs_container = document.querySelectorAll(".card");


// for (let i = 0; i < divs_container.length; i++) {
    
//     divs_container[i].addEventListener("click",function () {
        
//     })
// }












function setLocalStorage(key,arr) {
    localStorage.setItem(key,JSON.stringify(arr))

}







var mystring = "dadasda sdadasda adasdasd";
console.log(mystring.trim());



