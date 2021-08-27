const blockChainAPI = require('./blockchain');
const mongoClientAPI = require('./mongoClient');

const insertEntry = async entry => {
  const entry_id = await mongoClientAPI.insertDocument(entry);

  blockChainAPI.addBlock(entry_id);

  return entry_id && true;
};

const updateEntry = async (id, entry) => {
  const status = await mongoClientAPI.updateDocument(id, entry);

  blockChainAPI.addBlock(id);

  return status;
};

const getEntry = async id => {
  const entry = await mongoClientAPI.getDocument(id);

  return entry;
};

const getEntries = async (filter, limit) => {
  const entries = await mongoClientAPI.getDocuments(filter, parseInt(limit));

  return entries;
};

const getBlockchain = () => {
  return blockChainAPI.getAllBlocks();
};

const validateBlockchain = () => {
  return blockChainAPI.isChainValid();
};

module.exports = {
  insertEntry,
  updateEntry,
  getEntry,
  getEntries,
  removeEntry,
  getBlockchain,
  validateBlockchain,
};
