export default class TextSprite {
  constructor(game, config = {}) {
    this.game = game
    this.config = this.getObject(config)
    this.style = this.getStyles(config)
    this.content = this.game.add.text(this.config.x, this.config.y, this.config.text, this.style)
    this.content.alpha = this.config.alpha

    this.content.setOrigin(this.config.origin.x, this.config.origin.y)

    this.config.devMode && this.turnOnDebug()
    this.config.hiYoyo && this.yoyo()
  }

  yoyo() {
    if (this.yoyoAnimations && this.yoyoAnimations.isPlaying) this.yoyoAnimations.stop()

    this.yoyoAnimations = this.game.tweens.add({
      targets: this.content,
      scaleX: {from: 1, to: 1.05},
      scaleY: {from: 1, to: 1.05},
      duration: 300,
      yoyo: true,
      repeat: 1
    })
  }

  turnOnDebug() {
    this.content.setInteractive()
    this.game.input.setDraggable(this.content)

    this.game.input.on('dragstart', function (pointer, gameObject) {
      gameObject.setTint(0xff0000)
    })
    this.game.input.on('drag', function (pointer, gameObject, dragX, dragY) {
      gameObject.x = dragX
      gameObject.y = dragY
    })
    this.game.input.on('dragend', function (pointer, gameObject) {
      gameObject.clearTint()
      console.log(`x: ${Math.round(gameObject.x)}, y: ${Math.round(gameObject.y)}`)
    })
  }

  showText(delay, duration) {
    this.game.tweens.add({
      targets: this.content,
      alpha: 1,
      scaleX: 1,
      scaleY: 1,
      delay,
      duration,
      // hold: 1000,
    })
  }

  hideText(delay, duration) {
    this.game.tweens.add({
      targets: this.content,
      scaleX: 0,
      scaleY: 0,
      delay,
      duration,
      // hold: 1000,
    })
  }

  changeText(text) {
    this.content.text = text
  }

  getObject(config) {
    return Object.assign({
      alpha: 1,
      x: 0, y: 0,
      text: 'default text',
      origin: {x: 0.5, y: 0.5}
    }, config)
  }

  getStyles(config) {
    return Object.assign(
      {
        font: '20px Arial',
        fill: '#342c2c',
        align: 'center',
      },
      config.textStyle || {}
    )
  }
}


