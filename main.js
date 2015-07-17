console.log("Welcome to Cee-Lo");
var die = 0;


var player1 = [], computer = [];
function roll(player){
  for (var i = 0; i < 3; i++) {
  die = Math.ceil(Math.random()*6);
  player.push(die);
    }
}
roll(computer);
roll(player1);
console.log("the computer rolled " + computer);
console.log("you rolled " + player1);
// roll(player1);


function compare() {
  if (sum(player1) > sum(computer)) {
    console.log('player1 wins!', player1);
  } else {
    console.log('computer wins :(', computer);
  }
}

function sum(array) {
  var count = 0;
  for (var i = 0; i < array.length; i++) {
    count = count + array[i];
  }
  return count;
}

// if (player1>computer) {
//   console.log(player1>computer);
//   console.log("player one wins");
// }
//   else if (computer > player1){
//     console.log("computer winn");
//   } else{
//     console.log("it's a tie!");
//   }
