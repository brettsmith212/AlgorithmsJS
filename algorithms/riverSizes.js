function riverSizes(matrix) {
  const visited = new Set();
  const countArr = [];

  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[0].length; col++) {
      let pos = row + "," + col;
      if (matrix[row][col] === 1 && !visited.has(pos)) {
        let count = explore(matrix, row, col, visited);
        countArr.push(count);
      }
    }
  }
  console.log(visited);
  return countArr;
}

function explore(matrix, row, col, visited, count = 0) {
  let inRowBounds = row >= 0 && row < matrix.length;
  let inColBounds = col >= 0 && col < matrix[0].length;
  if (!inRowBounds || !inColBounds) return 0;
  if (matrix[row][col] === 0) return 0;

  let pos = row + "," + col;
  if (visited.has(pos)) return 0;
  visited.add(pos);

  count = 1;

  count += explore(matrix, row + 1, col, visited, count);
  count += explore(matrix, row - 1, col, visited, count);
  count += explore(matrix, row, col + 1, visited, count);
  count += explore(matrix, row, col - 1, visited, count);

  return count;
}
