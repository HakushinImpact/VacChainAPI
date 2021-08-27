const blockChainAPI = require('./blockchain');
const mongoClientAPI = require('./mongoClient');

const insertEntry = async entry => {
  const entry_id = await mongoClientAPI.insertDocument({ data: entry });

  blockChainAPI.addBlock(entry_id);

  return entry_id && true;
};

const updateEntry = async (id, entry) => {
  const status = await mongoClientAPI.updateDocument(id, entry);

  blockChainAPI.addBlock(entry_id);

  return status;
};

const getEntry = async id => {
  const entry = await mongoClientAPI.getDocument(id);

  return entry;
};

const getAllEntries = async () => {
  const entries = await mongoClientAPI.getAllDocuments();

  return entries;
};

module.exports = {
  insertEntry,
  updateEntry,
  getEntry,
  getAllEntries
};
