import Node from '../../bin/graph';

const cloneGraph = (node: Node | null): Node | null => {
  try {
    const nodes = {};
    let duplicate = dfs(node, nodes);
    return duplicate;
  } catch (err) {
    console.log(err);
    return null;
  }
};

const dfs = (node: Node | null, map: { [key: string]: Node }): Node | null => {
  try {
    if (!node) {
      return null;
    } else {
      if (map[node.val]) {
        return map[node.val];
      } else {
        let newNode = new Node(node.val, []);
        map[node.val] = newNode;

        for (let neighbor of node.neighbors) {
          let cloneOfNeighbor = dfs(neighbor, map);
          if (cloneOfNeighbor) {
            newNode.neighbors.push(cloneOfNeighbor);
          }
        }
        return newNode;
      }
    }
  } catch (err) {
    console.log(err);
    return null;
  }
};

const bfs = (node: Node | null, map: { [key: string]: Node }): Node | null => {
  try {
    if (!node) {
      return null;
    } else {
      let queue = [node];
      let firstNode = new Node(node.val);
      map[node.val] = firstNode;
      while (queue.length > 0) {
        let leftMostNode = queue.shift();
        if (!leftMostNode) {
          continue;
        }
        for (let item of leftMostNode.neighbors) {
          if (!map[item.val]) {
            map[item.val] = new Node(item.val);
            queue.push(item);
          }
          map[leftMostNode.val].neighbors.push(map[item.val]);
        }
      }
      return firstNode;
    }
  } catch (err) {
    console.log(err);
    return null;
  }
};
