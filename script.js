
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

//Event listeners for the user choice buttons

const rock = document.querySelector("#rock")
const paper = document.querySelector("#paper")
const scissors = document.querySelector("#scissors")
const results = document.querySelector(".results")

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
        results.textContent = 'It\'s a tie!'
        userPoints++
        computerPoints++
    } else if (userChoice == "rock" && computerChoice == "scissors") {
        results.textContent = "You win! :) Rock smashes scissors"
        userPoints++
    } else if (userChoice == "rock" && computerChoice == "paper") {
        results.textContent = "You lose! :( Paper covers rock"
        userPoints++
    } else if (userChoice == "scissors" && computerChoice == "rock") {
        results.textContent = "You lose! :( Rock smashes scissors"
        computerPoints++
    } else if (userChoice == "scissors" && computerChoice == "paper") {
        results.textContent = "You win! :) Scissors cuts paper"
        userPoints++
    } else if (userChoice == "paper" && computerChoice == "rock") {
        results.textContent = "You win! :) Paper covers rock"
        computerPoints++
    } else if (userChoice == "paper" && computerChoice == "scissors") {
        results.textContent = "You lose! :( Scissors cuts paper"
        computerPoints++
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