export const RESOURCES = [
  {
    key: 'bg',
    type: 'base64',
    base64: require('../assets/bg.json'),
  },

  {
    key: 'wallVertical',
    type: 'base64',
    base64: require('../assets/wallVertical.json'),
  },

  {
    key: 'fire',
    type: 'base64',
    base64: require('../assets/fire.json'),
  },

  {
    key: 'wall',
    type: 'base64',
    base64: require('../assets/wall.json'),
  },

  {
    key: 'player',
    type: 'spritesheet',
    url: require('../assets/player.png'),
    config: {frameWidth: 32, frameHeight: 48}
  },
]
