import { uniqueSortedArray } from '../../bin/arrays.mock';
import { checkIfArrayAndHasElements } from '../../utils/helpers.array';
import { getFlooredMidValue } from '../../utils/helpers.math';

export const binarySearch = (
  arr: number[] = uniqueSortedArray,
  target = 15
): number => {
  try {
    if (!checkIfArrayAndHasElements(arr)) {
      return -1;
    }
    let low = 0;
    let high = arr.length - 1;

    while (low <= high) {
      const mid = getFlooredMidValue(low, high);
      const valueAtMid = arr[mid];

      if (valueAtMid === target) {
        return mid;
      } else if (valueAtMid < target) {
        low = mid + 1;
      } else if (valueAtMid > target) {
        high = mid - 1;
      }
    }
    return -1;
  } catch (err) {
    console.log(err);
    return -1;
  }
};
