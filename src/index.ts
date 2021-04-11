import { CharacterCollection } from "./CharacterCollection";
import { NumbersCollection } from "./NumbersCollection";
import { Sorter } from "./Sorter";

const newNumberCollection = new NumbersCollection([
  8,
  -12312,
  32,
  1,
  0.0001,
  -22222,
]);
const numSorter = new Sorter(newNumberCollection);
numSorter.sort();
console.log(newNumberCollection.data);

console.log("Now Logging in the CHaracter ");

const newCharacterCollection = new CharacterCollection("XxCccDsemuTresvCV");
const charSorter = new Sorter(newCharacterCollection);
charSorter.sort();
console.log(newCharacterCollection.data);
