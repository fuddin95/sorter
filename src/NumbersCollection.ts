import { Sorter } from "./Sorter";

export class NumbersCollection extends Sorter {
  constructor(public data: number[]) {
    super();
  }

  get length(): number {
    return this.data.length;
  }

  compare(leftIndex: number): boolean {
    return this.data[leftIndex] > this.data[leftIndex + 1];
  }

  swap(leftIndex: number): void {
    const temp = this.data[leftIndex];
    this.data[leftIndex] = this.data[leftIndex + 1];
    this.data[leftIndex + 1] = temp;
  }
}
/*

//by using get length in the class method call we wont need to put () when calling the method

const collectionOne = new NumbersCollection([4,3,2,555,23,-0.3333,-0.00221]);
collectionOne.length;//Notice here we didnt need to put closing brackets when we called the length method

*/
