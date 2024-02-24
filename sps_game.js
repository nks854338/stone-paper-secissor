let stone = document.querySelector("#stone");
let paper = document.querySelector("#paper");
let scissor = document.querySelector("#scissor");
let msg = document.querySelector(".winner");
let resetBtn = document.querySelector(".reset");
let player_move = document.querySelector(".player_move");
let player_score = document.querySelector(".player_score");
let computer_score = document.querySelector(".computer_score");
let computer_move = document.querySelector(".computer_move");

let player_choose = "";
let computer_choose = "";
let c_score = 0;
let p_score = 0;

stone.addEventListener('click', () => {
    player_choose = "stone";
    player_choice();
    computer_choice();
    winner();
})

paper.addEventListener('click', () => {
    player_choose = "paper";
    player_choice();
    computer_choice();
    winner();
})

scissor.addEventListener('click', () => {
    player_choose = "scissor";
    player_choice();
    computer_choice();
    winner();
})



const player_choice = () => {
    if (player_choose == "stone") {
        player_move.innerText = "stone";
    }
    else if (player_choose == "paper") {
        player_move.innerText = "paper";
    }
    else if (player_choose == "scissor") {
        player_move.innerText = "scissor";
    }
}


const computer_choice = () => {
    computer_choose = Math.floor(Math.random() * 3);
    if (computer_choose == 0) {
        computer_move.innerText = "stone";
        computer_choose="stone";
    }
    else if (computer_choose == 1) {
        computer_move.innerText = "paper";
        computer_choose="paper";
    }
    else if (computer_choose == 2) {
        computer_move.innerText = "scissor";
        computer_choose="scissor";
    }
}

const winner=()=>{
    if((computer_choose=="scissor" && player_choose=="paper")||(computer_choose=="paper" && player_choose=="stone")||(computer_choose=="scissor" && player_choose=="paper")){
        msg.innerText="Computer won the game";
        c_score++;
        computer_score.innerText=c_score;
    }
    else if((computer_choose=="stone" && player_choose=="paper")||(computer_choose=="paper" && player_choose=="paper")||(computer_choose=="scissor" && player_choose=="stone")){
        msg.innerText="You won the game";
        p_score++;
        player_score.innerText=p_score;
    }
    else if((computer_choose=="stone" && player_choose=="stone")||(computer_choose=="paper" && player_choose=="paper")||(computer_choose=="scissor" && player_choose=="Scissor")){
        msg.innerText="Game is tied";
    }
}



resetBtn.addEventListener('click',()=>{
    p_score=0;
        c_score=0;
        msg.innerText="Please choose your choice";
        player_score.innerText=0;
        computer_score.innerText=0;
        computer_move.innerText="";
        player_move.innerText="";
})
