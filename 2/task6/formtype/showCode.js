

var imagesrc = document.querySelector("img");
var username = document.getElementById("usernamecooki");
var numberOfVisits = document.getElementById("numOfVisits");




function getCooki() {
    var getcookies={};
    var getKey=[];
    getcookies = document.cookie.split(";");
    console.log(getcookies)
    for (var i = 0; i < getcookies.length; i++) {
        getKey.push(getcookies[i].split("="));
        
    }
    
    return getKey;
    
}


window.addEventListener("load",function () {
    
    var cookie = getCooki();
    console.log(cookie);
    var i =0;
    
        console.log(i);
        
            username.innerHTML = cookie[0][1];
        
        
            imagesrc.setAttribute("src",cookie[1][1]);
            
        
        
            var num = Number(cookie[2][1]);
            num++;
            document.cookie = "count ="+num
            numberOfVisits.innerHTML = num;
        

        i++;
    
        
        
    
  
    
    
    
    
})



