'use strict'
const getFormFields = require('./../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

const onSignUp = (event) => {
  event.preventDefault()
  console.log('submitted sign-up!')
  // get form data
  const data = getFormFields(event.target)
  // make api call
  api.signUp(data)
  // handle success
    .then(ui.signUpSuccess)
    // handle failure
    .catch(ui.failure)
}

const onSignIn = event => {
  // prevent default action
  event.preventDefault()
  console.log('submitted sign-in!')
  // get form data
  const data = getFormFields(event.target)
  // make api call
  api.signIn(data)
  // handle success
    .then(ui.signInSuccess)
    // handle failure
    .catch(ui.failure)
}

module.exports = {
  onSignUp,
  onSignIn
}
