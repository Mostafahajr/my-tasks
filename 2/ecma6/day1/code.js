// var arr = [-2,-1,0,1,2];

// var result = arr.filter(item => {
//     return item >= 0;
// })

// console.log(result);


// ----------------------------------------------------------------



// var arr_names = ["ahmed","amr","mona","mostafa"];

// var res_names = arr_names.map((item,index) => {
//    return item.charAt(0).toUpperCase() + item.slice(1);
// })

// console.log(res_names);


// -----------------------------------------------------------------


// var str = "dssffsdgvscc";

// if (str.toLowerCase()) {
//     console.log(true);
// }


// ---------------------------------------------------------------

// var arr_names = ["ahmed","amr","mona","mostafa"];

// var result = arr_names.filter((item) => {
//     return item.length > 3;
// })


// console.log(result);


// -------------------------------------------------------------


// let x = 10;

// let y = 20;

// [x,y] = [y,x];

// console.log("x : " + x,"y:" + y);


// ---------------------------------------------------


// function get_min_max(...w) {

//     console.log(...w);

//     let max = Math.max(...w);

    
    
//     var max_num = Math.max(...w);
//     var min_num = Math.min(...w);

//     return [max_num,min_num];

// }


// var arr = [1,2,3,4,5,3,4,9,6]

// var res = get_min_max(...arr);


// console.log(res);



// -------------------------------------------



var arr = ["apple","strawberry","banana","orange",1];

   
var test = arr.some((item) => {
    return typeof item !== 'string';
})
console.log(test);

// var test2 = arr.some((item) => {
//     return item.startsWith("a");
// });
// console.log(test2);


// var arr2 = arr.filter((item) => {
//     return item.startsWith("b") || item.startsWith("s");
// })

// console.log(arr2);


// var result_fruits = arr.map(item => `i love ${item}`);

// console.log(result_fruits);


// result_fruits.forEach( (fruit) => 
//     {
//         console.log(fruit);
//     })


// ------------- reduce ------------------


// var arr = [1,2,3,4,5,3,4,9,6]

// function sum(arr) {
//     return arr.reduce((acu,current) => acu + current,0);
// }

// var res = sum(arr);

// console.log(res);
