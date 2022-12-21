import { TreeNode } from '../../bin/binary.tree';

function postorderTraversal(root: TreeNode | null): number[] {
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
      tranverse(node.left, values);
      tranverse(node.right, values);
      values.push(node.val);
    }
  } catch (err) {
    console.log(err);
  }
};
