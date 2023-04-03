export default class FireStopper extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y) {
    super(scene, x, y, 'fire')
  }

  preUpdate(time, delta) {
    super.preUpdate(time, delta)
  }
}
