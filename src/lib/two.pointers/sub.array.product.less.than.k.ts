const numSubarrayProductLessThanK = (nums: number[], k: number): number => {
  try {
    if (k < 1) {
      return 0;
    }
    const window = new SlidingWindow(k);
    let left = 0;
    let result = 0;
    for (let right = 0; right < nums.length; right++) {
      window.handleMultiplyNumber(nums[right]);
      while (left <= right && window.overflowed()) {
        window.handleDivideNumber(nums[left]);
        left++;
      }
      result = result + right - left + 1;
    }
    return result;
  } catch (err) {
    console.log(err);
    return 0;
  }
};

class SlidingWindow {
  public product = 1;
  public k: number;

  constructor(maxProduct: number) {
    this.k = maxProduct;
  }

  handleMultiplyNumber(num: number): void {
    this.product = this.product * num;
  }

  handleDivideNumber(num: number): void {
    this.product = this.product / num;
  }

  overflowed(): boolean {
    if (this.product >= this.k) {
      return true;
    } else {
      return false;
    }
  }
}
