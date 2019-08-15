'use strict'

// const api = require('./ap`i')

const api = require('./api')
const ui = require('./ui')

const onClick = event => {
  event.preventDefault()
  if (ui.isGameOver()) {
  } else if (!$(event.target).text()) {
    api.click(event.target)
    ui.onClickSuccess(event)
  } else {
    ui.onClickFailure()
  }
  // api.click(event)
  // .then(ui.onClickSuccess(event))
}
// .catch(ui.onClickFailure)

const newGame = (event) => {
  // prevent default action
  event.preventDefault()
  console.log('successfully created')
  // make api call
  api.create()
  // handle success
    .then(ui.onNewGame)
    // handle failure
    .catch(ui.failure)
}

module.exports = {
  onClick,
  newGame
}
