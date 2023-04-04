import {GAME_DEFAULT_SIZE} from "../../index"

export default class Player {
  constructor(game, config) {
    this.game = game
    this.config = config

    this.speed = 150

    this.content = this.game.physics.add.sprite(GAME_DEFAULT_SIZE / 2, 440, 'player')

    // this.player.setBounce(0.2)
    // this.player.setCollideWorldBounds(true)
    this.target = {}

    this.game.input.on('pointerdown', (pointer) => {
      this.target = {x: pointer.worldX, y: pointer.worldY}
      this.game.physics.moveToObject(this.content, this.target, 200)
    }, this)
  }

  update() {
    if (!this.target.hasOwnProperty('x')) return

    const tolerance = 5

    const distance = Phaser.Math.Distance.BetweenPoints(this.content, this.target)

    if (this.minDist && distance - this.minDist > 2) {
      this.stopMoving()
    }

    if (!this.minDist || this.minDist > distance) {
      this.minDist = distance
    }

    if (this.content.body.speed > 0 && distance < tolerance) {
      this.stopMoving()
    }
  }

  hide() {
    this.game.tweens.add({
      targets: this.content,
      scaleX: 0,
      scaleY: 0,
      duration: 200,
      ease: 'Sine.easeInOut'
    })
  }

  stopMoving() {
    this.minDist = null
    this.content.setVelocity(0, 0)
    this.content.body.speed = 0
    this.target = {}
  }

  goUp() {
    // this.content.setVelocity(0, -this.speed)
    this.content.setVelocityY(-this.speed)
  }

  goDown() {
    // this.content.setVelocity(0, this.speed)
    this.content.setVelocityY(this.speed)
  }

  goRight() {
    // this.content.setVelocity(this.speed, 0)
    this.content.setVelocityX(this.speed)
  }

  goLeft() {
    // this.content.setVelocity(-this.speed, 0)
    this.content.setVelocityX(-this.speed)
  }

}


