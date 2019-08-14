'use strict'

const Board = () => {
  this.cells = ['', '', '', '', '', '', '', '', '']
  this.player = true
  this.over = false
  this.win = false
  this.draw = false
}

Board.prototype.fillCell = (index, content) => {
  this.cells[index] = content
}

Board.prototype.changePlayer = () => {
  this.player = !this.player
}

Board.prototype.updateBoard = cells => {
  this.cells = cells
}

Board.prototype.newGame = () => {
  this.cells = ['', '', '', '', '', '', '', '', '']
  this.player = true
}

Board.prototype.checkLine = (a, b, c) => {
  if (a) {
    if (a === b && a === c) {
      return true
    }
  }
  return false
}
Board.prototype.checkWin = () => {
  const cells = this.cells
  switch (true) {
    case this.checkLine(cells[0], cells[1], cells[2]):
      this.win = true
      return true
    case this.checkLine(cells[0], cells[3], cells[6]):
      this.win = true
      return true
    case this.checkLine(cells[0], cells[4], cells[8]):
      this.win = true
      return true
    case this.checkLine(cells[1], cells[4], cells[7]):
      this.win = true
      return true
    case this.checkLine(cells[2], cells[4], cells[6]):
      this.win = true
      return true
    case this.checkLine(cells[2], cells[5], cells[8]):
      this.win = true
      return true
    case this.checkLine(cells[3], cells[4], cells[5]):
      this.win = true
      return true
    case this.checkLine(cells[6], cells[7], cells[8]):
      this.win = true
      return true
    default:
      return false
  }
}

module.exports = {
  Board: Board
}
