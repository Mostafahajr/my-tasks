
var showProduct;

//create show cart
window.addEventListener("load",function () {
    
    showProduct = JSON.parse(localStorage.getItem("show_product"));

    products = JSON.parse(localStorage.getItem("cartData"));

    
        
            var imageSrc = document.createElement("img");
            imageSrc.setAttribute("src",showProduct.image);
            document.getElementById("showProductDetails").append(imageSrc);
            for (let x = 0; x < 5; x++) {
                var cell =document.createElement("li");
                cell.classList.add("cells");
                document.getElementById("proDetails").append(cell);  
            }

            var cells = document.querySelectorAll(".cells");

            cells[0].innerHTML ="Name : <span>"+ showProduct.name+"</span>";
            cells[1].innerHTML="Category : <span>"+ showProduct.category+"</span>";
            cells[2].innerHTML=" Description :<p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis optio nobis est obcaecati iure numquam reprehenderit enim ducimus incidunt repudiandae aperiam, voluptates harum quam, odit rem provident tenetur culpa labore.</P>"
            cells[3].innerHTML = "Price : <span>"+ showProduct.price+"</span>";
            cells[4].innerHTML ="<button onclick='addToCart()'>Add To Cart</button>";
            document.getElementById("cartNum").innerHTML = products.length;
     
})

function addToCart() {
    showProduct = JSON.parse(localStorage.getItem("show_product"));
    var products = JSON.parse(localStorage.getItem("cartData"));

    for(var x=0;x<products.length;x++){
        if (products[x].id == showProduct.id) {
            alert("you already add this items");
            return;
        }
    }  
    products.push(showProduct);
    setLocalStorage("cartData",products);
    
    document.getElementById("cartNum").innerHTML = products.length;


}





// function addTocart(index) {
    
//     for(var i=0;i<products.length;i++){
//         if (products[i].id == index ) {
//             for(var x=0;x<cart.length;x++){
//                 if (cart[x].id == index) {
//                     alert("you already add this items");
//                     return;
//                 }
//             }  
             
//                 cart.push(products[i]);
            
           
//         }
//     }


// }

function setLocalStorage(key,arr) {
    localStorage.setItem(key,JSON.stringify(arr))

}


//get userName
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
   cartlength();  

   
})

function cleardata() {
    var user_info = document.cookie.split(";");
    var user_info_arr = [];
   

    for(var i=0;i<user_info.length;i++){
        user_info_arr.push(user_info[i].split("="));
    }
    for(var x=0;x<user_info_arr.length;x++){
        document.cookie = user_info_arr[x][0] + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";    }

    location.href = "signUp.html";
}