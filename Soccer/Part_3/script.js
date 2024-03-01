let ball = document.getElementById('ball');

function bounceBall() {
    ball.classList.add('bounceAnime');
    ball.addEventListener('animationend', () => {
        ball.classList.remove('bounceAnime');
    }, { once: true });
}

function shootLeft() {
    ball.classList.add('shootLeftAnime');
    ball.addEventListener('animationend', () => {
        ball.classList.remove('shootLeftAnime');
    }, { once: true });
}

function shootCenter() {
    ball.classList.add('shootCenterAnime');
    ball.addEventListener('animationend', () => {
        ball.classList.remove('shootCenterAnime');
    }, { once: true });
}

function shootRight() {
    ball.classList.add('shootRightAnime');
    ball.addEventListener('animationend', () => {
        ball.classList.remove('shootRightAnime');
    }, { once: true });
}

function jumpingBall() {
    ball.classList.add('jumpingAnime');
    ball.addEventListener('animationend', () => {
        ball.classList.remove('jumpingAnime');
    }, { once: true });
}