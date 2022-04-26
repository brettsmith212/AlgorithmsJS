function searchInSortedMatrix(matrix, target) {
  for (let row = 0; row < matrix.length; row++) {
    let colIdx = binarySearch(matrix[row], target);
    if (colIdx >= 0) return [row, colIdx];
  }
  return [-1, -1];
}

function binarySearch(row, target) {
  let left = 0;
  let right = row.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (target < row[mid]) {
      right = mid - 1;
    } else if (target > row[mid]) {
      left = mid + 1;
    } else {
      return mid;
    }
  }
  return -1;
}
