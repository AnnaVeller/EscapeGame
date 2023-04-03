import Phaser from "phaser"
import {resize} from "../Engine/resizer"
import TextSprite from "../Engine/TextSprite"

export default class WinScene extends Phaser.Scene {
  constructor() {
    super('Win')
  }

  create() {
    const rect = this.add.rectangle(500, 500, 450, 200, 0x53a830)
    rect.alpha = 0.3
    rect.setScale(0.5, 0.7)
    rect.setStrokeStyle(2, 0x1a65ac)

    this.tweens.add({
      targets: rect,
      alpha: 0.8,
      scaleX: 1,
      scaleY: 1,
      duration: 600,
      ease: 'Sine.easeInOut'
    })

    const message = new TextSprite(this, {
      x: 500, y: 500, text: 'ВЫ СПАСЛИСЬ',
      textStyle: {font: '30px Monospace', fill: '#ffffff'},
      alpha: 0
    })

    this.tweens.add({
      targets: message.content,
      alpha: 1,
      hold: 200,
      duration: 300,
    })

    this.scale.on('resize', this.resize, this)
    this.resize(this.scale.gameSize)
  }

  resize() {
    if (!this.scene.settings.active) return

    resize(this)
  }

}


