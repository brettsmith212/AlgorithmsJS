const isPalindrome = (start, end, s) => {
  while (start < end) {
    if (s[start] !== s[end]) return false;
    start++;
    end--;
  }
  return true;
};

var longestPalindrome = function (s) {
  let result = "";

  for (let windowStart = 0; windowStart < s.length; windowStart++) {
    if (result.length === s.length) break;
    for (let windowEnd = windowStart; windowEnd < s.length; windowEnd++) {
      if (isPalindrome(windowStart, windowEnd, s)) {
        let slice = s.slice(windowStart, windowEnd + 1);
        if (result.length < slice.length) result = slice;
      }
    }
  }

  return result;
};
