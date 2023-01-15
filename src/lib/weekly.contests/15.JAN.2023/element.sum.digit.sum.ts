const differenceOfSum = (nums: number[]): number => {
  try {
    let totalNumberValue = 0;
    let totalDigitsValue = 0;
    for (let item of nums) {
      totalNumberValue = totalNumberValue + item;
      totalDigitsValue = sumOfDigits(item) + totalDigitsValue;
    }

    let absoluteDifference = Math.abs(totalDigitsValue - totalNumberValue);
    return absoluteDifference;
  } catch (err) {
    console.log(err);
    return 0;
  }
};

const sumOfDigits = (value: number) => {
  try {
    const valueAsString = value.toString();
    const digits = valueAsString.split('');
    let totalSum = digits.reduce((acc, digit) => acc + Number(digit), 0);

    return totalSum;
  } catch (err) {
    console.log(err);
    return 0;
  }
};

export default differenceOfSum;
