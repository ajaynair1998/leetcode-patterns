interface Memo {
  [key: string | number]: number;
}
const climbStairs = (n: number): number => {
  try {
    let map = {};
    let result = climb(n, map);
    return result;
  } catch (err) {
    console.log(err);
    return 0;
  }
};

const climb = (n: number, map: Memo) => {
  if (n == 1) {
    return 1;
  } else if (n == 2) {
    return 2;
  } else if (map[n] != undefined) {
    return map[n];
  } else {
    map[n] = climb(n - 1, map) + climb(n - 2, map);
    return map[n];
  }
};
