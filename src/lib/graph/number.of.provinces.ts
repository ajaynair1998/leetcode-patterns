import Node from '../../bin/graph';

const findCircleNum = (isConnected: number[][]): number | void => {
  try {
    let provinces = 0;
    const matrix = isConnected;
    const totalNodes = isConnected.length;

    let visited = Array(totalNodes).fill(false);
    let unvisitedNodesLeft = true;
    const stack: number[] = [];

    while (unvisitedNodesLeft) {
      let unvisitedNodeLeftInVisitedArray = visited.indexOf(false);
      stack.push(unvisitedNodeLeftInVisitedArray);
      dfs(stack, visited, matrix);
    }
  } catch (err) {
    console.log(err);
  }
};

const dfs = (stack: number[], visited: boolean[], matrix: number[][]) => {
  let currentNode = stack.pop() as number;
  visited[currentNode] = true;

  for (let column = 0; column < matrix.length; column++) {
    let isConnectedToNode = matrix[currentNode][column];

    if (isConnectedToNode && visited[column] != true) {
      stack.push(column);
      dfs(stack, visited, matrix);
    }
  }
};
