/*
 * PROBLEM SOLVING LOG
 * Date: 2026-04-04
 *
 * Hardest step: The hardest part for me was to find a good enough approach to handle the carry
 * number, I was already trying to overnegineer it by making other operations on sum.
 *
 * What I almost skipped: I was tempted to just append the linked lists, sum them and creating
 * a new linked list from that generated number. But that would have required additional
 * operations with numbers, big integers and strings. Which requrie more memory.
 *
 * What slowing down revealed: Slowing down revealed a good pattern to handle the carry number
 * also slowing down helped me find out a good way to keep a pointer to the new head with the
 * dummy node. Of course these problem seemed easy because I have already seen similar pattern.
 */

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
  l2: ListNode | null,
): ListNode | null {
  // Create a dummy node, this will be useful for returning
  // the head of the new linked list
  const dummyNode = new ListNode();

  // Create a pointer for each linked list provided
  // Start the current node for appending to the new linked list
  // Set the carry to 0 by default, this will help carry
  // for additions that exceed 9
  let pointer1: ListNode | null = l1;
  let pointer2: ListNode | null = l2;
  let current = dummyNode;
  let carry = 0;
  // Iterate while bot pointer are still valid or there's a carry
  // this helps for uneven linked lists
  // or sums that end on an addition that exceeds 9
  while (pointer1 || pointer2 || carry > 0) {
    // If the current pointer is pointing to null, val is 0
    // as there is nothing to sum
    const val1 = pointer1 ? pointer1.val : 0;
    const val2 = pointer2 ? pointer2.val : 0;
    // Sum is the value of both pointers + carry
    let sum = val1 + val2 + carry;

    // If sum exceeds 9, set carry to 1 and subtract 10 from sum
    // way more performant than separating or dividing the number
    if (sum > 9) {
      carry = 1;
      sum = sum - 10;
    } else {
      carry = 0;
    }

    // Append new number to the result linked list
    // and continue to next iteration
    current.next = new ListNode(sum);
    current = current.next;

    // Move both pointers if there is still linked list left
    pointer1 = pointer1 ? pointer1.next : null;
    pointer2 = pointer2 ? pointer2.next : null;
  }

  return dummyNode.next;
}
