let boxes=document.querySelectorAll(".box");
let btn=document.querySelector("#reset");
let msgcontainer=document.querySelector(".msgcontainer");
let newbutton=document.querySelector("#new");
let msg=document.querySelector("#msg");

let turnX = true;

const winnerBox = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

const resetBox=()=>{
    turnX=true;
    enablebox();
    msgcontainer.classList.add("hide");
}

boxes.forEach((box)=>{
    box.addEventListener("click",() => {
        if(turnX){
            box.innerText="X";
            turnX=false;
        }
        else{
            box.innerText="O";
            turnX=true;
        }
        box.disabled=true;
        checkwinner();

    });
});

const disablebox=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const enablebox=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}

const showWinner=(winner)=>{
    msg.innerText=`Congratulations, Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disablebox();
}

const checkwinner= () =>{
    for(let pattern of winnerBox){
    let pos1Val=boxes[pattern[0]].innerText;
    let pos2Val=boxes[pattern[1]].innerText;
    let pos3Val=boxes[pattern[2]].innerText;

    if(pos1Val!="" && pos2Val!="" && pos3Val!=""){
        if(pos1Val===pos2Val && pos2Val===pos3Val){
            showWinner(pos1Val);
        }
    }
    }

}

newbutton.addEventListener("click",resetBox);
btn.addEventListener("click",resetBox);
