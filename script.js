let userScore = 0;
let computerScore = 0;
const userScorePara = document.querySelector("#user");
const compScorePara = document.querySelector("#comp");
const handGuesture = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const compChoice = () => {
    const option = ["rock", "paper", "scissors"];
    const choosenIdx = Math.floor(Math.random() * 3);
    return (option[choosenIdx]);
};
const winner = (userWin,userChoice,computerChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText=userScore;
        console.log("User Won");
        msg.innerText = `You win! Your ${userChoice} beats ${computerChoice}.`;
        msg.style.backgroundColor = "green";
    } else {
        computerScore++;
        compScorePara.innerText =computerScore;
        console.log("comp Won!!");
        msg.innerText = `You lost! computer,s ${computerChoice} beats your ${userChoice}.`;
        msg.style.backgroundColor = "red";
    }
};

const playGame = (userChoice) => {
    console.log("user choice is = ", userChoice);
    const computerChoice = compChoice();
    console.log("Computer choice is = ", computerChoice);
    let userWin = true;
    if (userChoice === computerChoice) {
        console.log("Draw");
        msg.innerText = "Draw!!";
        msg.style.backgroundColor = "#0a1f61";
    }
    else {

        if (userChoice === "rock") {
            userWin = computerChoice === "paper" ? false : true;
        }
        else if (userChoice === "paper") {
            userWin = computerChoice === "scissors" ? false : true;

        }
        else if (userChoice === "scissors") {
            userWin = computerChoice === "rock" ? false : true;
        }
        winner(userWin,userChoice,computerChoice);
    }


};
handGuesture.forEach(element => {
    element.addEventListener("click", () => {
        const userChoice = element.getAttribute("id");
        playGame(userChoice);

    });
});