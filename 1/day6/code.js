

function ask() {
   var num1 =  prompt("enter num1...");
   var num2 =  prompt("enter num2...");

    num1 = parseInt(num1);
    num2 = parseInt(num2);

   var res = sum(num1,num2);

   document.write("result is "+ res);
}
function sum(n1,n2) {
    return n1 + n2;
}



function filter(ar , num) {
    var counter = 0;

    for (let i = 0; i < ar.length; i++) {
        
        if (num == ar[i]) {
            counter++;
        }
    }

    alert("the number is " + counter)
    
}









function remove_char(ar,char){
    if (ar.includes(char)) {
        for (let i = 0; i < ar.length; i++) {
            if(char == ar[i])
                ar.splice(i,1);
        
        }
        console.log(ar)
        return false;
    }else{
        alert("the string dosent include this char");
        return true
    }
    
}






var task = prompt("which task (1,2,3,4,5,6,7,8)");

switch (task) {
    case "1":
        alert("welcome to my site");
        var name1 = prompt("enter your name")

        document.write("<h1>"+name1+"</h1>");

        break;

    //------------------------------------------------------------ 
    case "2":

        document.write("<button onclick='ask()'>click here</button>");
        break;
    // ---------------------------------------------------------------------------------------------
    case "3":
        var math_ex = prompt("enter your  math expression (2+3*5)")

        document.write( "<h1> result is"+eval(math_ex)+"</h1>");

        break;


    // ---------------------------------------------------------------------------------------------

    case "4":
        var uname;
        var year;
        do {
            uname = prompt("Enter your name..");
        } while (isFinite(Number(uname)));
        do {
            year = prompt("Enter your year..");
            year = parseInt(year);
        } while (isNaN(year) || year >= 2010 );
        age = 2024 - year;
        document.write("<table>");
        document.write("<tr>");
        document.write("<th>name : </th> <td>"+uname+"</td>");
        document.write("</tr>");
        document.write("<tr>");
        document.write("<th>year : </th> <td>"+year+"</td>");
        document.write("</tr>");
        document.write("<tr>");
        document.write("<th>age : </th> <td>"+age+"</td>");
        document.write("</tr>");
        document.write("</table>");

        break;

        // -------------------------------------------------------

    case "5":
        do {
            var date = prompt("enter your date in formate(dd-mm-yyyy)");
        } while (getDate(date));
        
        
        
        function getDate(d) {
            
            if (d.length != 10 || d.indexOf("-") != 2 || d.lastIndexOf("-") != 5) {
                alert("wrong date");
                return true;
            }
        
            return false;
        }


        break;

// -----------------------------------------------------------------------------------------------------------------------
    case "6":

        var number = prompt("enter the number...");
        var arr = [1,2,3,4,5,6,7,4,4,2,2,7,3,1,1,1];
        filter(arr,number);
        
    case "7":
        var arr_char = ["a","b","c","d","e","f"];
        do {
        
            var char = prompt("enter your char...");

        } while (remove_char(arr_char,char));

        break;

    case "8":

        for (let i = 1; i <= 6; i++) {
        
            document.write("<h"+i+">welcome to my site </h"+i+">");
        }
    
    default:
        break;
}