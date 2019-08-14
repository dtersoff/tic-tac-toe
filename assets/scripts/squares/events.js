'use strict'

// const api = require('./api')
// const ui = require('./ui')

const boardMaker = require('../../../lib/board.js')
const Board = boardMaker.board
const board = new Board()

const onClick = event => {
  event.preventDefault()

  if (!$(event.target).text()) {
    let player = ''
    const cell = event.target.cell
    if (board.player) {
      player = 'X'
    } else {
      player = 'O'
    }
    $(event.target).text(player)
    board.makeMove(cell)
  }
  console.log(board)
}

module.exports = {
  onClick
}
