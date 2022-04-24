class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function reverseLinkedList(head, prev = null) {
  // ITERATIVE
  //let prev = null
  //while(head !== null) {
  //	let next = head.next
  //	head.next = prev
  //	prev = head
  //	head = next
  //}
  //return prev

  // RECURSIVE
  if (head === null) return prev;
  let next = head.next;
  head.next = prev;
  return reverseLinkedList(next, head);
}
