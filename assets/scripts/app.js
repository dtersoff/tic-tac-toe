'use strict'

const authEvents = require('./auth/events')
const squareEvents = require('./squares/events')

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)

  $('.square').on('click', squareEvents.onClick)
  $('#new-game').on('click', squareEvents.newGame)
})
