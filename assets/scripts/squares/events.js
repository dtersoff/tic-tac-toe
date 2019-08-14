'use strict'

// const api = require('./api')
// const ui = require('./ui')

const boardMaker = require('../../lib/board.js')
const Board = boardMaker.board
const board = new Board()

const onClick = event => {
  event.preventDefault()

  if (!$(event.target).text()) {
    let player = ''
    if (board.player) {
      player = 'X'
    } else {
      player = 'O'
    }
    $(event.target).text(player)
    board.player = !board.player
  }
}

module.exports = {
  onClick
}
