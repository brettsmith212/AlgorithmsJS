var combinationSum = function (candidates, target) {
  const result = [];

  const dfs = (i, candidates, target, slate) => {
    if (target < 0) return;
    if (target === 0) {
      result.push([...slate]);
      return;
    }

    for (let j = i; j < candidates.length; j++) {
      slate.push(candidates[j]);
      dfs(j, candidates, target - candidates[j], slate);
      slate.pop();
    }
  };

  dfs(0, candidates, target, []);

  return result;
};
