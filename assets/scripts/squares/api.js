'use strict'

const config = require('../config.js')
const store = require('../store')

const create = formData => {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: '{}'
  })
}

const click = cell => {
  store.board.makeMove(cell)
  store.board.checkWin()
  store.board.checkDraw()
  return $.ajax({
    url: config.apiUrl + '/games/' + store.game.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      game: {
        cell: {
          index: cell,
          value: store.board.cells[cell]
        },
        over: store.board.over
      }
    }
  })
}

const index = () => {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  create,
  click,
  index
}
