function validStartingCity(distances, fuel, mpg) {
  let validStartingCityIdx = 0;

  for (let startCityIdx = 0; startCityIdx < distances.length; startCityIdx++) {
    let empty = false;
    let currentCityIdx = startCityIdx;
    let myTank = calculateTank(fuel, startCityIdx, mpg);
    myTank -= distances[startCityIdx];
    if (myTank < 0) empty = true;

    const array = [distances[startCityIdx]];

    while ((currentCityIdx + 1) % distances.length !== startCityIdx && !empty) {
      currentCityIdx++;
      let currentIndex = currentCityIdx % distances.length;

      myTank += calculateTank(fuel, currentIndex, mpg);
      myTank -= distances[currentIndex];
      if (myTank < 0) {
        empty = true;
      }

      array.push(distances[currentIndex]);
    }

    if (!empty) {
      return startCityIdx;
    }
  }

  return -1;
}

function calculateTank(fuel, index, mpg) {
  return fuel[index] * mpg;
}
