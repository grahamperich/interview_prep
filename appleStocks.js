// var stockPricesYesterday = [10, 7, 5, 8, 11, 9];

// getMaxProfit(stockPricesYesterday);
// returns 6 (buying for $5 and selling for $11)
// can be done in constant space and linear time

function getMaxProfit(prices) {
  var bestProfit = Number.NEGATIVE_INFINITY;
  var current = prices[0];
  var smallestSoFar = prices[0];

  for (var i = 1; i < prices.length; i++) {
    current = prices[i];
    bestProfit = (current - smallestSoFar) > bestProfit ? (current - smallestSoFar) : bestProfit;
    smallestSoFar = current < smallestSoFar ? current : smallestSoFar;
  }

  return bestProfit
}

var data1 = [10,6,5,3,2];
var data2 = [5,8,6,3,10];

// return -1
getMaxProfit(data1)

// return 7
getMaxProfit(data2)