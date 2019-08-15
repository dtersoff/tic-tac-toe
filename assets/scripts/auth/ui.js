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
}

module.exports = {
  signUpSuccess
}
