import { binarySearch } from './lib/binary-search';
import { findDuplicate } from './lib/binary-search/duplicate.number';
import { findMin } from './lib/binary-search/find.min';
import { search } from './lib/binary-search/search.in-rotated.sorted.array.2';

// const answer = binarySearch();
// const answerToDuplicateNumber = findDuplicate();
// const answerToFindMin = findMin();
// const answerToSearchInRotatedArray = search();
const answerToRotatedArray2 = search([1, 0, 1, 1, 1], 2);
console.log(answerToRotatedArray2);
