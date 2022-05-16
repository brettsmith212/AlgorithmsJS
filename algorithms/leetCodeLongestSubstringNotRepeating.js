var lengthOfLongestSubstring = function (s) {
  let max = 0;
  let windowStart = 0;
  const hash = {};

  for (let windowEnd = 0; windowEnd < s.length; windowEnd++) {
    let rightChar = s[windowEnd];
    hash[rightChar] = hash[rightChar] + 1 || 1;

    while (hash[rightChar] > 1) {
      let leftChar = s[windowStart];
      hash[leftChar]--;

      windowStart++;
    }

    max = Math.max(max, windowEnd - windowStart + 1);
  }

  return max;
};
