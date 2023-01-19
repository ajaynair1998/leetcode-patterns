import ListNode from '../../bin/linked.list';

const mergeTwoLists = (
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null => {
  try {
    let sorted = iterativeMerge(list1, list2);
    return sorted;
  } catch (err) {
    console.log(err);
    return null;
  }
};

const recursiveMerge = (
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null => {
  try {
    if (list1 === null) {
      return list2;
    }
    if (list2 === null) {
      return list1;
    }

    if (list1.val < list2.val) {
      list1.next = recursiveMerge(list1.next, list2);
      return list1;
    } else if (list1.val >= list2.val) {
      list2.next = recursiveMerge(list1, list2.next);
      return list2;
    }
    return null;
  } catch (err) {
    console.log(err);
    return null;
  }
};

const iterativeMerge = (
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null => {
  try {
    if (list1 === null) {
      return list2;
    }
    if (list2 === null) {
      return list1;
    }

    let start;

    if (list1.val < list2.val) {
      start = list1;
      list1 = list1.next;
    } else {
      start = list2;
      list2 = list2.next;
    }
    let stored_current_node = start;
    while (list1 != null && list2 != null) {
      if (list1.val < list2.val) {
        stored_current_node.next = list1;
        list1 = list1.next;
      } else {
        stored_current_node.next = list2;
        list2 = list2.next;
      }
      stored_current_node = stored_current_node.next;
    }

    if (list1 === null) {
      stored_current_node.next = list2;
    }

    if (list2 === null) {
      stored_current_node.next = list1;
    }

    return start;
  } catch (err) {
    console.log(err);
    return null;
  }
};
