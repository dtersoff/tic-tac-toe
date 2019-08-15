'use strict'

const boardMaker = require('../../../lib/board.js')
const Board = boardMaker.Board
const board = new Board()

const setMessage = (number, message) => {
  $(`.message div:nth-child(${number})`).text(message)
}

const isGameOver = () => {
  if (board.win || board.draw) {
    return true
  } else {
    return false
  }
}
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
    let message = ''
    if (board.checkWin()) {
      message = 'Player ' + board.winner + ' wins!'
      setMessage(1, message)
    } else if (board.checkFull()) {
      message = 'It\'s a draw!'
      board.over = true
      board.draw = true
      setMessage(1, message)
    } else {
      message = 'Player ' + board.getPlayer() + '\'s turn'
      setMessage(1, message)
    }
    setMessage(2, '')
  }
}

const onClickFailure = () => {
  setMessage(2, 'Invalid move, please try again')
}

const onNewGame = () => {
  board.newGame()
  setMessage(1, 'Player X\'s turn')
  setMessage(2, '')
  $('.square').text('')
}

const failure = () => {
  setMessage(2, 'An error has occured')
}

module.exports = {
  onClickSuccess,
  onClickFailure,
  isGameOver,
  onNewGame,
  failure
}
