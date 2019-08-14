'use strict'

// const api = require('./api')
// const ui = require('./ui')

let currentPlayer = true
const onClick = event => {
  event.preventDefault()

  if (!$(event.target).text()) {
    if (currentPlayer) {
      $(event.target).text('X')
    } else {
      $(event.target).text('O')
    }
    currentPlayer = !currentPlayer
  }
}

module.exports = {
  onClick
}
