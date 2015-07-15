console.log("Welcome to Cee-Lo");
var die = 0;

var player1 = [], computer = [];

function roll(player){
  for (var i = 0; i < 3; i++) {
  die = Math.ceil(Math.random()*6);
  player.push(die);
  }
    // console.log(player);
}
roll(computer);
roll(player1);
console.log(computer);
console.log(player1);
