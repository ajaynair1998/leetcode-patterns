const findPeakElement = (nums: number[]): number => {
  try {
    // INFO : binary search is preferred here because of the various hints given
    let low = 0;
    let high = nums.length - 1;

    while (low < high) {
      let mid = Math.floor((low + high) / 2);

      if (nums[mid] < nums[mid + 1]) {
        low = mid + 1;
      } else {
        high = mid;
      }
    }
    return low;
  } catch (err) {
    console.log(err);
    return 1;
  }
};

const peakIndexInAMountainArray = (nums: number[]): number => {
  try {
    let low = 0;
    let high = nums.length - 1;
    while (low < high) {
      let mid = Math.floor((low + high) / 2);
      let valueAtMid = nums[mid];
      if (valueAtMid < nums[mid + 1]) {
        low = mid + 1;
      } else {
        high = mid;
      }
    }
    return low;
  } catch (err) {
    console.log(err);
    return -1;
  }
};
