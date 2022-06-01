var combinationSum2 = function (candidates, target) {
  const result = [];
  candidates.sort((a, b) => a - b);
  const hashSet = new Set();

  const dfs = (i, candidates, target, slate) => {
    // backtracking
    if (target < 0) return;

    // base case
    if (target === 0) {
      //if (hashSet.has(slate.join(","))) return
      //hashSet.add(slate.join(","))
      result.push([...slate]);
      return;
    }

    // recursive case
    for (let j = i; j < candidates.length; j++) {
      slate.push(candidates[j]);
      if (hashSet.has(slate.join(","))) {
        slate.pop();
        continue;
      }
      hashSet.add(slate.join(","));
      dfs(j + 1, candidates, target - candidates[j], slate);
      slate.pop();
    }
  };

  dfs(0, candidates, target, []);
  console.log(hashSet);
  return result;
};
