const express = require('express');
const app = express();
const port = 5000;

const blockChainAPI = require('./interfaces/blockchain');

app.post('/push', async (req, res) => {
  blockChainAPI.addBlock(req.body);
  res.statusCode = 200;
  res.send('ok');
});

app.get('/getBlock', async (req, res) => {
  const block = blockChainAPI.getBlock(req.query.hash);
  res.send(block);
});

app.get('/getAll', async (req, res) => {
  const blocks = blockChainAPI.getAllBlocks();
  res.send(blocks);
});

app.get('/validChain', async (req, res) => {
  const result = blockChainAPI.isChainValid();
  res.send(result);
});

app.listen(port);
console.log(`Listening at port ${port}`);
