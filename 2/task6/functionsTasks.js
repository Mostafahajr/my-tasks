// function checkArguments(x,y) {
//     if (arguments.length != 2) {
//         throw "argument must be equal 2"
//     }
// }
// // checkArguments(1,2);
// function addOnlyNumbers() {
//     var num = [];
//     for(var i=0;i<arguments.length;i++ ){
        
//         num.push(Number(arguments[i]))
//         if(isNaN(num[i]))
//             throw "Error : it is no a number"
//     }

    
// }

// // addOnlyNumbers(1,2,3,4,"wel");


// function reverseNumbers() {
//     var arr = [];
//     for(var i =0;i<arguments.length;i++){
//         arr.push(arguments[i]);
//     }
//     arr.reverse();
//     return arr;
// }
// // var result = reverseNumbers(1,2,3,4);
// // console.log(result);

// var arrRev = [];
// var arr = [];
// function reverseNumbers() {
    
//     for(var i =0;i<arguments.length;i++){
//         arr.push(arguments[i]);
//     }
//     var arrRevLen = arguments.length-1;
//     for(var j =arrRevLen;j>=0;j--)
//         {
            
//             arrRev.push(arr[j])
//         }
    
   
//     return arrRev;
// }

// var result2 = reverseNumbers(1,2,3,4,5)

// console.log(result2);
