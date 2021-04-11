"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumbersCollection = void 0;
var NumbersCollection = /** @class */ (function () {
    function NumbersCollection(data) {
        this.data = data;
    }
    Object.defineProperty(NumbersCollection.prototype, "length", {
        get: function () {
            return this.data.length;
        },
        enumerable: false,
        configurable: true
    });
    NumbersCollection.prototype.compare = function (leftIndex) {
        return this.data[leftIndex] > this.data[leftIndex + 1];
    };
    NumbersCollection.prototype.swap = function (leftIndex) {
        var temp = this.data[leftIndex];
        this.data[leftIndex] = this.data[leftIndex + 1];
        this.data[leftIndex + 1] = temp;
    };
    return NumbersCollection;
}());
exports.NumbersCollection = NumbersCollection;
/*

//by using get length in the class method call we wont need to put () when calling the method

const collectionOne = new NumbersCollection([4,3,2,555,23,-0.3333,-0.00221]);
collectionOne.length;//Notice here we didnt need to put closing brackets when we called the length method

*/
