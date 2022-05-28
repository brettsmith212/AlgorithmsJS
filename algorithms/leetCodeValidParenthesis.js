var isValid = function (s) {
  const stack = [];
  const correctParens = "() {} []";

  for (let i = 0; i < s.length; i++) {
    stack.push(s[i]);

    let open = stack[stack.length - 2];
    let closed = stack[stack.length - 1];
    let combined = open + closed;

    if (correctParens.includes(combined)) {
      stack.pop();
      stack.pop();
    }
  }

  return stack.length === 0;
};
