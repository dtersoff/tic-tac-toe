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
    .catch(ui.signUpFailure)
}

module.exports = {
  onSignUp
}
