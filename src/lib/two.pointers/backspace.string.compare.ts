const backspaceCompare = (s: string, t: string): boolean => {
  try {
    let sTracker = s.length - 1;
    let tTracker = t.length - 1;
    let sSkips = 0;
    let tSkips = 0;

    while (sTracker >= 0 || tTracker >= 0) {
      while (sTracker >= 0) {
        if (s[sTracker] === '#') {
          sSkips += 1;
          sTracker = sTracker - 1;
        } else if (sSkips > 0) {
          sSkips = sSkips - 1;
          sTracker = sTracker - 1;
        } else {
          break;
        }
      }

      while (tTracker >= 0) {
        if (t[tTracker] === '#') {
          tSkips += 1;
          tTracker = tTracker - 1;
        } else if (tSkips > 0) {
          tSkips = tSkips - 1;
          tTracker = tTracker - 1;
        } else {
          break;
        }
      }

      if (s[sTracker] != t[tTracker]) {
        return false;
      }

      if (sTracker >= 0 != tTracker >= 0) {
        return false;
      }

      sTracker = sTracker - 1;
      tTracker = tTracker - 1;
    }
    return true;
  } catch (err) {
    console.log(err);
    return false;
  }
};
