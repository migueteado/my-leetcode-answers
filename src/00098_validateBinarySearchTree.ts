/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function isValidBST(root: TreeNode | null): boolean {
  function valid(node, min, max) {
    // empty node
    if (!node) return true;
    // node value outside of range
    if (node.val <= min || node.val >= max) return false;
    return valid(node.left, min, node.val) && valid(node.right, node.val, max);
  }

  return valid(root, -Infinity, Infinity);
}

// BFS Iterative approach
function isValidBSTIterative(root: TreeNode | null): boolean {
  if (!root) return true;

  // Queue stores [node, min, max]
  const queue: [TreeNode, number, number][] = [[root, -Infinity, Infinity]];

  while (queue.length > 0) {
    const [node, min, max] = queue.shift()!;

    if (node.val <= min || node.val >= max) return false;

    if (node.left) queue.push([node.left, min, node.val]);
    if (node.right) queue.push([node.right, node.val, max]);
  }

  return true;
}
