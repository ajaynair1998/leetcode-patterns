const sortColors = (nums: number[]): void => {
  try {
    let low = 0;
    let mid = 0;
    let high = nums.length - 1;

    while (mid <= high) {
      if (nums[mid] === 0) {
        swap(low, mid, nums);
        low++;
        mid++;
      } else if (nums[mid] === 1) {
        mid++;
      } else if (nums[mid] === 2) {
        swap(mid, high, nums);
        high--;
      }
    }
  } catch (err) {
    console.log(err);
  }
};

const swap = (left: number, right: number, arr: number[]) => {
  try {
    let leftValue = arr[left];
    arr[left] = arr[right];
    arr[right] = leftValue;
  } catch (err) {
    console.log(err);
  }
};
