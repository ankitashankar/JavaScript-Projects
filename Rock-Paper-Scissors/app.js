let uscore=0;
let compscore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const uscorepara=document.querySelector("#you");
const compscorepara=document.querySelector("#comp");
const newbutton=document.querySelector("#new");

const gencompchoice=()=>{
    let options=["Rock","Paper","Scissors"];
    let ch=Math.floor(Math.random()*3);
    return options[ch];
    
}
const showWinner=(userwin,userChoice,compChoice)=>
{
    if(userwin){
    uscore++;
    uscorepara.innerText=uscore;
    msg.innerText=`You win! your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor="green";
    }else{
         compscore++;
         compscorepara.innerText=compscore;
         msg.innerText=`You lose. ${compChoice} beats your ${userChoice}`;
         msg.style.backgroundColor="red";
    }
}
const playgame=(userChoice)=>{
    let compChoice=gencompchoice();
  

    if(userChoice===compChoice){
    
        msg.innerText="Draw Game. please try again";
        msg.style.backgroundColor=" #081b31";
    }else{
        let userwin=true;
        if(userChoice==="Rock"){
            userwin=compChoice==="Paper"?false:true;
        }
        else if (userChoice==="Paper"){
             userwin=compChoice==="Scissors"?false:true;
        } else {
            userwin=compChoice==="Rock"?false:true;
        }
         showWinner(userwin,userChoice,compChoice);
        }
    }

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
    let userChoice=choice.getAttribute("id");
    playgame(userChoice);
    });
});

const resetBox=()=>{
    uscore=0;
    compscore=0;
    uscorepara.innerText=uscore;
    compscorepara.innerText=compscore;
    msg.innerText="Play your move";
    msg.style.backgroundColor=" #081b31";


}
newbutton.addEventListener("click",resetBox);
