// classes 
const game = new Game()


// variables 
let result = document.querySelector(".result")
// choices 
let rockDiv = document.querySelector("#r")
let paperDiv = document.querySelector("#p")
let scissorsDiv = document.querySelector("#s")
let resetBtn = document.querySelector(".my-btn")

// eventlistener
eventlistener()
function eventlistener() {
   // when page loaded 
   document.addEventListener("DOMContentLoaded", e => {
      // display whos turn
      game.whosTurn()
   })
   // when each chhoices clicked
   rockDiv.addEventListener("click", e => {
      // display whos turn 
      game.whosTurn("R")
   }) 
   paperDiv.addEventListener("click", e => {
      game.whosTurn("P")
   }) 
   scissorsDiv.addEventListener("click", e => {
      game.whosTurn("S")
   }) 
   // when reset btn clicked 
   resetBtn.addEventListener("click", e => {
      game.resetGame()
   })
}