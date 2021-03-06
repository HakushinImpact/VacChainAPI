const { MongoClient, ObjectId } = require('mongodb');
const mongoDB_config = require('../config');

const mongo_client = new MongoClient(
  mongoDB_config.uri,
  mongoDB_config.options
);

/**
 * Inserts a document to the MongoDB database
 * @param {string} collection - the MongoDB collection to store the documents
 * @param {Object} document - an object to be stored in the specified collection
 * @returns resolves to the entry `_id` upon success, else `false`
 */
const insertDocument = async (
  document,
  collection = mongoDB_config.collection
) => {
  const conn = await mongo_client.connect();
  if (!conn.isConnected() || !document) {
    return false;
  }

  // const mongoDB_collection = ;
  //   mongoDB_collection.createIndex({ id: 1 }, { unique: true }); // create unique index on id

  try {
    await conn.db().collection(collection).insertOne(document);
  } catch (error) {
    console.log('[MongoDB] INSERT: Item was not inserted. Possible duplicate.');

    return false;
  }

  console.log(
    `[MongoDB] INSERT: Successfully inserted document to collection "${collection}"`
  );

  return document._id.toString();
};

/**
 * Deletes a document from the MongoDB database given its `_id`
 * @param {string} collection - the MongoDB collection to retrieve the documents from
 * @param {string} id - id of object to be deleted from the specified collection
 * @returns resolves to `true` upon success, else `false`
 */

// FOR FUTURE IMPLEMENTATION
// const deleteDocument = async (id, collection = mongoDB_config.collection) => {
//   const conn = await mongo_client.connect();
//   if (!conn.isConnected() || !id) {
//     return false;
//   }

//   const result = await conn
//     .db()
//     .collection(collection)
//     .deleteOne({ _id: ObjectId(id) });

//   console.log(result);
//   return result && true;
// };

/**
 * Updates a document from a MongoDB collection from a given `id` and a new document
 * @param {string} id - id of object to be retrieved from the specified collection
 * @param {Object} data - fields to be updated
 * @param {string} collection - the MongoDB collection to retrieve the document from
 * @returns `false` if connection failed, else `true`
 */
const updateDocument = async (
  id,
  data,
  collection = mongoDB_config.collection
) => {
  const conn = await mongo_client.connect();
  if (!conn.isConnected() || !id) {
    console.log('[MongoDB] RETRIEVE: Connection failed.');
    return false;
  }

  const document = await conn
    .db()
    .collection(collection)
    .updateOne({ _id: ObjectId(id) }, { $set: data });

  return document && true;
};

/**
 * Retrieves a document from a MongoDB collection from a given `id`
 * @param {string} id - id of object to be retrieved from the specified collection
 * @param {string} collection - the MongoDB collection to retrieve the documents from
 * @returns `false` if connection failed, else a MongoDB document
 */
const getDocument = async (id, collection = mongoDB_config.collection) => {
  const conn = await mongo_client.connect();
  if (!conn.isConnected() || !id) {
    console.log('[MongoDB] RETRIEVE: Connection failed.');
    return false;
  }
  const document = await conn
    .db()
    .collection(collection)
    .findOne({ _id: ObjectId(id) });

  return document;
};

/**
 * Retrieves all documents from a MongoDB collection, with an optional filter
 * @param {string} collection - the MongoDB collection to retrieve the documents from
 * @param {Object} filter - an object or array of objects to be used as a filter
 * @param {number} limit - the number of documents to be retrieved
 * @returns false if connection failed, else an array of documents
 */
const getDocuments = async (
  filter = {},
  limit = 15,
  collection = mongoDB_config.collection
) => {
  const conn = await mongo_client.connect();
  if (!conn.isConnected()) {
    console.log('[MongoDB] RETRIEVE: Connection failed.');
    return false;
  }

  const documents = await conn
    .db()
    .collection(collection)
    .find(filter)
    .limit(limit)
    .toArray();

  return documents;
};

/**
 * Counts the number of documents in a MongoDB collection, with an optional filter
 * @param {string} collection - the MongoDB collection to retrieve the documents from
 * @param {Object} filter - an object or array of objects to be used as a filter
 * @returns 0 if connection failed, else the number of documents
 */
const countDocuments = async (
  collection = mongoDB_config.collection,
  filter = {}
) => {
  const conn = await mongo_client.connect();
  if (!conn.isConnected()) {
    console.log('[MongoDB] COUNT: Connection failed.');
    return 0;
  }

  const count = await conn.db().collection(collection).countDocuments(filter);

  return count;
};

module.exports = {
  insertDocument,
  // deleteDocument,
  updateDocument,
  getDocument,
  getDocuments,
  countDocuments
};
