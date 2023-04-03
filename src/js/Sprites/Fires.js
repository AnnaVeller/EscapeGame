export default class Fires {
  constructor(game) {
    this.game = game

    this.group = this.game.physics.add.group()

    this.group.create(271, 614, 'fire')
    this.group.create(487, 276, 'fire')
    this.group.create(880, 615, 'fire')
    this.group.create(899, 388, 'fire')
  }
}
