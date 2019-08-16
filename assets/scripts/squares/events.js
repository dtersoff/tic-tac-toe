'use strict'

// const api = require('./ap`i')

const api = require('./api')
const ui = require('./ui')

const onClick = event => {
  event.preventDefault()
  const cell = $(event.target).data('cell')
  if (!$(event.target).text() && !ui.isGameOver()) {
    api.click(cell)
      .then((data) => ui.onClickSuccess(data, event))
      .catch(ui.failure)
  } else {
    ui.onClickFailure()
  }
  // api.click(event)
  // .then(ui.onClickSuccess(event))
}
// .catch(ui.onClickFailure)

const newGame = event => {
  // prevent default action
  event.preventDefault()

  console.log('successfully created')
  // make api call
  api.create()
  // handle success
    .then(ui.onNewGame)
    // handle failure
    .catch(ui.failure)

  $('html, body').animate({
    scrollTop: ($('.game-contents').first().offset().top)
  }, 500)
}

const showStats = () => {
  api.index()
    .then(ui.onIndexSuccess)
    .catch(ui.failure)

  $('html, body').animate({
    scrollTop: ($('#show-stats').first().offset().top)
  }, 500)
}

module.exports = {
  onClick,
  newGame,
  showStats
}
