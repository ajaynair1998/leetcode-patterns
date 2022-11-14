export const getFlooredMidValue = (low: number, high: number): number => {
  try {
    if (low >= high) {
      return -1;
    }
    const mid = Math.floor((low + high) / 2);
    return mid;
  } catch (err) {
    console.log(err);
    return -1;
  }
};
