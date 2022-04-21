function balancedBrackets(string) {
  const stack = [];
  const closingBracket = {
    ")": "(",
    "}": "{",
    "]": "[",
  };
  const allBrackets = {
    "{": true,
    "}": true,
    "[": true,
    "]": true,
    "(": true,
    ")": true,
  };
  let isBalanced = true;

  for (let bracket of string) {
    if (closingBracket[bracket]) {
      if (stack.length === 0) {
        isBalanced = false;
        break;
      }
      let previousBracket = stack.pop();
      if (closingBracket[bracket] !== previousBracket) {
        isBalanced = false;
        break;
      }
    } else if (!(bracket in allBrackets)) {
      continue;
    } else {
      stack.push(bracket);
    }
  }

  if (stack.length > 0) return false;
  return isBalanced;
}
