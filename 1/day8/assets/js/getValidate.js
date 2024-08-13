let username = document.getElementById("user-name");
let userPassword = document.getElementById("user-password");
let btn = document.getElementById("btn_submit");
let users =JSON.parse(localStorage.getItem("user"));



btn.addEventListener("click",(e)=>{
    e.preventDefault();
    let name = username.value;
    let password = userPassword.value;
    users.forEach(user => {
        if ((user.name == name || user.email == name) && user.password == password ) {
            localStorage.setItem("username",user.name);
            location.href = "exam/index.html";

        }else{
            alert("user dosen't exist");
        }
    });
})





