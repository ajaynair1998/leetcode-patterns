import { TreeNode } from '../../bin/binary.tree';

const rightSideView = (root: TreeNode | null): number[] => {
  try {
    let result = bfs(root);
    return result;
  } catch (err) {
    console.log(err);
    return [];
  }
};

const bfs = (root: TreeNode | null): number[] => {
  try {
    if (root === null) {
      return [];
    } else {
      const result = [];
      const queue = [root];

      while (queue.length > 0) {
        result.push(queue[queue.length - 1].val);
        const queueLength = queue.length;
        for (let i = 0; i < queueLength; i++) {
          const leftMostNodeInQueue = queue.shift();
          const left = leftMostNodeInQueue && leftMostNodeInQueue.left;
          const right = leftMostNodeInQueue && leftMostNodeInQueue.right;

          if (left) {
            queue.push(left);
          }
          if (right) {
            queue.push(right);
          }
        }
      }
      return result;
    }
  } catch (err) {
    console.log(err);
    return [];
  }
};
