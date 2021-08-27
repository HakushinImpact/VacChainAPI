const crypto = require('crypto');

module.exports = class Block {
  constructor(index, previousHash, data) {
    this.index = index;
    this.hash = this.computeHash();
    this.previousHash = previousHash;
    this.timestamp = Date.now();
    this.data = data;
  }

  computeHash() {
    return crypto
      .createHash('sha256')
      .update(
        this.index +
          this.previousHash +
          this.timestamp +
          JSON.stringify(this.data)
      )
      .digest('hex');
  }
};
