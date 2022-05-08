var isValid = function (s) {
  const correctParen = "() {} []";
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    stack.push(s[i]);

    let open = stack[stack.length - 2];
    let closed = stack[stack.length - 1];

    let combinedParen = open + closed;

    if (correctParen.includes(combinedParen)) {
      stack.pop();
      stack.pop();
    }
  }

  return stack.length === 0;
};
