// Imagine you landed a new job as a cashier...
// Your quirky boss found out that you're a programmer and has a weird request about something they've been wondering for a long time.

// Write a function that, given:

// an amount of money
// an array of coin denominations
// computes the number of ways to make amount of money with coins of the available denominations.

// Example: for amount=4 (4¢) and denominations=[1,2,3](1¢, 2¢ and 3¢), your program would output 4—the number of ways to make 4¢ with those denominations:

// 1¢, 1¢, 1¢, 1¢
// 1¢, 1¢, 2¢
// 1¢, 3¢
// 2¢, 2¢

// function coinPermutations(targetAmount, denominations) {
//   var permutations = [];

//   function inner(currentCoin, permutation) {
//     var total = permutation.length ? permutation.reduce((a,b) => a + b) : 0;

//     if (total === targetAmount) {
//       permutations.push(permutation.sort());
//       return;
//     } else if (total < targetAmount) {
//       permutation.push(currentCoin);

//       for (var i = 0; i < denominations.length; i++) {
//         inner(denominations[i], permutation.slice());
//       }
//     } 
//   }

//   denominations.forEach(function(coin) {
//     inner(coin, []);
//   });

//   var uniq = new Set(permutations.map(p => JSON.stringify(p)));
//   return uniq.size;

// }

function coinPermutations(targetAmount, denominations) {
  var waysOfDoingNCents = [];
  
  for (var i = 1; i < targetAmount.length; i++) {
    waysOfDoingNCents[i] = 0;
  }

  waysOfDoingNCents[0] = 1;

  denominations.forEach(coin => {
    for (var higherAmount = coin; higherAmount < targetAmount; higherAmount++) {
      var remainder = higherAmount - coin;
      waysOfDoingNCents[higherAmount] += waysOfDoingNCents[remainder]
    }
  })

  return waysOfDoingNCents[targetAmount];
  
}









