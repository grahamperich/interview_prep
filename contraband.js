function search(array, target) {
  var index = Math.floor(array.length / 2)
  if (array[index] === target) {return index}
  if (array[index] < target) {return search(array.slice(index), target)}
  if (array[index] > target) {return search(array.slice(0, index), target)}
}


var knapsack = function(knapsackSize, stolenGoods) {
  // determine value and convert to array
  var sortedGoods = [];

  for (var key in stolenGoods) {
    stolenGoods[key].value = stolenGoods[key].cost / stolenGoods[key].weight;
    sortedGoods.push(stolenGoods[key])
  }

  // sort contraband from best value to worst value
  sortedGoods.sort(function(a, b) {
    return a.value < b.value;
  })

  var maximumWorth = 0;
  var weightRemaining = knapsackSize;
  //place items in the knapsack until we can't fit anymore
  for (var i = 0; i < sortedGoods.length; i++) {
    if (sortedGoods[i].weight <= weightRemaining) {
      maximumWorth += sortedGoods[i].cost;
      weightRemaining -= sortedGoods[i].weight;
    }
  }

  var worthByValue = {
    'maxWorth': maximumWorth, 
    'remainder': weightRemaining
  }
  var worthByWeight = prioritizeWeight(knapsackSize, sortedGoods);
  var result = worthByWeight.maxWorth > worthByValue.maxWorth ? worthByWeight : worthByValue

  return result;

}

function prioritizeWeight(knapsackSize, sortedGoods) {
  var maximumWorth = 0;
  var weightRemaining = knapsackSize;
  for (var i = 0; i < sortedGoods.length; i++) {
    if (weightRemaining % sortedGoods[i].weight === 0 && weightRemaining - sortedGoods[i].weight >= 0) {
      maximumWorth += sortedGoods[i].cost;
      weightRemaining -= sortedGoods[i].weight
    }
  }
  return {
    'maxWorth': maximumWorth,
    'remainder': weightRemaining
  }
}


// TODO: Write test cases!

var contraband = {
  'Ring': {
    weight: 3,
    cost: 100
  },
  'Bracelet': {
    weight: 5,
    cost: 25
  },
  'Ruby': {
    weight: 12,
    cost: 85
  },
  'Cheetos': {
    weight: 2,
    cost: 30
  },
  'iPhone': {
    weight: 7,
    cost: 29
  },
  'Alpaca': {
    weight: 105,
    cost: 10
  }
  
}

var loot = {
  'Necklace': {
    weight: 6,
    cost: 98
  },
  'Trophy': {
    weight: 5,
    cost: 50
  },
  'Shirt': {
    weight: 5,
    cost: 50
  }
}

var booty = {
  'Necklace': {
    weight: 6,
    cost: 100
  },
  'Trophy': {
    weight: 3,
    cost: 51
  },
  'Shirt': {
    weight: 3,
    cost: 50
  },
  'Pants': {
    weight: 4,
    cost: 150
  },
  'Cheetos': {
    weight: 1,
    cost: 15
  }
}

var trash = {
  'item': {
    weight: 1,
    value: 1
  },
  'item': {
    weight: 1,
    value: 1
  },  
  'item': {
    weight: 1,
    value: 1
  },
  'item': {
    weight: 1,
    value: 1
  },
  'item': {
    weight: 1,
    value: 1
  },
  'item': {
    weight: 1,
    value: 1
  },
  'item': {
    weight: 1,
    value: 1
  }
    
}

console.log(knapsack(3, contraband)) // should return 100
console.log(knapsack(10, contraband)) // should return 155
console.log(knapsack(10, loot)) // should return 100
console.log(knapsack(10, booty)) 