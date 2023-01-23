import ListNode from '../../bin/linked.list';

const hasCycle = (head: ListNode | null): boolean => {
  try {
    if (head === null) {
      return false;
    }

    let pointerOne = head;
    let pointerTwo = head;

    while (pointerOne != null && pointerTwo != null) {
      if (pointerOne.next && pointerTwo.next && pointerTwo.next.next) {
        pointerOne = pointerOne.next;
        pointerTwo = pointerTwo.next.next;
        if (pointerOne == pointerTwo) {
          return true;
        }
      } else {
        return false;
      }
    }
    return false;
  } catch (err) {
    console.log(err);
    return false;
  }
};
