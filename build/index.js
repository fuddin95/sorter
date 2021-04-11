"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CharacterCollection_1 = require("./CharacterCollection");
var NumbersCollection_1 = require("./NumbersCollection");
var Sorter_1 = require("./Sorter");
var newNumberCollection = new NumbersCollection_1.NumbersCollection([
    8,
    -12312,
    32,
    1,
    0.0001,
    -22222,
]);
var numSorter = new Sorter_1.Sorter(newNumberCollection);
numSorter.sort();
console.log(newNumberCollection.data);
console.log("Now Logging in the CHaracter ");
var newCharacterCollection = new CharacterCollection_1.CharacterCollection("XxCccDsemuTresvCV");
var charSorter = new Sorter_1.Sorter(newCharacterCollection);
charSorter.sort();
console.log(newCharacterCollection.data);
