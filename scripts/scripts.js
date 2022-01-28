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

let rightPressed = false;
let leftPressed = false;

// --------------------------------------------- //
function mouseMoveHandler(e) {
  const relativeX = e.clientX - canvas.offsetLeft;
  if (relativeX > 0 && relativeX < canvas.width) {
    paddleX = relativeX - paddleWidth / 2;
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


// ---------------- RUNS ---------------------- //
function draw() {
  const ball = new Ball(canvas.width / 2, canvas.height - 30);
  const bricks = new Bricks();
  const paddle = new Paddle(paddleX, canvas.height - paddleHeight);
  const gameLabel = new GameLabel(canvas.width)
  // ball.moveBy(2, -2);

  gameLabel.render(ctx);
  paddle.render(ctx, canvas.height);
  bricks.render(ctx);
  ball.render(ctx);
}

draw();