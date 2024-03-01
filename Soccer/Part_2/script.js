// Get the HTML element with the ID 'ball' and assign it to the variable 'ball'
let ball = document.getElementById('ball');

/* if start/size
function startBall() {
    ball.classList.add('start');
    ball.addEventListener('animationend', () => {
        ball.classList.remove('start');
    }, { once: true });
}
*/

/* toggle was replaced by add and remove ,so that the buttons 
    can be clicked more often, the class must be added every 
    time and then removed again, eventListener was added */

// Function to make the ball bounce
function bounceBall() {
    // Add the 'bounceAnime' class to the ball, triggering a bounce animation
    ball.classList.add('bounceAnime');

    // Listen for the end of the 'bounceAnime' animation
    ball.addEventListener('animationend', () => {
        // Remove the 'bounceAnime' class once the animation ends to reset for future bounces
        ball.classList.remove('bounceAnime');
    }, { once: true }); // Ensure the event listener is only triggered once
}

// Function to make the ball shoot to the left
function shootLeft() {
    // Add the 'shootLeftAnime' class to the ball, triggering a left-shooting animation
    ball.classList.add('shootLeftAnime');

    // Listen for the end of the 'shootLeftAnime' animation
    ball.addEventListener('animationend', () => {
        // Remove the 'shootLeftAnime' class once the animation ends to reset for future left shots
        ball.classList.remove('shootLeftAnime');
    }, { once: true }); // Ensure the event listener is only triggered once
}

// Function to make the ball shoot to the center
function shootCenter() {
    // Add the 'shootCenterAnime' class to the ball, triggering a center-shooting animation
    ball.classList.add('shootCenterAnime');

    // Listen for the end of the 'shootCenterAnime' animation
    ball.addEventListener('animationend', () => {
        // Remove the 'shootCenterAnime' class once the animation ends to reset for future center shots
        ball.classList.remove('shootCenterAnime');
    }, { once: true }); // Ensure the event listener is only triggered once
}

// Function to make the ball shoot to the right
function shootRight() {
    // Add the 'shootRightAnime' class to the ball, triggering a right-shooting animation
    ball.classList.add('shootRightAnime');

    // Listen for the end of the 'shootRightAnime' animation
    ball.addEventListener('animationend', () => {
        // Remove the 'shootRightAnime' class once the animation ends to reset for future right shots
        ball.classList.remove('shootRightAnime');
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
