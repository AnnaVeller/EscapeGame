
const exit = "data:image/png;base64,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"

const phone = "data:image/png;base64,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"

const fire = "data:image/png;base64,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"

const wall = "data:image/png;base64,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"

const wallVertical = "data:image/png;base64,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"

export {exit, phone, fire, wall, wallVertical}