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

function sortedArrayToBST(nums: number[]): TreeNode | null {
  function helper(left: number, right: number): TreeNode | null {
    if (left > right) return null;
    const mid = Math.floor((left + right) / 2);
    return new TreeNode(
      nums[mid],
      helper(left, mid - 1),
      helper(mid + 1, right),
    );
  }

  return helper(0, nums.length - 1);
}
