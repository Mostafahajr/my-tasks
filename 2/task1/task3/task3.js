




//----------------------------------------


var inputvalue = document.getElementById("setData");
var showData = document.getElementById("showData")

function titleCase(str) {

    var splitArr = str.value.toLowerCase().split(" ");

    for(var i=0;i<splitArr.length;i++){
        
        splitArr[i]= splitArr[i].charAt(0).toUpperCase() + splitArr[i].substring(1);
        

    
    }

    splitArr = splitArr.join(" ");
    
    showData.innerHTML =splitArr;
    
 }
 
//  document.write(titleCase("mostafa hajr"));


//---------------------------------------------------


var getTagName = document.getElementById("enterTagName");
var getClassName = document.getElementById("enterClassName");
var getId = document.getElementById("enterId");
var getNameAtt = document.getElementById("enterNameAtt");
var setFormData = document.getElementById("showformData");


function getInfo(tag,className,ID,nameAtt) {
   if(tag != " "){
    var tagNameNum =document.getElementsByTagName(tag.value).length;

   }
   if(className != " "){
    var classNameNum =document.getElementsByClassName(className.value).length;

   }
   if(ID !=" "){
    var idNum =document.getElementById(ID.value);
    if(idNum){
        idval = true;
       }else{
        idval = false;
       }

   }
   if(nameAtt != " "){
        var nameAttNum =document.getElementsByName(nameAtt.value).length;

   }
   

   setFormData.innerHTML = "<span>the number of tags is " + tagNameNum + "</span><span>the number of classes is "+classNameNum+"</span><span>is the id exist?"+idval+"</span><span>the number of name attributes is"+ nameAttNum+"</span>";


//======================================================


function compare(){
    var arr = [1,3,3,11,11,1,5,4,3];
    
    
    for(var i=0;i<arr.length;i++){
        for(var j=i+1;j<=arr.length;j++)
        {
            if(arr[i] == arr[j]){
                arr.splice(j,1);  
            }
        }
    }

    
    arr.sort(function(a,b){
        return a-b
    });
    return arr
    
    
    }
var result=compare();
console.log(result);
console.log("num1 :"+ result[1]);
console.log("num2 :"+result[result.length -2]);





   




}






