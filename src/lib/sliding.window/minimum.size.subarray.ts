export const minSubArrayLen = (target: number, nums: number[]): number => {
  try {
    let exists = false;
    let left = 0;
    let right = 1;
    let minimumLength = Number.MAX_SAFE_INTEGER;
    let minimumSum = 0;
    let sum = nums[0];
    while (left <= nums.length && right <= nums.length) {
      if (sum >= target) {
        exists = true;
        minimumSum = Math.min(minimumSum, sum);
        minimumLength = Math.min(minimumLength, right - left);
        sum -= nums[left];
        left += 1;
      } else if (sum < target) {
        sum += nums[right];
        right += 1;
      }
    }
    return exists ? minimumLength : 0;
  } catch (err) {
    console.log(err);
    return -1;
  }
};
