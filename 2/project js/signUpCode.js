var userName = document.getElementById("userName");
var userEmail = document.getElementById("userEmail");
var password = document.getElementById("userPassword");
var confirmPassword = document.getElementById("confirmPassword");
var user_info = {name:null,email:null,password:null};
var errorsContainer = document.getElementsByTagName("p");
var mySignUp = document.getElementById("mySignUp")
var users = [];

var emailRegx = /^[a-zA-Z]+@gmail.com$/ ;


console.log(errorsContainer)


mySignUp.addEventListener("submit",function () {
    clearCookie();
    var name = userName.value;
    console.log(name.length);
    if (name.length <3) {
        errorsContainer[0].innerHTML = "name must be more than or equal 3 letters";
    }else{
        document.cookie = "userName=" +name;
        user_info.name =name;
        errorsContainer[0].innerHTML = "";

    }
})
mySignUp.addEventListener("submit",function () {

    
    

    if (emailRegx.test(userEmail.value)==false) {
        errorsContainer[1].innerHTML = "email is not valid";
        
        
    }else{
        document.cookie ="email="+userEmail.value;
        user_info.email =userEmail.value;
        errorsContainer[1].innerHTML = "";
        
    }
})
mySignUp.addEventListener("submit",function () {
    if (password.value.length <8) {
        errorsContainer[2].innerHTML = "password must be more than or equal 8";
        errorsContainer[3].innerHTML = "password and confirm must match";
    }else{
        errorsContainer[2].innerHTML = "";
        if (password.value == confirmPassword.value) {
            document.cookie = "password="+password.value;
            user_info.password =password.value;
            errorsContainer[3].innerHTML = "";
            

        }else{
            errorsContainer[3].innerHTML = "password and confirm must match";
        }
    }

})

mySignUp.addEventListener("submit",function (event) {
    event.preventDefault()
        if (user_info.name == null || user_info.password == null || user_info.email == null) {
            errorsContainer[4].innerHTML = "all feilds required";
        }else{
            
            location.href = "homePage.html";
        }    
})



function clearCookie() {
    document.cookie = "userName= '';expires=Thu, 01 Jan 1970 00:00:00 GMT";
    document.cookie = "password= '';expires=Thu, 01 Jan 1970 00:00:00 GMT";
    document.cookie = "email= '';expires=Thu, 01 Jan 1970 00:00:00 GMT";


}







