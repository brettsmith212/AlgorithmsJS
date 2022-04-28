function sunsetViews(buildings, direction) {
  if (buildings.length === 0) return [];

  const orderedArr = [];
  if (direction === "EAST") {
    let finalIdx = buildings.length - 1;
    let highestBuilding = buildings[finalIdx];
    orderedArr.unshift(finalIdx);

    for (let i = finalIdx - 1; i >= 0; i--) {
      if (buildings[i] > highestBuilding) {
        highestBuilding = buildings[i];
        orderedArr.unshift(i);
      }
    }
  } else {
    let highestBuilding = buildings[0];
    orderedArr.push(0);

    for (let j = 1; j < buildings.length; j++) {
      if (buildings[j] > highestBuilding) {
        highestBuilding = buildings[j];
        orderedArr.push(j);
      }
    }
  }

  return orderedArr;
}
