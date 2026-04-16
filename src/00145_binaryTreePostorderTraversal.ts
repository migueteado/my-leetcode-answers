/*
 * PROBLEM SOLVING LOG
 * Date: 2026-04-16
 *
 * Hardest step: The hardest part is to understand the order in which the DFS is
 * traversing the tree. This is very similar to a preorder traversal, just changes
 * the way the steps execute.
 *
 * What I almost skipped: Making it recursive, my first attempt was to use iteration
 * but making it recursive makes it easier to read.
 *
 * What slowing down revealed: Slowing down revealed the proper order in which the
 * steps should be executed
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

export function postorderTraversal(root: TreeNode | null): number[] {
  const result: number[] = [];

  function postorder(node: TreeNode | null) {
    if (!node) return;

    postorder(node.left);
    postorder(node.right);
    result.push(node.val);

    return;
  }

  postorder(root);

  return result;
}
