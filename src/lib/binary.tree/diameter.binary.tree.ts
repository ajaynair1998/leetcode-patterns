import { TreeNode } from '../../bin/binary.tree';

const diameterOfBinaryTree = (root: TreeNode | null): number => {
  try {
    const diameter = { value: 0 };
    traverse(root, diameter);
    return diameter.value;
  } catch (err) {
    console.log(err);
    return 0;
  }
};

const traverse = (
  node: TreeNode | null,
  maxDiameter: { value: number }
): number => {
  try {
    if (node === null) {
      return 0;
    } else if (node != null) {
      let maxLeftDepth = traverse(node.left, maxDiameter);
      let maxRightDepth = traverse(node.right, maxDiameter);
      let maxDepth = Math.max(maxLeftDepth, maxRightDepth);
      maxDiameter.value = Math.max(
        maxLeftDepth + maxRightDepth,
        maxDiameter.value
      );
      return maxDepth + 1;
    } else {
      return 0;
    }
  } catch (err) {
    console.log(err);
    return 0;
  }
};
