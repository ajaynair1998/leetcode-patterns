import { TreeNode } from '../../bin/binary.tree';

const maxDepth = (root: TreeNode | null): number => {
  try {
    let maxDepth = { value: 0 };
    traverse(root, maxDepth, 0);
    return maxDepth.value;
  } catch (err) {
    console.log(err);
    return 0;
  }
};

const traverse = (
  node: TreeNode | null,
  maxDepth: { [key: string]: number },
  depth: number
): void => {
  try {
    if (node === null) {
      return;
    } else if (node != null) {
      let currentDepth = depth + 1;
      if (node.left === null && node.right === null) {
        maxDepth.value = Math.max(maxDepth.value, currentDepth);
      }
      traverse(node.left, maxDepth, currentDepth);
      traverse(node.right, maxDepth, currentDepth);
      return;
    }
  } catch (err) {
    console.log(err);
  }
};
