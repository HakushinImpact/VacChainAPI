const Block = require('./block');

class BlockChain {
  constructor() {
    this.chain = [this.createGenesisBlock()];
  }

  createGenesisBlock() {
    return new Block(0, '0', Date.now().toString(), 'Genesis Block');
  }

  getLatestBlock() {
    return this.chain[this.chain.length - 1];
  }

  getBlock(hash) {
    // Best performance compared to using find()
    for (let index = 0; index < this.chain.length; index++) {
      if (this.chain[index].hash === hash) {
        return this.chain[index];
      }
    }
  }

  getAllBlocks() {
    return this.chain;
  }

  addBlock(data) {
    const newBlock = new Block(
      this.chain.length,
      this.getLatestBlock().hash,
      Date.now().toString(),
      data
    );

    this.chain.push(newBlock);
  }

  isChainValid() {
    for (let i = 1; i < this.chain.length; i++) {
      if (this.chain[i].hash !== this.chain[i].computeHash()) {
        return false;
      } else if (i > 0 && this.chain[i].previousHash !== this.chain[i - 1].hash) {
        return false;
      }
    }

    return true;
  }
}

module.exports = new BlockChain();
