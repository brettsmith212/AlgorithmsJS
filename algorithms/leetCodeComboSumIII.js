var combinationSum3 = function (k, n) {
  const result = [];
  const numbers = [];
  for (let i = 1; i <= 9; i++) numbers.push(i);

  const dfs = (i, numbers, k, n, slate) => {
    if (n < 0) return;
    if (slate.length === k) {
      if (n === 0) {
        result.push([...slate]);
      }
      return;
    }

    for (let j = i; j < numbers.length; j++) {
      slate.push(numbers[j]);
      dfs(j + 1, numbers, k, n - numbers[j], slate);
      slate.pop();
    }
  };

  dfs(0, numbers, k, n, []);

  return result;
};
