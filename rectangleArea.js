// Write a function to find the rectangular intersection of two given love rectangles.

// As with the example above, love rectangles are always "straight" and never "diagonal." More rigorously: each side is parallel with either the x-axis or the y-axis.

// They are defined as objects ↴ like this :

//   var myRectangle = {

//     // coordinates of bottom-left corner
//     leftX: 1,
//     bottomY: 5,

//     // width and height
//     width: 10,
//     height: 4,

// };

// Your output rectangle should use this format as well.

function calcOverlapArea(rect1, rect2) {
  const rect1XEndPoint = rect1.leftX + rect1.width;
  const rect2XEndPoint = rect2.leftX + rect2.width;
  const rect1YEndPoint = rect1.bottomY + rect1.height;
  const rect2YEndPoint = rect2.bottomY + rect2.height;

  const highestXStartPoint = rect1.leftX > rect2.leftX ? rect1.leftX : rect2.leftX;
  const lowestXEndPoint = rect1XEndPoint < rect2XEndPoint ? rect1XEndPoint : rect2XEndPoint;

  const highestYStartPoint = rect1.bottomY > rect2.bottomY ? rect1.bottomY : rect2.bottomY;
  const lowestYEndPoint = rect1YEndPoint < rect2YEndPoint ? rect1YEndPoint : rect2YEndPoint

  const xOverlap = lowestXEndPoint - highestXStartPoint;
  const yOverlap = lowestYEndPoint - highestYStartPoint;

  if (xOverlap > 0 && yOverlap > 0) {
    return {
      leftX: highestXStartPoint,
      bottomY: highestYStartPoint,
      width: xOverlap,
      height: yOverlap
    }
  } else {
    return {leftX: null, bottomY: null, width: null, height: null}
  }
                       
}