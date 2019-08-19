'use strict'

const Board = function () {
  this.cells = ['', '', '', '', '', '', '', '', '']
  this.player = true
  this.over = false
  this.win = false
  this.draw = false
  this.winner = ''
}

Board.prototype.fillCell = function (index, content) {
  this.cells[index] = content
}

Board.prototype.changePlayer = function () {
  this.player = !this.player
}

Board.prototype.updateBoard = function (cells) {
  this.cells = cells
}

Board.prototype.getPlayer = function () {
  if (this.player) {
    return 'X'
  } else {
    return 'O'
  }
}

Board.prototype.newGame = function () {
  this.cells = ['', '', '', '', '', '', '', '', '']
  this.player = true
  this.over = false
  this.win = false
  this.draw = false
  this.winner = ''
}

Board.prototype.makeMove = function (cell) {
  // const board = this.cells
  const mark = (this.player ? 'X' : 'O')
  this.fillCell(cell, mark)
  this.changePlayer()
}

Board.prototype.checkLine = function (a, b, c) {
  if (a) {
    if (a === b && a === c) {
      return true
    }
  }
  return false
}

Board.prototype.setWinner = function (value) {
  if (value) {
    this.winner = 'X'
  } else {
    this.winner = 'O'
  }
}
Board.prototype.setWon = function () {
  this.win = true
  this.over = true
  this.setWinner(!this.player)
}
Board.prototype.checkWin = function () {
  const cells = this.cells
  switch (true) {
    case this.checkLine(cells[0], cells[1], cells[2]):
      this.setWon()
      return true
    case this.checkLine(cells[0], cells[3], cells[6]):
      this.setWon()
      return true
    case this.checkLine(cells[0], cells[4], cells[8]):
      this.setWon()
      return true
    case this.checkLine(cells[1], cells[4], cells[7]):
      this.setWon()
      return true
    case this.checkLine(cells[2], cells[4], cells[6]):
      this.setWon()
      return true
    case this.checkLine(cells[2], cells[5], cells[8]):
      this.setWon()
      return true
    case this.checkLine(cells[3], cells[4], cells[5]):
      this.setWon()
      return true
    case this.checkLine(cells[6], cells[7], cells[8]):
      this.setWon()
      return true
    default:
      return false
  }
}

Board.prototype.isFilled = function (cell) {
  if (cell) {
    return true
  } else {
    return false
  }
}
Board.prototype.checkFull = function () {
  if (this.cells.every(this.isFilled) && !this.win) {
    return true
  } else {
    return false
  }
}
Board.prototype.checkDraw = function () {
  if (!this.checkWin() && this.checkFull()) {
    this.draw = true
    this.over = true
  }
}

Board.prototype.showBoard = function () {
  const board = this.cells
  const message = `\n[${board[0]}] [${board[1]}] [${board[2]}]
  \n[${board[3]}] [${board[4]}] [${board[5]}]
  \n[${board[6]}] [${board[7]}] [${board[8]}]`
  return message
}

Board.prototype.resumeGame = function (oldGame) {
  this.cells = oldGame.cells
  this.over = false
  this.win = false
  this.draw = false
  const xs = this.cells.filter(square => square === 'x')
  const os = this.cells.filter(square => square === 'o')
  if (xs.length === os.length) {
    this.player = false
  }
}

module.exports = {
  Board: Board
}
