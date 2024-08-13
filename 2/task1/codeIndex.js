




//------------------------------------------------------------------------------





//--------------------------------------------------


//------------------------------------------------------------








var chooseTheTask = prompt("Enter the number of the task(1,2,3,4)");
switch (chooseTheTask) {
    case '1':



        var uname = prompt("enter your name");
        for(var i =1; i<=6;i++){
            document.write("<h"+i+">welcome "+uname+"</h"+i+">")
        }
        break;



    case '2':



        var sumNum=0;
        console.log(typeof sumNum)

        while (sumNum < 101 && num != 0) {

            var num=prompt("enter your number")
            num = Number(num);
            
            if(isNaN(num) ==false){
                    
                        
                sumNum = sumNum + num;
                    
            }
            else
                alert("it is not a number")
            
            }
            

        alert("the sum is "+ sumNum);
        break;




    case '3':
        var userInput = prompt("enter your string");
        var num = 0;

        for(var i=0;i<userInput.length;i++){
            if (userInput[i]=="e") {
                num++;
            }
        }

        alert("the number of e letter is"+ num);
        break;

    case '4':
        var userName = prompt("Enter Your Name ");
        var userPhoneNumber = prompt("Enter Your Phone Number ");
        var userMobileNumber = prompt("Enter Your Mobile Number");
        var userEmail = prompt("Enter Your Email ");



        var sColor = prompt("chosse the color(blue , red ,green)");

        var today = new Date();
        var todayDate = today.toDateString();


        if (isNaN(userName)) {
            document.write("<h1><span class='color'>your name is</span> " + userName +"</h1>" );
           // document.write("<h1><span style='color:"+sColor+";'>your name is </span>" + userName +"</h1>" );


        }else{
            alert("your string is a number")
        }
        console.log(userPhoneNumber);

        if (userPhoneNumber.length == 8 && isNaN(userPhoneNumber)==false) {
            document.write("<h1><span class='color'> your phone number is</span> " + userPhoneNumber +"</h1>" );
            //document.write("<h1><span style='"+sColor+"'>your phone number is </span>" + userPhoneNumber +"</h1>" );

            

        }else{
            alert("write it in 8 digit")
        }

        var mobileRegx= /^01[0125][0-9]{8}$/;

        if (userMobileNumber.match(mobileRegx)) {

            document.write("<h1><span class='color'>your mobile number is</span> " + userMobileNumber +"</h1>" );
            //document.write("<h1><span style='"+sColor+"'>your mobile number is </span>" + userMobileNumber +"</h1>" );


        }else{
            alert("write it in 11 digit ")
        }

        var emailRegx = /^[a-zA-z0-9]{3}@[0-9a-zA-Z]{3}.com$/

        if (userEmail.match(emailRegx)) {
            document.write("<h1><span class='color'>your email is </span>" + userEmail +"</h1>" );
            //document.write("<h1><span style='"+sColor+"'>your email is </span>" + userEmail +"</h1>" );
            

        }else{
            alert("email is wrong (write it like abs@123.com")

        }

        document.write("<h1><span class='color'>today date is </span>" + todayDate +"</h1>" );

        var colorElement = document.querySelectorAll(".color");

        for(var i =0; i<colorElement.length;i++){
            colorElement[i].style.color = sColor;

        }

        break;


    default:
        break;
}


//---------------------------------------------------------------------



