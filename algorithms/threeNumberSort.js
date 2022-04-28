function threeNumberSort(array, order) {
  for (let j = order.length - 1; j >= 0; j--) {
    for (let i = 0; i < array.length; i++) {
      if (order[j] === array[i]) {
        let removedVal = array.splice(i, 1);
        array.unshift(removedVal[0]);
      }
    }
  }

  return array;
}
