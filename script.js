let userscore=0;
let compscore=0;
let choices = document.querySelectorAll(".choice"); // Select all elements with class 'choice'
const msg = document.querySelector("#message");
const userScorepara=document.querySelector("#user-score");
const compScorepara=document.querySelector("#comp-score");
const gemcompchoice = () => {
    let options=["rock","paper","scissor"];
    const randix=Math.floor(Math.random()*3);
    return options[randix];
};

const draw = () =>{
    console.log("game draaw");
    msg.innerText="game draw.";
    msg.style.backgroundColor ="#081b32";
}


const showwinner=(userwin,user_choice,compchoice)=>{
    if(userwin){
        userscore++;
        userScorepara.innerText=userscore;
       msg.innerText=`you win. ${user_choice} beats ${compchoice}`;
       msg.style.backgroundColor = "green";
    }
    else{
        compscore++;
        compScorepara.innerText=compscore;
        msg.innerText=`you lose.${compchoice} beats ${user_choice}`;
        msg.style.backgroundColor = "red";
    }
}


const playgame=(user_choice)=>{
console.log("user choice="+user_choice);
const compchoice = gemcompchoice();
console.log("comp choice="+compchoice);
if(user_choice==compchoice){
draw();
}else{
    let userwin=true;
    if(user_choice=="rock"){
        userwin= compchoice == "paper" ? false : true;
    }
    else if(user_choice="paper") {
        userwin= compchoice== "scissor" ? false : true;
    }else{
        userwin= compchoice=="rock" ? false : true;
    }
    showwinner(userwin,user_choice,compchoice);
}
};



choices.forEach((choice) => {
    // console.log(choice);
    choice.addEventListener("click", () => {
        const user_choice=choice.getAttribute("id");

        console.log("choice was clicked",user_choice);
        playgame(user_choice);
    });
});
