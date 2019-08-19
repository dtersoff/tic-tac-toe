'use strict'

const config = require('../config')
const store = require('../store')

const signUp = data => {
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    data
  })
}

const signIn = data => {
  return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: 'POST',
    data
  })
}

const changePassword = data => {
  return $.ajax({
    url: config.apiUrl + '/change-password',
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const signOut = () => {
  return $.ajax({
    url: config.apiUrl + '/sign-out',
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const getLastGame = () => {
  // get index
  // target = index.length-1
  // store index[target].id
  // get game with that id
  // check if game is over
  // if game is not over, offer resume game button
  // if resume game is clicked, get data from game and store it in a new game board, and print to the display board
}

module.exports = {
  signUp,
  signIn,
  changePassword,
  signOut,
  getLastGame
}
