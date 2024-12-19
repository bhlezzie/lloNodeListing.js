class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  // ... (LinkedList class code from above) ...
}

const myList = new LinkedList();
myList.append(10);
myList.append(5);
myList.append(20);
myList.append(15);
myList.append(8);
console.log("After appending:");
myList.bubbleSort();
