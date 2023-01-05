import { TreeNode } from '../../bin/binary.tree';

const mergeTrees = (
  root1: TreeNode | null,
  root2: TreeNode | null
): TreeNode | null => {
  try {
    let newTree = traverse(root1, root2);
    return newTree;
  } catch (err) {
    console.log(err);
    return null;
  }
};

const traverse = (
  node1: TreeNode | null,
  node2: TreeNode | null
): TreeNode | null => {
  try {
    if (node1 == null && node2 == null) {
      return null;
    } else {
      let currentNode = new TreeNode();
      if (node1 != null && node2 != null) {
        currentNode.val = node1.val + node2.val;
      } else if (node1 != null) {
        currentNode.val = node1.val;
      } else if (node2 != null) {
        currentNode.val = node2.val;
      }
      currentNode.left = traverse(
        node1 ? node1.left : null,
        node2 ? node2.left : null
      );
      currentNode.right = traverse(
        node1 ? node1.right : null,
        node2 ? node2.right : null
      );
      return currentNode;
    }
  } catch (err) {
    console.log(err);
    return null;
  }
};
