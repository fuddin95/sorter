"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharacterCollection = void 0;
var CharacterCollection = /** @class */ (function () {
    function CharacterCollection(data) {
        this.data = data;
    }
    Object.defineProperty(CharacterCollection.prototype, "length", {
        get: function () {
            return this.data.length;
        },
        enumerable: false,
        configurable: true
    });
    CharacterCollection.prototype.compare = function (index) {
        return (this.data[index].toLocaleLowerCase() >
            this.data[index + 1].toLocaleLowerCase());
    };
    CharacterCollection.prototype.swap = function (index) {
        //converting the string array into character array
        var charatersArray = this.data.split("");
        var temp = charatersArray[index];
        charatersArray[index] = charatersArray[index + 1];
        charatersArray[index + 1] = temp;
        this.data = charatersArray.join("");
    };
    return CharacterCollection;
}());
exports.CharacterCollection = CharacterCollection;
