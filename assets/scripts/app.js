'use strict'

const authEvents = require('./auth/events')
const squareEvents = require('./squares/events')

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#change-password').hide()
  $('#sign-out').hide()
  $('#board').hide()
  $('#game-messages').hide()
  $('#new-game').hide()
  $('#last-game').hide()
  $('#show-stats').hide()
  $('#stat-message').hide()

  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('submit', authEvents.onSignOut)

  $('.square').on('click', squareEvents.onClick)
  $('#new-game').on('click', squareEvents.newGame)
  $('#show-stats').on('click', squareEvents.showStats)
  $('#last-game').on('click', squareEvents.onLastGame)
})
