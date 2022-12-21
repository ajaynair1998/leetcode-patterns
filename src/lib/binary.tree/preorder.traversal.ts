import { TreeNode } from '../../bin/binary.tree';

function preorderTraversal(root: TreeNode | null): number[] {
  try {
    let values: number[] = [];
    tranverse(root, values);
    return values;
  } catch (err) {
    console.log(err);
    return [];
  }
}

const tranverse = (node: TreeNode | null, values: number[]): void => {
  try {
    if (node == null) {
      return;
    } else {
      values.push(node.val);
      tranverse(node.left, values);
      tranverse(node.right, values);
    }
  } catch (err) {
    console.log(err);
  }
};
