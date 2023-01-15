const rangeAddQueries = (n: number, queries: number[][]): number[][] => {
  try {
    const matrix = [];
    for (let i = 0; i < n; i++) {
      let row = [];
      for (let j = 0; j < n; j++) {
        row.push(0);
      }
      matrix.push(row);
    }
    for (let query of queries) {
      executeQuery(matrix, query);
    }
    return matrix;
  } catch (err) {
    console.log(err);
    return [[]];
  }
};

const executeQuery = (matrix: number[][], query: number[]): void => {
  try {
    let rowStart = query[0];
    let rowEnd = query[2];
    let columnStart = query[1];
    let columnEnd = query[3];

    for (let i = rowStart; i <= rowEnd; i++) {
      for (let j = columnStart; j <= columnEnd; j++) {
        matrix[i][j] = matrix[i][j] + 1;
      }
    }
  } catch (err) {
    console.log(err);
  }
};

export default rangeAddQueries;
