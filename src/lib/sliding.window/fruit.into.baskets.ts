export const totalFruit = (fruits: number[]): number => {
  try {
    let treeDirectory = new TreeDirectory();
    let left = 0;
    let right = 1;
    let maxFruits = 1;
    treeDirectory.addOneTreeToStorage(fruits[left]);

    while (left < right && left < fruits.length && right < fruits.length) {
      if (treeDirectory.treeIsAlreadyPresent(fruits[right])) {
        treeDirectory.addOneTreeToStorage(fruits[right]);
        right += 1;
        maxFruits = Math.max(right - left, maxFruits);
      } else if (!treeDirectory.treeIsAlreadyPresent(fruits[right])) {
        if (!treeDirectory.ifTreeStorageExceeded()) {
          // INFO: tree directory has only one tree in it , we can increment right till it exceeds again
          treeDirectory.addOneTreeToStorage(fruits[right]);
          right = right + 1;
          maxFruits = Math.max(right - left, maxFruits);
        } else if (treeDirectory.ifTreeStorageExceeded()) {
          // INFO : increase left till tree Directory has only one tree it
          treeDirectory.removeOneTreeFromStorage(fruits[left]);
          left += 1;
        }
      }
    }
    return maxFruits;
  } catch (err) {
    console.log(err);
    return -1;
  }
};

class TreeDirectory {
  trees: { [key: string]: number } = {};

  constructor() {
    // do nothing
  }

  ifTreeStorageExceeded() {
    let typesOfTreesInDirectory = Object.keys(this.trees).length;
    if (typesOfTreesInDirectory > 1) {
      return true;
    } else {
      return false;
    }
  }

  removeOneTreeFromStorage(treeType: number) {
    if (this.trees[treeType] > 1) {
      this.trees[treeType] = this.trees[treeType] - 1;
    } else {
      delete this.trees[treeType];
    }
  }

  addOneTreeToStorage(treeType: number) {
    if (this.trees[treeType] != undefined) {
      this.trees[treeType] = this.trees[treeType] + 1;
    } else {
      this.trees[treeType] = 1;
    }
  }

  treeIsAlreadyPresent(treeType: number) {
    if (this.trees[treeType] != undefined && this.trees[treeType] > 0) {
      return true;
    } else {
      return false;
    }
  }
}
