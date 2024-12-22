let userscore = 0;
let compscore = 0;

const choice = document.querySelectorAll(".choice");
const msg  = document.querySelector("#msg");

const userscorepara = document.querySelector("#user-score");
const compcorepara = document.querySelector("#comp-score");

const gencompchoice = () => {
    const options = ["rock","paper", "scissors"];
   const randidx =  Math.floor ( math.random() * 3);
   return options(randidx);
};
const drawgame = (userwin) => {
    console.log("game was draw.");
    msg.innerText = "Game was Draw";

};

const showwinner = (userwin) => {
    if(userwin){
        userscore++;
        userscorepara.innerText = userscore;
        console.log("you win!");
        msg.innerText = "you win!";
        msg.style.backgroundColor  = "green";
    }else{
        compscore++;
        compcorepara.innerText = compscore;
        console.log("you lose");
        msg.innerText = "you lose.";
        msg.style.backgroundColor  = "red";
    }
}

const palygame = (userchoice) => {
    console.log("user choice = ",userchoice);

    const compchoice = gencompchoice();
    console.log("comp choice = ",compchoice);
    if(userchoice === compchoice){
        //draw game
        drawgame();
    }else{
        let userwin = true;
        if(userchoice === "rock"){
             //scissors,paper
        userwin = compchoice === "paper"?false: true;

        }else if(userchoice === "paper"){
            //rock ,scissors
            userwin = compchoice === "scissors" ? false : true;
        }else{
            // rock ,paper
            userwin = compchoice === "rock" ? false : true;
        }
       
    }

}

choices.forEach((choice)=>{
    choice .addEventListener("click",() =>{
        const userchoice = choice.getAttribute("id");
        palygame(userchoice);
    });
});