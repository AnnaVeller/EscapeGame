import {IS_DEBUG, WALL_MAP} from "./wallMap"

export default class Walls {
  constructor(game, {}) {
    this.game = game

    this.walls = this.game.physics.add.staticGroup()

    WALL_MAP.forEach(el =>
      this.walls.create(el.position[0], el.position[1], el.isVertical ? 'wallVertical' : 'wall')
        .setScale(...el.scale).setOrigin(0, 0).refreshBody()
    )

    IS_DEBUG && this.turnOnDebug()
  }

  turnOnDebug() {
    this.walls.children.entries.forEach(wall => {
      if (IS_DEBUG) {
        // wall.id = el.id
        wall.setInteractive()
        this.game.input.setDraggable(wall)
      }
    })

    this.game.input.on('dragstart', function (pointer, gameObject) {
      gameObject.setTint(0xff0000)
    })
    this.game.input.on('drag', function (pointer, gameObject, dragX, dragY) {
      gameObject.x = dragX
      gameObject.y = dragY
    })
    this.game.input.on('dragend', function (pointer, gameObject) {
      gameObject.clearTint()
      // console.log(gameObject.id)
      console.log(`${Math.round(gameObject.x)}, ${Math.round(gameObject.y)}`)
    })
  }

}


