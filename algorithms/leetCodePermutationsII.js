const swap = (i, j, nums) => {
  let temp = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;
};

var permuteUnique = function (nums) {
  const result = [];

  const dfs = (i, nums) => {
    if (i === nums.length) {
      result.push([...nums]);
    }

    const hash = {};
    for (let j = i; j < nums.length; j++) {
      if (hash[nums[j]]) continue;
      hash[nums[j]] = true;
      swap(i, j, nums);
      dfs(i + 1, nums);
      swap(i, j, nums);
    }
  };

  dfs(0, nums);

  return result;
};
