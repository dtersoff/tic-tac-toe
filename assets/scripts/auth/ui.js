'use strict'

const store = require('../store')

const signUpSuccess = () => {
  // handle storing user token, if it exists
  // {"user":{"id":, "email:", "token":}}
  // store.token = data.user.token

  $('#message').text('Successful sign up ')
  $('#message').removeClass()
  $('#message').addClass('success') // optional for css styling
  $('form').trigger('reset')
}

const signInSuccess = (data) => {
  // handle storing user token, if it exists
  // {"user":{"id":, "email:", "token":}}
  // store.token = data.user.token

  store.user = data.user

  $('#message').text('Successful sign-in ')
  $('#message').removeClass()
  $('#message').addClass('success')
  $('#change-password').show()
  $('#sign-up').hide()
  $('#sign-in').hide()
  $('#sign-out').show()
  $('form').trigger('reset')
  $('#new-game').show()
  $('#last-game').show()
  $('#show-stats').show()
  $('#stat-message').show()
  $('#last-game').attr('disabled', false)
}

const changePasswordSuccess = () => {
  // handle storing user token, if it exists
  // {"user":{"id":, "email:", "token":}}
  // store.token = data.user.token

  $('#message').text('Successfully changed password')
  $('#message').removeClass()
  $('#message').addClass('success') // optional for css styling
  $('form').trigger('reset')
}

const signOutSuccess = () => {
  store.user = null
  $('#message').text('Successfully signed out')
  $('#message').removeClass()
  $('#message').addClass('success') // optional for css styling
  $('#change-password').hide()
  $('#sign-up').show()
  $('#sign-in').show()
  $('#sign-out').hide()
  $('#board').hide()
  $('#game-messages').hide()
  $('#new-game').hide()
  $('#show-stats').hide()
  $('#stat-message').hide()
  $('#last-game').hide()
  $(`#stat-message`).text('')
}

const failure = () => {
  $('#message').text('Failed operation')
  $('#message').removeClass()
  $('#message').addClass('failure') // optional for css styling
  $('form').trigger('reset')
}

module.exports = {
  signUpSuccess,
  signInSuccess,
  changePasswordSuccess,
  signOutSuccess,
  failure
}
