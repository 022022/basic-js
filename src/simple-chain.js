const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement chainMaker object according to task description
 *
 */

//chainMaker.addLink(1).addLink(2).addLink(3).finishChain() => '( 1 )~~( 2 )~~( 3 )'
const chainMaker = {
  chain: [],
  getLength() {
    //getLength returns the current chain length as a number;
    return this.chain.length;
  },
  addLink(value) {
    //addLink(value) adds a link containing a string representation of the value to the chain;

    if ("" + value) {
      this.chain.push("~~" + "( " + value + " )");
    } else {
      this.chain.push("~~( )");
    }

    return this;
  },
  removeLink(position) {
    //removeLink(position) removes a chain link in the specified position;
    if (!this.chain[position - 1] || position > this.chain.length) {
      this.chain = [];
      throw new Error("You can't remove incorrect link!");
    }
    this.chain.splice([position - 1], 1);
    return this;
  },
  reverseChain() {
    //reverseChain reverses the chain;
    this.chain.reverse();
    return this;
  },

  finishChain() {
    //finishChain ends the chain and returns it.
    let chainStr = this.chain.join("");
    if (chainStr.startsWith("~")) {
      chainStr = chainStr.slice(2);
    }
    this.chain = [];
    return chainStr;
  },
};

module.exports = {
  chainMaker,
};
