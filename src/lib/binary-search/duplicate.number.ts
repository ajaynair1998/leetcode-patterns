import { unsortedArrayWithDuplicates } from '../../bin/arrays.mock';

export const findDuplicate = (
  nums: number[] = [
    29, 27, 9, 2, 30, 29, 29, 14, 48, 18, 46, 43, 8, 39, 44, 49, 37, 4, 20, 29,
    36, 38, 29, 29, 42, 41, 22, 7, 47, 25, 11, 33, 29, 16, 35, 45, 29, 28, 3,
    32, 5, 15, 17, 31, 6, 40, 26, 21, 12, 29
  ]
): number => {
  try {
    nums.sort((a, b) => a - b);
    let low = 0;
    let high = nums.length - 1;
    let duplicate: any;

    while (low <= high) {
      const mid = Math.floor((low + high) / 2);
      const numberAtMid: number = nums[mid];
      const numbersLessThanMidOrEqualToMid =
        findNumberOfOccurencesLessThanOrEqualToMid(nums, numberAtMid, 0, mid);

      if (numbersLessThanMidOrEqualToMid > numberAtMid) {
        duplicate = numberAtMid;
        high = high - 1;
      } else {
        low = mid + 1;
      }
    }
    return duplicate;
  } catch (err) {
    console.log(err);
    return 1;
  }
};

const findNumberOfOccurencesLessThanOrEqualToMid = (
  nums: number[],
  midValue: number,
  start: number,
  end: number
): number => {
  try {
    if (start < 0 || end > nums.length) {
      return 0;
    } else {
      let count = 0;
      for (let i = start; i <= end; i++) {
        if (nums[i] <= midValue) {
          count += 1;
        }
      }
      return count;
    }
  } catch (err) {
    console.log(err);
    return 0;
  }
};
