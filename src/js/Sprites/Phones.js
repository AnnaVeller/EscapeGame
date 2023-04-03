export default class Phones {
  constructor(game) {
    this.game = game

    this.group = this.game.physics.add.group()

    this.group.create(269, 552, 'phone')
    this.group.create(248, 389, 'phone')
    this.group.create(428, 390, 'phone')
    this.group.create(653, 503, 'phone')
    this.group.create(692, 392, 'phone')
    this.group.create(486, 391, 'phone')
  }

}
