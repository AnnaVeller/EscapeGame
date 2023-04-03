export default class Sprite {
  constructor(game, config = {}) {
    this.game = game
    this.config = this.getObject(config)

    this.content = game.add.sprite(this.config.x, this.config.y, this.config.key)
    this.content.alpha = this.config.alpha
    this.content.setOrigin(this.config.origin.x, this.config.origin.y)
    this.content.setScale(this.config.scale.x, this.config.scale.y)
    this.content.visible = this.config.visible
    this.name = this.config.name

    this.content.parentClass = this

    if (this.config.tint) {
      this.content.tint = this.config.tint
    }
    if (this.config.interactive) {
      this.content.setInteractive()
    }

    if (this.config.devMode) {
      this.turnOnDebug()
    }
  }

  // изменяет скейл сохраняя знаки
  changeScale(valueX, valueY = valueX) {
    this.content.setScale(Math.sign(this.content.scaleX) * valueX, Math.sign(this.content.scaleY) * valueY)
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

  getObject(config) {
    return Object.assign({
      alpha: 1,
      x: 0, y: 0,
      scale: {x: 1, y: 1},
      origin: {x: 0.5, y: 0.5},
      interactive: false,
      name: '',
      visible: true
    }, config)
  }
}


