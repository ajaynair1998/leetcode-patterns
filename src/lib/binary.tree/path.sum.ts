import { TreeNode } from '../../bin/binary.tree';

const hasPathSum = (root: TreeNode, targetSum: number): boolean => {
  try {
    let isSatisfied = { value: false };
    traverse(root, targetSum, isSatisfied, 0);
    return isSatisfied.value;
  } catch (err) {
    console.log(err);
    return false;
  }
};

const traverse = (
  node: TreeNode | null,
  targetSum: number,
  isSatisfied: { [key: string]: boolean },
  currentSum: number
) => {
  try {
    if (node === null || isSatisfied.value === true) {
      return;
    } else {
      currentSum = currentSum + node.val;
      if (
        currentSum === targetSum &&
        node.left === null &&
        node.right === null
      ) {
        isSatisfied.value = true;
        return;
      }
      traverse(node.left, targetSum, isSatisfied, currentSum);
      traverse(node.right, targetSum, isSatisfied, currentSum);
      return;
    }
  } catch (err) {
    console.log(err);
  }
};
