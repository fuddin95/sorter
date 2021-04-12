import { CharacterCollection } from "./CharacterCollection";
import { LinkedList } from "./LinkedList";
import { NumbersCollection } from "./NumbersCollection";
import { Sorter } from "./Sorter";

// const newNumberCollection = new NumbersCollection([
//   8,
//   -12312,
//   32,
//   1,
//   0.0001,
//   -22222,
// ]);
// const numSorter = new Sorter(newNumberCollection);
// numSorter.sort();
// console.log(newNumberCollection.data);

// console.log("Now Logging in the CHaracter ");

// const newCharacterCollection = new CharacterCollection("XxCccDsemuTresvCV");
// const charSorter = new Sorter(newCharacterCollection);
// charSorter.sort();
// console.log(newCharacterCollection.data);

// console.log("This will be printing linked List");
// const firstLinkedList = new LinkedList();
// firstLinkedList.add(5);
// firstLinkedList.add(9);
// firstLinkedList.add(1);
// firstLinkedList.add(-22);
// firstLinkedList.print();
// const linkedListSorter = new Sorter(firstLinkedList);
// linkedListSorter.sort();
// firstLinkedList.print();

//Now abstract class is implemented

const fistCharacter = new CharacterCollection("cCddDdsadZ");
fistCharacter.sort();
console.log(fistCharacter.data);

const firstList = new LinkedList();
firstList.add(5);
firstList.add(9);
firstList.add(1);
firstList.add(-22);
firstList.sort();
firstList.print();
