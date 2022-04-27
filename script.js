
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
let userRoundsWon = 0
let computerRoundsWon = 0

//Event listeners for the user choice buttons

const rock = document.querySelector("#rock")
const paper = document.querySelector("#paper")
const scissors = document.querySelector("#scissors")
const results = document.querySelector(".results")
const userPointDisplay = document.querySelector(".user-points")
const computerPointDisplay = document.querySelector(".computer-points")

userPointDisplay.textContent = userPoints
computerPointDisplay.textContent = computerPoints

rock.addEventListener('click', () => {
    playRound('rock')
})
paper.addEventListener('click', () => {
    playRound('paper')
})
scissors.addEventListener('click', () => {
    playRound('scissors')
})

// Takes the random computer choice and user input and compares their choices against a set of options to choose a winner
function playRound (userChoice) {
    computerChoice = computerPlay()
    if (userChoice == computerChoice) {
        results.textContent = `You both threw ${userChoice}`
        userPoints++
        computerPoints++
    } else if (userChoice == "rock" && computerChoice == "scissors") {
        userPoints++
    } else if (userChoice == "rock" && computerChoice == "paper") {
        userPoints++
    } else if (userChoice == "scissors" && computerChoice == "rock") {
        computerPoints++
    } else if (userChoice == "scissors" && computerChoice == "paper") {
        userPoints++
    } else if (userChoice == "paper" && computerChoice == "rock") {
        computerPoints++
    } else if (userChoice == "paper" && computerChoice == "scissors") {
        computerPoints++
    }
    results.textContent = `You threw: ${userChoice}. \nComputer Threw: ${computerChoice}`
    userPointDisplay.textContent = userPoints
    computerPointDisplay.textContent = computerPoints
    if (userPoints == 5 && computerPoints == 5) {
        results.textContent = "IT'S A TIE. WOW YOU SUCK"
    } else if (userPoints == 5) {
        results.textContent = "YOU WIN!!!!!!!!! LEGGGOOOOOO MOFOOOOO"
        userPoints = 0
        computerPoints = 0
        userRoundsWon += 1
        results.appendChild(document.createElement(p).textContent = `Rounds won: ${userRoundsWon}`)
    } else if (computerPoints == 5) {
        results.textContent = "YOU LOST YOU CRUSTY BITCH GET FUKT"
        userPoints = 0
        computerPoints = 0
        computerRoundsWon += 1
    }
}

// Randomly chooses one element from the choices array and returns that value
function computerPlay () {
    return choices[Math.floor(Math.random() * 3)]
}

// Takes in a user input and validates it is either rock, paper, or scissors, case-insensitive.
function userPlay () {
    let userChoice = prompt("What do you throw? ")
    userChoice = userChoice.toLowerCase()
    while (!choices.includes(userChoice)) {
        console.log("That is not a valid play. Please throw rock, paper, or scissors")
        userChoice = prompt("Please throw again: ")
    } 
    
    return userChoice
}