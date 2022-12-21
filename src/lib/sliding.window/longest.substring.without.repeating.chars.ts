export const lengthOfLongestSubstring = (s: string): number => {
  try {
    let slidingWindow = new SlidingWindow();
    let stringAsArray = s.split('');
    if (stringAsArray.length === 0) {
      return 0;
    }
    if (stringAsArray.length === 1) {
      return 1;
    }
    let left = 0;
    let windowSize = 0;
    let max = 1;
    for (let right = 0; right < stringAsArray.length; right++) {
      windowSize = right - left + 1;
      slidingWindow.addChar(stringAsArray[right]);

      while (
        slidingWindow.charAlreadyExists(stringAsArray[right]) &&
        left < right
      ) {
        slidingWindow.removeChar(stringAsArray[left]);
        left++;
      }
      max = Math.max(max, right - left + 1);
    }
    return max;
  } catch (err) {
    console.log(err);
    return -1;
  }
};

class SlidingWindow {
  store: { [key: string]: number } = {};

  addChar(char: string) {
    try {
      if (this.store[char] === undefined) {
        this.store[char] = 1;
      } else {
        this.store[char] = this.store[char] + 1;
      }
    } catch (err) {
      console.log(err);
    }
  }

  removeChar(char: string) {
    try {
      if (this.store[char] != undefined) {
        this.store[char] = this.store[char] - 1;
      }
    } catch (err) {
      console.log(err);
    }
  }

  charAlreadyExists(char: string) {
    if (this.store[char] != undefined && this.store[char] > 1) {
      return true;
    } else {
      return false;
    }
  }
}
