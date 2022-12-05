export const search = (nums: number[], target: number): boolean => {
  try {
    if (nums.length === 1) {
      if (nums[0] === target) return true;
      return false;
    }
    let pivotElement = findMinimumElementIndex(nums);
    let elementPresentInLeftArray = binarySearch(nums, 0, pivotElement, target);
    if (elementPresentInLeftArray > -1) return true;
    let elementPresentInRightArray = binarySearch(
      nums,
      pivotElement,
      nums.length - 1,
      target
    );
    if (elementPresentInRightArray > -1) return true;
    return false;
  } catch (err) {
    console.log(err);
    return false;
  }
};
const binarySearch = (
  nums: number[],
  low: number,
  high: number,
  target: number
): number => {
  try {
    let start = low;
    let end = high;

    while (start <= end) {
      while (low < high && nums[start] === nums[start + 1]) {
        if (nums[start] === target) {
          return start;
        }
        start += 1;
      }
      while (low < high && nums[end] === nums[end - 1]) {
        if (nums[end] === target) return end;
        end -= 1;
      }
      let mid = Math.floor((start + end) / 2);
      if (nums[mid] === target) {
        return mid;
      } else if (nums[mid] < target) {
        start = mid + 1;
      } else if (nums[mid] > target) {
        end = mid - 1;
      }
    }
    return -1;
  } catch (err) {
    console.log(err);
    return -1;
  }
};
const findMinimumElementIndex = (nums: number[]): number => {
  try {
    let low = 0;
    let high = nums.length - 1;
    let minimum = nums[0];
    let minimumIndex = 0;
    while (low <= high) {
      while (low < high && nums[low] === nums[low + 1]) {
        low += 1;
      }
      while (low < high && nums[high] === nums[high - 1]) {
        high -= 1;
      }
      console.log(low, high);
      if (nums[low] < nums[high]) {
        minimum = Math.min(nums[low], minimum);
        if (minimum === nums[low]) {
          minimumIndex = low;
          return low;
        } else {
          return minimumIndex;
        }
      }
      let mid = Math.floor((low + high) / 2);
      minimum = Math.min(nums[mid], minimum);
      if (nums[mid] === minimum) {
        minimumIndex = mid;
      }
      if (nums[low] === nums[high]) {
        low += 1;
      } else if (nums[mid] >= nums[low]) {
        low = mid + 1;
      } else if (nums[mid] < nums[low]) high = mid - 1;
    }
    return minimumIndex;
  } catch (err) {
    console.log(err);
    return -1;
  }
};
