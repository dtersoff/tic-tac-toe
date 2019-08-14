'use strict'

// const api = require('./api')
// const ui = require('./ui')

const boardMaker = require('../../../lib/board.js')
const Board = boardMaker.Board
const board = new Board()

const onClick = event => {
  event.preventDefault()
  if (!$(event.target).text()) {
    let player = ''
    const cell = $(event.target).data('cell')
    if (board.player) {
      player = 'X'
    } else {
      player = 'O'
    }
    $(event.target).text(player)
    board.makeMove(cell)
    console.log(board.checkWin())
  }
  console.log(board.showBoard())
}

module.exports = {
  onClick
}
