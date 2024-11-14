const options = ["Rock", "Paper", "Scissors"];

let humanScore = 0;
let computerScore = 0;
let humanChoice = getHumanChoice();
let computerChoice = getComputerChoice();


playGame();

function getComputerChoice() {
    let last_opt = 2; // 2 -> index for Scissors
    let first_opt = 0; // 0 -> index for Rock
    let choice = Math.floor(Math.random() * (last_opt - first_opt + 1) + first_opt);
    return options[choice];
}

function getHumanChoice() {
    let input = prompt(`Choose one of the following: ${options[0]}, ${options[1]}, ${options[2]}.`);
    return input;
}

function playRound(humanChoice, computerChoice) {
    if(humanChoice.toLowerCase() === "rock") {
        if(computerChoice === "Rock") {
            alert(`You both picked ${humanChoice}. Nobody wins.`);
        } else if(computerChoice === "Paper") {
            alert(`Computer chose ${computerChoice}. Computer wins.`);
            computerScore++;
        } else if(computerChoice === "Scissors") {
            alert(`Computer chose ${computerChoice}. Player wins.`);
            humanScore++;          
        }
    } else if(humanChoice.toLowerCase() === "paper") {
        if(computerChoice === "Rock") {
            alert(`Computer chose ${computerChoice}. Player wins.`);
            humanScore++;
        } else if(computerChoice === "Paper") {
            alert(`You both picked ${humanChoice}. Nobody wins.`);
        } else if(computerChoice === "Scissors") {
            alert(`Computer chose ${computerChoice}. Computer wins.`);
            computerScore++;
        }
    } else if(humanChoice.toLowerCase() === "scissors") {
        if(computerChoice === "Rock") {
            alert(`Computer chose ${computerChoice}. Computer wins.`);
            computerScore++;
        } else if(computerChoice === "Paper") {
            alert(`Computer chose ${computerChoice}. Player wins.`);
            humanScore++;
        } else if(computerChoice === "Scissors") {
            alert(`You both picked ${humanChoice}. Nobody wins.`);
        }
    } else {
        alert("Invalid choice. Don't cheat!");
    }
}

function playGame() {
    for(let i = 0; i < 5; i++) {
        playRound(humanChoice, computerChoice);
        if(humanScore == 3) {
            alert("You win!");
            break;
        } else if(computerScore == 3) {
            alert("You lost!");
            break;
        }
        
        if(humanChoice.toLowerCase() === computerChoice.toLowerCase()) {
            i--;
        }
        humanChoice = getHumanChoice();
        computerChoice = getComputerChoice();
    }

}