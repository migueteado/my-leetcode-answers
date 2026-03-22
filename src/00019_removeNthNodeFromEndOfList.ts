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

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  // Use a dummy node to include the cases where the node to remove
  // is the head
  const dummyNode = new ListNode(0);
  dummyNode.next = head;
  let fast = dummyNode;
  let slow = dummyNode;

  // Advance fast n + 1
  // this ensures that the separation
  // between fast and slow is n + 1
  // which at the end will keep slow
  // at the immediate previous node from the one
  // that needs to be removed
  for (let i = 0; i <= n; i++) {
    fast = fast.next;
  }

  // Advance both pointers at the same pace
  // until fast becomes null
  while (fast) {
    slow = slow.next;
    fast = fast.next;
  }

  // At this point slow is right before the node that needs to be removed
  slow.next = slow.next.next;

  return dummyNode.next;
}
