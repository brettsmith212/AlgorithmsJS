const swap = (i, j, nums) => {
  let temp = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;
};

var permute = function (nums) {
  const result = [];

  const dfs = (i, nums) => {
    // base case
    if (i === nums.length) {
      result.push([...nums]);
      return;
    }

    // recursive case
    for (let j = i; j < nums.length; j++) {
      swap(i, j, nums);
      dfs(i + 1, nums);
      swap(i, j, nums);
    }
  };

  dfs(0, nums);

  return result;
};
