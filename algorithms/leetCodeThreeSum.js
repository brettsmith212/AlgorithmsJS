var threeSum = function (nums) {
  const result = [];
  const mainTarget = 0;
  nums.sort((a, b) => a - b);
  let valuesSet = new Set();

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i - 1]) continue;
    let target = mainTarget - nums[i];
    let start = i + 1;
    let end = nums.length - 1;

    while (start < end) {
      let sum = nums[start] + nums[end];
      let value = `${nums[i]}${nums[start]}${nums[end]}`;

      if (sum === target && !valuesSet.has(value)) {
        valuesSet.add(value);
        result.push([nums[i], nums[start], nums[end]]);
        start++;
        end--;
      } else if (sum < target) start++;
      else if (sum > target) end--;
      else {
        start++;
        end--;
      }
    }
  }

  return result;
};
