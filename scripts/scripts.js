import Sprite from './Sprite.js'
import Ball from './Ball.js'
import Brick from './Brick.js'
import Bricks from './Bricks.js'
import GameLabel from './GameLabel.js'
import Paddle from './Paddle.js'

// --------------------------------------------- //
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

const paddleHeight = 10;
const paddleWidth = 75;

let paddleX = (canvas.width - paddleWidth) / 2;
let lives = 3;
let score = 0;

let rightPressed = false;
let leftPressed = false;

const ball = new Ball(canvas.width / 2, canvas.height - 30);
const bricks = new Bricks();
const paddle = new Paddle(paddleX, canvas.height - paddleHeight);
const gameLabel = new GameLabel(canvas.width);

// --------------------------------------------- //
function mouseMoveHandler(e) {
  const relativeX = e.clientX - canvas.offsetLeft;
  if (relativeX > 0 && relativeX < canvas.width) {
    paddle.x = relativeX - paddleWidth / 2;
  }
}

function keyDownHandler(e) {
  if (e.key === 'Right' || e.key === 'ArrowRight') {
    rightPressed = true;
  } else if (e.key === 'Left' || e.key === 'ArrowLeft') {
    leftPressed = true;
  }
}

function keyUpHandler(e) {
  if (e.key === 'Right' || e.key === 'ArrowRight') {
    rightPressed = false;
  } else if (e.key === 'Left' || e.key === 'ArrowLeft') {
    leftPressed = false;
  }
}

document.addEventListener('keydown', keyDownHandler, false);
document.addEventListener('keyup', keyUpHandler, false);
document.addEventListener('mousemove', mouseMoveHandler, false);

// ---------------- BALL BOUNCES ---------------------- //
function moveBall(ball) {
  if (ball.x + ball.dx > canvas.width - ball.radius || ball.x + ball.dx < ball.radius) { ball.dx = -ball.dx; }
  if (ball.y + ball.dy < ball.radius) {
    ball.dy = -ball.dy;
  } else if (ball.y + ball.dy > canvas.height - ball.radius) {
    if (ball.x > paddleX && ball.x < paddleX + paddleWidth) {
      ball.dy = -ball.dy;
    } else {
      gameLabel.lives -= 1;
      if (gameLabel.lives === 0) {
        // eslint-disable-next-line no-alert
        alert('GAME OVER');
        document.location.reload();
        // eslint-disable-next-line no-use-before-define
        requestAnimationFrame(draw());
      } else {
        ball.x = canvas.width / 2;
        ball.y = canvas.height - 30;
        ball.dx = 2;
        ball.dy = -2;
        paddleX = (canvas.width - paddleWidth) / 2;
      }
    }
  }
}

// ---------------- DETECT COLLISIONS ---------------------- //
function collisionDetection() {
  for (let c = 0; c < bricks.cols; c += 1) {
    for (let r = 0; r < bricks.rows; r += 1) {
      const b = bricks.bricks[c][r];
      if (b.status === 1) {
        if (ball.x > b.x && ball.x < b.x + bricks.brickWidth && ball.yy > b.y && ball.y < b.y + bricks.brickHeight) {
          ball.dy = -ball.dy;
          b.status = 0;
          gameLabel.score += 1;
          bricks.bricks[c][r] = b;

          if (gameLabel.score === bricks.rows * bricks.cols) {
            // eslint-disable-next-line no-alert
            alert('YOU WIN, CONGRATS!');
            document.location.reload();
            // eslint-disable-next-line no-use-before-define
            requestAnimationFrame(draw()); // Needed for Chrome to end game
          }
        }
      }
    }
  }
}

// ---------------- RUNS ---------------------- //
function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height); // white background

  gameLabel.render(ctx);
  paddle.render(ctx, canvas.height);
  bricks.render(ctx);
  ball.render(ctx);

  moveBall(ball);
  collisionDetection(ball);
  
  if (rightPressed) { paddle.x += 7; } else if (leftPressed) { paddle.x -= 7; }
  ball.x += ball.dx;
  ball.y += ball.dy;
  // console.log(ball);
  requestAnimationFrame(draw);
}

draw();