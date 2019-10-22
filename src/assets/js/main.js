const game = () => {
	let pScore = 0;
	let cScore = 0;

	//Start the game
	const startGame = () => {
		const playBtn = document.querySelector('.intro .btn');
		const introScreen = document.querySelector('.intro');
		const gameScreen = document.querySelector('.game');

		playBtn.addEventListener('click', () => {
			introScreen.classList.add('fadeOut');
			gameScreen.classList.add('fadeIn');
		});
	}

	//Play Game
	const playGame = () => {
		const options = document.querySelectorAll('.game .game__actions .btn');
		const player = document.querySelector('.game .game__player');
		const computer = document.querySelector('.game .game__computer');
		const imgHolder = document.querySelector('.game .game__body');

		//Clear Animation
		imgHolder.addEventListener('animationend', function() {
			this.style.animation = '';
		});

		//Computer Options
		const computerOptions = ['rock', 'paper', 'scissors'];

		options.forEach(option => {
			option.addEventListener('click', function() {
				//Computer Choice
				const computerNumber = Math.floor(Math.random() * 3);
				const computerChoice = computerOptions[computerNumber];

				setTimeout(() => {
					compareHands(this.textContent, computerChoice);

					//Update Images
					player.src = `./assets/images/${this.textContent}.svg`;
					computer.src = `./assets/images/${computerChoice}.svg`;
				}, 2000);

				imgHolder.style.animation = 'shake 2s ease';
			});
		});
	};

	//Update Score
	const updateScore = () => {
		const playerScore = document.querySelector('.header .player span');
		const computerScore = document.querySelector('.header .computer span');

		playerScore.textContent = pScore;
		computerScore.textContent = cScore;
	}

	const compareHands = (playerChoice, computerChoice) => {
		//Update Text
		const winner = document.querySelector('.game .game__head h2');

		//Checking for a tie
		if (playerChoice === computerChoice) {
			winner.textContent = `It's a tie`;
			return;
		}

		//Check for Rock
		if (playerChoice === 'rock') {
			if (computerChoice === 'scissors') {
				winner.textContent = 'Player Wins';
				pScore++;
				updateScore();
				return;
			} else {
				winner.textContent = 'Computer Wins';
				cScore++;
				updateScore();
				return;
			}
		}

		//Check for Paper
		if (playerChoice === 'paper') {
			if (computerChoice === 'scissors') {
				winner.textContent = 'Computer Wins';
				cScore++;
				updateScore();
				return;
			} else {
				winner.textContent = 'Player Wins';
				pScore++;
				updateScore();
				return;
			}
		}

		//Check for Scissors
		if (playerChoice === 'scissors') {
			if (computerChoice === 'rock') {
				winner.textContent = 'Computer Wins';
				cScore++;
				updateScore();
				return;
			} else {
				winner.textContent = 'Player Wins';
				pScore++;
				updateScore();
				return;
			}
		}
	}

	//Call all inner function
	startGame();
	playGame();
}

game();
