var rightSideView = function (root) {
  if (!root) return [];
  const result = [];
  let queue = [root];

  while (queue.length > 0) {
    let len = queue.length;
    result.push(queue[queue.length - 1].val);

    while (len > 0) {
      let current = queue.shift();
      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
      len--;
    }
  }

  return result;
};
