const dfs = (row, col, matrix, visited) => {
  // backtracking
  if (
    row < 0 ||
    col < 0 ||
    row > matrix.length - 1 ||
    col > matrix[0].length - 1
  )
    return;
  if (matrix[row][col] === "0") return;

  let current = `${row},${col}`;
  if (visited.has(current)) return;
  visited.add(current);

  // recursive case
  dfs(row + 1, col, matrix, visited);
  dfs(row - 1, col, matrix, visited);
  dfs(row, col + 1, matrix, visited);
  dfs(row, col - 1, matrix, visited);
};

var numIslands = function (grid) {
  let visited = new Set();
  let islandCount = 0;

  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      let current = `${row},${col}`;
      if (!visited.has(current) && grid[row][col] === "1") {
        dfs(row, col, grid, visited);
        islandCount++;
      }
    }
  }

  return islandCount;
};
