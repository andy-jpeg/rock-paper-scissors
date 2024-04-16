const choices = ["rock", "paper", "scissors"]
let playerPoints = 0
let computerPoints = 0

function getComputerChoice() {
    return (choices[Math.floor(Math.random() * choices.length)])
}

function playRound(playerSelection, computerSelection) {
    let playerChoice = prompt("Rock, paper, or scissors?")
    playerChoice = playerChoice.toLowerCase()
    const computerChoice = getComputerChoice()

    if (!choices.includes(playerChoice)) {
        playerChoice = prompt("Invalid response. Try again.")
        playerChoice = playerChoice.toLowerCase()

        if (!choices.includes(playerChoice)) {
            alert("Invalid response. Automatic loss!")
            computerPoints += 1
        }
    }

    if (playerChoice == "rock") {
        if (computerChoice == "rock") {
            alert("Tie! Computer chose rock.")
        } else if (computerChoice == "paper") {
            computerPoints += 1
            alert("You lost! Computer chose paper. Paper beats rock.")
        } else if (computerChoice == "scissors") {
            playerPoints += 1
            alert("You won! Computer chose scissors. Rock beats scissors.")
        }
    } else if (playerChoice == "paper") {
        if (computerChoice == "rock") {
            playerPoints += 1
            alert("You won! Computer chose rock. Paper beats rock.")
        } else if (computerChoice == "paper") {
            alert("Tie! Computer chose paper.")
        } else if (computerChoice == "scissors") {
            computerPoints += 1
            alert("You lost! Computer chose scissors. Scissors beats paper.")
        }
    } else if (playerChoice == "scissors") {
        if (computerChoice == "rock") {
            computerPoints += 1
            alert("You lost! Computer chose rock. Rock beats scissors.")
        } else if (computerChoice == "paper") {
            playerPoints += 1
            alert("You won! Computer chose paper. Scissors beats paper.")
        } else if (computerChoice == "scissors") {
            alert("Tie! Computer chose scissors.")
        }
    } else {
        console.log("didn't work :(")
    }
}

function playGame() {
    playRound()
    playRound()
    playRound()
    playRound()
    playRound()

    if (playerPoints > computerPoints) {
        alert("You won against a computer!")
    } else if (playerPoints == computerPoints) {
        alert("A tie has been made.")
    } else {
        alert("You lost. Loser!")
    }

    playerPoints = 0
    computerPoints = 0
}

playGame()