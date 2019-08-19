'use strict'

const store = require('../store')
const boardMaker = require('../../../lib/board.js')
const Board = boardMaker.Board
const board = new Board()
store.board = board

const setMessage = (number, message) => {
  $(`#game-messages div:nth-child(${number})`).text(message)
}

const isGameOver = () => {
  if (store.board.win || store.board.draw) {
    return true
  } else {
    return false
  }
}
const onClickSuccess = (data, event) => {
  if (!$(event.target).text()) {
    let player = ''
    if (!store.board.player) {
      player = 'X'
    } else {
      player = 'O'
    }
    $(event.target).text(player)

    let message = ''
    if (store.board.checkWin()) {
      message = 'Player ' + store.board.winner + ' wins!'
      setMessage(1, message)
    } else if (store.board.checkFull()) {
      message = 'It\'s a draw!'
      store.board.over = true
      store.board.draw = true
      setMessage(1, message)
    } else {
      message = 'Player ' + store.board.getPlayer() + '\'s turn'
      setMessage(1, message)
    }
    setMessage(2, '')
  }
  console.log(store.board.showBoard())
}

const onClickFailure = () => {
  setMessage(2, 'Invalid move, please try again')
}

const onNewGame = data => {
  store.game = data.game
  store.board.newGame()
  setMessage(1, 'Player X\'s turn')
  setMessage(2, '')
  $('.square').text('')
  if ($('#board').is(':hidden')) {
    $('#board').show()
    $('#game-messages').show()
  }
}

const onIndexSuccess = data => {
  const games = data.games
  const totalGames = games.length
  const finishedGames = games.filter(game => game.over)
  const message = '<div>You have played ' + totalGames + ' game(s).</div>' +
  '<div>You have finished ' + finishedGames.length + ' game(s).</div>'
  $('#stat-message').html(message)
}

const failure = () => {
  setMessage(2, 'An error has occured')
}

const onLastGameSuccess = data => {
  if ($('#board').is(':hidden')) {
    $('#board').show()
    $('#game-messages').show()
    $('#last-game').attr('disabled', true)
  }

  const games = data.games
  const lastGame = games[games.length - 1]
  store.game = lastGame
  store.board.resumeGame(lastGame)

  for (let i = 0; i < lastGame.length; i++) {
    const mark = lastGame.cells[i].toUpperCase()
    $(`#board .square:nth-child(${i + 1})`).text(mark)
  }
  console.log(store.board.showBoard())
}

module.exports = {
  onClickSuccess,
  onClickFailure,
  isGameOver,
  onNewGame,
  onIndexSuccess,
  onLastGameSuccess,
  failure
}
