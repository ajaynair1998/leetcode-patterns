import { TreeNode } from '../../bin/binary.tree';

export const inorderTraversal = (root: TreeNode | null): number[] => {
  try {
    let values: number[] = [];
    traverse(root, values);
    return values;
  } catch (err) {
    console.log(err);
    return [];
  }
};

const traverse = (node: TreeNode | null, values: number[]) => {
  if (node == null) {
    return;
  } else {
    traverse(node.left, values);
    values.push(node.val);
    traverse(node.right, values);
  }
};
