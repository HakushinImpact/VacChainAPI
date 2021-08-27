const express = require('express');
const app = express();
const port = 5000;

const VacChainAPI = require('./interfaces');

app.use(express.json());

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

app.post('/insert', async (req, res) => {
  const isSuccess = await VacChainAPI.insertEntry(req.body);

  if (!isSuccess) {
    res.status(404).send('Not found');
  } else {
    res.status(200).send('OK');
  }
});

app.post('/update', async (req, res) => {
  const isSuccess = await VacChainAPI.updateEntry(req.body.id, req.body.data);

  if (!isSuccess) {
    res.status(404).send('Not found');
  } else {
    res.status(200).send('OK');
  }
});

app.get('/get', async (req, res) => {
  const entry = await VacChainAPI.getEntry(req.query.id);

  if (entry === false) {
    res.status(404).send('Not found');
  } else {
    res.status(200).send(entry);
  }
});

app.get('/getAll', async (req, res) => {
  const entries = await VacChainAPI.getEntries(
    req.query.filter,
    req.query.limit
  );

  if (entries === false) {
    res.status(404).send('Not found');
  } else {
    res.status(200).send(entries);
  }
});

app.get('/getBlockchain', async (req, res) => {
  const result = VacChainAPI.getBlockchain();
  res.send(result);
});

app.listen(port, () => {
  console.log(`CORS-enabled web server listening at port ${port}`);
});
