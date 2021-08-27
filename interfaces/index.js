const blockChainAPI = require('./blockchain');
const mongoClientAPI = require('./mongoClient');

const insertEntry = async entry => {
  const entry_id = await mongoClientAPI.insertDocument(entry);

  if (entry_id) {
    blockChainAPI.addBlock({ id: entry_id, operation: 'insert' });
  }

  return entry_id && true;
};

const updateEntry = async (id, entry) => {
  const success = await mongoClientAPI.updateDocument(id, entry);

  if (success) {
    blockChainAPI.addBlock({ id: id, operation: 'update' });
  }

  return success;
};

const getEntry = async id => {
  const entry = await mongoClientAPI.getDocument(id);

  // API returns false upon failure
  if (entry !== false) {
    blockChainAPI.addBlock({ id, operation: 'get' });
  }

  return entry;
};

// const removeEntry = async id => {
//   const success = await mongoClientAPI.deleteDocument(id);

//   if (success) {
//     blockChainAPI.addBlock({ id, operation: 'remove' });
//   }

//   return success;
// };

const getEntries = async (filter, limit) => {
  const entries = await mongoClientAPI.getDocuments(filter, parseInt(limit));

  return entries;
};

const countEntries = async () => {
  const count = await mongoClientAPI.countDocuments();

  return count;
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
  // removeEntry,
  countEntries,
  getBlockchain,
  validateBlockchain
};
