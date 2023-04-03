export default class Exits {
  constructor(game) {
    this.game = game

    this.group = this.game.physics.add.group()

    this.group.create(67, 394, 'exit')
    this.group.create(807, 506, 'exit')
  }

}
