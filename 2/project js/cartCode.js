

var sum=0;
var counter=1;
var currentIndex = 0;
var numPro =[];
var num;
var totalProPrice=0;
var userName = document.getElementById("userName");
var user_show_name;


//get username
window.addEventListener("load",function() {
    


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

   
})
//clear cookie
function cleardata() {
   var user_info = document.cookie.split(";");
   var user_info_arr = [];
  

   for(var i=0;i<user_info.length;i++){
       user_info_arr.push(user_info[i].split("="));
   }
   for(var x=0;x<user_info_arr.length;x++){
       document.cookie = user_info_arr[x][0] + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT"
   }
   setLocalStorage("cartData",[])
   location.href = "signUp.html";
}
//create cart
window.addEventListener("load",function () {
         

        var cartData = JSON.parse(localStorage.getItem("cartData"));

        
       
        if (cartData.length !=0) {
            for (let i = 0; i < cartData.length; i++) {

                var cartCard = document.createElement("div");
                cartCard.classList.add("cartCard");
        
                var cartimage = document.createElement("img");
                cartimage.setAttribute("src",cartData[i].image);
        
                var pro_name = document.createElement("p");
                pro_name.innerHTML = "Name :"+cartData[i].name;
        
                var pro_price = document.createElement("span");
                pro_price.innerHTML = "Price : <span id='price'>"+cartData[i].price+"</span>$";
        
                var inputNumOfPro = document.createElement("input");
                inputNumOfPro.setAttribute("type","number");
                inputNumOfPro.setAttribute("min","1");
                inputNumOfPro.setAttribute("value","1");
                inputNumOfPro.setAttribute("onChange","changeNum(event,"+i+")")
        
                var btnCartRemove ="<img src='close.png' id = 'removeBtn' onclick='removeCart("+i+")'>";
                cartCard.append(cartimage,pro_name,pro_price,inputNumOfPro);
                cartCard.innerHTML += btnCartRemove
    
                document.getElementById("addToCart").append(cartCard);
                document.getElementById("cartNum").innerHTML = cartData.length;

                var price =Number(cartData[i].price);
                sum +=price; 
                
                
            }
            // numPro = document.querySelectorAll(".cartCard input");
            
            
            document.getElementById("priceTotal").innerHTML=sum;
            
        }else{
            var nonExist = this.document.createElement("h1");
            nonExist.innerText="you are not having any carts";
            document.getElementById("addToCart").append(nonExist);
        }

    document.getElementById("priceTotal").innerHTML= sum;

       
});

//remove cart
function removeCart(index) {
    var input = document.querySelectorAll(".cartCard input")
    var removeDivs = document.querySelectorAll(".cartCard");
    var cartData = JSON.parse(localStorage.getItem("cartData"));
    if (cartData.length == 1) {
        index = 0;
    }
    for(var i=0;i<cartData.length;i++){
        console.log(input);
        if (i == index) {
                num = input[i].value;
                num = Number(num);
                var price =Number(cartData[i].price);
                sum -= num*price;
                document.getElementById("priceTotal").innerHTML= sum; 
               
            
            cartData.splice(i,1);
            removeDivs[i].remove();
            warnning(cartData);
            setLocalStorage("cartData",cartData);
           
           
        }
    }
   
    
    
    
    
    document.getElementById("cartNum").innerHTML = cartData.length;
    // location.reload();
}

function setLocalStorage(key,arr) {
    localStorage.setItem(key,JSON.stringify(arr))

}



function changeNum(e,index) {
    sum= 0;
    var productsPrice = document.querySelectorAll(".cartCard span span");

    var products =JSON.parse(localStorage.getItem("cartData"))
    console.log(products[index].price);

    num = e.target.value;
    num = Number(num);
    var ProPrice = Number(products[index].price);
   
    totalProPrice =num*ProPrice;
    productsPrice[index].innerHTML = totalProPrice;
    
    for (let i = 0; i < productsPrice.length; i++) {
        var price = Number(productsPrice[i].innerHTML)
        sum+=price
        
    }
    
    document.getElementById("priceTotal").innerHTML=sum;
        

}



//sum price of producs
function buyProducts() {
    var cartData = JSON.parse(localStorage.getItem("cartData"));
if (cartData.length > 0) {
    location.href = "result.html";
}else{
    alert("your cart is empty");
}
        
    
    
}

//if there are not carts
function warnning(cartData) {
    if (cartData.length == 0) {
        
        var nonExist = this.document.createElement("h1");
            nonExist.innerText="you are not having any carts";
            document.getElementById("addToCart").append(nonExist);
    }
}




