const playerMoves = document.querySelectorAll(".playerMoves > div");

playerMoves.forEach(playerMove => playerMove.addEventListener("mouseenter", e => e.target.classList.add("playerMoveHover")));

playerMoves.forEach(playerMove => playerMove.addEventListener("mouseleave", e => e.target.classList.remove("playerMoveHover")));

// function selectMove(e) {
//     console.log(e.target);
// }

// const validMoves = ["rock", "paper", "scissors"];

// function getComputerChoice() {

//     return validMoves[(Math.floor(Math.random() * validMoves.length))];
// }

// // console.log(getComputerChoice());

// function playRound(playerSelection, computerSelection) {

//     let results;
//     playerSelection = playerSelection.toLowerCase().trim();
//     computerSelection = computerSelection.toLowerCase().trim();

//     if (playerSelection === computerSelection) {
//         results = `Tie Game! ${playerSelection} equals ${computerSelection}`;
//     }
//     else if (playerSelection === "rock" && computerSelection === "paper" || playerSelection === "paper" && computerSelection == "scissors" || playerSelection === "scissors" && computerSelection === "rock") {
//         results = `You Lose! ${computerSelection} beats ${playerSelection}`;
//     }
//     else {
//         results = `You Win! ${playerSelection} beats ${computerSelection}`;
//     }

//     return results;
// }

// // const playerSelection = "scissors";
// // const computerSelection = getComputerChoice();
// // console.log(playRound(playerSelection, computerSelection));

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