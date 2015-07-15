console.log("Welcome to Cee-Lo");
var die = 0;

var player = [], computer = [];

function roll(){
  for (var i = 0; i < 3; i++) {
  die = Math.ceil(Math.random()*6);
    player.push(die);
  }
    console.log(player);
}
roll();
