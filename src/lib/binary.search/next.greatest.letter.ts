export const nextGreatestLetter = (
  letters: string[] = ['a', 'c', 'd', 'e'],
  target = 'd'
): string => {
  try {
    if (target >= letters[letters.length - 1]) {
      // if the targert is greater than last or less than first element
      return letters[0];
    }
    let low = 0;
    let high = letters.length - 1;

    while (low <= high) {
      const mid = Math.floor((low + high) / 2);
      const letterAtMid = letters[mid];
      if (letterAtMid === target) {
        low = mid + 1;
      } else if (letterAtMid < target) {
        low = mid + 1;
      } else if (letterAtMid > target) {
        high = mid - 1;
      }
    }
    return letters[low];
  } catch (err) {
    console.log(err);
    return letters[0];
  }
};
