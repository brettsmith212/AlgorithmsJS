function staircaseTraversal(height, maxSteps) {
  const totalWays = new Array(height + 1).fill(0);
  totalWays[0] = 1;
  totalWays[1] = 1;

  for (let currentHeight = 2; currentHeight <= height; currentHeight++) {
    let step = 1;
    while (step <= maxSteps && step <= currentHeight) {
      totalWays[currentHeight] =
        totalWays[currentHeight] + totalWays[currentHeight - step];
      step++;
    }
  }

  return totalWays[height];
}
