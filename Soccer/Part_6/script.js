// Initialize user and computer scores
let userScore = 0;
let computerScore = 0;

// Get DOM elements for the ball and keeper
let ball = document.getElementById('ball');
let keeper = document.getElementById('keeper');

// Function to get a random position for the keeper
function getRandomPosition() {
    const positions = ['translate(100px, 70px)', 'translate(380px, 70px)', 'translate(660px, 70px)'];
    const randomPosition = positions[Math.floor(Math.random() * positions.length)];
    return randomPosition;
}

// Function to move the keeper randomly to a new position
function moveKeeperRandomly() {
    keeper.style.transition = 'transform 0.5s';
    keeper.style.transform = getRandomPosition();
}

// Function to increase the user's score
function increaseUserScore() {
    userScore += 1;
    document.getElementById('user-score').textContent = userScore;
}

// Function to increase the computer's score
function increaseComputerScore() {
    computerScore += 1;
    document.getElementById('computer-score').textContent = computerScore;
}

// Function to handle left shooting action
function shootLeft() {
    ball.classList.add('shootLeftAnime');
    moveKeeperRandomly();
    ball.addEventListener('animationend', () => {
        ball.classList.remove('shootLeftAnime');
        keeper.style.transition = '';
        // Check if the ball and keeper are at the same position
        if (keeper.style.transform === 'translate(100px, 70px)') {
            increaseComputerScore();
        } else {
            increaseUserScore();
        }
    }, { once: true });
}

// Function to handle center shooting action
function shootCenter() {
    ball.classList.add('shootCenterAnime');
    moveKeeperRandomly();
    ball.addEventListener('animationend', () => {
        ball.classList.remove('shootCenterAnime');
        keeper.style.transition = '';
        if (keeper.style.transform === 'translate(380px, 70px)') {
            increaseComputerScore();
        } else {
            increaseUserScore();
        }
    }, { once: true });
}

// Function to handle right shooting action
function shootRight() {
    ball.classList.add('shootRightAnime');
    moveKeeperRandomly();
    ball.addEventListener('animationend', () => {
        ball.classList.remove('shootRightAnime');
        keeper.style.transition = '';
        if (keeper.style.transform === 'translate(660px, 70px)') {
            increaseComputerScore();
        } else {
            increaseUserScore();
        }
    }, { once: true });
}

// Function to handle jumping ball animation
function jumpingBall() {
    ball.classList.add('jumpingAnime');
    ball.addEventListener('animationend', () => {
        ball.classList.remove('jumpingAnime');
    }, { once: true });
}
