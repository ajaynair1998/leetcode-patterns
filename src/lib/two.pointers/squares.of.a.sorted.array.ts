const sortedSquares = (nums: number[]): number[] => {
  try {
    let start = 0;
    let end = nums.length - 1;
    let timesToIterate = nums.length;
    const final = new Array(timesToIterate);

    for (let turn = 0; turn < timesToIterate; turn++) {
      if (Math.abs(nums[start]) > Math.abs(nums[end])) {
        final[timesToIterate - 1 - turn] = nums[start] * nums[start];
        start++;
      } else {
        final[timesToIterate - 1 - turn] = nums[end] * nums[end];
        end--;
      }
    }
    return final;
  } catch (err) {
    console.log(err);
    return [];
  }
};
