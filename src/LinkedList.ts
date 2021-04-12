//Video 88
import { Sorter } from "./Sorter";

export class LinkedList extends Sorter {
  head: Node | null = null;

  add(data: number): void {
    const node = new Node(data);
    if (!this.head) {
      // if it is null than make the head == to the first node created.
      this.head = node;
      return; //this return is important since it will exit the add function and wont execute the remaining FN.
    }
    //this will iterate over the list and find the last entered node
    let tail = this.head;
    while (tail.next) {
      tail = tail.next;
    }
    //once it does it will exit the loop and we will set the newly created node as the last node
    tail.next = node;
  }

  get length(): number {
    if (!this.head) {
      return 0;
    }
    let length = 1;
    //This will make the node to the next node in the list
    let node = this.head;
    while (node.next) {
      //once it reaches the last node it will become undefined so it will exit the loop
      length++;
      node = node.next;
    }
    return length;
  }

  at(index: number): Node {
    if (!this.head) {
      //if head is null then it will give an errot
      throw new Error("Index out of Bounds");
    }
    let counter = 0;
    //down in while loop ts will point out that node is not assignable to null value so that why here we are manually giving type
    let node: Node | null = this.head;
    while (node) {
      if (counter === index) {
        return node;
      }
      counter++;
      node = node.next;
    }
    throw new Error("Index out of bounds");
  }
  compare(index: number): boolean {
    if (!this.head) {
      throw new Error("List is Empty");
    }
    return this.at(index).data > this.at(index + 1).data;
  }

  swap(index: number): void {
    const leftTempNode: number = this.at(index).data;
    const rightTempNode: number = this.at(index + 1).data;

    const leftNode = this.at(index);
    const rightNode = this.at(index + 1);

    leftNode.data = rightTempNode;
    rightNode.data = leftTempNode;
  }
  print(): void {
    if (!this.head) {
      throw new Error("Nothing in the list");
    }
    let node: Node | null = this.head;
    while (node) {
      console.log(node.data);
      node = node.next;
    }
  }
}

class Node {
  //node class will save 2 things the value and the refrence to next value
  next: Node | null = null;

  constructor(public data: number) {}
}
