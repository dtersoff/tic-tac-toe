'use strict'

// const api = require('./api')
// const ui = require('./ui')

let currentPlayer = true
const onClick = event => {
  event.preventDefault()

  if (!$(event.target).text()) {
    let player = ''
    if (currentPlayer) {
      player = 'X'
    } else {
      player = 'O'
    }
    $(event.target).text(player)
    currentPlayer = !currentPlayer
  }
}

module.exports = {
  onClick
}
