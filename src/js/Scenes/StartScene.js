import Phaser from "phaser"
import {resize} from "../Engine/resizer"
import TextSprite from "../Engine/TextSprite"

export default class StartScene extends Phaser.Scene {
  constructor() {
    super('Start')
  }

  create() {
    const rect = this.add.rectangle(500, 500, 450, 400, 0x53a830)
    rect.setStrokeStyle(2, 0x1a65ac)

    rect.setInteractive()
    rect.on('pointerdown', () => this.scene.start('Game'), this)

    new TextSprite(this, {
      x: 510, y: 400, text: 'Правила поведения',
      textStyle: {font: '40px Monospace', fill: '#ffffff'},
    })

    new TextSprite(this, {
      x: 330, y: 460, text: '1. Найти огнетушитель',
      origin: {x: 0, y: 0},
      textStyle: {font: '30px Monospace', fill: '#ffffff'},
    })

    new TextSprite(this, {
      x: 330, y: 500, text: '2. Позвонить пожарным',
      origin: {x: 0, y: 0},
      textStyle: {font: '30px Monospace', fill: '#ffffff'},
    })

    new TextSprite(this, {
      x: 330, y: 540, text: '3. Уйти из помещения',
      origin: {x: 0, y: 0},
      textStyle: {font: '30px Monospace', fill: '#ffffff'},
    })

    const tapMessage = new TextSprite(this, {
      x: 500, y: 640, text: 'Нажмите, чтобы приступить',
      textStyle: {font: '28px Monospace', fill: '#ffffff'},
    })

    this.tweens.add({
      targets: tapMessage.content,
      alpha: 1,
      scaleX: 1.1,
      scaleY: 1.1,
      duration: 300,
      yoyo: true,
      repeat: -1
    })

    this.scale.on('resize', this.resize, this)
    this.resize(this.scale.gameSize)
  }

  resize() {
    // стоп ресайза, если ушли с этой сцены
    if (!this.scene.settings.active) return

    resize(this)
  }

}


