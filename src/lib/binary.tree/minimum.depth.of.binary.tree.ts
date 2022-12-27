import { TreeNode } from '../../bin/binary.tree';

const minDepth = (root: TreeNode | null): number => {
  try {
    if (root == null) {
      return 0;
    }
    let minimumDepth = { value: Number.MAX_SAFE_INTEGER };
    traverse(root, 1, minimumDepth);
    return minimumDepth.value;
  } catch (err) {
    console.log(err);
    return -1;
  }
};

const traverse = (
  node: TreeNode | null,
  depth: number,
  minDepth: { [key: string]: number }
) => {
  try {
    if (node === null) {
      return null;
    } else {
      let currentDepth = depth + 1;
      let left = traverse(node.left, currentDepth, minDepth);
      let right = traverse(node.right, currentDepth, minDepth);

      if (left == null && right == null) {
        minDepth.value = Math.min(minDepth.value, depth);
      }

      return node.val;
    }
  } catch (err) {
    console.log(err);
    return 0;
  }
};
