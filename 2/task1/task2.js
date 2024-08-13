/*
var stringInput = prompt("enter your string");
function palindrome(stringInput) {
    var caseConfirm = confirm("Do You Want Case Sentative?");
    if (caseConfirm) {

        var stringRev = stringInput.split("").reverse().join("");
        if (stringInput === stringRev) {
            alert(stringInput+"is palindrome")
        }else{
            alert(stringInput+"is not a palindrome")
        }
    }else{
        var stringInputLW =  stringInput.toLowerCase();
        console.log(stringInputLW);
        var stringRev = stringInputLW.split("").reverse().join("");
        if (stringInputLW == stringRev) {
            alert(stringInput+"is palindrome")
        }else{
            alert(stringInput+"is not a palindrome")
        }
    }
    

    //var stringRev = stringSpil.
    console.log(stringRev);
}
palindrome(stringInput);

//-------------------------------------------------------


var num1Str = prompt("enter num1");
var num2Str = prompt("enter num2");
var num3Str = prompt("enter num3");

var num1 = Number(num1Str);
var num2 = Number(num2Str);
var num3 = Number(num3Str);


function add(num1,num2,num3) {
    return num1+num2+num3;
}
function muliple(num1,num2,num3) {
    return num1*num2*num3;
}
function division(num1,num2,num3) {
    return num1/num2/num3;
}

var addValue = add(num1,num2,num3);
var mulValue = muliple(num1,num2,num3);
var divValue = division(num1,num2,num3);

document.writeln("the sum of num :" + num1 +"+"+ num2 +"+"+ num3 +"="+ addValue);
document.writeln("the multiple of num :" + num1 +"*"+ num2 +"*"+ num3 +"="+ mulValue);
document.writeln("the divisin of num :" + num1 +"/"+ num2 +"/"+ num3 +"="+ divValue);


//----------------------------------------------------------------




var arrSorted = [];

for (var i = 1; i <= 5; i++) {
    var numStr = prompt("enter num"+i);
    var num = Number(numStr);

    arrSorted.push(num);
    
}


console.log(arrSorted);

function ascending(arr){
    var arrAscend = arr.sort(function(a,b){
        return a-b
    })

    return arrAscend;

}

function descending(arr){
    var arrdescend = arr.sort(function(a,b){
        return b-a
    });
    return arrdescend;

}





document.writeln("the entered numbers"+arrSorted);
var arrAscend = ascending(arrSorted);

document.writeln("the entered numbers is acending"+arrAscend);
var arrDescend = descending(arrSorted);

document.writeln("the entered numbers is decending"+arrDescend);



//------------------------------------------


var radius = prompt("enter the radius");
function circleArea(r){
    var powR = Math.pow(r,2);
    var pi = Math.PI;
    var area = powR * pi;

    return area;
}
var cirArea = circleArea(radius);
alert("the area of circle is " + cirArea);

//-----------------------------------------


var sqrRootInputStr = prompt("enter the number");
var sqrRootInput = Number(sqrRootInputStr);
function squareRoot(num){
    var sqrVal = Math.sqrt(num);
    return sqrVal;
}
var value = squareRoot(sqrRootInput);
alert("the square number of  "+sqrRootInput +"is" +value);

//----------------------------------------------------


var angle=prompt("enter the angle");
function cosOfAngle(a){
    var value = Math.cos(a * Math.PI /180);
    return value;
}
var cosValue = cosOfAngle(angle);
alert("the cos of angle is"+cosValue )

*/



//----------------------------------
/*
//fizz and buzz game

var number = prompt("enter the number");

function fizzAndBuzz(num){
    if(isNaN == false){
        if(num%3 == 0 && num%5 != 0)
            alert("Fizz...");
        else if(num%5==0 && num%3 != 0)
            alert("Buzz...");
        else if(num%5==0 && num%3 == 0)
            alert("Fizz Buzz...");
        else
            alert("None");

    }else{
        alert("it is string")
    }
    
}

fizzAndBuzz(number);

//------------------------------------------------

function whoAmI(){
    var flyVal =confirm("do you fly ?");
    if(flyVal){
        var flyWildVal = confirm("do you Wild ?");
        if(flyWildVal){
            alert(" you are an Eagle");
        }else{
            alert(" you are an parrot");

        }
    }else{
        var seaVal =confirm("Do you live under the sea ?");
        if(seaVal){
            var seaWildVal = confirm("Do you wild ?")
            if(seaWildVal){
                alert("you are shark")
            }else{
                alert("you are dolphine")
            }
        }else{
            var landWildVal = confirm("Do you wild ?")
            if(landWildVal){
                alert("you are a Lion");

            }else{
                alert("you are a cat");
            }

        }
    }
}

whoAmI();

//------------------------------------------

function getNames(){
    var arrNames = ["ahmed","mona","ali","mostafa"];

    var name1=Math.floor(Math.random(arrNames) * arrNames.length);
    var name2=Math.floor(Math.random(arrNames) * arrNames.length);

    if(name1 != undefined && name2!=undefined){
    if(name1 != name2){

        alert("name 1 : "+arrNames[name1]+"name 2 : "+ arrNames[name2])

    }
    

}

}

getNames();
*/
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



var par = document.getElementById("par").textContent;
console.log(par);



