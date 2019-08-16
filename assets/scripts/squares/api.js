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
          value: store.board.getPlayer()
        },
        over: false
      }
    }
  })
}

module.exports = {
  create,
  click
}
