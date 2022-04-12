class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function sumOfLinkedLists(linkedListOne, linkedListTwo) {
  let newList = new LinkedList(0);
  helper(linkedListOne, linkedListTwo, newList);

  return newList.next;
}

function helper(l1, l2, l3, remainder = 0) {
  if (!l1 && !l2 && remainder === 0) {
    return;
  } else if (!l1 && !l2 && remainder === 1) {
    l1 = new LinkedList(0);
    l2 = new LinkedList(0);
  } else if (!l1) {
    l1 = new LinkedList(0);
  } else if (!l2) {
    l2 = new LinkedList(0);
  }
  let sum = l1.value + l2.value;
  if (remainder > 0) sum += remainder;
  if (sum > 9) {
    remainder = 1;
    sum -= 10;
  } else {
    remainder = 0;
  }
  console.log(l3);
  l3.next = new LinkedList(sum);

  helper(l1.next, l2.next, l3.next, remainder);
}
