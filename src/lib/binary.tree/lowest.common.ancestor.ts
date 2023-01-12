import { TreeNode } from '../../bin/binary.tree';

interface ReversedMap {
  [key: string]: TreeNode;
}

const lowestCommonAncestor = (
  root: TreeNode | null,
  p: TreeNode | null,
  q: TreeNode | null
): TreeNode | null => {
  try {
    const mapOfAncestors = {};
    reverse(root, mapOfAncestors, null);
    let parentsOfP = traverse(p, mapOfAncestors, { nodes: {}, values: [] });
    let parentsOfQ = traverse(q, mapOfAncestors, { nodes: {}, values: [] });

    if (!parentsOfP || !parentsOfQ) {
      return null;
    }
    if (parentsOfP.values.length > parentsOfQ.values.length) {
      for (let item of parentsOfP.values) {
        if (parentsOfQ.values.includes(item)) {
          return parentsOfQ.nodes[item];
        }
      }
      for (let item of parentsOfQ.values) {
        if (parentsOfP.values.includes(item)) {
          return parentsOfP.nodes[item];
        }
      }
    } else {
      for (let item of parentsOfQ.values) {
        if (parentsOfP.values.includes(item)) {
          return parentsOfP.nodes[item];
        }
        for (let item of parentsOfP.values) {
          if (parentsOfQ.values.includes(item)) {
            return parentsOfQ.nodes[item];
          }
        }
      }
    }

    return null;
  } catch (err) {
    console.log(err);
    return null;
  }
};

const reverse = (
  node: TreeNode | null,
  map: ReversedMap,
  previous: TreeNode | null
): ReversedMap | null => {
  try {
    if (!node) {
      return null;
    } else {
      reverse(node.left, map, node);
      reverse(node.right, map, node);
      if (previous) {
        map[node.val] = previous;
      }
      return null;
    }
  } catch (err) {
    console.log(err);
    return null;
  }
};

const traverse = (
  node: TreeNode | null,
  mapOfAncestors: ReversedMap,
  parents: { nodes: { [key: number | string]: TreeNode }; values: number[] }
): { nodes: { [key: number | string]: TreeNode }; values: number[] } | null => {
  try {
    if (!node) {
      return null;
    } else {
      traverse(mapOfAncestors[node.val], mapOfAncestors, parents);
      parents.values.unshift(node.val);
      parents.nodes[node.val] = node;
      return parents;
    }
  } catch (err) {
    console.log(err);
    return null;
  }
};
