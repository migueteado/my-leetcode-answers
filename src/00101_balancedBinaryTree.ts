export class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
}

export function isBalanced(root: TreeNode | null): boolean {
  function dfsHelper(node: TreeNode | null) {
    if (!node) return [true, 0];
    const [leftBalanced, leftHeight] = dfsHelper(node.left);
    const [rightBalanced, rightHeight] = dfsHelper(node.right);

    const isBalanced =
      leftBalanced && rightBalanced && Math.abs(leftHeight - rightHeight) <= 1;

    return [isBalanced, 1 + Math.max(leftHeight, rightHeight)];
  }

  return dfsHelper(root)[0];
}
