'use strict'

// const api = require('./api')
const ui = require('./ui')

const onClick = event => {
  event.preventDefault()
  if (!$(event.target).text()) {
    ui.onClickSuccess(event)
  } else {
    ui.onClickFailure()
  }
}

module.exports = {
  onClick
}
