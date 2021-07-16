function computerPlay() {
    switch(Math.floor(Math.random() * 3 + 1)) {
        case 1: 
            return "Rock"
        case 2:
            return "Paper"
        case 3:
            return "Scissors"    
    }
}


function playRound(playerSelection, computerSelection) {

    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if (playerSelection === computerSelection)
        return "It's a tie!"

    if (playerSelection === "rock") {
        switch (computerSelection) {
            case "paper":
                return "You lose!"
            case "scissors":
                return "You win!"
        }  
    }

    if (playerSelection === "paper") {
        switch (computerSelection) {
            case "rock":
                return "You win!"
            case "scissors":
                return "You lose!"
        }  
    } 

    if (playerSelection === "scissors") {
        switch (computerSelection) {
            case "rock":
                return "You lose!"
            case "paper":
                return "You win!"
        }  
    }
}

function game() {


    let computerScore = 0;
    let playerScore = 0;
    do
    {
        playerSelection = prompt("Rock, paper or scissors?");
        computerSelection = computerPlay();
        let result = playRound(playerSelection, computerSelection);
        
        if (result == "You win!") { 
            ++playerScore;
            console.log("You won this round")
        }
        else if (result == "You lose!") {
            ++computerScore;
            console.log("You lost this round!");
        }
        else console.log("It's a tie!");
    }
    while (playerScore < 5 && computerScore < 5)
    
    if (playerScore == 5)
        console.log("You won the game!")
    else
        console.log("You lost the game!")
}

game();