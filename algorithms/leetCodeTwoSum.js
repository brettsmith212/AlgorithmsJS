var twoSum = function (nums, target) {
  const answer = [];
  for (let i = 0; i < nums.length; i++) {
    let diff = target - nums[i];
    for (let j = i + 1; j < nums.length; j++) {
      if (diff === nums[j]) {
        answer.push(i, j);
      }
    }
  }
  return answer;
};
