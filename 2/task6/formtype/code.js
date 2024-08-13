var userName = document.getElementById("userName");
var userEmail = document.getElementById("userEmail");

var maleChecked = document.getElementById("genderMale");
var maleImageSrc = document.getElementById("maleImage").getAttribute("src");

var femaleChecked = document.getElementById("genderFemale");
var femaleImageSrc = document.getElementById("femaleImage").getAttribute("src");


function setCookie(key,value) {
    document.cookie = key + "="+ value ;
}
  

function getGender(e) {
    e.preventDefault();
    var count = 0;
    setCookie("username",userName.value);
    if (maleChecked.checked) {
        setCookie("imagesrc",maleImageSrc)
    }

    if (femaleChecked.checked) {
        setCookie("imagesrc",femaleImageSrc)
    }
    setCookie("count",count)
    
    location.href = "showGender.html"
    
    
}

