
/* Rock Paper Scissors:
- Accept an input from a user
- Validate that input as "Rock", "Paper", or "Scissors"
- Choose a random option for the computer from those same three choices
- Test the user input against the computer to determine a winner
- Log that winner's name to the console
*/

const choices = ["rock", "paper", "scissors"]
let computerPoints = 0
let userPoints = 0

function playRound (computerChoice, userChoice) {
    computerChoice = computerPlay()
    userChoice = userPlay()
    if (userChoice == computerChoice) {
        console.log("It's a tie!")
    } else if (userChoice == "rock" && computerChoice == "scissors") {
        console.log("You win! :) Rock smashes scissors")
        userPoints++
    } else if (userChoice == "rock" && computerChoice == "paper") {
        console.log("You lose! :( Paper covers rock")
        userPoints++
    } else if (userChoice == "scissors" && computerChoice == "rock") {
        console.log("You lose! Rock smashes scissors")
        computerPoints++
    } else if (userChoice == "scissors" && computerChoice == "paper") {
        console.log("You win! Scissors cuts paper")
        userPoints++
    } else if (userChoice == "paper" && computerChoice == "rock") {
        console.log("You win! Paper covers rock")
        computerPoints++
    } else if (userChoice == "paper" && computerChoice == "scissors") {
        console.log("You lose! Scissors cuts paper")
        computerPoints++
    }
}

// Randomly chooses one element from the choices array and returns that value
function computerPlay () {
    return choices[Math.floor(Math.random() * 3)]
}

// Takes in a user input and validates it is either rock, paper, or scissors, case-insensitive.
function userPlay () {
    const userChoice = prompt("What do you throw? ")
    userChoice.toLowerCase()
    if (!choices.includes(userChoice)) {
        console.log("That is not a valid play. Please throw rock, paper, or scissors")
        userChoice = prompt("Please throw again: ")
    } else {
        return userChoice
    }
}