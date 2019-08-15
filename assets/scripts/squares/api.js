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

const click = event => {
  //
}

module.exports = {
  create,
  click
}
