// Add two numbers from linked list
let addTwoNumbers = function (l1, l2) {
  let remainder = 0;
  let curr = new ListNode(0);
  let result = curr;

  while (l1 !== null || l2 !== null) {
    let sum = remainder;
    if (l1) {
      sum += l1.val;
      l1 = l1.next;
    }
    if (l2) {
      sum += l2.val;
      l2 = l2.next;
    }
    if (sum > 9) {
      sum = sum - 10;
      remainder = 1;
    } else {
      remainder = 0;
    }
    curr.next = new ListNode(sum);
    curr = curr.next;
  }
  if (remainder > 0) {
    curr.next = new ListNode(remainder);
    curr = curr.next;
  }
  return result.next;
};
