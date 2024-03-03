// Initialize user and computer scores
let userScore = 0;
let computerScore = 0;

// Get the HTML elements with the IDs 'ball' and 'keeper' and assign them to variables
let ball = document.getElementById('ball');
let keeper = document.getElementById('keeper');

// Function to get a random position for the keeper among left, center, and right
function getRandomPosition() {
    // Define three positions: left, center, and right
    const positions = ['translate(100px, 70px)', 'translate(380px, 70px)', 'translate(660px, 70px)'];
    // Select a random position from the array
    const randomPosition = positions[Math.floor(Math.random() * positions.length)];
    return randomPosition;
}

// Function to move the keeper to a random position with a smooth transition
function moveKeeperRandomly() {
    // Set the transition for smooth movement/speed of the keeper
    keeper.style.transition = 'transform 0.5s';
    // Move the keeper to a random position
    keeper.style.transform = getRandomPosition();
}

// Function to make the ball shoot to the left
function shootLeft() {
    // Add the 'shootLeftAnime' class to the ball, triggering a left-shooting animation
    ball.classList.add('shootLeftAnime');
    // Move the keeper to a random position
    moveKeeperRandomly();
    // Listen for the end of the 'shootLeftAnime' animation
    ball.addEventListener('animationend', () => {
        // Remove the 'shootLeftAnime' class once the animation ends to reset for future left shots
        ball.classList.remove('shootLeftAnime');
        // Remove the transition after the ball animation
        keeper.style.transition = '';
    }, { once: true }); // Ensure the event listener is only triggered once
}

// Function to make the ball shoot to the center
function shootCenter() {
    // Add the 'shootCenterAnime' class to the ball, triggering a center-shooting animation
    ball.classList.add('shootCenterAnime');
    // Move the keeper to a random position
    moveKeeperRandomly();
    // Listen for the end of the 'shootCenterAnime' animation
    ball.addEventListener('animationend', () => {
        // Remove the 'shootCenterAnime' class once the animation ends to reset for future center shots
        ball.classList.remove('shootCenterAnime');
        // Remove the transition after the ball animation
        keeper.style.transition = '';
    }, { once: true }); // Ensure the event listener is only triggered once
}

// Function to make the ball shoot to the right
function shootRight() {
    // Add the 'shootRightAnime' class to the ball, triggering a right-shooting animation
    ball.classList.add('shootRightAnime');
    // Move the keeper to a random position
    moveKeeperRandomly();
    // Listen for the end of the 'shootRightAnime' animation
    ball.addEventListener('animationend', () => {
        // Remove the 'shootRightAnime' class once the animation ends to reset for future right shots
        ball.classList.remove('shootRightAnime');
        // Remove the transition after the ball animation
        keeper.style.transition = '';
    }, { once: true }); // Ensure the event listener is only triggered once
}

// Function to make the ball jump
function jumpingBall() {
    // Add the 'jumpingAnime' class to the ball, triggering a jumping animation
    ball.classList.add('jumpingAnime');
    // Listen for the end of the 'jumpingAnime' animation
    ball.addEventListener('animationend', () => {
        // Remove the 'jumpingAnime' class once the animation ends to reset for future jumps
        ball.classList.remove('jumpingAnime');
    }, { once: true }); // Ensure the event listener is only triggered once
}
