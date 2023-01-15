// INFO : Not the correct solution. couldnt find it
const countGood = (nums: number[], k: number): number => {
  try {
    let window = new SlidingWindow(k);
    let tail = 0;
    let subArrays = 0;
    for (let head = 0; head < nums.length; head++) {
      window.handleAdd(nums[head]);
      console.log(window);
      if (window.satisFiesCondition()) {
        subArrays = subArrays + 1;
        while (window.satisFiesCondition() && tail < head) {
          tail++;
          window.handleRemove(nums[tail]);
          console.log(window);
          if (window.satisFiesCondition()) {
            subArrays = subArrays + 1;
          }
        }
      }
    }
    return subArrays;
  } catch (err) {
    console.log(err);
    return 0;
  }
};

class SlidingWindow {
  public map: { [key: string | number]: number } = {};
  public pairs: number = 0;
  public k: number = 0;

  constructor(k: number) {
    this.k = k;
  }

  public handleAdd(value: number) {
    let pairsBefore =
      this.map[value] != undefined ? uniquePairs(this.map[value], 2) : 0;
    if (this.map[value] != undefined) {
      this.map[value] = this.map[value] + 1;
    } else {
      this.map[value] = 1;
    }
    let currentPairs =
      this.map[value] != undefined ? uniquePairs(this.map[value], 2) : 0;

    if (this.map[value] >= 2) {
      this.pairs = this.pairs + currentPairs - pairsBefore;
    }
  }

  public handleRemove(value: number) {
    let pairsBefore =
      this.map[value] != undefined ? uniquePairs(this.map[value], 2) : 0;
    if (this.map[value] != undefined) {
      this.map[value] = this.map[value] - 1;
    } else {
      this.map[value] = 0;
    }

    let currentPairs =
      this.map[value] != undefined ? uniquePairs(this.map[value], 2) : 0;

    this.pairs = this.pairs + currentPairs - pairsBefore;
  }

  public satisFiesCondition() {
    if (this.pairs >= this.k) {
      return true;
    } else {
      return false;
    }
  }
}
function factorial(n: number) {
  let answer = 1;
  if (n == 0 || n == 1) {
    return answer;
  } else if (n > 1) {
    for (var i = n; i >= 1; i--) {
      answer = answer * i;
    }
    return answer;
  } else {
    return 1;
  }
}

const uniquePairs = (n: number, k: number) => {
  let top = factorial(n);
  let bottom = factorial(k) * factorial(n - k);
  return Math.floor(top / bottom);
};
export default countGood;
