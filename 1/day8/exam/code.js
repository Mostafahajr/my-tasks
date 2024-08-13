


let btn = document.querySelector("button");
let i =0;
let sumOfDegrees =0;
let result=0;
let quistions = [
    {
        q:"quistion1",
        answers:["a1","a2","a3"],
        correctAnswer : "a1",
        degree: 1
    },
    {
        q:"quistion2",
        answers:["a1","a2","a3"],
        correctAnswer : "a2",
        degree: 1
    },
    {
        q:"quistion3",
        answers:["a1","a2","a3"],
        correctAnswer : "a3",
        degree: 1
    },
    {
        q:"quistion4",
        answers:["a1","a2","a3"],
        correctAnswer : "a3",
        degree: 1
    }
]


onload=()=>{
    createElements(i);
    getusername();

    let date = new Date()
    let min = date.getMinutes();
    let sec = 59;
    
    date.setMinutes(min+29);
    let fin = date.getMinutes()
    if (fin > min) {
         result = fin - min;
    }else{
         result = fin - min;
    }
    
    var getTimeContainer = document.getElementById("timeOut");
    setInterval(()=>{
        sec--;
        if (sec == 0) {
            sec = 59;
        }
        getTimeContainer.innerHTML = result+":"+sec;
    },1000);
    
    
        setInterval(function () {
            result--;
            if (result == -1) {
                clearInterval();
                getScore();
    
            }
            getTimeContainer.innerHTML = result+":"+sec;  
        },60000)
        
    
}

function createElements(i) {
    let contain = `
    
    <h2>${quistions[i]["q"]}</h2>
    <div class="answers">
        <span onclick ='checkValue(event,${i})'>
            ${quistions[i]["answers"][0]}
        </span>
        <span onclick ='checkValue(event,${i})'>
            ${quistions[i]["answers"][1]}

        </span>
        <span onclick ='checkValue(event,${i})'>
            ${quistions[i]["answers"][2]}

        </span>
    </div>
    <p id="correctAnswer">correct answer is (${quistions[i]["correctAnswer"]})</p>

`;

document.getElementById("qustion-container").innerHTML=contain;


}



function checkValue(event,i) {
    
    let answer =event.target;
    let realAnswer = quistions[i]["correctAnswer"];
    console.log(answer);
    if (answer.innerHTML.trim() == realAnswer) {
        sumOfDegrees += quistions[i]["degree"];
        event.target.classList.toggle("right");

    }else{
        event.target.classList.toggle("wrong");
        document.getElementById("correctAnswer").style.display="grid";

    }

    btn.style.display="grid";
    let disabled = document.querySelectorAll("span");
    console.log(disabled);
    for (let i = 0; i < disabled.length; i++) {
        
        disabled[i].classList.add("disable");
    }

   
}


btn.addEventListener("click",()=>{
    i++;
    if (i == quistions.length) {
        getScore();
        i =-1;
        btn.innerHTML="restart exam";
    }else{
        createElements(i);
        btn.style.display="none";
        btn.innerHTML="Next";
    }
    
})

function getScore() {
    let score =`
    
    <div class="score">
                <span>
                    your score is <strong>${sumOfDegrees}</strong>  of ${quistions.length} 
                </span>
            </div>
    
    `
    document.getElementById("qustion-container").innerHTML=score;
}


function getusername() {
    let name = localStorage.getItem("username");

    document.getElementById("username").innerHTML=" "+name;
}


