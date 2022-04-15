function largestRange(array) {
  if (array.length === 1) return [array[0], array[0]];

  let sortedArr = array.sort((a, b) => a - b);
  let rangeArr = [];
  let prevNum = sortedArr[0];
  let i = 1;

  while (i < sortedArr.length) {
    let tempArr = [];
    for (; i < sortedArr.length; i++) {
      if (prevNum === sortedArr[i]) {
        prevNum = sortedArr[i];
        continue;
      }
      tempArr.push(prevNum);
      if (prevNum + 1 !== sortedArr[i]) break;
      tempArr.push(sortedArr[i]);
      prevNum = sortedArr[i];
    }
    rangeArr.push(tempArr);
    prevNum = sortedArr[i];
    i++;
  }

  let longestIdx = 0;
  let pos = 0;

  for (let j = 0; j < rangeArr.length; j++) {
    if (rangeArr[j].length > longestIdx) {
      longestIdx = rangeArr[j].length;
      pos = j;
    }
  }

  return [rangeArr[pos][0], rangeArr[pos][rangeArr[pos].length - 1]];
}
