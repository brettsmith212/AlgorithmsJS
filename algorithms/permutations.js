function getPermutations(array) {
  const permutations = [];
  helper(0, array, permutations);
  return permutations;
}

function helper(i, array, permutations) {
  if (i === array.length - 1) {
    permutations.push(array.slice());
  } else {
    for (let j = i; j < array.length; j++) {
      //[array[i], array[j]] = [array[j], array[i]]
      swap(i, j, array);
      helper(i + 1, array, permutations);
      //[array[i], array[j]] = [array[j], array[i]]
      swap(i, j, array);
    }
  }
}

function swap(i, j, array) {
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}
