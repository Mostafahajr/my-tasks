onload=function(){
    // this.document.write("welcome "+this.localStorage.getItem("username"))
    var regForm=document.forms['RegForm'];
    var username=regForm['username'];
    var phone=regForm['phone'];
    var email=regForm['email'];
    var password=regForm['password'];
    var conf_password=regForm['conf-password'];
    function checkFullName(input){
        var regName=/^[A-Z][a-z]{1,} [A-Z][a-z]{1,}$/;
        return regName.test(input);
    }
    function checkPhone(input){
        var regPhone=/^(010|012|011|015)[0-9]{8}$/;
        return regPhone.test(input);
    }
    function checkEmail(input){
        var regEmail=/^[a-z][a-zA-Z0-9]+@php{2,}\.(com|eg|edu)$/;
        return regEmail.test(input);
    }
    function confirmPassword(pass,conf_pass){
        if(pass==conf_pass){
            return true;
        }
    }
    var isvalid=true;
    regForm.onsubmit=function(){
        if(!checkFullName(username.value)){
            isvalid=false;
            document.getElementById("name-error").innerText="please enter valid fullName";
            username.style.borderColor="red";
        }
        if(!checkPhone(phone.value)){
            isvalid=false;
        }
        if(!checkEmail(email.value)){
            isvalid=false;
        }
        if(!confirmPassword(password.value,conf_password.value)){
            isvalid=false;
            password.style.borderColor="red";
            conf_password.style.borderColor="red";
            document.getElementById("conf-password-error").innerText="not equal";
        }
        return isvalid;
    }
}