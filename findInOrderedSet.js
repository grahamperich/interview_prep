// Suppose we had an array ↴ of nn integers sorted in ascending order. 
// How quickly could we check if a given integer is in the array?

// O(log n) time complexity
Array.prototype.isNumberInArray = function(target) {
  let middleIndex = Math.floor(this.length / 2);
  let middleValue = this[middleIndex];

  if (target === middleValue) {
    return true;
  } else if (this.length < 2) {
    return false;
  } else if (target < middleValue) {
    let subArr = this.slice(0, middleIndex);
    return subArr.isNumberInArray(target);
  } else { // target > middleValue
    let subArr = this.slice(++middleIndex);
    return subArr.isNumberInArray(target);
  }
}

let m = [1,2,3,4,5]

console.log(m.isNumberInArray(1)); // true
console.log(m.isNumberInArray(2)); // true
console.log(m.isNumberInArray(3)); // true
console.log(m.isNumberInArray(4)); // true
console.log(m.isNumberInArray(5)); // true
console.log(m.isNumberInArray(6)); // false