/*
 * PROBLEM SOLVING LOG
 * Date: 2026-04-16
 *
 * Hardest step: The hardest part is to understand the order in which the DFS is
 * traversing the tree.
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

export function preorderTraversal(root: TreeNode | null): number[] {
  const result: number[] = [];
  function preorder(node: TreeNode | null) {
    if (!node) return;

    result.push(node.val);
    preorder(node.left);
    preorder(node.right);

    return;
  }

  preorder(root);

  return result;
}
