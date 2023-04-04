//1. rolls dice and return output for player 1. player chooses the correct output
//2. refactor code for player 2
//3. compare dice scores and declare winner
//4. reset game so that players dont have to refresh browser


var gameMode = "start"

var player1Rolls = [];
var player2Rolls = [];
var player1Choice = undefined;

var rollDice = function (){
  return Math.floor(Math.random()*6)+1
}

var getPlayerRolls = function (){
  return [rollDice(),rollDice()]
}

var player1Rolls = getPlayerRolls()      //store player1 dice nums
console.log(player1Rolls, "global-player1Rolls")

var player2Rolls = getPlayerRolls()      //store player2 dice nums
console.log(player2Rolls, "global-player2Rolls")

var getPlayer1Choice = function(input){
    if(input==1){
      player1Choice= Number(String(player1Rolls[0])+String(player1Rolls[1]));
      return player1Choice
    } else if (input == 2){
      player1Choice= Number(String(player1Rolls[1])+String(player1Rolls[0]))
      return player1Choice
    } 
} 

var getPlayer2Choice = function(input){
  if(input==1){
    return Number(String(player2Rolls[0])+String(player2Rolls[1]))
  } else if (input == 2){
    return Number(String(player2Rolls[1])+String(player2Rolls[0]))
  } 
} 

var main = function (input) {
  
if (gameMode=='start'){
  gameMode= 'player1rolls';
  return(` Hello Player 1, please cilck roll to start the game.`)

}else if (gameMode == `player1rolls`){    
    console.log("player1Rolls-start", player1Rolls)
    gameMode = "player1Choice"
    return(
    `Player 1, you have rolled ${player1Rolls[0]} for Dice 1 and ${player1Rolls[1]} for Dice 2.
    <br> Please choose Dice 1 or Dice 2 as the first numeral of the combined number.`)
} else if (gameMode==`player1Choice`) {   
    console.log("player1input", player1Rolls)
    if(input != 1 && input != 2){
    return`Please key the correct dice numbers - 1 or 2. `
    
    } else 
    getPlayer1Choice(input);
    gameMode = "player2Rolls"
    return `You chose ${input} and your number is ${player1Choice}. 
    <br>Player 2, it is your turn to roll.`;

} else if (gameMode=="player2Rolls"){
  gameMode = "player2Choice"  
    return(
    `Player 2, you have rolled ${player2Rolls[0]} for Dice 1 and ${player2Rolls[1]} for Dice 2.
    <br> Please choose Dice 1 or Dice 2 as the first numeral of the combined number.`)
} else if (gameMode==`player2Choice`) {   
  console.log("player2input", player2Rolls)
  if(input != 1 && input != 2){
  return `Please key the correct dice numbers - 1 or 2. `
  
  } else 
  gameMode = "start"
  var player2Choice = getPlayer2Choice(input);
  if (player1Choice>player2Choice){
    return (`Player 1, your number is ${player1Choice}. Player 2, your number is ${player2Choice}.
    <br> Player 1 has won!
    <br><br>Please click roll to restart game.`)
  }else 
  return (`Player 1, your number is ${player1Choice}. Player 2, your number is ${player2Choice}.
  <br> Player 2 has won!
  <br><br>Please click roll to restart game.`)
} 
} 
