import Phaser from 'phaser'
import GameScene from "./js/Scenes/GameScene"
import BootScene from "./js/Scenes/BootScene"
import StartScene from "./js/Scenes/StartScene"
import WinScene from "./js/Scenes/WinScene"

export const GAME_DEFAULT_SIZE = 1000

const game = new Phaser.Game(
  {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    physics: {
      default: 'arcade',
      arcade: {
        gravity: {y: 0}
      }
    },
    width: GAME_DEFAULT_SIZE,
    height: GAME_DEFAULT_SIZE,
    backgroundColor: '#edf0bb',
    scene: [BootScene, StartScene, GameScene, WinScene],
    scale: {
      mode: Phaser.Scale.RESIZE,
      parent: 'phaser-example',
      width: '100%',
      height: '100%'
    },
  }
)
