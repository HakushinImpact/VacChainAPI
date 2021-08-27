const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

const VacChainAPI = require('./interfaces');

app.use(cors());

app.post('/insert', async (req, res) => {
  await VacChainAPI.insertEntry(req.body);
  res.status(200).send('OK');
});

app.get('/update', async (req, res) => {
  await VacChainAPI.updateEntry(req.query.id);
  res.status(200).send('OK');
});

app.get('/get', async (req, res) => {
  const entry = await VacChainAPI.getEntry(req.query.id);
  res.status(200).send(entry);
});

app.get('/getAll', async (req, res) => {
  const entries = await VacChainAPI.getAllEntries();
  res.status(200).send(entries);
});

app.get('/validator', async (req, res) => {
  const hash = req.query.hash;
  const result = blockChainAPI.isChainValid();
  res.send(result);
});

app.listen(port, () => {
  console.log(`CORS-enabled web server listening at port ${port}`);
});
