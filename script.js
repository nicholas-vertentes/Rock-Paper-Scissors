let playerScore = 0
let computerScore = 0;

const playerMoves = document.querySelectorAll(".playerMoves > div");

playerMoves.forEach(playerMove => playerMove.addEventListener("mouseenter", e => e.target.classList.add("playerMoveHover")));

playerMoves.forEach(playerMove => playerMove.addEventListener("mouseleave", e => e.target.classList.remove("playerMoveHover")));

playerMoves.forEach(playerMove => playerMove.addEventListener("click", playRound));

function getComputerChoice() {

    const validMoves = ["Rock", "Paper", "Scissors"];

    return validMoves[(Math.floor(Math.random() * validMoves.length))];
}

function playRound(e) {

    playerSelection = e.target.textContent
    computerSelection = getComputerChoice();
        
    const roundResults = document.querySelector(".roundResults");
    const htmlPlayerScore = document.querySelector(".playerScore");
    const htmlComputerScore = document.querySelector(".computerScore");

    if (playerSelection === computerSelection) {
        roundResults.innerHTML = `Tie Game! </br> ${playerSelection} equals ${computerSelection}`;

        ++playerScore;
        ++computerScore;

    }
    else if (playerSelection === "Rock" && computerSelection === "Paper" || playerSelection === "Paper" && computerSelection == "Scissors" || playerSelection === "Scissors" && computerSelection === "Rock") {
        roundResults.innerHTML = `You Lose!</br>${computerSelection} beats ${playerSelection}`;

        ++computerScore;
    }
    else {
        roundResults.innerHTML = `You Win!</br>${playerSelection} beats ${computerSelection}`;

        ++playerScore;
    }

    htmlPlayerScore.textContent = playerScore.toString();
    htmlComputerScore.textContent = computerScore.toString();

    checkWinner();
}

function checkWinner() {
    const gameResults = document.querySelector(".header");
    let gameOver = false;
   
    if (computerScore == 5 && playerScore == 5) {
        gameResults.textContent = "Tie Game!";
        gameOver = true;
    }
    else if (computerScore == 5) {
        gameResults.textContent = "Computer Wins!";
        gameOver = true;
    }
    else if (playerScore == 5) {
        gameResults.textContent = "Player Wins!";
        gameOver = true;
    }

    if (gameOver) {
        const playerMoves = document.querySelectorAll(".playerMoves > div");

        playerMoves.forEach(playerMove => playerMove.removeEventListener("click", playRound));

        const playAgainButton = document.querySelector(".playAgainButton");

        playAgainButton.style.display = "flex";

        playAgainButton.addEventListener("click", resetGame);
    }
}

function resetGame(e) {
    e.target.style.display = "none";
    e.target.removeEventListener("click", resetGame);

    const playerMoves = document.querySelectorAll(".playerMoves > div");
    playerMoves.forEach(playerMove => playerMove.addEventListener("click", playRound));

    playerScore = 0
    computerScore = 0;

    const htmlPlayerScore = document.querySelector(".playerScore");
    const htmlComputerScore = document.querySelector(".computerScore");
    htmlPlayerScore.textContent = playerScore;
    htmlComputerScore.textContent = computerScore;

    const roundResults = document.querySelector(".roundResults");
    roundResults.textContent = "";

    const gameHeader = document.querySelector(".header");
    gameHeader.textContent = "Select Your Move!"
}

// function game() {

//     let playerSelection;
//     let computerSelection;
//     let matchResults;
//     let gameResults;
//     let playerScore = 0;
//     let computerScore = 0;
 

//     for (i = 0; i < 5; i++){

//         playerSelection = prompt("Enter Move:");
//         computerSelection = getComputerChoice();
//         matchResults = playRound(playerSelection, computerSelection);

//         console.log(matchResults);

//         if (matchResults.includes("Win")) {
//             ++playerScore;
//         }
//         else if (matchResults.includes("Lose")) {
//             ++computerScore;
//         }
//     }

//     if (playerScore > computerScore) {
//         gameResults = `Player Wins ${playerScore} to ${computerScore}`;
//     }

//     else if (computerScore > playerScore) {
//         gameResults = `Computer Wins ${computerScore} to ${playerScore}`;
//     }

//     else {
//         gameResults = `Game Tied ${playerScore} to ${computerScore}`;
//     }

//     return gameResults;
// }

// console.log(game());