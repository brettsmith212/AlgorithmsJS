let longestCommonPrefix = function (strs) {
  let longestMatch = strs[0];
  for (let i = 1; i < strs.length; i++) {
    let tempMatch = strs[i];
    let tempLongestMatch = "";
    let idx = 0;
    while (idx < longestMatch.length) {
      if (longestMatch[idx] !== tempMatch[idx]) break;
      tempLongestMatch += tempMatch[idx];
      idx++;
    }
    longestMatch = tempLongestMatch;
  }
  return longestMatch;
};
