"use strict";
//import { NumbersCollection } from "./NumbersCollection"; Wont need this aswell since we are not passing it as parameter
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sorter = void 0;
/*
- so by passing NumberCollection Class as a parameter the functions of that class are also available to this class
- so when you want to use this class it will need an argument a instace of NumbersCollection since it is its input parameter type
*/
var Sorter = /** @class */ (function () {
    function Sorter() {
    }
    Sorter.prototype.sort = function () {
        var length = this.length; //destructuring and getting length of the collection
        //bubble sorting algorithm
        for (var i = 0; i < length; i++) {
            for (var j = 0; j < length - i - 1; j++) {
                //if collection is an array of number or string
                if (this.compare(j)) {
                    this.swap(j);
                }
            }
        }
    };
    return Sorter;
}());
exports.Sorter = Sorter;
