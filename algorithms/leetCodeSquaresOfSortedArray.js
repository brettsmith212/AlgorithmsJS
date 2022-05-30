var sortedSquares = function (nums) {
  const result = Array(nums.length).fill(0);
  let left = 0;
  let right = nums.length - 1;
  let resultIdx = result.length - 1;

  while (left <= right) {
    let leftSquared = nums[left] ** 2;
    let rightSquared = nums[right] ** 2;

    if (rightSquared > leftSquared) {
      result[resultIdx] = rightSquared;
      resultIdx--;
      right--;
    } else if (leftSquared > rightSquared) {
      result[resultIdx] = leftSquared;
      resultIdx--;
      left++;
    } else {
      result[resultIdx] = leftSquared;
      resultIdx--;
      result[resultIdx] = rightSquared;
      resultIdx--;
      right--;
      left++;
    }
  }

  return result;
};
