'use strict'

// const api = require('./api')
const ui = require('./ui')

const onClick = event => {
  event.preventDefault()
  if (ui.isGameOver()) {
  } else if (!$(event.target).text()) {
    ui.onClickSuccess(event)
  } else {
    ui.onClickFailure()
  }
}

const newGame = () => {
  ui.onNewGame()
}

module.exports = {
  onClick,
  newGame
}
