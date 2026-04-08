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

export function inorderTraversal(root: TreeNode | null): number[] {
  let currentNode = root;
  let stack: TreeNode[] = [];
  let list: number[] = [];

  while (currentNode || stack.length > 0) {
    while (currentNode) {
      stack.push(currentNode);
      currentNode = currentNode.left;
    }
    currentNode = stack.pop();
    list.push(currentNode.val);
    currentNode = currentNode.right;
  }

  return list;
}
