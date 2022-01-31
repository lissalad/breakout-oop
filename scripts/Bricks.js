import Brick from './Brick.js'

class Bricks {
  constructor(rows = 3, cols = 5) {
    this.rows = rows
    this.cols = cols
    this.bricks = []
    this.setup()
  }

  // ---------------- DETECT COLLISIONS ---------------------- //
//   collisionDetection(ball) {
//   for (let c = 0; c < this.cols; c += 1) {
//     for (let r = 0; r < this.rows; r += 1) {
//       const b = this.bricks[c][r];
//       if (b.status === 1) {
//         console.log(ball.x);
//         console.log(b.x);

//         if (ball.x > b.x && ball.x < b.x + b.width && ball.y > b.y && ball.y < b.y + b.Height) {
//           ball.dy = -ball.dy;
//           b.status = 0;
//           this.bricks[c][r] = b;
//         }
//       }
//     }
//   }
// }

  setup() {
    for (let c = 0; c < this.cols; c += 1) {
      this.bricks[c] = [];
      for (let r = 0; r < this.rows; r += 1) {
        const brick = new Brick()
        this.brickWidth = brick.width;
        this.brickHeight = brick.height;
        brick.x = (c * (brick.width + 10)) + 30;
        brick.y = (r * (brick.height + 10)) + 30;
        this.bricks[c][r] = brick;
      }
    }
  }

  render(ctx) {
    for (let c = 0; c < this.cols; c += 1) {
      for (let r = 0; r < this.rows; r += 1) {
        if (this.bricks[c][r].status === 1) {
          this.bricks[c][r].render(ctx);
        }
      }
    }
  }
}
export default Bricks
