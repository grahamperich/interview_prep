// Given a boolean 2D matrix, find the number of islands. A group of connected 1s forms an island. 

//For example, the sample matrix belwo ontains 5 islands

// var ocean =[
// [1, 1, 0, 0, 0],
// [0, 1, 0, 0, 1],
// [1, 0, 0, 1, 1],
// [0, 0, 0, 0, 0],
// [1, 0, 1, 0, 1]
// ]

// My friend got this interview question at Uber so I wanted to see if I could solve it on my own. 
// This solution took me about 80 minutes to create, so I guess I would have failed the uber interview! lol!

var ocean1 =[
[1, 1, 0, 0, 0],
[0, 1, 0, 0, 1],
[1, 0, 0, 1, 1],
[0, 0, 0, 0, 0],
[1, 0, 1, 0, 1]
]

var ocean2 =[
[1, 0, 1, 0, 1],
[0, 0, 0, 0, 0],
[1, 0, 1, 0, 1],
[0, 0, 0, 0, 0],
[1, 1, 1, 0, 1]
]

var ocean3 =[
[1, 0, 0, 0, 0],
[0, 1, 0, 0, 1],
[0, 0, 1, 1, 1],
[0, 0, 0, 0, 0],
[0, 0, 1, 0, 1]
]


findAllIslands(ocean1); // should return 5
findAllIslands(ocean2); // should return 8
findAllIslands(ocean3); // should return 3

function findAllIslands (matrix) {
  var totalIslands = 0;
  var seenSoFar = {}

  // populate a key for each row in the matrix
  for (let i = 0; i < matrix.length; i++) {
    seenSoFar[i] = {};
  }

  for (let i = 0; i < matrix.length; i++) {
    var row = matrix[i];

    for (let j = 0; j < row.length; j++) {
      totalIslands += isIsland(i, j)
    }

  }

  return totalIslands;

  function isIsland (currentX, currentY) {
    var currentCoordinate = matrix[currentX][currentY];

    if (currentCoordinate === 1) {
      // if we haven't already seen this coord in a previous island..
      if (!seenSoFar[currentX][currentY]) {
        markNeighbors(currentX, currentY);
        return 1;
      }
    } 

    return 0;

    // simple class that returns a coordinate object
    function coord (x,y) {
      this.x = x;
      this.y = y;
      try {
        this.value = matrix[x][y];
      } catch(e) {
        this.value = null;
      }
    }

    // recursive subroutine that finds all neighbors of neighbors and marks them as seen
    function markNeighbors (x,y) {
      var neighbors = []
      var topNeighbor = new coord(x, y + 1);
      var bottomNeighbor = new coord(x, y - 1);
      var leftNeighbor = new coord(x - 1, y);
      var rightNeighbor = new coord(x + 1, y);
      var topLeftNeighbor = new coord(x - 1, y + 1);
      var topRightNeighbor = new coord(x + 1, y + 1);
      var bottomLeftNeighbor = new coord(x - 1, y - 1);
      var bottomRightNeighbor = new coord(x + 1, y - 1);

      neighbors
      .push(topNeighbor, topRightNeighbor, topLeftNeighbor, leftNeighbor, rightNeighbor, bottomNeighbor, bottomLeftNeighbor, bottomRightNeighbor)
      .forEach(neighbor => {
        if (neighbor.value === 1 && !seenSoFar[neighbor.x][neighbor.y]) {
          seenSoFar[neighbor.x][neighbor.y] = true;
          markNeighbors(neighbor.x, neighbor.y)
        }
      });

    }
  }
}
