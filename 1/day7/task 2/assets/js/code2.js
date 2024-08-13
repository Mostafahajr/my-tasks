
// // let user_info_ex = location.href.split("?");
// let user_info = user_info[1].split("&");

let qustionMark = location.href.indexOf("?")

let user_name = location.href.slice(qustionMark,location.href.length)
let andOperator = user_name.indexOf("&");
user_name=user_name.slice(0,andOperator);
let equalOperator = user_name.indexOf("=")
user_name = user_name.slice(equalOperator+1,user_name.length).replace("+"," ");

document.write(`<h1>Welcome ${user_name}</h1>`)

console.log(user_name);

