/*
 * PROBLEM SOLVING LOG
 * Date: 2026-03-28
 *
 * Hardest step: The hardest part was handling the edge case where the first element
 * was a coincidence or all elements were coincidences
 *
 * What I almost skipped: I actually skipped writing down the algorithm by hand, I
 * jumped directly to writing comments, and I'm a little ashamed of it.
 *
 * What slowing down revealed: Slowing down revealed the edge case of the first
 * node or all nodes being coincidences. But I had already handled a similar problem
 * before.
 */

/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function removeElements(head: ListNode | null, val: number): ListNode | null {
  // Create a Dummy node to handle the edge case of the first
  // node being a coincidence of val
  const dummy = new ListNode();
  dummy.next = head;

  // Use two pointers,
  // the first one is to keep the reference to the previous node
  // the second one is to verify if the node is a coincidence and as
  // the condition to exit the comparison loop
  let first = dummy;
  let second = first.next;
  // When second reached the end of the linked list it becomes null
  // and therefore falsy
  while (second) {
    // Verify if second pointer has a coincidence
    // If not, move both pointers forward
    // if yes, replace first node.next with second node.next
    // and move second to the next node
    if (second.val === val) {
      // Remove the node from the linked list and move second to next node
      first.next = second.next;
      second = first.next;
    } else {
      // Move both pointers forward
      first = second;
      second = first.next;
    }
  }

  // Return the dummy node pointer
  return dummy.next;
}
