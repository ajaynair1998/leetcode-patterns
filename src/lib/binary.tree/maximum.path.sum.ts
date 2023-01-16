import { TreeNode } from '../../bin/binary.tree';

const maxPathSum = (root: TreeNode | null): number => {
  try {
    const maxValue = { value: Number.MIN_SAFE_INTEGER };
    const maxPathSum = traverse(root, maxValue);
    return maxValue.value;
  } catch (err) {
    console.log(err);
    return 0;
  }
};

const traverse = (
  node: TreeNode | null,
  maxValue: { [key: string]: number }
): number => {
  try {
    if (node === null) {
      return 0;
    } else {
      const leftMax = traverse(node.left, maxValue);
      const rightMax = traverse(node.right, maxValue);

      // INFO : to remove if negative sum is on both sub branches then we should avoid both right?

      let currentNodeMaxPath =
        Math.max(leftMax, 0) + Math.max(rightMax, 0) + node.val;

      let finalMax = Math.max(maxValue.value, currentNodeMaxPath);
      maxValue.value = finalMax;
      return currentNodeMaxPath;
    }
  } catch (err) {
    console.log(err);
    return 0;
  }
};
