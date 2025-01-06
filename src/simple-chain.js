const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  array: [],

  getLength() {
    return this.array.length;
  },
  addLink(value) {
    this.array.push(value);
    return this;
  },
  removeLink(position) {
    if (
      typeof position !== "number" ||
      position <= 0 ||
      position > this.array.length
    ) {
      this.array = [];
      throw new Error("You can't remove incorrect link!");
    }
    let newArray = [];
    for (let i = 0; i < this.array.length; i++) {
      if (!(i === position - 1)) {
        newArray.push(this.array[i]);
      }
    }
    this.array = newArray;
    return this;
  },
  reverseChain() {
    this.array = this.array.reverse();
    return this;
  },
  finishChain() {
    const result = this.array.map((element) => `( ${element} )`).join("~~");
    this.array = [];
    return result;
  },
};

module.exports = {
  chainMaker,
};
