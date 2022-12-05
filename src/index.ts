import { binarySearch } from './lib/binary-search';
import { findDuplicate } from './lib/binary-search/duplicate.number';
import { findMin } from './lib/binary-search/find.min';
import { searchMatrix } from './lib/binary-search/search.a.2d.matrix';
import { search } from './lib/binary-search/search.in-rotated.sorted.array.2';

// const answer = binarySearch();
// const answerToDuplicateNumber = findDuplicate();
// const answerToFindMin = findMin();
// const answerToSearchInRotatedArray = search();
// const answerToRotatedArray2 = search([1, 0, 1, 1, 1], 2);
const answerToSearchMatrix = searchMatrix(
  [
    [1, 3, 5, 7],
    [10, 11, 16, 20],
    [23, 30, 34, 60]
  ],
  3
);
console.log(
  '🚀 ~ file: index.ts:20 ~ answerToSearchMatrix',
  answerToSearchMatrix
);
