var userName = document.getElementById("userName");
var userEmail = document.getElementById("userEmail");
var userPassword = document.getElementById("userPassword");
var usercountry = document.getElementById("country");
var usergender = document.getElementsByName("gender");
var usersports = document.getElementsByName("sports");
var buttonClicked = document.getElementById("btn");

var ErrorContainer = document.querySelectorAll(".Error");

var emailValdiat = /^[a-b]+@[a-b]+.com$/

function resetForm() {
    userName.value =" ";
    userEmail.value =" ";
    userPassword.value =" ";
    usercountry.value =" ";
    usergender[0].checked =false;
    usergender[1].checked =false;
    usersports[0].checked =false;
    usersports[1].checked =false;
    usersports[2].checked =false;
    for(var i =0;i<ErrorContainer.length;i++){
        ErrorContainer[i].innerHTML = "";
    }




}

var validateForm = function (e) {
    e.preventDefault();
    
    var user ={
        name:userName.value,
        email:userEmail.value,
        password:userPassword.value,
        country:usercountry.value,
        genderMale:usergender[0].checked,
        genderFemale:usergender[1].checked,
        sport1:usersports[0].checked,
        sport2:usersports[1].checked,
        sport3:usersports[2].checked,

    }
    if (user.name == '') {
        
        userName.style.border ="1px solid red";
        ErrorContainer[0].innerHTML = "name is required";
        ErrorContainer[0].style.color = "red";
    }else{
        userName.style.border ="1px solid #000";
        ErrorContainer[0].innerHTML = "";
    }
    
    
    
    if(emailValdiat.test(user.email) == false){
        
        userEmail.style.border ="1px solid red";
        ErrorContainer[1].innerHTML = "Email is not Valid";
        ErrorContainer[1].style.color = "red";

    }else{
        userEmail.style.border ="1px solid #000";
        ErrorContainer[1].innerHTML = "";
    }
     if (user.password.length < 8 ) {
        userPassword.style.border ="1px solid red";
        ErrorContainer[2].innerHTML = "password must be more than 8 chars";
        ErrorContainer[2].style.color = "red";
        
    }else{
        userPassword.style.border ="1px solid #000";
        ErrorContainer[2].innerHTML = "";
    }
    
    if (user.genderMale == false && user.genderFemale == false) {
        usergender[0].style.border ="1px solid red";
        usergender[1].style.border ="1px solid red";
        ErrorContainer[3].innerHTML = "select your gender";
        ErrorContainer[3].style.color = "red";
        

    }else{
        
        ErrorContainer[3].innerHTML = "";
    }
     if (user.sport1 == false && user.sport2 == false) {
        usersports[0].style.border ="1px solid red";
        usersports[1].style.border ="1px solid red";
        usersports[2].style.border ="1px solid red";
        ErrorContainer[4].innerHTML = "select your at least two sports";
        ErrorContainer[4].style.color = "red";


        
    }else{
        ErrorContainer[4].innerHTML = "";
    } 
    
    if (user.sport3 == false && user.sport2 == false) {
        usersports[0].style.border ="1px solid red";
        usersports[1].style.border ="1px solid red";
        usersports[2].style.border ="1px solid red";
        ErrorContainer[4].innerHTML = "select your at least two sports";
        ErrorContainer[4].style.color = "red";
        
        
    }else{
        ErrorContainer[4].innerHTML = "";
    } 
    
    if (user.sport1 == false && user.sport3 == false) {
        usersports[0].style.border ="1px solid red";
        usersports[1].style.border ="1px solid red";
        usersports[2].style.border ="1px solid red";
        ErrorContainer[4].innerHTML = "select your at least two sports";
        ErrorContainer[4].style.color = "red";
          
    }else{
        ErrorContainer[4].innerHTML = "";
    } 
    
    
    if (user.country =='') {
        usercountry.style.border ="1px solid red";
        ErrorContainer[5].innerHTML = "select your country";
        ErrorContainer[5].style.color = "red";
    }else{
        ErrorContainer[5].innerHTML = "";
        usercountry.style.border ="1px solid #000";
    }
}


