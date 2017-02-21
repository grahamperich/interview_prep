// Write a class TempTracker with these methods:

// insert()—records a new temperature
// getMax()—returns the highest temp we've seen so far
// getMin()—returns the lowest temp we've seen so far
// getMean()—returns the mean ↴ of all temps we've seen so far
// getMode()—returns a mode ↴ of all temps we've seen so far

// Optimize for space and time. Favor speeding up the getter functions (getMax(), getMin(), getMean(), and getMode()) over speeding up the insert() function.

// Temperatures will all be inserted as integers. We'll record our temperatures in Fahrenheit, so we can assume they'll all be in the range 0..1100..110.

// If there is more than one mode, return any of the modes. Implement all methods with O(1) time complexity.

class TempTracker {
  constructor(temp) {
    this.temperatures = [temp];
    this.frequencyMap = {temp: 1}
    this.max = temp;
    this.min = temp;
    this.total = temp;
    this.mean = temp;
    this.mode = temp;
    this.modeOccurences = 1
  }


  insert(temp) {
    this.temperatures.push(temp);
    this.max = temp > this.max ? temp : this.max;
    this.min = temp < this.min ? temp : this.min;
    this.total += temp;

    if (temp in this.frequencyMap) {
      this.frequencyMap[temp]++;
      if (this.frequencyMap[temp] > this.modeOccurences) {
        this.mode = temp;
        this.modeOccurences = this.frequencyMap[temp];
      }
    } else {
      this.frequencyMap[temp] = 1;
    }

  }

  getMax() {
    return this.max;
  }

  getMin() {
    return this.min;
  }

  getMean() {
    return this.total / this.temperatures.length;
  }

  getMode() {
    return this.mode;
  }
}