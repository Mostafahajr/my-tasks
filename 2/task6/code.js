

var allUsers;

function displayData(){
    
    var cell0 = document.getElementsByClassName("cell0");
    var cell1 = document.getElementsByClassName("cell1");
    var cell2 = document.getElementsByClassName("cell2");
    var cell3 = document.getElementsByClassName("cell3");
    var x;
   

    console.log(cell3[1]);
    for(x=0;x<allUsers.length;x++){ 
            tableCreateElements(); 
            
            cell0[x].innerHTML = x;
            cell1[x].innerHTML = allUsers[x].name;
            cell2[x].innerHTML = allUsers[x].email;
            var userId = x+1;
            cell3[x].innerHTML = "<button class='showDataInAntherPage' onclick='displayUser("+userId+")'>show</button>";
        

    }
     
    

}



function tableCreateElements() {
    var tRow = document.createElement("tr");
    var elementsNumber = document.querySelectorAll("table thead th");
    var tCell = []

    for(var i = 0;i<elementsNumber.length;i++)
        {
            tCell = document.createElement("td");
            var className = "cell"+i;
            tCell.classList.add(className);
            tRow.append(tCell);

        }

        
    

    document.getElementById("tableBody").append(tRow);
    
}

function getJsonData() {
    
    var usersData = new XMLHttpRequest();
    usersData.open("GET","https://jsonplaceholder.typicode.com/users");
    usersData.send()
    
    usersData.onreadystatechange = function () {
        
        if (usersData.readyState == 4) {
            
            if (usersData.status == 200) {
                
                allUsers = JSON.parse(usersData.response);
                displayData();
                
            }
            
        }

       
    }
    
}


// getJsonData();




function displayUser(i) {
    location.href="https://jsonplaceholder.typicode.com/users/"+i
}





