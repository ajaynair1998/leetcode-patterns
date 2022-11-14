export const checkIfArrayAndHasElements = <T>(arr: T[]): boolean => {
  try {
    if (arr.length <= 0) {
      return false;
    } else {
      return true;
    }
  } catch (err) {
    console.log(err);
    return false;
  }
};
