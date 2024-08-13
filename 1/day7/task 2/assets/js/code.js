var myForm = document.getElementById("myform");


var username = document.getElementById("username");
var password = document.getElementById("password");
var image_src = document.getElementById("image");

var error = document.getElementsByClassName("error");

function includesNumber(str) {
    return str.split('').some(char => !isNaN(char) && char !== ' ');
}
  
function includeSympols(str) {
    var sympols = ["@","#","$","%","^","&","*"]
    return str.split('').some(char => sympols.includes(char));
}




// --------------------------------------------------------
// validate username
// --------------------------------------------------------


function validateUsername() {
    let name = username.value;
    
    if (name.length > 3) {
        if (includesNumber(name)) {
             error[0].innerHTML = "username  should not have any numbers";
             return false;
        }else{
        
         return true;
        }
         
 
    }else{
     error[0].innerHTML = "username length should be more than 3";
     return false;
    }
}



// =-------------------------------------------------
// validate password
// --------------------------------------------------

function validatePassword() {
    let pass = password.value;
    console.log(pass);
    if (pass.length >= 8) {
        if (includeSympols(pass)) {
            return true;
        }else{
           
            error[1].innerHTML = `password should have sympols`;
            
            return false;
        }
    }else{
        error[1].innerHTML = "password length should be more than 8";
        return false;
    }
}





// ------------------------------------------------
// validate image sorce
// -------------------------------------------------


function getExtintion(file) {
    let src = ["jpg","png"];
    return src.some(img => img === file)
}


function validateImage(){
    console.log(image_src.value.split("."));
    let file_ex = image_src.value.split(".");
    console.log(file_ex[1]);
    

    if (getExtintion(file_ex[1])) {
        return true;
    }else{
        error[2].innerHTML = "image extintion must be include jpg , png";
        return false;
    }
}

myForm.addEventListener("submit",(e)=>{
    let user_vali = validateUsername();
    let pass_vali = validatePassword();
    let image_vali = validateImage();

    console.log(user_vali,pass_vali,image_vali);


    if (!user_vali || !pass_vali || !image_vali) {
            e.preventDefault();
            if (!image_vali) {
                
            }
            return false;
    }else{
        e.preventDefault(none);
    }
    
   
})


    



