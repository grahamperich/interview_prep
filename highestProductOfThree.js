// given a list_of_ints, find the highest_product you can get from three of the integers

// the input list_of_ints will always have at least three integers


function highestProduct(listOfInts) {
  var largestSoFar = Number.NEGATIVE_INFINITY;
  var secondLargestSoFar = Number.NEGATIVE_INFINITY;
  var thirdLargestSoFar = Number.NEGATIVE_INFINITY;

  var smallestSoFar = 1;
  var secondSmallestSoFar = 1;
  
  
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
    } else if (int > thirdLargestSoFar) {
      thirdLargestSoFar = int;
    } 

    // handle edge case in which there are two large negative numbers
    if (int < smallestSoFar && int !== 0) {
      secondSmallestSoFar = smallestSoFar;
      smallestSoFar = int;
    } else if (int < secondSmallestSoFar && int !== 0) {
      secondSmallestSoFar = int;
    }
  }

  var bestNegativeProduct = smallestSoFar * secondSmallestSoFar * largestSoFar;
  var bestPositiveProduct = largestSoFar * secondLargestSoFar * thirdLargestSoFar;

  return Math.max(bestNegativeProduct, bestPositiveProduct)
}

var arr1 = [1,4,5,3,4,6];
var arr2 = [-2, -6, 4, -3];
var arr3 = [-3, -6, -8, 0] 
var arr4 = [-4, -2, -3, -2] 
highestProduct(arr1) // should return 120
highestProduct(arr2) // should return 72
highestProduct(arr3) // should return 0
highestProduct(arr4) // should return -12

