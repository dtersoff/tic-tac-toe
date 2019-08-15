'use strict'

const boardMaker = require('../../../lib/board.js')
const Board = boardMaker.Board
const board = new Board()

const onClickSuccess = event => {
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
    $('.message div:nth-child(1)').text('Player ' + board.getPlayer() + '\'s turn')
    if ($('.message div:nth-child(2)').text) {
      $('.message div:nth-child(2)').text('')
    }
  }
}

const onClickFailure = () => {
  $('.message div:nth-child(2)').text('Invalid move, please try again')
}

module.exports = {
  onClickSuccess,
  onClickFailure
}
