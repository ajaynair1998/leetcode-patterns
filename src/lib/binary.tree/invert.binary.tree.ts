import { TreeNode } from '../../bin/binary.tree';

const invertTree = (root: TreeNode | null): TreeNode | null => {
  try {
    let node = traverse(root);
    return node;
  } catch (err) {
    console.log(err);
    return null;
  }
};
const traverse = (node: TreeNode | null): TreeNode | null => {
  try {
    if (node == null) {
      return null;
    } else {
      traverse(node.left);
      traverse(node.right);
      let leftNode = node.left;
      let rightNode = node.right;
      node.left = rightNode;
      node.right = leftNode;
      return node;
    }
  } catch (err) {
    console.log(err);
    return null;
  }
};
