export const findMin = (nums = [3, 4, 5, 6, 1, 2]): number => {
  try {
    let low = 0;
    let high = nums.length - 1;
    let minimum = nums[0];
    while (low <= high) {
      // INFO : this condition means we just got low and high pointer to the left sorted array
      if (nums[low] < nums[high]) {
        return Math.min(minimum, nums[low]);
      }

      const mid = Math.floor((low + high) / 2);
      minimum = Math.min(nums[mid], minimum);
      if (nums[mid] >= nums[low]) {
        low = mid + 1;
      } else if (nums[mid] < nums[low]) {
        high = mid - 1;
      }
    }

    return minimum;
  } catch (err) {
    console.log(err);
    return -1;
  }
};
