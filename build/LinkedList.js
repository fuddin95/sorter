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
exports.LinkedList = void 0;
//Video 88
var Sorter_1 = require("./Sorter");
var LinkedList = /** @class */ (function (_super) {
    __extends(LinkedList, _super);
    function LinkedList() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.head = null;
        return _this;
    }
    LinkedList.prototype.add = function (data) {
        var node = new Node(data);
        if (!this.head) {
            // if it is null than make the head == to the first node created.
            this.head = node;
            return; //this return is important since it will exit the add function and wont execute the remaining FN.
        }
        //this will iterate over the list and find the last entered node
        var tail = this.head;
        while (tail.next) {
            tail = tail.next;
        }
        //once it does it will exit the loop and we will set the newly created node as the last node
        tail.next = node;
    };
    Object.defineProperty(LinkedList.prototype, "length", {
        get: function () {
            if (!this.head) {
                return 0;
            }
            var length = 1;
            //This will make the node to the next node in the list
            var node = this.head;
            while (node.next) {
                //once it reaches the last node it will become undefined so it will exit the loop
                length++;
                node = node.next;
            }
            return length;
        },
        enumerable: false,
        configurable: true
    });
    LinkedList.prototype.at = function (index) {
        if (!this.head) {
            //if head is null then it will give an errot
            throw new Error("Index out of Bounds");
        }
        var counter = 0;
        //down in while loop ts will point out that node is not assignable to null value so that why here we are manually giving type
        var node = this.head;
        while (node) {
            if (counter === index) {
                return node;
            }
            counter++;
            node = node.next;
        }
        throw new Error("Index out of bounds");
    };
    LinkedList.prototype.compare = function (index) {
        if (!this.head) {
            throw new Error("List is Empty");
        }
        return this.at(index).data > this.at(index + 1).data;
    };
    LinkedList.prototype.swap = function (index) {
        var leftTempNode = this.at(index).data;
        var rightTempNode = this.at(index + 1).data;
        var leftNode = this.at(index);
        var rightNode = this.at(index + 1);
        leftNode.data = rightTempNode;
        rightNode.data = leftTempNode;
    };
    LinkedList.prototype.print = function () {
        if (!this.head) {
            throw new Error("Nothing in the list");
        }
        var node = this.head;
        while (node) {
            console.log(node.data);
            node = node.next;
        }
    };
    return LinkedList;
}(Sorter_1.Sorter));
exports.LinkedList = LinkedList;
var Node = /** @class */ (function () {
    function Node(data) {
        this.data = data;
        //node class will save 2 things the value and the refrence to next value
        this.next = null;
    }
    return Node;
}());
