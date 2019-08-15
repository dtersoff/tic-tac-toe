'use strict'

const store = require('../store')

const signUpSuccess = () => {
  // handle storing user token, if it exists
  // {"user":{"id":, "email:", "token":}}
  // store.token = data.user.token

  $('#message').text('Successful sign up ')
  $('#message').removeClass()
  $('#message').addClass('success') // optional for css styling
  console.log('success ran')
  $('form').trigger('reset')
}

const signInSuccess = (data) => {
  // handle storing user token, if it exists
  // {"user":{"id":, "email:", "token":}}
  // store.token = data.user.token

  store.user = data.user

  $('#message').text('Successful sign in ')
  $('#message').removeClass()
  $('#message').addClass('success') // optional for css styling
  console.log('Successful sign in. User is' + store.user)
  $('#change-password').show()
  $('#sign-up').hide()
  $('#sign-in').hide()
  $('#sign-out').show()
  $('#board').show()
  $('form').trigger('reset')
  $('#game-messages').show()
  $('#new-game').show()
}

const changePasswordSuccess = () => {
  // handle storing user token, if it exists
  // {"user":{"id":, "email:", "token":}}
  // store.token = data.user.token

  $('#message').text('Successfully changed password')
  $('#message').removeClass()
  $('#message').addClass('success') // optional for css styling
  console.log('success ran')
  $('form').trigger('reset')
}

const signOutSuccess = () => {
  store.user = null
  $('#message').text('Successfully signed out')
  $('#message').removeClass()
  $('#message').addClass('success') // optional for css styling
  console.log('success ran')
  $('#change-password').hide()
  $('#sign-up').show()
  $('#sign-in').show()
  $('#sign-out').hide()
  $('#board').hide()
  $('#game-messages').hide()
  $('#new-game').hide()
}

const failure = () => {
  $('#message').text('Failed operation')
  $('#message').removeClass()
  $('#message').addClass('failure') // optional for css styling
  console.log('failure ran')
}

module.exports = {
  signUpSuccess,
  signInSuccess,
  changePasswordSuccess,
  signOutSuccess,
  failure
}
