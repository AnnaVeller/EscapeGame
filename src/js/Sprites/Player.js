import {GAME_DEFAULT_SIZE} from "../../index"

export default class Player {
  constructor(game, config) {
    this.game = game
    this.config = config

    this.speed = 250

    this.content = this.game.physics.add.sprite(GAME_DEFAULT_SIZE / 2, 440, 'player')

    // this.player.setBounce(0.2)
    // this.player.setCollideWorldBounds(true)
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
    this.content.setVelocity(0, 0)
  }

  goUp() {
    this.content.setVelocity(0, -this.speed)
  }

  goDown() {
    this.content.setVelocity(0, this.speed)
  }

  goRight() {
    this.content.setVelocity(this.speed, 0)
  }

  goLeft() {
    this.content.setVelocity(-this.speed, 0)
  }

}


