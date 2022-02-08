import Sprite from './Sprite.js'

class Paddle extends Sprite {
  constructor(x, y, width = 75, height = 10, color = 'purple') {
    super(x, y, width, height, color);
   
  }

  render(ctx, canvasHeight) {
    ctx.beginPath();
    ctx.rect(this.x, this.y, this.width, this.height);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.closePath(); 
  }

  



}
export default Paddle