let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const msgContainer = document.querySelector(".msg-container");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
    const options = ["rock","paper","scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

const drawGame = () => {
    msg.innerText = "Draw !!";
    msgContainer.style.backgroundColor = "#EFE9E7"
};

const showWinner = (userWin) => {
    if(userWin === true) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = "You Win!";
        msgContainer.style.backgroundColor = "green";
    }
    else {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = "You Lose!";
        msgContainer.style.backgroundColor = "red"
    }
}

const playGame = (userChoice) => {
    console.log("user choice is", userChoice);
    //Generate computer choice
    const compChoice = genCompChoice();
    console.log("computer choice is", compChoice);

    if (userChoice === compChoice) {
        //draw game
        drawGame();
    }
    else {
        let userWin = true;
        if(userChoice === "rock"){
        //paper, scissors
        userWin = compChoice === "paper" ? false : true;
        }
        else if(userChoice === "paper"){
            //scissors, rock
            userWin = compChoice === "scissors" ? false :true;
        }
        else {
            //userChoice is scissors
            //paper, rock
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin);
    };
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});