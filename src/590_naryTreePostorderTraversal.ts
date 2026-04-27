// Definition for node.
class _Node {
  val: number;
  children: _Node[];
  constructor(val?: number) {
    this.val = val === undefined ? 0 : val;
    this.children = [];
  }
}

function postorder(root: _Node | null): number[] {
  if (!root) return [];

  const result: number[] = [];

  function postOrderHelper(node: _Node | null) {
    if (!node) return;
    for (let i = 0; i < node.children.length; i++) {
      postOrderHelper(node.children[i]);
    }
    result.push(node.val);
  }

  postOrderHelper(root);

  return result;
}
