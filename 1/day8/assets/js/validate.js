let username = document.getElementById("user-name");
let userEmail = document.getElementById("user-email");
let userPassword = document.getElementById("user-password");
let confirmPassword = document.getElementById("confirm-password");
let error = document.getElementsByClassName("error");
let myform = document.getElementsByTagName("form");
let btn = document.getElementById("btn_submit");
let user =[]

let userInfo = {name:"",email:"",password:""}

let validateusername = /^[A-Za-z][a-z]+$/
let validateuseremail = /^[a-zA-Z][a-zA-Z0-9]+(@)[a-zA_Z]+(.com)$/


function getValidName(name) {
    if (validateusername.test(name)) {
        error[0].innerHTML = "";
        userInfo.name=name;

        return true
    }else{
        error[0].innerHTML = "username dosen't match";
        return false;
    }
}

function getValidEmail(email) {
    if (validateuseremail.test(email)) {
        error[1].innerHTML = "";
        userInfo.email=email;
        return true
    }else{
        error[1].innerHTML = "Email dosen't match";
        return false;
    }
}

function getValidPassword(password) {
    if (password >= 8) {
        error[2].innerHTML = "";
        return true
    }else{
        error[2].innerHTML = "password dosen't match";
        return false;
    }
}

function getValidConfirm(confirm) {
    let password = userPassword.value;
    if (getValidPassword(password)) {
        if (password == confirm) {
            error[3].innerHTML = "";
            userInfo.password = password;
            return true;
        }else{
            error[3].innerHTML = "confirm dosen't match";
            return false;
        }
    }

}

// user = JSON.parse(localStorage.getItem("user"));

console.log();
btn.addEventListener("click",(e)=>{
    e.preventDefault();
    let name = username.value;
    let email = userEmail.value;
    let password = confirmPassword.value;
    let getName = getValidName(name);
    let getEmail = getValidEmail(email);
    let confirm = getValidConfirm(password);
   

   
    
    if (getName && getEmail && confirm) {
       
                    user.push(userInfo);
                    localStorage.setItem("user",JSON.stringify(user));
                    localStorage.setItem("username",name);
                    location.href = "exam/index.html";
        
                
        
        
        
        
        
        
     }else{
        alert("all feilds required");
         e.preventDefault();
     }

     
})

