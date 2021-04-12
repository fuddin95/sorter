//import { NumbersCollection } from "./NumbersCollection"; Wont need this aswell since we are not passing it as parameter

/* 
- so by passing NumberCollection Class as a parameter the functions of that class are also available to this class
- so when you want to use this class it will need an argument a instace of NumbersCollection since it is its input parameter type
*/
export abstract class Sorter {
  //constructor(public collection: NumbersCollection) {} old and less efficient version
  //constructor(public collection: SorterChecker) {} //removing constructor so we dont have to instentiate it every time
  abstract compare(index: number): boolean;
  abstract swap(index: number): void;
  abstract length: number;

  sort(): void {
    const { length } = this; //destructuring and getting length of the collection
    //bubble sorting algorithm

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        //if collection is an array of number or string
        if (this.compare(j)) {
          this.swap(j);
        }
      }
    }
  }
}

/*
We want to sort but we dont know what type it will be  so we will be making an
interface that will validate that each each class passed as parameter has those 3 basic properties
1) length of the array/string/linked list
2) compare method
3) And a swap method
*/
interface SorterChecker {
  length: number;
  swap(index: number): void;
  compare(index: number): boolean;
}
