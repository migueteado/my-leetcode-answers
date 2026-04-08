export class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

export function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null,
): ListNode | null {
  if (!list1) {
    return list2;
  }

  if (!list2) {
    return list1;
  }

  const dummy = new ListNode(0);
  let current = dummy;

  while (list1 && list2) {
    if (list2.val > list1.val) {
      current.next = list1;
      const temp = list1.next;
      current = list1;
      list1 = temp;
    } else {
      current.next = list2;
      const temp = list2.next;
      current = list2;
      list2 = temp;
    }
  }

  current.next = list1 ?? list2;

  return dummy.next;
}
