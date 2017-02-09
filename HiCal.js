// Your company built an in-house calendar tool called HiCal. 
// You want to add a feature to see the times in a day when everyone is available.
// To do this, you’ll need to know when any team is having a meeting. 
// In HiCal, a meeting is stored as objects with attributes startTime and endTime . These integers represent the number of 30-minute blocks past 9:00am.

// For example, given:

//   [
//     {startTime: 0,  endTime: 1},
//     {startTime: 3,  endTime: 5},
//     {startTime: 4,  endTime: 8},
//     {startTime: 10, endTime: 12},
//     {startTime: 9,  endTime: 10},
// ]

// your function would return:

//   [
//     {startTime: 0, endTime: 1},
//     {startTime: 3, endTime: 8},
//     {startTime: 9, endTime: 12},
// ]

//  O(n log n) solution
function mergeRanges(ranges) {
  // duplicate the array and sort the duplicate so as not to manipulate the original array
  var sortedRanges = ranges.slice().sort((a,b) => a.startTime > b.startTime ? 1 : -1);
  var mergedRanges = [];

  var startTime = sortedRanges[0].startTime;
  var endTime = sortedRanges[0].endTime;

  for (var i = 0; i < sortedRanges.length; i++) {
    let range = sortedRanges[i];

    if (endTime < range.startTime) {
      mergedRanges.push({startTime: startTime, endTime: endTime});
      startTime = range.startTime;
      endTime = endTime > range.endTime ? endTime : range.endTime;
    } else if (endTime >= range.startTime) {
      endTime = endTime > range.endTime ? endTime : range.endTime;
    }
  }

  mergedRanges.push({startTime: startTime, endTime: endTime});
  return mergedRanges;
}