const crypto = require('crypto');

module.exports = class Block {
  constructor(index, previousHash, timestamp, data) {
    this.index = index;
    this.data = data;
    this.timestamp = timestamp;
    this.previousHash = previousHash;
    this.hash = this.computeHash();
  }

  computeHash() {
    const hash = crypto
      .createHash('sha256')
      .update(this.index + this.previousHash + this.timestamp + this.data)
      .digest('hex');

    return hash;
  }
};
