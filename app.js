const chalk = require('chalk');
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

app.post('/insertEntry', async (req, res) => {
  const entry_id = await VacChainAPI.insertEntry(req.body);

  if (entry_id === false) {
    res.status(404).send('Not found');
  } else {
    res.status(200).send(entry_id);
  }

  console.log(chalk.green(`[POST] /insertEntry ${res.statusCode}`));
});

app.post('/updateEntry', async (req, res) => {
  const isSuccess = await VacChainAPI.updateEntry(req.body.id, req.body.data);

  if (!isSuccess) {
    res.status(404).send('Not found');
  } else {
    res.status(200).send('OK');
  }

  console.log(chalk.green(`[POST] /updateEntry ${res.statusCode}`));
});

app.get('/getEntry', async (req, res) => {
  const entry = await VacChainAPI.getEntry(req.query.id);

  if (entry === false) {
    res.status(404).send('Not found');
  } else {
    res.status(200).send(entry);
  }

  console.log(chalk.green(`[GET] /getEntry ${res.statusCode}`));
});

app.post('/getEntries', async (req, res) => {
  const entries = await VacChainAPI.getEntries(req.body.filter, req.body.limit);

  if (entries === false) {
    res.status(404).send('Not found');
  } else {
    res.status(200).send(entries);
  }

  console.log(chalk.green(`[GET] /getEntries ${res.statusCode}`));
});

// app.get('/removeEntry', async (req, res) => {
//   const isSuccess = await VacChainAPI.removeEntry(req.params.id);

//   if (!isSuccess) {
//     res.status(404).send('Removal failed.');
//   } else {
//     res.status(200).send('OK');
//   }

//   console.log(chalk.green(`[GET] /removeEntry ${res.statusCode}`));
// });

//count entries
app.post('/countEntries', async (req, res) => {
  const count = await VacChainAPI.countEntries(req.body.filter);

  res.status(200).send(`${count}`);
  console.log(chalk.green(`[POST] /countEntries ${res.statusCode}`));
});

app.get('/getBlockchain', async (req, res) => {
  const validBlockchain = VacChainAPI.validateBlockchain();
  const result = VacChainAPI.getBlockchain();

  if (result) {
    res.status(200).send({ isValid: validBlockchain, blocks: result });
  } else {
    res.status(404).send('Not found');
  }

  console.log(chalk.green(`[GET] /getBlockChain ${res.statusCode}`));
});

app.listen(port, () => {
  console.log(
    chalk.blue(
      `=================VacChainAPI v.1.0================
  CORS-enabled web server listening at port ${port}`
    )
  );
});
