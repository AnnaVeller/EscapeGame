export default class Player {
  constructor(game, config) {
    this.game = game
    this.config = config

    this.speed = 200

    this.content = this.game.physics.add.sprite(450, 445, 'player')
    this.content.setScale(0.8)

    // this.player.setBounce(0.2)
    // this.player.setCollideWorldBounds(true)
    this.animationsCreate()

  }

  animationsCreate() {
    this.game.anims.create({
      key: 'left',
      frames: this.game.anims.generateFrameNumbers('player', {start: 0, end: 3}),
      frameRate: 10,
      repeat: -1,
    })

    this.game.anims.create({
      key: 'turn',
      frames: [{key: 'player', frame: 4}],
      frameRate: 20
    })
    this.game.anims.create({
      key: 'right',
      frames: this.game.anims.generateFrameNumbers('player', {start: 5, end: 8}),
      frameRate: 10,
      repeat: -1
    })


    // this.content.play('left')
    // this.content.anims.play('left')
  }

  stopMoving() {
    this.content.setVelocity(0, 0)
    this.content.anims.play('turn')
  }

  goUp() {
    this.content.setVelocity(0, -this.speed)
    this.content.anims.play('turn')
  }

  goDown() {
    this.content.setVelocity(0, this.speed)
    this.content.anims.play('left', true)
  }

  goRight() {
    this.content.setVelocity(this.speed, 0)
    this.content.anims.play('right', true)
  }

  goLeft() {
    this.content.setVelocity(-this.speed, 0)
    this.content.anims.play('left', true)
  }

}


