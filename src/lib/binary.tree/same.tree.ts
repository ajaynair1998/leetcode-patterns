import { TreeNode } from '../../bin/binary.tree';

const isSameTree = (p: TreeNode | null, q: TreeNode | null): boolean => {
  try {
    let isSameTree = { value: true };
    traverse(p, q, isSameTree);
    return isSameTree.value;
  } catch (err) {
    console.log(err);
    return false;
  }
};

const traverse = (
  p: TreeNode | null,
  q: TreeNode | null,
  isSameTree: { [key: string]: boolean }
): any => {
  try {
    if (isSameTree.value === false) {
      return;
    } else if (p == null && q != null) {
      isSameTree.value = false;
      return;
    } else if (p != null && q == null) {
      isSameTree.value = false;
      return;
    } else if (p == null && q == null) {
      return;
    } else if (p != null && q != null) {
      traverse(p.left, q.left, isSameTree);
      traverse(p.right, q.right, isSameTree);
      if (p.left != q.left) {
        isSameTree.value = false;
      }
      return;
    }
    return;
  } catch (err) {
    console.log(err);
    return null;
  }
};
