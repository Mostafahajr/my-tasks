var studentName = document.getElementById("enteredName");
var studentAge = document.getElementById("enteredAge");



var studentContainer = [];
function showData() {
    
    
            var studentAgeNum = Number(studentAge.value);
            var student={
                name:studentName.value,
                age:studentAgeNum,
                
            }
            studentContainer.push(student);
            console.log(studentAge.value)
            if(studentName.value == null || studentName.value.length < 3){
                alert("name must be  more than 3 letters");
            }else if(studentAgeNum == null || studentAgeNum < 18){

                alert("age must be more than 18")

            }else{
                
                

                var tableRow = document.createElement("tr");
            
                for(var x=0;x<4;x++){
                        var tableCell = document.createElement("td");
                        tableCellClass = "cell" + x;
                        tableCell.classList.add(tableCellClass);
                        tableRow.append(tableCell);
                } 
                document.getElementById("tableBody").append(tableRow);
                
                clearForm();
                displayData();    
            }
            
}

function displayData() {

    var rows = document.querySelectorAll("tr");
    var cell1= document.querySelectorAll("tr .cell0");
    var cell2= document.querySelectorAll("tr .cell1");
    var cell3= document.querySelectorAll("tr .cell2");
    var cell4= document.querySelectorAll("tr .cell3");
    
    for(var i=0;i<studentContainer.length;i++){
        cell1[i].innerHTML=i+1;
        cell2[i].innerHTML =studentContainer[i].name;
        cell3[i].innerHTML =studentContainer[i].age;
        cell4[i].innerHTML ="<button onclick='deleteData("+i+")'>delete</button>";
        
    }
}

var table = document.getElementById("showData") 

function deleteData(x) {
    console.log(studentContainer)
    studentContainer.splice(x,1);
    table.deleteRow(x+1);
    
    displayData();
    
}

function clearForm() {
    studentName.value = " ";
    studentAge.value = " ";
}




// -----------------------------------------------------


// ------------------------------------------------------



