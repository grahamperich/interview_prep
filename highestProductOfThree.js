// given a list_of_ints, find the highest_product you can get from three of the integers

// the input list_of_ints will always have at least three integers


function highestProduct(listOfInts) {
  var largestSoFar = Number.NEGATIVE_INFINITY;
  var secondLargestSoFar = Number.NEGATIVE_INFINITY;
  var thirdLargestSoFar = Number.NEGATIVE_INFINITY;

  var smallestSoFar = 1;
  var secondSmallestSoFar = 1;
  debugger;
  
  for (var i = 0; i < listOfInts.length; i++) {
    var int = listOfInts[i];
    // core logic
    if (int > largestSoFar) {
      thirdLargestSoFar = secondLargestSoFar;
      secondLargestSoFar = largestSoFar;
      largestSoFar = int;
    } else if (int > secondLargestSoFar) {
      thirdLargestSoFar = secondLargestSoFar;
      secondLargestSoFar = int;
    } else if (int > thirdLargestSoFar && int !== 0) {
      thirdLargestSoFar = int;
    } else if (int < smallestSoFar && int !== 0) {
      // handle edge case in which there are two large negative numbers
      secondSmallestSoFar = smallestSoFar;
      smallestSoFar = int;
    } else if (int < secondSmallestSoFar) {
      secondSmallestSoFar = int;
    }
  }

  var bestNegativeProduct = smallestSoFar * secondSmallestSoFar * largestSoFar;
  var bestPositiveProduct = largestSoFar * secondLargestSoFar * thirdLargestSoFar;

  if (bestPositiveProduct > bestNegativeProduct) {
    return bestPositiveProduct;
  } else {
    return bestNegativeProduct;
  }
}

var arr = [1,4,5,3,4,6];