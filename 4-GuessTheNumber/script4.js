let randomNumber = Math.floor(Math.random() * 100) + 1;

const submit = document.querySelector("#subt");
const   userInput = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");

const p = document.createElement("p");

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
    submit.addEventListener("click", function (e) {
        e.preventDefault();
        const guess = parseInt(userInput.value);
        console.log(guess);
        validateGuess(guess);
    });
}

function validateGuess(guess){
    if(isNaN(guess)){
        alert("Please enter a valid number");
    }else if(guess < 1 || guess > 100){
        alert("Please enter a number between 1 and 100");
    }else{
        prevGuess.push(guess);
        if(numGuess === 11){
            displayMessage(`Game Over! The number was ${randomNumber}`);
            endGame();
        }else {
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess){
    if(guess === randomNumber){
        displayMessage(`Congratulations! You guessed the number in ${numGuess} guesses!`);
        endGame();
    }else if(guess < randomNumber){
        displayMessage("Your guess is too low!");
    }else if(guess > randomNumber){
        displayMessage("Your guess is too high!");
    }
}

function displayGuess(guess){
    userInput.value = "";
    guessSlot.innerHTML += `${guess} `;
    numGuess++;
    remaining.innerHTML = `${11 - numGuess} guesses remaining`;
}

function displayMessage(message){
    lowOrHi.innerHTML = `<h1>${message}</h1>`;
}

function endGame(){
    userInput.value = "";
    userInput.setAttribute("disabled", "");
    p.classList.add("button");
    p.innerHTML = `<h1 id="newGame">Start New Game</h1>`;
    startOver.appendChild(p);
    playGame = false;
    newGame();
}

function newGame(){
    const newGameButton = document.querySelector("#newGame");
    newGameButton.addEventListener("click", function(){
        randomNumber = Math.floor(Math.random() * 100) + 1;
        prevGuess = [];
        numGuess = 1;
        guessSlot.innerHTML = "";
        remaining.innerHTML = `${11 - numGuess} guesses remaining`;
        lowOrHi.innerHTML = "";
        userInput.removeAttribute("disabled");
        startOver.removeChild(p);
        playGame = true;
    });
}
