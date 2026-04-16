/*
 * PROBLEM SOLVING LOG
 * Date: 2026-04-16
 *
 * Hardest step: teh hardest part was understanding how to compare the left and right
 * subtrees. My initial approach was to do a DFS of each side, the left traverse
 * prioritizing the left branch always and the right traverse prioritizin the right
 * branch always, and then comparing the results of both traversals. But I needed an
 * early exit for trees that have differences very early on. And my initial approach
 * forced me to traverse the whole tree always before comparing
 *
 * What I almost skipped: Traversing both subtrees simultaneously
 *
 * What slowing down revealed: Slowing down revealed the similarities between the two
 * subtrees and how to properly compare them in a recursive manner to achieve the
 * early exit or the full traversal for symmetric trees
 */

// Definition for a binary tree node.
export class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

export function isSymmetric(root: TreeNode | null): boolean {
  if (!root) return false;

  function isMirror(left: TreeNode | null, right: TreeNode | null) {
    if (!left && !right) return true;
    if (!left || !right) return false;
    return (
      left.val === right.val &&
      isMirror(left.left, right.right) &&
      isMirror(left.right, right.left)
    );
  }

  return isMirror(root.left, root.right);
}
