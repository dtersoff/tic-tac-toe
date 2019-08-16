# Technologies used
- Bootstrap
- The code used to scroll when the new game and stat buttons are clicked is from http://www.robertprice.co.uk/robblog/using-jquery-to-scroll-to-an-element/

# Planning
1. Creat a mock-up board.
2. Build event handlers to place Xs and Os in the squares when clicked.
3. Design a Board prototype in JS, with functionality to keep track of players, keep track of the contents of cells, and check for victory conditions.
4. Integrate the two pieces together, so that updates to one will update the other.
5. Implement user/authorization API.
6. set features to be hidden or visible depending on token status.
7. Implement game API.
8. Add option to obtain game stats.
9. Styling for board.

My strategy was essentially to work on making one functional piece at a time. That way even if a bit of code wasn't in the right place at the start, I at least had it written and knew it worked, and could move it if need be.

# Unsolved Problems
- Getting more information about previous games
- Being able to continue the last game if it wasn't finished
- Multiplayer between different accounts
- Adding a computer player

# Wireframe and User Stories

- ![wireframe](https://imgur.com/a/SdfoXfj "Tic Tac Toe wireframe")

- As a user, when I am logged in,
  - I can start a new game
- As a user, when I start a new game,
	- I see an empty game board
- As a user, when I start a new game
  - I should be player X
- As a user,
  - I should know whose turn it is
- As a user, when I click on a square,
  - it should put an x or an o and know which one to pick.
- As a user, when I click on a taken spot,
  - it should not change the symbol
- As a user, when I click on a taken spot,
  - it should not count as a turn
- As a user,
  - I should know if I’ve won or lost or if it’s a draw
- As a user, when the game is over
  - I shouldn’t be able to keep clicking.
