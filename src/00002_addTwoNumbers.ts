// Definition for singly-linked list.
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  let textNumberL1 = "";
  let textNumberL2 = "";
  let currNodeL1 = l1;
  let currNodeL2 = l2;
  while (currNodeL1) {
    textNumberL1 = currNodeL1.val + textNumberL1;
    currNodeL1 = currNodeL1.next;
  }
  while (currNodeL2) {
    textNumberL2 = currNodeL2.val + textNumberL2;
    currNodeL2 = currNodeL2.next;
  }
  const sum = BigInt(textNumberL1) + BigInt(textNumberL2);
  const sumString = sum.toString();
  let currNode: ListNode | null = null;
  for (let i = 0; i < sumString.length; i++) {
    currNode = new ListNode(Number(sumString[i]), currNode);
  }
  return currNode;
}
