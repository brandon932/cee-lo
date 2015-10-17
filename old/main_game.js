// This is our version of 'cee-lo'.
var player = [];
var computer = [];

var ceeLo = {
  reset: function() {
    var player = [], computer = [];
    return console.log('Welcome to Cee-lo');
  },

  roll: function roll (player) {
    player = [];
    var die = 0;
    for (var i = 0; i < 3; i++) {
      die = Math.ceil(Math.random() * 6);
      player.push(die);
    }
    console.log(player);
    return player;
  },
  play: function play(opponent) {
    if (opponent === undefined) {
      ceeLo.roll(computer);
    }
    else {
      console.log(opponent);

      return  opponent;
    }
  },

  compare: function() {
  //   var turn = 'Type ceeLo.reset() to play again';
  //   var sum = function(side) {
  //     var sideSum = 0;
  //     for (var i = 0; i < side.length; i++) {
  //       sideSum = sideSum + side[i];
  //     }
  //     return sideSum;
  //   };
  //   if (sum(player) > sum(computer)) {
  //     console.log('player wins!', player + ' > ' + computer + '\n' + turn);
  //   } else {
  //     console.log('computer wins :(', computer + ' > ' + player + '\n' + turn);
  //   }
  // }

//   function sum(array) {
//   var count = 0;
//   for (var i = 0; i < array.length; i++) {
//     count = count + array[i];
//   }
//   return count;
// }
function winstraight(array) {
for (var i = 0; i < array.length; i++) {
  if (array[i] === 4){
    if(array[i] === 5){
      if(array[i] === 6){
        return true;
      }
    }
  }
}


// function winstraight(array) {
// for (var i = 0; i < array.length; i++) {
//   if (array[0] === 4 || array[1] === 4 || array[2] === 4 ){
//     if(array[0] === 5 || array[1] === 5 || array[2] === 5 ){
//       if(array[0] === 6 || array[1] === 6 || array[2] === 6 ){
//         return true;
//       }
//     }
//   }
// }
// }
function losestraight(array) {
for (var i = 0; i < array.length; i++) {
  if (array[i] === 1 ){
    if(array[i] === 2 ){
      if(array[i] === 3 ){
        return true;
      }
    }
}
}
}

// function losestraight(array) {
// for (var i = 0; i < array.length; i++) {
//   if (array[0] === 1 || array[1] === 1 || array[2] === 1 ){
//     if(array[0] === 2 || array[1] === 2 || array[2] === 2 ){
//       if(array[0] === 3 || array[1] === 3 || array[2] === 3 ){
//         return true;
//       }
//     }
// }
// }
// }

if(winstraight(player )=== true){
console.log("You win! by straight");
} else if (winstraight(computer)=== true){
  console.log("The computer wins by straight.");
} else if (losestraight(player)=== true) {
  console.log("The computer wins by straight.");
}else if (losestraight(computer)=== true) {
  console.log("You win by straight");
// }else if
// (sum(player) > sum(computer)){
// console.log("You win!");
// }else if (sum(computer) > sum(player)){
//    console.log("The computer wins.");
//  }
//  else {
console.log("It's a tie!");
 }

}
}
};

ceeLo.play();
ceeLo.roll("player");
ceeLo.compare();
