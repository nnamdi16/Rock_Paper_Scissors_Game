//Modal scripts
// Get the modal
let modal = document.getElementById('myModal');

// Get the button that opens the modal
let btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


//Game logic

let playerScore = 0;
let computerScore = 0;
let round = 1;
let playerDisplay = document.createElement('p');
let computerDisplay = document.createElement('p');

// Game start function
const startGame = () => {
	const gameButtons = document.querySelectorAll('.btn');
	console.log(gameButtons.length);
	gameButtons.forEach(button =>{
		button.addEventListener('click', game)
	});
	return gameButtons;
}

const stop = () =>{
	startGame().forEach(button=>{
		btn.removeEventListener('click',game);
	});
	displayFinalScore().style.display ="";
	replay();
	round = 1;
	playerScore = 0;
	computerScore =0;

}

const replay = () =>{
	let replayBtn = document.querySelector('#playAgain-btn');
	let replayText = document.querySelector('#playAgain-txt');
	if(replayText === null){
		replayText = document.createElement('p');
		replayText.setAttribute('id', 'playAgain-txt');
		replayText.textContent = "Replay"
	}

	if(replayBtn === null){
		replayBtn = document.createElement('div');
		replayBtn.setAttribute('id', 'playAgain-btn');
		replayBtn.appendChild(replayText);
		document.querySelector('body').appendChild(replayBtn);
	}else replayBtn.style.display = '';

	replayBtn.addEventListener('click', ()=>{
		startGame();
		displayFinalScore().style.display ="none";
		replayBtn.style.display = 'none';
		playerDisplay.textContent = '';
		computerDisplay.textContent ='';
		displayRound().textContent = '';
		displayRoundScore().textContent = '';
	});
}

// Computer play logic

function getRandomNumber(min,max){
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max-min+1)) + min;
}

function computerPlay(){
	let computerChoice = getRandomNumber(0,2);
	switch(computerChoice){
		case 0:
			return "rock";
		case 1:
			return "paper";
		case 2:
			return "scissors";
		default:
			console.error("There is an error!");
			alert("There is an error! Refresh the game.")
			break;
	}
}


// Player's play logic

function playersPlay(e){
	console.log(e.target);
	const buttonId = e.target.getAttribute('id');
	switch(buttonId){
		case "btn-rock":
			return "rock";
		case "btn-paper":
			return "paper";
		case "btn-scissors":
			return "scissors";
		default:
		console.error("Not reaching targeted button's id");
		alert('Error, Please refresh page');
		break;
	}
}


/* One play Round */

function oneplayRound(playerSelection,computerSelection){
	if(playerSelection === 'paper'){
		switch(computerSelection){
			case 'rock':
				playerScore++;
				return 'You win! Paper beats Rock';
			case 'scissors':
				computerScore++;
				return 'You loose ! Scissors beats Paper';
			case 'paper':
				return 'It\'s a tie';
		}
	}else if(playerSelection === 'rock'){
		switch(computerSelection){
			case 'paper':
			computerScore++;
				return 'You loose ! Paper beats Rock';
			case 'scissors':
				playerScore++;
				return 'You win ! Rock beats Scissors';
			case 'rock':
				return 'It\'s a tie';
		}
	}else if(playerSelection === 'scissors'){
		switch(computerSelection){
			case 'paper':
			playerScore++;
				return 'You win! Scissors beats Paper';
			case 'rock':
				computerScore++;
				return 'You loose ! Rock beats Scissors';
			case 'scissors':
				return 'It\'s a tie';
		}
	}else console.error("There is an error!");
}

//Result Display
function displayRound(){
	let gameround = document.querySelector('.round-display');
	gameround.textContent = `Round: ${round}`;
	return gameround;
}


function displaySelection(playerSelection,computerSelection){
	let gameSelection = document.querySelector('.selection-display');
	playerDisplay.textContent = `Player: ${playerSelection}`;
	computerDisplay.textContent = `Computer: ${computerSelection}`;
	gameSelection.appendChild(playerDisplay);
	gameSelection.appendChild(computerDisplay);
}

function displayRoundScore(){
	let roundScore = document.querySelector('.score-display');
	roundScore.textContent = `Score : Player = ${playerscore}  Computer = ${computerScore}`;
	
	return roundScore;
}

function displayFinalScore(){
	let finalScoreDisplay = document.querySelector('.finalScore-display');
	let finalScore = document.querySelector('#resultText');
	if(para === null){
		para = document.createElement('p');
		para.setAttribute('id', 'resultText');
	}
	finalScore.textContent = gameFinalResult();
	finalScoreDisplay.appendChild(finalScore);

	return finalScoreDisplay;
}