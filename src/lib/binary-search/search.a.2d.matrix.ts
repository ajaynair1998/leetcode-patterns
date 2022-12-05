export const searchMatrix = (matrix: number[][], target: number): boolean => {
  try {
    let rowSatisfies = searchIfAnyRowSatisfies(matrix, target);
    if (rowSatisfies != false) {
      let numberExistsInRow = binarySearch(rowSatisfies as number[], target);
      return numberExistsInRow;
    }
    return false;
  } catch (err) {
    console.log(err);
    return false;
  }
};

const searchIfAnyRowSatisfies = (
  matrix: number[][],
  target: number
): number[] | boolean => {
  try {
    let low = 0;
    let high = matrix.length - 1;

    while (low <= high) {
      let mid = Math.floor((low + high) / 2);
      let startNumberOfMidArray = matrix[mid][0];
      let endNumberOfMidArray = matrix[mid][matrix[mid].length - 1];

      if (target >= startNumberOfMidArray && target <= endNumberOfMidArray) {
        return matrix[mid];
      } else if (target < startNumberOfMidArray) {
        high = high - 1;
      } else if (target > endNumberOfMidArray) {
        low = low + 1;
      }
    }
    return false;
  } catch (err) {
    console.log(err);
    return false;
  }
};
const binarySearch = (nums: number[], target: number): boolean => {
  try {
    let low = 0;
    let high = nums.length - 1;

    while (low <= high) {
      let mid = Math.floor((low + high) / 2);
      if (nums[mid] === target) {
        return true;
      }
      if (target < nums[mid]) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    }
    return false;
  } catch (err) {
    console.log(err);
    return false;
  }
};
