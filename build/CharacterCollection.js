"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharacterCollection = void 0;
var Sorter_1 = require("./Sorter");
var CharacterCollection = /** @class */ (function (_super) {
    __extends(CharacterCollection, _super);
    function CharacterCollection(data) {
        var _this = _super.call(this) || this;
        _this.data = data;
        return _this;
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
}(Sorter_1.Sorter));
exports.CharacterCollection = CharacterCollection;
