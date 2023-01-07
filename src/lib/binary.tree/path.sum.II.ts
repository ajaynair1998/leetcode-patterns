import { TreeNode } from '../../bin/binary.tree';

const pathSum = (root: TreeNode | null, targetSum: number): number[][] => {
  try {
    let result: number[][] = [] as unknown as number[][];
    traverseDfs(root, result, [], 0, targetSum);
    return result;
  } catch (err) {
    console.log(err);
    return [[]];
  }
};

const traverseDfs = (
  node: TreeNode | null,
  result: number[][],
  currentPath: number[],
  currentSum: number,
  targetSum: number
): void => {
  try {
    if (node === null) {
      return;
    } else {
      let total = currentSum + node.val;
      let path = [...currentPath, node.val];

      if (!node.left && !node.right && total === targetSum) {
        result.push(path);
        return;
      }

      traverseDfs(node.left, result, path, total, targetSum);
      traverseDfs(node.right, result, path, total, targetSum);
    }
  } catch (err) {
    console.log(err);
  }
};
