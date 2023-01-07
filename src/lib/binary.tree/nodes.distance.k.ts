import { TreeNode } from '../../bin/binary.tree';

interface Map {
  [key: string | number]: TreeNode;
}

const distanceK = (
  root: TreeNode | null,
  target: TreeNode | null,
  k: number
): number[] => {
  try {
    let map = connectParent(root);
    let result = traverseBfs(root, target, k, map.parents);
    return result;
  } catch (err) {
    console.log(err);
    return [];
  }
};

const traverseBfs = (
  root: TreeNode | null,
  target: TreeNode | null,
  k: number,
  map: Map
): number[] => {
  try {
    if (root === null || target === null) {
      return [];
    } else {
      let seen: { [key: string | number]: boolean } = {};
      let queue = [target];
      let times = k;

      if (times === 0) {
        return [target.val];
      }

      while (times >= 0) {
        let nodesInQueue = queue.length;
        for (let i = 0; i < nodesInQueue; i++) {
          let currentNode = queue.shift();
          if (!currentNode) {
            continue;
          }
          if (seen[currentNode.val]) {
            continue;
          }

          let leftNode = currentNode.left;
          let rightNode = currentNode.right;
          let parentNode = map[currentNode.val];

          if (leftNode && !seen[leftNode.val]) {
            queue.push(leftNode);
          }
          if (rightNode && !seen[rightNode.val]) {
            queue.push(rightNode);
          }
          if (parentNode && !seen[parentNode.val]) {
            queue.push(parentNode);
          }
          seen[currentNode.val] = true;
        }
        if (times === 1) {
          let valuesInQueue = queue.map((item) => item.val);
          return valuesInQueue;
        }
        times = times - 1;
      }
      return [];
    }
  } catch (err) {
    console.log(err);
    return [];
  }
};

class ParentMap {
  parents: Map = {};
  constructor() {
    // do nothing
  }

  addParent(value: number, node: TreeNode): void {
    this.parents[value] = node;
  }
}

const connectParent = (root: TreeNode | null): ParentMap => {
  try {
    let map = new ParentMap();
    dfs(root, map, null);
    return map;
  } catch (err) {
    console.log(err);
    return new ParentMap();
  }
};

const dfs = (
  node: TreeNode | null,
  map: ParentMap,
  parent: TreeNode | null
): void => {
  try {
    if (node === null) {
      return;
    } else {
      dfs(node.left, map, node);
      dfs(node.right, map, node);
      if (parent != null) {
        map.addParent(node.val, parent);
      }
      return;
    }
  } catch (err) {
    console.log(err);
  }
};
