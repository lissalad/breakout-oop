import Sprite from './Sprite.js'
import Score from './Score.js'
import Lives from './Lives.js'

class GameLabel extends Sprite {
  constructor(x, y, text, font='16px Helvetica', color = 'red', align = 'left') {
    // call super with properties as you would initialize sprite
    // define the new properties here on this: this.text and this.font

  }

  render(ctx) {
    // Add the code here to draw your text label
    // set the font: with ctx.font = this.font
    // Align the text with ctx.textAlign = this.align
    // ...
  }
}
export default GameLabel
