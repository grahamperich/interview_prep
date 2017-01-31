// You have an array of integers, and for each index you want to find the product of every integer except the integer at that index.
// Write a function getProductsOfAllIntsExceptAtIndex() that takes an array of integers and returns an array of the products.

// For example, given:
//   [1, 7, 3, 4]
// your function would return:
//   [84, 12, 28, 21]
// by calculating:
//   [7*3*4, 1*3*4, 1*7*4, 1*7*3]

function getProduct(ints) {
  var solution = [];

  for (var i = 0; i < ints.length; i++) {
    if (i === 0) {
      solution.push(ints.slice(1).reduce((a,b) => a*b))
    } else if (i === ints.length-1) {
      solution.push(ints.slice(0, ints.length-1).reduce((a,b) => a*b))
    } else {
      var subArrLeft = ints.slice(0, i);
      var subArrRight = ints.slice(i+1);
      
      solution.push(subArrRight.reduce((a,b) => a * b) * subArrLeft.reduce((a,b) => a * b));
    }
  }
  return solution;
}