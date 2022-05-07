class Game{
   constructor() {
      // this for define rounds 
      this.row = 0;
      // result container 
      this.result = document.querySelector(".result");
      // for player choices 
      this.choice_1;
      this.choice_2;
      // players point 
      this.point_1 = document.querySelector("#point-1")
      this.point_2 = document.querySelector("#point-2")
   }
   // for display whos turn and display game result in div.result
   whosTurn(choice) {
      // for first round (when page loaded )
      if (this.row == 0) {
         // make container for display whos turn and add to .result
         let div = document.createElement("div")
         div.setAttribute("class", "display")
         div.innerHTML = `
         <div class="display">
         <p>( player-1 turn )</p>
         </div>
         `
         this.result.appendChild(div)
         // this for going to next round 
         this.row += 1
      // for second round (player-1 choice)
      }else if(this.row == 1){
         // save player-1 choice
         this.choice_1 = choice
         // remove inner result div 
         let have = this.result.querySelector("div");
         if(have) {
            have.remove()
         }
         // make container for display whos trurn and add to .result 
         let div = document.createElement("div")
         div.setAttribute("class", "display")
         div.innerHTML = `
         <div class="display">
         <p>( player-2 turn )</p>
         </div>
         `
         this.result.appendChild(div)
         // this for going to next round 
         this.row += 1
      // third round (player-2 choice )
      }else if(this.row == 2) {
         // save player-2 choice
         this.choice_2 = choice
         // remove inner result div 
         let have = this.result.querySelector("div");
         if(have) {
            have.remove()
         }
         // for find winner 
         let winner = this.whosWinner(this.choice_1, this.choice_2);
         // for displaying whos winner and add point 
         let who;
         if (winner == "equal") {
            who = "PLAYER-1 == PLAYER-2"
         }else if (winner == "player-1") {
            this.addPoint(1)
            who = `WINNER = ${winner}`
         }else if (winner == "player-2") {
            this.addPoint(2)
            who = `WINNER = ${winner}`
         }
         // make container for display game result and add to .result 
         let div = document.createElement("div")
         div.setAttribute("class", "display")
         div.innerHTML = `
         <div>
         <p>( ${who} )</p>
         <p>player-1 choice = ${this.choice_1}</p>
         <p>player-2 choice = ${this.choice_2}</p>
         </div>
         <div>( player-1 turn )</div>
         `
         this.result.appendChild(div)
         // this for start from round tow
         this.row = 1;
      }
   }
   // for adding player's point in div.badget 
   addPoint(who) {
      // player-1
      if (who == 1) {
         let point = Math.floor(this.point_1.innerHTML);
         point += 1;
         this.point_1.innerHTML = point
      // player-2
      } else if (who == 2) {
         let point = Math.floor(this.point_2.innerHTML);
         point += 1;
         this.point_2.innerHTML = point
      }
   }
   // this for who winner with their choices 
   whosWinner(choic_1, choice_2) {
      let who;
      switch (true) {
         case choic_1 == choice_2:
            who = "equal"
            break;
         case choic_1 == "R" && choice_2 == "P":
            who = "player-2"
            break;
         case choic_1 == "R" && choice_2 == "S":
            who = "player-1"
            break;
         case choic_1 == "P" && choice_2 == "R":
            who = "player-1"
            break;
         case choic_1 == "P" && choice_2 == "S":
            who = "player-2"
            break;
         case choic_1 == "S" && choice_2 == "P":
            who = "player-1"
            break;
         case choic_1 == "S" && choice_2 == "R":
            who = "player-2"
            break;
      }
      return who;
   }
   // for rest the game 
   resetGame() {
      location.reload()
   }
} 