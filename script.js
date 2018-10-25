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
	let replayBtn = document.querySelector('')
}