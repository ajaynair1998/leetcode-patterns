import ListNode from '../../bin/linked.list';

const middleNode = (head: ListNode | null): ListNode | null => {
  try {
    let curr: ListNode | null = head;
    let map: { [key: string | number]: ListNode } = {};
    let position = 0;
    while (curr != null) {
      map[position] = curr;
      curr = curr.next;
      position++;
    }
    let middleNode = returnMiddleNode(map, position);
    return middleNode;
  } catch (err) {
    console.log(err);
    return null;
  }
};

const returnMiddleNode = (
  map: { [key: string | number]: ListNode },
  length: number
): ListNode | null => {
  try {
    if (length % 2 === 1) {
      let middle = Math.floor(length / 2);
      return map[middle];
    } else {
      let middle = length / 2;
      return map[middle];
    }
  } catch (err) {
    console.log(err);
    return null;
  }
};

// INFO : using fast and slow pointer
const middleNodeUsingPointers = (head: ListNode | null): ListNode | null => {
  try {
    let slow = head;
    let fast = head;

    while (fast != null && slow != null && fast.next != null) {
      slow = slow.next;
      fast = fast.next.next;
    }
    return slow;
  } catch (err) {
    console.log(err);
    return null;
  }
};
