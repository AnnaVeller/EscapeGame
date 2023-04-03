import Phaser from "phaser"
import {resize} from "../Engine/resizer"
import Walls from "../Sprites/Walls"
import Player from "../Sprites/Player"
import {GAME_DEFAULT_SIZE} from "../../index"
import TextSprite from "../Engine/TextSprite"
import Fires from "../Sprites/Fires"
import Phones from "../Sprites/Phones"
import Exits from "../Sprites/Exits"

const STATE = {
  fire: 'fire', // необходимо найти огнетушитель
  phone: 'phone', //необходимо найти телефон
  exit: 'exit', // необходимо найти выход
  win: 'win', // вы спаслись
}

export default class GameScene extends Phaser.Scene {
  constructor() {
    super('Game')

    this.state = STATE.fire
  }

  create() {
    new TextSprite(this, {x: 199, y: 310, text: 'Офис 1'})
    new TextSprite(this, {x: 369, y: 310, text: 'Офис 2'})
    new TextSprite(this, {x: 560, y: 310, text: 'Офис 3'})
    new TextSprite(this, {x: 756, y: 310, text: 'Бухгалтерия'})
    new TextSprite(this, {x: 927, y: 310, text: 'Серверная'})
    new TextSprite(this, {x: 166, y: 600, text: 'Переговорная'})
    new TextSprite(this, {x: 328, y: 600, text: 'WC'})
    new TextSprite(this, {x: 689, y: 600, text: 'Офис 4'})
    new TextSprite(this, {x: 920, y: 543, text: 'Архив'})

    this.message = new TextSprite(this, {
      x: 500, y: 230, text: 'НАЙДИТЕ ОГНЕТУШИТЕЛЬ', hiYoyo: true,
      textStyle: {font: '30px Monospace', stroke: '#46ff00', strokeThickness: 3, fill: '#032a08'},
    })

    const walls = new Walls(this, {})

    this.cursors = this.input.keyboard.createCursorKeys()

    this.fires = new Fires(this, {})
    this.phones = new Phones(this, {})
    this.exits = new Exits(this, {})

    this.player = new Player(this, {})

    this.physics.add.collider(this.player.content, walls.walls)

    this.physics.add.overlap(this.player.content, this.fires.group, this.collectFire, null, this)
    this.physics.add.overlap(this.player.content, this.phones.group, this.collectPhone, null, this)
    this.physics.add.overlap(this.player.content, this.exits.group, this.exitBuilding, null, this)

    this.cameras.main.setBounds(0, 0, GAME_DEFAULT_SIZE, GAME_DEFAULT_SIZE - 50)
    this.cameras.main.startFollow(this.player.content)

    this.scale.on('resize', this.resize, this)
    this.resize(this.scale.gameSize)
  }


  update() {
    if (this.state === STATE.win) return

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
    if (this.state !== STATE.fire) return

    fire.disableBody(true, true)
    this.message.changeText('НАЙДИТЕ ТЕЛЕФОН')
    this.message.yoyo()
    this.state = STATE.phone
  }

  collectPhone(player, phone) {
    if (this.state !== STATE.phone) return

    phone.disableBody(true, true)
    this.message.changeText('НАЙДИТЕ ВЫХОД')
    this.message.yoyo()
    this.state = STATE.exit
  }

  exitBuilding(player, exit) {
    if (this.state !== STATE.exit) return

    this.player.hide()
    exit.disableBody(true, true)
    this.message.hideText(0, 300)
    this.state = STATE.win
    this.scene.launch('Win')
  }

  resize() {
    // стоп ресайза, если ушли с этой сцены
    if (!this.scene.settings.active) return

    resize(this)
  }

}
