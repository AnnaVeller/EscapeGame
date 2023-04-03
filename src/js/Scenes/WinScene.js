import Phaser from "phaser"
import {resize} from "../Engine/resizer"

export default class WinScene extends Phaser.Scene {
  constructor() {
    super('Win')
  }

  create() {
    this.scale.on('resize', this.resize, this)
    this.resize(this.scale.gameSize)
  }

  resize() {
    // стоп ресайза, если ушли с этой сцены
    if (!this.scene.settings.active) return

    resize(this)
  }

}

