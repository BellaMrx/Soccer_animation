let ball = document.getElementById('ball');

function startBall() {
    ball.classList.toggle('start');
}

function bounceBall() {
    ball.classList.toggle('bounceAnime');
}

function shootLeft() {
    ball.classList.toggle('shootLeftAnime');
}

function shootCenter() {
    ball.classList.toggle('shootCenterAnime');
}

function shootRight() {
    ball.classList.toggle('shootRightAnime');
}

function jumpingBall() {
    ball.classList.toggle('jumpingAnime');
}
