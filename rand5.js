// You have a function rand7() that generates a random integer from 1 to 7. 
// Use it to write a function rand5() that generates a random integer from 1 to 5.
// rand7() returns each integer with equal probability. 
// rand5() must also return each integer with equal probability.

function rand7() {
  min = Math.ceil(1);
  max = Math.floor(8);
  return Math.floor(Math.random() * (max - min)) + min;
}

function rand5() {
  var num = 10;

  while (num > 5) {
    num = rand7();
  }

  return num;
}