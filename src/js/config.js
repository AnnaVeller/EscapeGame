import {phone, exit, wall, fire, wallVertical} from "../assets/imagesBase64"

export const RESOURCES = [
  {
    key: 'exit',
    type: 'base64',
    url: exit
  },

  {
    key: 'wallVertical',
    type: 'base64',
    url: wallVertical
  },

  {
    key: 'fire',
    type: 'base64',
    url: fire
  },

  {
    key: 'wall',
    type: 'base64',
    url: wall
  },

  {
    key: 'phone',
    type: 'base64',
    url: phone
  },

  {
    key: 'player',
    type: 'spritesheet',
    url: require('../assets/player.png'),
    config: {frameWidth: 32, frameHeight: 48}
  },
]
