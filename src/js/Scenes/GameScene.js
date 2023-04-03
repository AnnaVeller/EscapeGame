import Phaser from "phaser"
import {resize} from "../Engine/resizer"
import Sprite from "../Engine/Sprite"
import Walls from "../Sprites/Walls"
import Player from "../Sprites/Player"
import {GAME_DEFAULT_SIZE} from "../../index"

export default class GameScene extends Phaser.Scene {
  constructor() {
    super('Game')
  }

  create() {
    new Sprite(this, {key: 'bg', origin: {x: 0, y: 0}, y: 240})
    const walls = new Walls(this, {})

    this.player = new Player(this, {})

    this.cursors = this.input.keyboard.createCursorKeys()

    const fires = this.physics.add.group()

    fires.create(271, 614, 'fire')
    fires.create(487, 276, 'fire')
    fires.create(880, 615, 'fire')
    fires.create(899, 388, 'fire')

    this.physics.add.collider(this.player.content, walls.walls)
    this.physics.add.overlap(this.player.content, fires, this.collectFire, null, this)

    this.cameras.main.setBounds(0, 0, GAME_DEFAULT_SIZE, GAME_DEFAULT_SIZE - 50)
    this.cameras.main.startFollow(this.player.content)

    this.scale.on('resize', this.resize, this)
    this.resize(this.scale.gameSize)
  }


  update() {
    const {left, right, up, down} = this.cursors

    if (left.isDown) {
      this.player.goLeft()
    } else if (right.isDown) {
      this.player.goRight()
    } else if (down.isDown) {
      this.player.goDown()
    } else if (up.isDown) {
      this.player.goUp()
    } else {
      this.player.stopMoving()
    }
  }

  collectFire(player, fire) {
    fire.disableBody(true, true)
  }

  resize() {
    // стоп ресайза, если ушли с этой сцены
    if (!this.scene.settings.active) return

    resize(this)
  }

}
