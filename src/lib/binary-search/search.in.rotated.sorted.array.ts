export const search = (nums = [4, 5, 6, 7, 0, 1, 2], target = 0): number => {
  try {
    let pivot = minimumElementIndex(nums);
    let searchInLeftOfPivot = binarySearch(nums, target, 0, pivot);
    if (searchInLeftOfPivot > -1) return searchInLeftOfPivot;
    let searchInRightOfPivot = binarySearch(nums, target, pivot, nums.length);
    if (searchInRightOfPivot > -1) return searchInRightOfPivot;
    return -1;
  } catch (err) {
    console.log(err);
    return -1;
  }
};

const binarySearch = (
  nums: number[],
  target: number,
  start: number,
  end: number
) => {
  try {
    let low = start;
    let high = end;

    while (low <= high) {
      let mid = Math.floor((low + high) / 2);
      if (nums[mid] === target) {
        return mid;
      } else if (nums[mid] > target) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    }
    return -1;
  } catch (err) {
    console.log(err);
    return -1;
  }
};

const minimumElementIndex = (nums: number[]) => {
  try {
    let low = 0;
    let high = nums.length - 1;
    let minimum = nums[0];
    let minimumIndex = 0;
    while (low <= high) {
      // INFO : this condition means we just got low and high pointer to the left sorted array
      if (nums[low] < nums[high]) {
        minimum = Math.min(minimum, nums[low]);
        if (minimum === nums[low]) {
          return low;
        } else {
          return minimumIndex;
        }
      }

      const mid = Math.floor((low + high) / 2);
      minimum = Math.min(nums[mid], minimum);
      if (minimum === nums[mid]) {
        minimumIndex = mid;
      }
      if (nums[mid] >= nums[low]) {
        low = mid + 1;
      } else if (nums[mid] < nums[low]) {
        high = mid - 1;
      }
    }

    return minimumIndex;
  } catch (err) {
    console.log(err);
    return -1;
  }
};
