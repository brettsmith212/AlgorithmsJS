const isValid = (s) => {
  const validParens = "()";
  const stack = [];

  for (let j = 0; j < s.length; j++) {
    stack.push(s[j]);
    let open = stack[stack.length - 2];
    let closed = stack[stack.length - 1];
    let combined = open + closed;

    if (validParens.includes(combined)) {
      stack.pop();
      stack.pop();
    }
  }
  return stack.length === 0;
};

var generateParenthesis = function (n) {
  const result = [];

  const dfs = (i, n, slate) => {
    if (i === n * 2) {
      if (isValid(slate.join(""))) {
        result.push(slate.join(""));
      }
      return;
    }

    // add open
    slate.push("(");
    dfs(i + 1, n, slate);
    slate.pop();

    // add closed
    slate.push(")");
    dfs(i + 1, n, slate);
    slate.pop();
  };

  dfs(0, n, []);

  return result;
};
